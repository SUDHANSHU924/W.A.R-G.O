import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { env } from "../config/env.js";
import { AppError } from "../utils/appError.js";

const generateToken = (userId) => {
  if (!env.jwtSecret) {
    throw new AppError(500, "JWT_SECRET is not configured");
  }
  return jwt.sign({ id: userId }, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
};

const sanitizeUser = (user) => {
  const safe = user.toObject();
  delete safe.password;
  return safe;
};

export const signup = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new AppError(409, "Email already registered");
  }

  const user = await User.create({ name, email, password });
  return { user: sanitizeUser(user), token: generateToken(user._id) };
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(401, "Invalid credentials");
  }

  const match = await user.comparePassword(password);
  if (!match) {
    throw new AppError(401, "Invalid credentials");
  }

  return { user: sanitizeUser(user), token: generateToken(user._id) };
};
