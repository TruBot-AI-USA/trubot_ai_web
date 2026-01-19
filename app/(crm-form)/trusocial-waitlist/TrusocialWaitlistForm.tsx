"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Mail, Target } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import TextInput from "@/app/ui/components/form/TextInput";
import PhoneInput from "@/app/ui/components/form/PhoneInput";
import SelectInput from "@/app/ui/components/form/SelectInput";
import Button from "@/app/ui/components/shared/Button";
import SubscribedBox from "./components/SubscribedBox";
import { inputList } from "@/app/ui/libs/constants/crm-form/trusocial-waitlist";
import {
  inputFormData,
  inputFormSchema,
} from "@/app/ui/libs/validation/trusocialWaitlist.schema";

const TrusocialWaitlistFormInputClasses =
  "py-4 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/30 bg-white/80 shadow-sm hover:shadow-md";

const TrusocialWaitlistForm = () => {
  const [subscribed, setSubscribed] = useState(false);
  const form = useForm<inputFormData>({
    resolver: zodResolver(inputFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      location: "",
      companyName: "",
      jobTitle: "",
      socialMediaNeeds: "",
    },
  });

  const onSubmit = async (values: inputFormData) => {
    try {
      const response = await fetch("/api/trusocial-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Network response was not ok");

      form.reset();
      setSubscribed(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (subscribed) return <SubscribedBox />;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-light border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-electric to-teal p-6 text-white text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target size={6} />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-2">
            Get Early Access
          </h3>
          <p className="text-white/90 text-sm">
            Join thousands of businesses waiting for TruSocial
          </p>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 space-y-6">
          {/* Required Fields */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
              Required Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inputList
                .filter((f) => ["firstName", "lastName"].includes(f.id))
                .map((field) => (
                  <TextInput
                    key={field.id}
                    id={field.id}
                    label={undefined}
                    icon={field.icon}
                    error={
                      form.formState.errors[field.id as keyof inputFormData]
                        ?.message
                    }
                    placeholder={field.placeholder}
                    type={field.type}
                    {...form.register(field.id as keyof inputFormData)}
                    className={TrusocialWaitlistFormInputClasses}
                  />
                ))}
            </div>
            <TextInput
              key="email"
              id="email"
              label={undefined}
              icon={Mail}
              error={form.formState.errors.email?.message}
              placeholder="your@email.com"
              type="email"
              {...form.register("email")}
              className={TrusocialWaitlistFormInputClasses}
            />
          </div>

          {/* Optional Fields */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4">
              Additional Information (Optional)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Other fields */}
              {inputList
                .filter((f) => ["companyName", "jobTitle"].includes(f.id))
                .map((field) => (
                  <TextInput
                    key={field.id}
                    id={field.id}
                    label={undefined}
                    icon={field.icon}
                    error={
                      form.formState.errors[field.id as keyof inputFormData]
                        ?.message
                    }
                    placeholder={field.placeholder}
                    type={field.type}
                    {...form.register(field.id as keyof inputFormData)}
                    className={TrusocialWaitlistFormInputClasses}
                  />
                ))}

              {/* Mobile field with PhoneInput */}
              <PhoneInput
                key="mobile"
                id="mobile"
                label={undefined}
                error={form.formState.errors.mobile?.message}
                placeholder="Mobile number"
                value={form.watch("mobile")}
                onChange={(value) => form.setValue("mobile", value || "")}
                className={TrusocialWaitlistFormInputClasses}
              />

              <TextInput
                key="location"
                id="location"
                label={undefined}
                icon={undefined}
                error={form.formState.errors.location?.message}
                placeholder="City, State"
                type="text"
                {...form.register("location")}
                className={TrusocialWaitlistFormInputClasses}
              />
            </div>
          </div>

          {/* Social Media Needs */}
          <div className="space-y-3">
            <label
              htmlFor="socialMediaNeeds"
              className="text-sm font-semibold text-navy/70 uppercase tracking-wide mb-4"
            >
              {inputList.find((f) => f.id === "socialMediaNeeds")?.label}
            </label>
            <div className="relative mt-4">
              <SelectInput
                id="socialMediaNeeds"
                label={undefined}
                error={form.formState.errors.socialMediaNeeds?.message}
                value={form.watch("socialMediaNeeds")}
                onChange={(e) =>
                  form.setValue("socialMediaNeeds", e.target.value || "")
                }
                className={TrusocialWaitlistFormInputClasses}
              >
                <option value="">Select your primary need</option>
                {inputList
                  .find((f) => f.id === "socialMediaNeeds")
                  ?.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
              </SelectInput>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              as="button"
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full py-4 text-lg font-semibold"
              label={
                form.formState.isSubmitting
                  ? "Joining Waitlist..."
                  : "Join the Waitlist"
              }
            >
              {form.formState.isSubmitting && (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrusocialWaitlistForm;
