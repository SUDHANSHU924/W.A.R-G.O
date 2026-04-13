import { env } from "../config/env.js";
import { AppError } from "../utils/appError.js";

const buildPrompt = (payload) => {
	const deadline = payload.deadline || "unspecified";
	return `You are an AI planner for goal execution.\n\nReturn ONLY a valid JSON object with the keys: tasks, estimatedDurations, priorityOrder, dailySchedule, recommendations.\n\nGoal: ${payload.goalTitle}\nDeadline: ${deadline}\nAvailable time per day: ${payload.availableTimePerDay} hours\nPriority: ${payload.priority}\nContext: ${payload.context || "none"}\n\nOutput schema:\n{\n  "tasks": [{"title": "", "description": "", "durationMinutes": 60, "priority": "high"}],\n  "estimatedDurations": [{"task": "", "minutes": 60}],\n  "priorityOrder": ["task title"],\n  "dailySchedule": [{"day": "Day 1", "tasks": ["task title"], "totalMinutes": 120}],\n  "recommendations": ["string"]\n}`;
};

const extractJson = (content) => {
	const start = content.indexOf("{");
	const end = content.lastIndexOf("}");
	if (start === -1 || end === -1) {
		throw new AppError(502, "AI response was not valid JSON");
	}

	const jsonString = content.slice(start, end + 1);
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		throw new AppError(502, "Failed to parse AI response JSON");
	}
};

export const generatePlan = async (payload) => {
	if (!env.groqApiKey) {
		throw new AppError(500, "GROQ_API_KEY is not configured");
	}

	const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${env.groqApiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			model: env.groqModel,
			temperature: 0.2,
			messages: [
				{ role: "system", content: "You output strictly JSON." },
				{ role: "user", content: buildPrompt(payload) },
			],
		}),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new AppError(502, "Groq API error", errorText);
	}

	const data = await response.json();
	const content = data.choices?.[0]?.message?.content || "";
	return extractJson(content);
};
