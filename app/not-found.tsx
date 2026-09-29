import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">404</p>
      <h1 className="mt-2 text-4xl font-semibold">That page is not on this site</h1>
      <p className="mt-3 leading-7 text-[#5c6166]">
        The link may be old. Head back to dispatch services, or send the team a note.
      </p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className={cn(buttonVariants(), "h-10 px-4")}>
          Home
        </Link>
        <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "h-10 px-4")}>
          Contact
        </Link>
      </div>
    </div>
  );
}
