"use client";

import Link from "next/link";
import { useState } from "react";

export default function PressBrakeQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    // Tag this submission so the inbox knows it's a brake-quote, not a generic contact.
    data.set("topic", "press-brake-retrofit");
    data.set("form_source", "press-brake-quote");

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
              Your brake quote request just landed in our inbox. Someone from the team will reply within one business day with next steps. Simple quotes typically come back the same week; complex installs may need a site visit before we scope.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+12812652832"
                className="inline-flex items-center justify-center gap-2 bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-red-dark"
              >
                Need it sooner? Call (281) 265-2832
              </a>
              <Link
                href="/press-brake-safety/compatibility"
                className="inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-brand-amber hover:text-brand-amber"
              >
                ← All brake brands
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
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0"
        aria-hidden
      />

      {/* ====== YOUR INFO ====== */}
      <SectionHeading label="Your info" />
      <div className="mt-4 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Your name" name="name" required />
          <Field label="Company" name="company" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" type="email" name="email" required />
          <Field label="Phone" type="tel" name="phone" required />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="City, State" name="location" placeholder="Eugene, OR" />
          <SelectField
            label="Project urgency"
            name="urgency"
            options={[
              { value: "", label: "Pick one…" },
              { value: "researching", label: "Just researching" },
              { value: "active", label: "Active project, planning ahead" },
              { value: "urgent", label: "Need this scoped now" },
            ]}
          />
        </div>
      </div>

      {/* ====== BRAKE INFO ====== */}
      <SectionHeading label="The press brake" className="mt-10" />
      <p className="mt-1 text-sm leading-relaxed text-brand-grey">
        Tell us what we&rsquo;ll be working on. The more you can give us, the closer the first quote will be to final.
      </p>
      <div className="mt-4 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Brake make" name="brake_make" required placeholder="e.g. Cincinnati, Accurpress, Ermak" />
          <Field label="Model" name="brake_model" placeholder="e.g. AutoForm, 725012, CNC AP 4270" />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="Year" name="brake_year" placeholder="2007" />
          <Field label="Tonnage" name="brake_tonnage" placeholder="250 ton" />
          <Field label="Bed length" name="brake_length" placeholder="12 ft" />
        </div>
        <Field label="Serial #" name="brake_serial" placeholder="(optional, but useful)" />
        <SelectField
          label="Existing safety system?"
          name="existing_safety"
          options={[
            { value: "", label: "Pick one…" },
            { value: "none", label: "No safety system installed" },
            { value: "lazer-safe-legacy", label: "Older Lazer Safe (LZS-003, IRIS, etc.)" },
            { value: "fiessler", label: "Fiessler" },
            { value: "other", label: "Something else" },
            { value: "unknown", label: "Not sure" },
          ]}
        />
      </div>

      {/* ====== APPLICATION ====== */}
      <SectionHeading label="Application notes" className="mt-10" />
      <p className="mt-1 text-sm leading-relaxed text-brand-grey">
        These are the questions our techs would ask on a site visit. If you don&rsquo;t know, skip — we&rsquo;ll cover it in the call.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Checkbox label="Forming work goes past the ends of the brake" name="app_offend" />
        <Checkbox label="Multi-height dies used in the same setup" name="app_multiheight" />
        <Checkbox label="Tallest die (incl. tang) is taller than 11&Prime;" name="app_tallpunch" />
        <Checkbox label="Non-V style tooling used (gooseneck, hemming, etc.)" name="app_nonv" />
      </div>

      {/* ====== NOTES ====== */}
      <div className="mt-8">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
          Anything else we should know?
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Mechanical or electrical quirks, your preferred timeline, multiple brakes, photos you can send separately, the safety standard your AHJ enforces…"
          className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-brand-grey/60 focus:border-brand-amber focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-red-dark disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send my request"}
        {status !== "sending" && <span aria-hidden>→</span>}
      </button>
      {status === "error" && (
        <p className="mt-4 rounded-md border border-brand-red/40 bg-brand-red/10 p-3 text-sm text-brand-red">
          {errorMsg}
        </p>
      )}
      <p className="mt-4 text-xs text-brand-grey/70">
        Prefer email?{" "}
        <a href="mailto:info@guardomation.com" className="text-brand-amber hover:underline">
          info@guardomation.com
        </a>{" "}
        · Or call <a href="tel:+12812652832" className="text-brand-amber hover:underline">(281) 265-2832</a>.
      </p>
    </form>
  );
}

function SectionHeading({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={className}>
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
        <span className="h-3 w-1 bg-brand-amber" aria-hidden />
        {label}
      </p>
    </div>
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

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-brand-grey">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-amber focus:outline-none"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-brand-charcoal">
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition-colors hover:border-brand-amber">
      <input
        type="checkbox"
        name={name}
        value="yes"
        className="mt-0.5 h-4 w-4 flex-none accent-brand-amber"
      />
      <span dangerouslySetInnerHTML={{ __html: label }} />
    </label>
  );
}
