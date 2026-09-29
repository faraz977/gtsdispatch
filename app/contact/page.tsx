import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/forms";
import { company, socials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, email, or write GTS Dispatch in Sheridan, Wyoming. Driver support is available 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <header className="bg-[#0563ad] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.16em] text-sky-100 uppercase">Hello</p>
          <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-3xl leading-7 text-white/90">
            Hello and thank you for visiting GTS. Whether you have questions, need
            assistance, or want to explore our services further, our team is here to
            help. Your success is our priority.
          </p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.85fr]">
        <ContactForm />
        <div className="space-y-6">
          <iframe
            title="GTS Truck Dispatch, 30 N Gould St, Sheridan, WY 82801, United States"
            src="https://maps.google.com/maps?q=GTS%20Truck%20Dispatch%2C%2030%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20United%20States&t=m&z=18&output=embed&iwloc=near"
            className="h-64 w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="rounded-2xl bg-[#f4f5f6] p-6">
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-sm leading-6">{company.address}</p>
            <p className="mt-2 text-sm">Our remote dispatch team across the U.S.</p>
            <p className="mt-4 text-sm">
              Phone:{" "}
              <a className="font-semibold text-[#0563ad]" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </p>
            <p className="text-sm">
              Email:{" "}
              <a className="font-semibold text-[#0563ad]" href={company.emailHref}>
                {company.email}
              </a>
            </p>
            <h3 className="mt-5 font-semibold">Our availability</h3>
            <ul className="mt-2 space-y-1 text-sm leading-6">
              {company.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-[#0563ad]">
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border">
            <Image
              src="/images/Apply-for-position.png"
              alt="Apply for a position at GTS"
              width={1200}
              height={800}
              className="h-auto w-full"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">Join Our Talented Team</h2>
              <p className="mt-2 text-sm leading-6 text-[#5c6166]">
                GTS is looking for people who care about the trucking industry, work
                hard, and want a supportive desk. Dispatch, fleet management, and the
                rest of the operation all value teamwork and a clean standard of work.
                Use the form and mention the role you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
