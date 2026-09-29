"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { company, equipmentTypes, states } from "@/lib/site";

const FORMSPREE = "https://formspree.io/f/mnnvbwld";

const fieldClass =
  "h-10 bg-white text-[#231f20] caret-[#231f20] placeholder:text-[#667085] [color-scheme:light]";

const FALLBACK_ERROR = `We could not send this. Call or WhatsApp ${company.phoneDisplay}.`;

function RequiredLabel({ children }: { children: string }) {
  return (
    <Label>
      {children} <span className="text-[#0563ad]">*</span>
    </Label>
  );
}

function Choice({
  label,
  required,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <div className="space-y-1.5">
      {required ? <RequiredLabel>{label}</RequiredLabel> : <Label>{label}</Label>}
      <Select
        value={value || null}
        onValueChange={(next) => onChange(next ?? "")}
      >
        <SelectTrigger className="h-10 w-full bg-white text-[#231f20] data-placeholder:text-[#667085]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function formOf(event: { currentTarget: EventTarget | null; target: EventTarget | null }) {
  if (event.target instanceof HTMLFormElement) return event.target;
  if (event.currentTarget instanceof HTMLFormElement) return event.currentTarget;
  if (event.currentTarget instanceof HTMLButtonElement) return event.currentTarget.form;
  return null;
}

function formspreeMessage(body: unknown) {
  if (!body || typeof body !== "object") return FALLBACK_ERROR;
  const record = body as { error?: unknown; errors?: unknown };
  if (Array.isArray(record.errors)) {
    const messages = record.errors
      .map((item) => {
        if (item && typeof item === "object" && "message" in item) {
          return String((item as { message: unknown }).message).trim();
        }
        return "";
      })
      .filter(Boolean);
    if (messages.length) return messages.join(" ");
  }
  if (typeof record.error === "string" && record.error.trim()) return record.error.trim();
  return FALLBACK_ERROR;
}

async function sendToFormspree(form: HTMLFormElement) {
  const response = await fetch(FORMSPREE, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" },
  });
  const body: unknown = await response.json().catch(() => null);
  if (!response.ok) return { ok: false as const, message: formspreeMessage(body) };
  if (body && typeof body === "object" && "ok" in body && (body as { ok: unknown }).ok !== true) {
    return { ok: false as const, message: formspreeMessage(body) };
  }
  return { ok: true as const };
}

const CONTACT_ERROR = "Please complete the required fields with a valid email.";

function contactProblem(form: HTMLFormElement) {
  const data = new FormData(form);
  const required = ["First name", "Last name", "Company", "MC #", "email", "Phone"] as const;
  const missing = required.some((key) => !String(data.get(key) || "").trim());
  if (missing || !String(data.get("email")).includes("@")) return CONTACT_ERROR;
  return "";
}

export function ContactForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formOf(event);
    if (!form || pending) return;
    const problem = contactProblem(form);
    if (problem) {
      setSent(false);
      setError(problem);
      return;
    }
    setError("");
    setPending(true);
    try {
      const result = await sendToFormspree(form);
      if (!result.ok) {
        setSent(false);
        setError(result.message);
        return;
      }
      form.reset();
      setSent(true);
    } catch {
      setSent(false);
      setError(FALLBACK_ERROR);
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      action={FORMSPREE}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border bg-white p-5 text-[#231f20] shadow-sm sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>First name</RequiredLabel>
          <Input name="First name" required className={fieldClass} autoComplete="given-name" />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Last name</RequiredLabel>
          <Input name="Last name" required className={fieldClass} autoComplete="family-name" />
        </div>
      </div>
      <div className="space-y-1.5">
        <RequiredLabel>Company name</RequiredLabel>
        <Input name="Company" required className={fieldClass} autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>MC #</RequiredLabel>
          <Input name="MC #" required className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <Label>Number of trucks</Label>
          <Input name="Trucks" type="number" min={1} className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>Email</RequiredLabel>
          <Input name="email" type="email" required className={fieldClass} autoComplete="email" />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Phone</RequiredLabel>
          <Input name="Phone" type="tel" required className={fieldClass} autoComplete="tel" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label>Message</Label>
        <Textarea name="Message" className="min-h-28 bg-white text-[#231f20] caret-[#231f20]" />
      </div>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="rounded-lg bg-[#e8f1f8] px-3 py-2 text-sm text-[#0563ad]" role="status">
          Message sent. The dispatch desk will follow up at the email or phone you provided.
        </p>
      ) : null}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New contact from gtsdispatch.us" />
      <Button type="submit" className="h-10 px-5" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs leading-5 text-[#5c6166]">
        This form emails {company.email}. You can also call or WhatsApp {company.phoneDisplay}.
      </p>
    </form>
  );
}

