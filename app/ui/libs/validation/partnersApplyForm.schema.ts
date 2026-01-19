import * as z from "zod";

export const partnersApplyFormSchema = z.object({
  // Company Information
  companyName: z.string().min(2, "Company name is required"),
  website: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  industry: z.string().min(2, "Industry is required"),
  companySize: z.string().min(2, "Company size is required"),
  // Partnership Information
  partnershipType: z.string().min(2, "Partnership type is required"),
  partnershipGoals: z
    .string()
    .min(10, "Please describe your partnership goals"),
  // Contact Information
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  jobTitle: z.string().min(2, "Job title is required"),
  // Additional Information
  currentCustomers: z.string().optional(),
  technicalCapabilities: z.string().optional(),
  questions: z.string().optional(),
});

export type PartnersApplyFormData = z.infer<typeof partnersApplyFormSchema>;
