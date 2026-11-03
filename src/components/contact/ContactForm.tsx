"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-body text-foreground focus-visible:border-foreground focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2 md:text-nav";

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length > 100) {
    errors.name = "Name must be 100 characters or fewer.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (
    values.email.trim().length > 254 ||
    !emailPattern.test(values.email.trim())
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please enter a subject.";
  } else if (values.subject.trim().length > 150) {
    errors.subject = "Subject must be 150 characters or fewer.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length > 5000) {
    errors.message = "Message must be 5000 characters or fewer.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");
    setSuccessMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);

    setErrors(validationErrors);
    setSubmitError("");
    setSuccessMessage("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const website = new FormData(event.currentTarget).get("website");
    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website }),
      });

      if (!response.ok) {
        throw new Error("The contact request failed.");
      }

      setValues(initialValues);
      setSuccessMessage(
        "Thanks, your message was sent. I'll get back to you soon.",
      );
    } catch {
      setSubmitError(
        "Sorry, your message could not be sent. Please try again or email me directly using the address on this page.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          aria-hidden="true"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id="name"
        label="Name"
        type="text"
        autoComplete="name"
        maxLength={100}
        value={values.name}
        error={errors.name}
        onChange={(value) => updateField("name", value)}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        maxLength={254}
        value={values.email}
        error={errors.email}
        onChange={(value) => updateField("email", value)}
      />
      <Field
        id="subject"
        label="Subject"
        type="text"
        autoComplete="off"
        maxLength={150}
        value={values.subject}
        error={errors.subject}
        onChange={(value) => updateField("subject", value)}
      />
      <div>
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="message" className="block font-mono text-label text-foreground">
            Message
          </label>
          <span className="font-mono text-label text-muted" aria-live="polite">
            {values.message.length}/5000
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClassName} mt-2 h-40 resize-none md:h-36`}
          onChange={(event) => updateField("message", event.target.value)}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-body text-muted" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <p className="text-body text-muted" role="alert">
          {submitError}
        </p>
      ) : null}
      {successMessage ? (
        <p className="text-body text-muted" role="status" aria-live="polite">
          {successMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSending}
        className="min-h-11 w-full rounded-lg bg-foreground px-5 py-2 text-nav font-medium text-background hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60 md:min-h-10 md:w-auto"
      >
        {isSending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

type FieldProps = {
  id: keyof FormValues;
  label: string;
  type: "email" | "text";
  autoComplete: string;
  maxLength: number;
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  type,
  autoComplete,
  maxLength,
  value,
  error,
  onChange,
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block font-mono text-label text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        autoComplete={autoComplete}
        maxLength={maxLength}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${inputClassName} mt-2 h-11 md:h-10`}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-body text-muted" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
