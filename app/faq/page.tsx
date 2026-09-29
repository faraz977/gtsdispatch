import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about GTS truck dispatch, load booking, settlements, lanes, IFTA, and service fees.",
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">F.A.Q.</p>
      <h1 className="mt-2 text-4xl font-semibold">Questions carriers ask first</h1>
      <Accordion className="mt-8">
        {faqs.map((item, index) => (
          <AccordionItem key={item.q} value={`faq-${index}`}>
            <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
            <AccordionContent className="text-base leading-7 text-[#3a3d40]">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10 rounded-2xl bg-[#f4f5f6] p-6">
        <h2 className="text-2xl font-semibold">Is your question not answered? Reach out to us</h2>
        <Link href="/contact" className={cn(buttonVariants(), "mt-4 h-10 px-4")}>
          Contact GTS
        </Link>
      </div>
    </div>
  );
}
