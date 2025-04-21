import { z } from "zod";

export const email = z
  .string()
  .email()
  .transform((str) => str.toLowerCase().trim());

export const password = z
  .string()
  .min(8, {
    message: "Password must be at least 8 characters",
  })
  .max(20, {
    message: "Password must be below 20 characters",
  })
  .transform((str) => str.trim());

export const terms = z.custom((val) => val === true, {
  message: "Terms must be accepted",
});

export const Signup = z.object({
  email,
  password,
  terms,
});

export type SignupInput = z.infer<typeof Signup>;
