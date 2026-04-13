export const checkConflicts = async (userId, date, blocks) => {
	if (!blocks.length) {
		return [];
	}
	return [];
};

export const syncCalendar = async (userId, payload) => ({
	synced: false,
	provider: payload?.provider || "none",
});
