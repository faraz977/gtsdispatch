import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ClientVideos } from "@/components/client-videos";
import { PostTruckForm } from "@/components/forms";
import { posts } from "@/lib/blog";
import {
  clients,
  company,
  equipment,
  highlights,
  homeServices,
  packages,
  pillars,
  semiPoints,
  serviceLines,
  testimonials,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[34rem] overflow-hidden bg-[#231f20] text-white">
        <Image
          src="/images/dry-van.jpg"
          alt="Dry van semi truck on the highway"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09203f]/90 via-[#0563ad]/75 to-[#0563ad]/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold tracking-[0.18em] text-sky-100 uppercase">
            Truck Dispatch Services
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-semibold sm:text-6xl">
            The Power Behind Your Trucking Fleet
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
            GTS Dispatch provides structured freight management for Dry Van, Reefer,
            Flatbed, and Power Only carriers across the United States.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/post-your-truck" className={cn(buttonVariants(), "h-11 bg-white px-5 text-[#0563ad] hover:bg-white/90")}>
              Post Your Truck
            </Link>
            <Link href="/our-services" className={cn(buttonVariants({ variant: "outline" }), "h-11 border-white/40 bg-transparent px-5 text-white hover:bg-white/10")}>
              Our Services
            </Link>
            <a href={company.phoneHref} className={cn(buttonVariants({ variant: "outline" }), "h-11 border-white/40 bg-transparent px-5 text-white hover:bg-white/10")}>
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b bg-[#f4f5f6]">
        <ul className="mx-auto grid max-w-6xl gap-3 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium">
              <Check className="size-4 shrink-0 text-[#0563ad]" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-semibold">Dispatch, fleet, payroll, and freight agents</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {serviceLines.map((line) => (
            <div key={line.title} className="rounded-2xl border bg-white p-5">
              <h3 className="text-lg font-semibold text-[#0563ad]">{line.title}</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#3a3d40]">
                {line.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-[#0563ad] uppercase">
            Semi truck dispatch
          </p>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Specialized in Semi Truck Dispatch
          </h2>
          <p className="mt-4 leading-7 text-[#3a3d40]">
            We focus on disciplined rate negotiation, strategic lane positioning, and
            complete operational coordination.
          </p>
          <ul className="mt-6 space-y-3">
            {semiPoints.map((point) => (
              <li key={point} className="flex gap-3 leading-6">
                <Check className="mt-1 size-4 shrink-0 text-[#0563ad]" />
                {point}
              </li>
            ))}
          </ul>
          <Link href="/semi-truck-dispatch" className={cn(buttonVariants(), "mt-8 h-10 px-4")}>
            Explore Semi Truck Dispatch Service
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/Wdry.png"
            alt="GTS dry van"
            fill
            className="object-contain bg-[#f4f5f6] p-6"
          />
        </div>
      </section>

      <section className="bg-[#0563ad] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold">Post Your Truck For Our Custom Load Offers!</h2>
            <p className="mt-4 leading-7 text-white/85">
              Share your origin, equipment, and MC number. Dispatch looks for freight
              that fits your schedule. No forced dispatch.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-4 sm:p-6">
            <PostTruckForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Your Dedicated Dispatch</h2>
            <p className="mt-4 leading-8 text-[#3a3d40]">
              “We offer a comprehensive truck dispatching service that efficiently manages
              all essential back-office operations, allowing you and your drivers to focus
              on the demands of the road. We provide invaluable support to truck drivers
              operating small trucking businesses, helping them streamline load bookings
              and back-office processes. While some dispatchers exclusively specialize in
              load booking, GTS provides a diverse range of services, including Invoice
              Management, Load Payment Collection, Drivers Pay Settlement, and IFTA Tax
              preparation.”
            </p>
            <p className="mt-4 leading-8 text-[#3a3d40]">
              Your dedicated truck dispatcher collaborates with you and follows your
              preferences. We do not enforce forced dispatches. The aim is to maximize
              earnings and tailor routes to a daily, every-other-day, or bi-weekly
              schedule. Dispatchers are well-versed in sleeper split, short haul
              exemptions, adverse conditions, and fair pay for detention, layovers, and
              TONU.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="/images/truck-dispatcher-1.jpeg"
              alt="Dispatcher at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h3 className="mt-12 text-2xl font-semibold">What Sets Us Apart?</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border bg-[#fbfbfc] p-5">
              <h4 className="text-lg font-semibold text-[#0563ad]">{pillar.title}</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#3a3d40]">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f5f6] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold">Our services</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {homeServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold group-hover:text-[#0563ad]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c6166]">{service.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-semibold">Equipment we dispatch</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {equipment.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-2xl border p-4 hover:border-[#0563ad]">
              <div className="relative aspect-[16/10]">
                <Image src={item.image} alt="" fill className="object-contain" />
              </div>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c6166]">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#231f20] text-white">
        <Image
          src="/images/pexels-pixabay-315938-scaled.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Your Dedicated Truck Dispatcher Does All the Heavy Lifting So You Can Stay Focused on Driving
          </h2>
          <Link href="/how-we-work" className={cn(buttonVariants(), "mt-8 h-11 bg-white px-5 text-[#0563ad] hover:bg-white/90")}>
            See how we work
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden rounded-2xl">
          <Image
            src="/images/shutterstock_2278726917-s-scaled.jpeg"
            alt="Driver beside a tractor"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Who We Are. What We Do</h2>
          <h3 className="mt-6 text-lg font-semibold text-[#0563ad]">Who We Are</h3>
          <p className="mt-2 leading-7 text-[#3a3d40]">
            At GTS, we are the backbone of efficient and reliable truck dispatch services.
            Established in {company.established}, we take pride in being a trusted partner
            for trucking businesses, providing essential support and ensuring smooth
            operations on the road.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-[#0563ad]">Our Mission</h3>
          <p className="mt-2 leading-7 text-[#3a3d40]">
            Our mission is to simplify the complex world of logistics for truck drivers
            and small trucking businesses. We aim to help you focus on the road while we
            take care of the back-office tasks. Our commitment is to maximize your
            earnings, tailor routes to your preferences, and provide you with exceptional
            support throughout your journey.
          </p>
          <Link href="/about" className={cn(buttonVariants({ variant: "outline" }), "mt-6 h-10 px-4")}>
            More about us
          </Link>
        </div>
      </section>

      <section className="bg-[#f4f5f6] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-semibold">What OUR CLIENTS Say About Us</h2>
          <div className="mt-8">
            <ClientVideos />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-2xl bg-white p-5 shadow-sm">
                <blockquote className="text-sm leading-6 text-[#3a3d40]">“{item.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt=""
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-[#5c6166]">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Packages</h2>
          <Link href="/packages" className="text-sm font-semibold text-[#0563ad]">
            View packages
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <Link key={item.title} href="/contact" className="block">
              <Image src={item.image} alt={item.alt} width={640} height={900} className="h-auto w-full" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#231f20] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold">Recent Blogposts</h2>
            <Link href="/blog" className="text-sm font-semibold text-sky-200">
              All posts
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl bg-white text-[#231f20]">
                <div className="relative aspect-[16/9]">
                  <Image src={post.image} alt="" fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold tracking-wide text-[#0563ad] uppercase">{post.category}</p>
                  <h3 className="mt-2 text-lg font-semibold group-hover:text-[#0563ad]">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#5c6166]">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-semibold">The Clients We Work For</h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
          {clients.map((client) => (
            <li key={client.src} className="flex h-24 items-center justify-center rounded-xl border bg-white p-4">
              <Image src={client.src} alt={client.alt} width={180} height={80} className="max-h-16 w-auto object-contain" />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[#f4f5f6]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="mt-2 max-w-xl text-[#3a3d40]">
              Do you have a question or do you want to work with us? Feel free to get in touch.
            </p>
          </div>
          <Link href="/contact" className={cn(buttonVariants(), "h-11 px-5")}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
