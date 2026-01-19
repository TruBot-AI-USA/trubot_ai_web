import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters")
    .regex(/^[A-Za-z]+$/, "First name can only contain alphabets"),
  lastName: z
    .string()
    .min(2, "Surname must be at least 2 characters")
    .max(50, "Surname must be at most 50 characters")
    .regex(/^[A-Za-z]+$/, "Surname can only contain alphabets"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(100, "Email must be at most 100 characters"),
  mobile: z
    .string()
    .optional()
    .refine((value) => {
      if (!value) return true;
      return /^\+?[1-9]\d{1,14}$/.test(value.replace(/\s/g, ""));
    }, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters"),
});

export type contactFormData = z.infer<typeof contactFormSchema>;
