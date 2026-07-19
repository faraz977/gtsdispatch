import Link from "next/link";
import { getPosts } from "@/lib/content";
import { heroValues, services, site, testimonials } from "@/lib/site";

export default function HomePage() {
  const posts = getPosts().slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.12),_transparent_40%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              The Power Behind Your Trucking Fleet
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Dedicated truck dispatch services built for profitable, compliant
              operations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              GTS Dispatch helps owner-operators and small fleets book better
              loads, manage back-office work, and stay on the road with 24/7
              support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Contact Us
              </Link>
              <Link
                href="/post-your-truck"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Post Your Truck
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold uppercase tracking-wide text-sky-300">
              Why carriers choose GTS
            </h2>
            <ul className="mt-6 space-y-3">
              {heroValues.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 text-sm text-slate-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  {value}
                </li>
              ))}
            </ul>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#07111f]"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Everything your trucking business needs in one dispatch partner
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.href}
              className="rounded-2xl border border-white/10 bg-[#0b1728] p-6 transition hover:border-sky-400/40"
            >
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-5 inline-flex text-sm font-semibold text-sky-300 hover:text-sky-200"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1728]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Your dedicated dispatcher handles the heavy lifting
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Established in 2018, GTS Dispatch supports trucking businesses
              with load booking, invoice management, payment collection, driver
              settlements, and compliance-focused operations. We do not force
              dispatches — we work with your preferences to maximize earnings
              and keep routes aligned with your schedule.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-semibold text-sky-300 hover:text-sky-200"
            >
              More about us →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            What our clients say
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm leading-7 text-slate-200">“{item.quote}”</p>
              <footer className="mt-5 text-sm font-semibold text-white">
                {item.name}
                <span className="mt-1 block font-normal text-slate-400">
                  {item.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b1728]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                Blog
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Recent posts
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-sky-300 hover:text-sky-200"
            >
              View all
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-white/10 bg-[#07111f] p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {post.date
                    ? new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : ""}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-sky-300">
                    {post.title.replace(/<[^>]+>/g, "")}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border border-sky-400/20 bg-gradient-to-br from-sky-500/20 to-transparent p-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to move better freight?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Talk with our dispatch team about lanes, equipment, and the support
            your fleet needs to stay profitable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07111f]"
            >
              Get in touch
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
