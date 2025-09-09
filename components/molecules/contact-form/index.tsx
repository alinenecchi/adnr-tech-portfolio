"use client";

import React, { useState } from "react";
import { ContactFormProps, ContactFormData } from "./ContactForm.types";
import { getContactFormStyles } from "./ContactForm.styles";
import { Button } from "@/components";
import { cn, isValidEmail } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  className,
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const styles = getContactFormStyles();

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contactForm.errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contactForm.errors.emailRequired");
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t("contactForm.errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contactForm.errors.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className={cn(styles.container, className)}>
        <div className="text-center">
          <div className="text-green-600 text-lg font-semibold mb-2">
            {t("contactForm.successMessage")}
          </div>
          <p className="text-gray-600">{t("contactForm.successSubMessage")}</p>
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mt-4"
          >
            {t("contactForm.sendNewMessage")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(styles.container, className)}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>
            {t("contactForm.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(styles.input, errors.name && "border-red-500")}
            placeholder={t("contactForm.namePlaceholder")}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            {t("contactForm.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(styles.input, errors.email && "border-red-500")}
            placeholder={t("contactForm.emailPlaceholder")}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            {t("contactForm.message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={cn(styles.textarea, errors.message && "border-red-500")}
            placeholder={t("contactForm.messagePlaceholder")}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className={styles.button}>
          {isSubmitting
            ? t("contactForm.sending")
            : t("contactForm.sendButton")}
        </Button>
      </form>
    </div>
  );
};
