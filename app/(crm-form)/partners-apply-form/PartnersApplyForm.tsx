"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import TextInput from "@/app/ui/components/form/TextInput";
import TextArea from "@/app/ui/components/form/TextArea";
import SelectInput from "@/app/ui/components/form/SelectInput";
import PhoneInput from "@/app/ui/components/form/PhoneInput";
import Button from "@/app/ui/components/shared/Button";
import PartnersApplySuccessBox from "./components/PartnersApplySuccessBox";
import { inputList } from "@/app/ui/libs/constants/crm-form/partners-apply-form";
import {
  partnersApplyFormSchema,
  PartnersApplyFormData,
} from "@/app/ui/libs/validation/partnersApplyForm.schema";

const PartnershipApplyFormInputClasses =
  "py-4 px-4 text-base rounded-xl border-2 border-gray-200 focus:border-electric focus:ring-2 focus:ring-electric/30 bg-white/80 shadow-sm hover:shadow-md";

const sectionMap = {
  company: ["companyName", "website", "industry", "companySize"],
  partnership: ["partnershipType", "partnershipGoals"],
  contact: ["firstName", "lastName", "email", "phone", "jobTitle"],
  additional: ["currentCustomers", "technicalCapabilities", "questions"],
};

const sectionTitles = {
  company: "Company Information",
  partnership: "Partnership Information",
  contact: "Contact Information",
  additional: "Additional Information",
};

const PartnersApplyForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<PartnersApplyFormData>({
    resolver: zodResolver(partnersApplyFormSchema),
    defaultValues: Object.fromEntries(inputList.map((f) => [f.id, ""])),
  });

  const onSubmit = async (values: PartnersApplyFormData) => {
    try {
      const response = await fetch("/api/partners-apply-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Network response was not ok");

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (submitted) return <PartnersApplySuccessBox />;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-10 w-full max-w-2xl mx-auto"
    >
      {/* Company Information */}
      <div className="bg-light rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
          {sectionTitles.company}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectionMap.company.map((id) => {
            const field = inputList.find((f) => f.id === id)!;
            if (field.type === "select") {
              return (
                <SelectInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  error={
                    form.formState.errors[
                      field.id as keyof PartnersApplyFormData
                    ]?.message
                  }
                  {...form.register(field.id as keyof PartnersApplyFormData)}
                  className={PartnershipApplyFormInputClasses}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </SelectInput>
              );
            }
            return (
              <TextInput
                key={field.id}
                id={field.id}
                label={field.label}
                icon={field.icon}
                error={
                  form.formState.errors[field.id as keyof PartnersApplyFormData]
                    ?.message
                }
                placeholder={field.placeholder}
                type={field.type}
                {...form.register(field.id as keyof PartnersApplyFormData)}
                className={PartnershipApplyFormInputClasses}
              />
            );
          })}
        </div>
      </div>

      {/* Partnership Information */}
      <div className="bg-light rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
          {sectionTitles.partnership}
        </h3>
        <div className="space-y-6">
          {sectionMap.partnership.map((id) => {
            const field = inputList.find((f) => f.id === id)!;
            if (field.type === "select") {
              return (
                <SelectInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  error={
                    form.formState.errors[
                      field.id as keyof PartnersApplyFormData
                    ]?.message
                  }
                  {...form.register(field.id as keyof PartnersApplyFormData)}
                  className={PartnershipApplyFormInputClasses}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </SelectInput>
              );
            }
            if (field.type === "textarea") {
              return (
                <TextArea
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  icon={field.icon}
                  error={
                    form.formState.errors[
                      field.id as keyof PartnersApplyFormData
                    ]?.message
                  }
                  placeholder={field.placeholder}
                  {...form.register(field.id as keyof PartnersApplyFormData)}
                  className={PartnershipApplyFormInputClasses}
                />
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-light rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
          {sectionTitles.contact}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sectionMap.contact.map((id) => {
            const field = inputList.find((f) => f.id === id)!;
            if (id === "phone") {
              return (
                <PhoneInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  error={form.formState.errors.phone?.message}
                  placeholder={field.placeholder}
                  value={form.watch("phone")}
                  onChange={(value) => form.setValue("phone", value || "")}
                  className={PartnershipApplyFormInputClasses}
                />
              );
            }
            return (
              <TextInput
                key={field.id}
                id={field.id}
                label={field.label}
                icon={field.icon}
                error={
                  form.formState.errors[field.id as keyof PartnersApplyFormData]
                    ?.message
                }
                placeholder={field.placeholder}
                type={field.type}
                {...form.register(field.id as keyof PartnersApplyFormData)}
                className={PartnershipApplyFormInputClasses}
              />
            );
          })}
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-light rounded-2xl p-8 shadow-xl">
        <h3 className="text-2xl font-heading font-semibold text-navy mb-6">
          {sectionTitles.additional}
        </h3>
        <div className="space-y-6">
          {sectionMap.additional.map((id) => {
            const field = inputList.find((f) => f.id === id)!;
            return (
              <TextArea
                key={field.id}
                id={field.id}
                label={field.label}
                icon={field.icon}
                error={
                  form.formState.errors[field.id as keyof PartnersApplyFormData]
                    ?.message
                }
                placeholder={field.placeholder}
                {...form.register(field.id as keyof PartnersApplyFormData)}
                className={PartnershipApplyFormInputClasses}
              />
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <Button
          type="submit"
          as="button"
          label={form.formState.isSubmitting ? "" : "Submit Application"}
          variant="submit"
          size="lg"
          className="w-full max-w-xs rounded-xl"
          disabled={form.formState.isSubmitting}
          animate
        >
          {form.formState.isSubmitting && (
            <Loader2 className="h-6 w-6 animate-spin" />
          )}
        </Button>

        <p className="text-sm text-navy/60 mt-4">
          We&apos;ll review your application and get back to you within 5
          business days.
        </p>
      </div>
    </form>
  );
};

export default PartnersApplyForm;
