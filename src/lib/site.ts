export const site = {
  name: "GTS Dispatch",
  tagline: "Truck Dispatch Services | USA",
  phone: "(832) 699-0420",
  phoneHref: "tel:+18326990420",
  email: "info@gtsdispatch.us",
  domain: "https://gtsdispatch.us",
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/our-services" },
  { label: "Post Your Truck", href: "/post-your-truck" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Semi Truck Dispatch",
    description:
      "Profitable lanes, strong rate negotiation, and 24/7 dispatch communication for dry van, reefer, flatbed, and power only carriers.",
    href: "/semi-truck-dispatch",
  },
  {
    title: "Fleet Management",
    description:
      "Complete operational support including compliance oversight, trip planning, settlements, and breakdown assistance.",
    href: "/fleet-management",
  },
  {
    title: "Box Truck Dispatch",
    description:
      "Steady load flow, route planning, and reliable daily dispatch operations for box truck carriers.",
    href: "/box-truck-dispatch",
  },
  {
    title: "Payroll Management",
    description:
      "Accurate driver settlements, deductions, and reporting so your back office stays organized.",
    href: "/payroll-management",
  },
  {
    title: "IFTA & State Filings",
    description:
      "Quarterly IFTA fuel reporting and state mileage filings handled with multi-state compliance in mind.",
    href: "/ifta-filing",
  },
  {
    title: "Driver Recruitment",
    description:
      "Recruiting and onboarding qualified drivers with compliance-focused training and ELD education.",
    href: "/drivers-recruitment-social-media-marketing",
  },
] as const;

export const heroValues = [
  "Highly Profitable",
  "Compliance-Focused Motor Carrier",
  "Expertly Managed Fleet",
  "Satisfied Drivers",
  "24/7 Team Support",
  "Unwavering Transparency",
  "Experienced Dispatchers",
] as const;

export const testimonials = [
  {
    quote:
      "Joining GTS was a game-changer. They connect me with loads that match my preferences and routes, and their dispatch team is always there to assist.",
    name: "Sarah M.",
    role: "Owner Operator / Fleet Owner",
  },
  {
    quote:
      "Partnering with GTS Dispatch was one of the best decisions I've made. They ensure a steady stream of well-paying jobs and handle the admin hassle.",
    name: "John D.",
    role: "Owner Operator",
  },
] as const;
