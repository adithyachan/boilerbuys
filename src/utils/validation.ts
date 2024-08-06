import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/@purdue\.edu$/, "Please enter a valid @purdue.edu email"),
  password: z.string().min(6),
});

const signUpSchema = z
  .object({
    firstname: z.string().regex(/[a-zA-Z]*/),
    lastname: z.string().regex(/[a-zA-Z]*/),
    email: z
      .string()
      .regex(/@purdue\.edu$/, "Please enter a valid @purdue.edu email"),
    password: z.string().min(6, "Passwords must be a minimum of 6 characters"),
    confirm: z.string(),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export { loginSchema, signUpSchema };
