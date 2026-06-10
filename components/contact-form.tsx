"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const TOPICS = [
  { value: "press-brake-retrofit", label: "Lazer Safe press brake retrofit" },
  { value: "rear-guarding", label: "Press brake rear guarding" },
  { value: "light-curtain", label: "Light curtain / safety mat" },
  { value: "fencing", label: "Custom fencing or gate" },
  { value: "anti-restart", label: "Anti-restart control (GS series)" },
  { value: "assessment", label: "Plant safeguarding assessment" },
  { value: "service", label: "Service / spare parts" },
  { value: "other", label: "Something else" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic") || "press-brake-retrofit";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or call us at (281) 265-2832.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-brand-amber/30 bg-brand-charcoal/80 p-7 lg:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-brand-amber text-2xl text-brand-amber">
            ✓
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Got it. Talk soon.</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-grey">
              Your quote request just landed in our inbox. Someone from the team will reply within one business day with next steps. Simple quotes typically come back the same week; complex installs may need a site visit before we scope.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+12812652832"
                className="inline-flex items-center justify-center gap-2 bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark"
              >
                Need it sooner? Call (281) 265-2832
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-brand-charcoal/80 p-7 lg:p-10"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
        Request a quote
      </p>
      <h2 className="text-2xl font-bold text-white">Tell us about your application</h2>

      <div className="mt-6 grid gap-4">
        {/* Honeypot — hidden from humans */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0"
          aria-hidden
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Company" name="company" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" type="email" name="email" required />
          <Field label="Phone" type="tel" name="phone" />
        </div>
        <Field
          label="Machine make / model"
          name="machine"
          placeholder="e.g. Cincinnati 1000-20 press brake"
        />

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
            What do you need?
          </label>
          <select
            name="topic"
            defaultValue={initialTopic}
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-amber focus:outline-none"
          >
            {TOPICS.map((t) => (
              <option key={t.value} value={t.value} className="bg-brand-charcoal">
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
            Tell us more
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tonnage, voltage, environment, timeline, any photos you can email separately..."
            className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-grey/60 focus:border-brand-amber focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send request"}
          {status !== "sending" && <span aria-hidden>→</span>}
        </button>
        {status === "error" && (
          <p className="rounded-md border border-brand-red/40 bg-brand-red/10 p-3 text-sm text-brand-red">
            {errorMsg}
          </p>
        )}
        <p className="text-xs text-brand-grey/70">
          Or email{" "}
          <a href="mailto:info@guardomation.com" className="text-brand-amber hover:underline">
            info@guardomation.com
          </a>{" "}
          directly.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-grey/60 focus:border-brand-amber focus:outline-none"
      />
    </div>
  );
}