export function PostTruckForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [originState, setOriginState] = useState("");
  const [destState, setDestState] = useState("");
  const [equipment, setEquipment] = useState("");
  const [agreed, setAgreed] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formOf(event);
    if (!form || pending) return;
    const data = new FormData(form);
    const origin = String(data.get("Origin city") || "").trim();
    const date = String(data.get("Date") || "").trim();
    const mc = String(data.get("MC number") || "").trim();
    const phone = String(data.get("Phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!origin || !originState || !date || !equipment || !mc || !phone || !email.includes("@") || !agreed) {
      setSent(false);
      setError("Origin, state, date, equipment, MC, phone, email, and the fee acknowledgment are required.");
      return;
    }
    setError("");
    setPending(true);
    try {
      const result = await sendToFormspree(form);
      if (!result.ok) {
        setSent(false);
        setError(result.message);
        return;
      }
      form.reset();
      setOriginState("");
      setDestState("");
      setEquipment("");
      setAgreed(false);
      setSent(true);
    } catch {
      setSent(false);
      setError(FALLBACK_ERROR);
    } finally {
      setPending(false);
    }
  }

  return (
    <form action={FORMSPREE} method="POST" onSubmit={onSubmit} className="space-y-5 text-[#231f20]">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <RequiredLabel>Origin (City)</RequiredLabel>
          <Input name="Origin city" required placeholder="City" className={fieldClass} />
        </div>
        <Choice
          label="State"
          required
          value={originState}
          onChange={setOriginState}
          placeholder="Select State"
          options={states}
        />
        <div className="space-y-1.5">
          <RequiredLabel>Date</RequiredLabel>
          <Input name="Date" type="date" required className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Choice
          label="Equipment"
          required
          value={equipment}
          onChange={setEquipment}
          placeholder="Select Type"
          options={equipmentTypes}
        />
        <div className="space-y-1.5">
          <Label>Length (ft)</Label>
          <Input name="Length (ft)" type="number" min={1} className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <Label>Weight (lbs)</Label>
          <Input name="Weight (lbs)" type="number" min={1} className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Destination (City)</Label>
          <Input name="Destination city" placeholder="Preferred Destination City" className={fieldClass} />
        </div>
        <Choice
          label="State"
          value={destState}
          onChange={setDestState}
          placeholder="Select State"
          options={states}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <RequiredLabel>MC Number</RequiredLabel>
          <Input name="MC number" type="number" required placeholder="Enter Your MC Number" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Phone</RequiredLabel>
          <Input name="Phone" type="tel" required placeholder="Enter Your Phone Number" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Email</RequiredLabel>
          <Input name="email" type="email" required placeholder="Enter Your Email Address" className={fieldClass} />
        </div>
      </div>
      <label className="flex items-start gap-3 text-sm leading-6 text-[#3a3d40]">
        <Checkbox
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
          className="mt-1"
          aria-label="Service fee acknowledgment"
        />
        <span>
          By checking this box, I confirm my agreement to pay a 4% fee from the gross load
          amount to GTS Dispatch for each load booked through their services.
        </span>
      </label>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="rounded-lg bg-[#e8f1f8] px-3 py-2 text-sm text-[#0563ad]" role="status">
          Truck posted. Dispatch will follow up at the phone or email you entered.
        </p>
      ) : null}
      <input type="hidden" name="Origin state" value={originState} />
      <input type="hidden" name="Destination state" value={destState} />
      <input type="hidden" name="Equipment" value={equipment} />
      <input type="hidden" name="Fee acknowledgment" value={agreed ? "Agreed to 4% of gross" : ""} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Post your truck from gtsdispatch.us" />
      <Button type="submit" className="h-10 px-5" disabled={pending}>
        {pending ? "Sending…" : "Load Offers"}
      </Button>
      <p className="text-xs leading-5 text-[#5c6166]">
        This form emails {company.email}. You can also call or WhatsApp {company.phoneDisplay}.
      </p>
    </form>
  );
}
