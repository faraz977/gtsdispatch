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

const fieldClass = "h-10 bg-white";

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
        <SelectTrigger className="h-10 w-full bg-white">
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

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["first", "last", "company", "mc", "email", "phone"];
    const missing = required.some((key) => !String(data.get(key) || "").trim());
    if (missing || !String(data.get("email")).includes("@")) {
      setError("Please complete the required fields with a valid email.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border bg-white p-5 shadow-sm sm:p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>First name</RequiredLabel>
          <Input name="first" className={fieldClass} autoComplete="given-name" />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Last name</RequiredLabel>
          <Input name="last" className={fieldClass} autoComplete="family-name" />
        </div>
      </div>
      <div className="space-y-1.5">
        <RequiredLabel>Company name</RequiredLabel>
        <Input name="company" className={fieldClass} autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>MC #</RequiredLabel>
          <Input name="mc" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <Label>Number of trucks</Label>
          <Input name="trucks" type="number" min={1} className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>Email</RequiredLabel>
          <Input name="email" type="email" className={fieldClass} autoComplete="email" />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Phone</RequiredLabel>
          <Input name="phone" type="tel" className={fieldClass} autoComplete="tel" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label>Message</Label>
        <Textarea name="message" className="min-h-28 bg-white" />
      </div>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="rounded-lg bg-[#e8f1f8] px-3 py-2 text-sm text-[#0563ad]" role="status">
          Thanks. Your note is recorded in this browser session. Call {company.phoneDisplay} or
          email {company.email} if you need a dispatcher today — this form does not send email
          on its own.
        </p>
      ) : null}
      <Button type="submit" className="h-10 px-5">
        Send message
      </Button>
    </form>
  );
}

export function PostTruckForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [originState, setOriginState] = useState("");
  const [destState, setDestState] = useState("");
  const [equipment, setEquipment] = useState("");
  const [agreed, setAgreed] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const origin = String(data.get("origin") || "").trim();
    const date = String(data.get("date") || "").trim();
    const mc = String(data.get("mc") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!origin || !originState || !date || !equipment || !mc || !phone || !email.includes("@") || !agreed) {
      setError("Origin, state, date, equipment, MC, phone, email, and the fee acknowledgment are required.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <RequiredLabel>Origin (City)</RequiredLabel>
          <Input name="origin" placeholder="City" className={fieldClass} />
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
          <Input name="date" type="date" className={fieldClass} />
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
          <Input name="length" type="number" min={1} className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <Label>Weight (lbs)</Label>
          <Input name="weight" type="number" min={1} className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Destination (City)</Label>
          <Input name="destination" placeholder="Preferred Destination City" className={fieldClass} />
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
          <Input name="mc" type="number" placeholder="Enter Your MC Number" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Phone</RequiredLabel>
          <Input name="phone" type="tel" placeholder="Enter Your Phone Number" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Email</RequiredLabel>
          <Input name="email" type="email" placeholder="Enter Your Email Address" className={fieldClass} />
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
        <p className="rounded-lg bg-white/15 px-3 py-2 text-sm" role="status">
          Truck posted in this session. A live dispatcher still needs your call at{" "}
          {company.phoneDisplay} or an email to {company.email}. This page does not transmit
          the form to GTS automatically.
        </p>
      ) : null}
      <Button type="submit" variant="secondary" className="h-10 bg-white px-5 text-[#0563ad] hover:bg-white/90">
        Load Offers
      </Button>
    </form>
  );
}
