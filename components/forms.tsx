"use client";

import { Suspense, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
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
import { equipmentTypes, states } from "@/lib/site";

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

const FORM_ENDPOINT = "https://formsubmit.co/Support@GTSDispatch.us";

function SentNotice({ className, children }: { className: string; children: string }) {
  const params = useSearchParams();
  if (params.get("sent") !== "1") return null;
  return (
    <p className={className} role="status">
      {children}
    </p>
  );
}

function setReturnUrl(form: HTMLFormElement, path: string) {
  const next = form.elements.namedItem("_next");
  if (next instanceof HTMLInputElement) {
    next.value = `${window.location.origin}${path}?sent=1`;
  }
}

export function ContactForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    setReturnUrl(event.currentTarget, "/contact");
    const data = new FormData(event.currentTarget);
    const required = ["First name", "Last name", "Company", "MC #", "email", "Phone"] as const;
    const missing = required.some((key) => !String(data.get(key) || "").trim());
    if (missing || !String(data.get("email")).includes("@")) {
      event.preventDefault();
      setError("Please complete the required fields with a valid email.");
      setPending(false);
      return;
    }
    setError("");
    setPending(true);
  }

  return (
    <form
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>First name</RequiredLabel>
          <Input name="First name" className={fieldClass} autoComplete="given-name" />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Last name</RequiredLabel>
          <Input name="Last name" className={fieldClass} autoComplete="family-name" />
        </div>
      </div>
      <div className="space-y-1.5">
        <RequiredLabel>Company name</RequiredLabel>
        <Input name="Company" className={fieldClass} autoComplete="organization" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>MC #</RequiredLabel>
          <Input name="MC #" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <Label>Number of trucks</Label>
          <Input name="Trucks" type="number" min={1} className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <RequiredLabel>Email</RequiredLabel>
          <Input name="email" type="email" className={fieldClass} autoComplete="email" />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Phone</RequiredLabel>
          <Input name="Phone" type="tel" className={fieldClass} autoComplete="tel" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label>Message</Label>
        <Textarea name="Message" className="min-h-28 bg-white" />
      </div>
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <Suspense fallback={null}>
        <SentNotice className="rounded-lg bg-[#e8f1f8] px-3 py-2 text-sm text-[#0563ad]">
          Message sent. The dispatch desk will follow up at the email or phone you provided.
        </SentNotice>
      </Suspense>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="New contact from gtsdispatch.us" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://gtsdispatch.us/contact?sent=1" />
      <Button type="submit" className="h-10 px-5" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export function PostTruckForm({ returnPath = "/" }: { returnPath?: string }) {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [originState, setOriginState] = useState("");
  const [destState, setDestState] = useState("");
  const [equipment, setEquipment] = useState("");
  const [agreed, setAgreed] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    setReturnUrl(event.currentTarget, returnPath);
    const data = new FormData(event.currentTarget);
    const origin = String(data.get("Origin city") || "").trim();
    const date = String(data.get("Date") || "").trim();
    const mc = String(data.get("MC number") || "").trim();
    const phone = String(data.get("Phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!origin || !originState || !date || !equipment || !mc || !phone || !email.includes("@") || !agreed) {
      event.preventDefault();
      setPending(false);
      setError("Origin, state, date, equipment, MC, phone, email, and the fee acknowledgment are required.");
      return;
    }
    setError("");
    setPending(true);
  }

  return (
    <form action={FORM_ENDPOINT} method="POST" onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <RequiredLabel>Origin (City)</RequiredLabel>
          <Input name="Origin city" placeholder="City" className={fieldClass} />
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
          <Input name="Date" type="date" className={fieldClass} />
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
          <Input name="MC number" type="number" placeholder="Enter Your MC Number" className={fieldClass} />
        </div>
        <div className="space-y-1.5">
          <RequiredLabel>Phone</RequiredLabel>
          <Input name="Phone" type="tel" placeholder="Enter Your Phone Number" className={fieldClass} />
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
      <Suspense fallback={null}>
        <SentNotice className="rounded-lg bg-white px-3 py-2 text-sm text-[#0563ad]">
          Truck posted. Dispatch will follow up at the phone or email you entered.
        </SentNotice>
      </Suspense>
      <input type="hidden" name="Origin state" value={originState} />
      <input type="hidden" name="Destination state" value={destState} />
      <input type="hidden" name="Equipment" value={equipment} />
      <input type="hidden" name="Fee acknowledgment" value={agreed ? "Agreed to 4% of gross" : ""} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <input type="hidden" name="_subject" value="Post your truck from gtsdispatch.us" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`https://gtsdispatch.us${returnPath}?sent=1`} />
      <Button type="submit" variant="secondary" className="h-10 bg-white px-5 text-[#0563ad] hover:bg-white/90" disabled={pending}>
        {pending ? "Sending…" : "Load Offers"}
      </Button>
    </form>
  );
}
