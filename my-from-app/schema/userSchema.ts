import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  age: z.coerce.number().min(0, { message: "Age must be a positive number" }),
  bio: z.string().min(20, { message: "Bio must be over 20 characters" }),
});


export type UserSchema = z.infer<typeof userSchema>;