export const company = {
  name: "GTS Dispatch",
  legal: "Goodlanes Transportation Services LLC",
  phoneDisplay: "(832) 699-0420",
  phoneHref: "tel:+18326990420",
  whatsappHref: "https://wa.me/18326990420",
  email: "Support@GTSDispatch.us",
  emailHref: "mailto:Support@GTSDispatch.us",
  address: "300 N Gould St, Sheridan, WY 82801",
  portal: "https://portal.gtsdispatch.us",
  established: "2018",
  hours: [
    "Driver Support: 24/7",
    "General Inquiries: Monday – Friday, 7:00 AM – 5:00 PM (Local Time)",
  ],
} as const;

export const socials = [
  { label: "WhatsApp", href: "https://wa.me/18326990420" },
  { label: "Facebook", href: "https://web.facebook.com/gtsdispatch/" },
  { label: "YouTube", href: "https://www.youtube.com/@GTSTruckDispatch" },
  { label: "Instagram", href: "https://www.instagram.com/gtsdispatch/" },
  { label: "LinkedIn", href: "http://linkedin.com/company/gts-dispatch" },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const serviceLinks = [
  { label: "Fleet Management", href: "/fleet-management" },
  { label: "Semi-Truck Dispatch", href: "/semi-truck-dispatch" },
  { label: "Box Truck Dispatch", href: "/box-truck-dispatch" },
  { label: "IFTA Filing", href: "/ifta-filing" },
  {
    label: "Drivers Recruitment & Social Media Marketing",
    href: "/drivers-recruitment-social-media-marketing",
  },
  { label: "Payroll Management", href: "/payroll-management" },
  { label: "Equipment Expertise", href: "/equipement-expertise" },
] as const;

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Services", href: "/our-services", children: [...serviceLinks] },
  { label: "How we work", href: "/how-we-work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const highlights = [
  "Highly Profitable",
  "Compliance-Focused Motor Carrier",
  "Expertly Managed Fleet",
  "Satisfied Drivers",
  "24/7 Team Support",
  "Unwavering Transparency",
  "Experienced Dispatchers",
] as const;

export const semiPoints = [
  "Dedicated dispatcher assigned to your truck",
  "Broker setup and carrier packet management",
  "24/7 dispatch communication and load tracking",
  "Detention and lumper enforcement",
  "Freight positioning across 48 states",
] as const;

export const equipment = [
  {
    title: "Dry Van",
    href: "/equipement-expertise",
    image: "/images/dry-van.jpg",
    text: "Our strength lies in efficiently coordinating dry van operations, ensuring on-time deliveries of various cargo types while prioritizing safety and security.",
  },
  {
    title: "Flatbed / Specialized Eqp",
    href: "/equipement-expertise",
    image: "/images/flatbed.jpg",
    text: "Flatbeds handle diverse cargo, while specialized equipment, like Lowboy, Stepdeck, Double Drop, RGN, Conestoga, and Side Kit trailers, offer tailored solutions for unique cargo challenges.",
  },
  {
    title: "Reefer",
    href: "/equipement-expertise",
    image: "/images/reefer.jpg",
    text: "We excel in reefer dispatch, with expertise in maintaining precise temperature control for perishable cargo, ensuring the integrity and freshness of goods throughout transit.",
  },
  {
    title: "Power Only",
    href: "/equipement-expertise",
    image: "/images/power-only.png",
    text: "Power-only dispatch keeps the tractor moving under someone else’s trailer, with lanes chosen so the next hook is close and the week stays paid.",
  },
] as const;

export const homeServices = [
  {
    title: "Fleet Management",
    href: "/fleet-management",
    image: "/images/fleet-lineup.jpg",
    text: "Our fleet management services ensure efficient vehicle operations by coordinating maintenance, monitoring compliance, and optimizing costs. This service goes beyond basic truck dispatch to support long term operational excellence.",
  },
  {
    title: "Semi Truck Dispatch",
    href: "/semi-truck-dispatch",
    image: "/images/mountain-highway.jpg",
    text: "Our semi truck dispatch services focus on placing trucks on profitable lanes through smart load sourcing, strong rate negotiation, and consistent dispatch communication.",
  },
  {
    title: "Independent Freight Agents",
    href: "/our-services",
    image: "/images/services-banner.jpg",
    text: "As Independent Freight Agents, we act on behalf of freight brokers by managing carrier coordination, dispatch execution, and operational support through our experienced global team.",
  },
  {
    title: "Box Truck Dispatch",
    href: "/box-truck-dispatch",
    image: "/images/boxtruck.webp",
    fit: "contain",
    text: "Our box truck dispatch services streamline cargo transportation by providing accurate route planning, steady load flow, and reliable daily dispatch operations.",
  },
  {
    title: "Payroll Management",
    href: "/payroll-management",
    image: "/images/Payroll.jpeg",
    text: "Our payroll management services ensure accurate and timely payments for drivers and staff, including settlements, deductions, and compliance with labor and reporting requirements.",
  },
  {
    title: "Drivers Recruitment",
    href: "/drivers-recruitment-social-media-marketing",
    image: "/images/driver-rectuitment-scaled.jpeg",
    text: "We recruit and onboard qualified drivers while providing compliance focused training, including ELD usage and Hours of Service education, to support safe and FMCSA compliant operations.",
  },
  {
    title: "IFTA Filing",
    href: "/ifta-filing",
    image: "/images/IFTA.jpg",
    fit: "contain",
    text: "We manage quarterly and monthly tax filings including IFTA fuel reporting, as well as state mileage and weight distance filings such as New Mexico, Oregon, Kentucky, and New York HUT, ensuring accurate reporting and multi state compliance.",
  },
] as const;

export const pillars = [
  {
    title: "Database Management",
    items: [
      "Audit-ready records prepared for DOT audits",
      "Trip management built for efficiency",
      "Rate confirmations, BOLs, invoices, fuel receipts, and pay settlements",
      "Inspection and maintenance records kept in one place",
    ],
  },
  {
    title: "Compliance, Safety and Training",
    items: [
      "FMCSA Hours of Service training",
      "Violation control to protect safety ratings",
      "ELD connectivity monitoring",
      "Daily pre-trip report review",
      "Vehicle maintenance follow-through",
      "Speed and legal weight compliance",
    ],
  },
  {
    title: "Tracking & Reporting",
    items: [
      "24/7 real-time load updates for brokers and shippers",
      "Round-the-clock driver connectivity",
      "Appointment scheduling and rescheduling",
      "Lumper payment support when a delivery needs it",
      "Immediate delay reporting to protect linehaul",
      "Roadside assistance and shop coordination",
    ],
  },
] as const;

export const clientVideos = [
  {
    id: "dTT2XmY7A3w",
    label: "Owner-operator review",
    title: "Truck Dispatch Services USA | GTS Truck Dispatch | Owner Operator / Review",
    url: "https://www.youtube.com/watch?v=dTT2XmY7A3w",
  },
  {
    id: "3JPEnGyDFwE",
    label: "Small fleet review",
    title:
      "Truck Dispatch Services USA | GTS Truck Dispatch | Owner Operator / Small Truck Company | Reviews",
    url: "https://www.youtube.com/watch?v=3JPEnGyDFwE",
  },
] as const;

export const serviceLines = [
  {
    title: "Truck Dispatch Service",
    items: [
      "Load sourcing and booking based on lane preference",
      "Rate negotiation with brokers and shippers",
      "24/7 dispatch communication and load tracking",
      "Broker setup, carrier packets, and onboarding",
      "Paperwork handling including BOL and invoicing",
    ],
  },
  {
    title: "Complete Fleet Management",
    items: [
      "Everything included in truck dispatch services",
      "Safety and FMCSA compliance oversight (HOS focused)",
      "Driver compliance training for ELD and Hours of Service",
      "Trip planning, settlements, and payroll coordination",
      "Maintenance reminders and breakdown assistance",
    ],
  },
  {
    title: "Trip & Payroll Management",
    items: [
      "Detailed trip sheets with pickup and delivery records",
      "Weekly driver settlement and deduction summaries",
      "Company truck payroll and owner operator settlements",
      "Fuel, tolls, maintenance, and expense calculations",
      "Clear reporting for profit and cost visibility",
    ],
  },
  {
    title: "Freight Agent Solutions",
    items: [
      "Dedicated freight agents managing broker accounts",
      "Globally trained operations and support team",
      "24/7 freight coverage and dispatch coordination",
      "Strong network with shippers and carriers",
      "Over 8 years of industry experience",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Owner Operator / Fleet Owner",
    image: "/images/Sarah.png",
    quote:
      "I've been a part of the trucking industry for a few years now, and joining forces with GTS was a game-changer. They've got a seamless system that connects me with loads that match my preferences and routes. It's easy to communicate with their dispatch team, and they are always there to assist. Thanks to GTS Dispatch, I've been able to maximize my earnings and minimize my downtime. I'm grateful for their support in helping me succeed as an owner-operator.",
  },
  {
    name: "John D.",
    role: "Owner Operator",
    image: "/images/John-D.jpg",
    quote:
      "I've been working as an owner-operator in the trucking industry for over a decade, and I can honestly say that partnering with GTS Dispatch was one of the best decisions I've ever made. The team at GTS is incredibly efficient and reliable. They always have my back, ensuring I have a steady stream of well-paying jobs, and they take care of all the administrative hassle. Thanks to them, I've been able to focus on driving and growing my business without any worries. I can't recommend them enough.",
  },
  {
    name: "Delroy Walden",
    role: "D & A Universal Logistics",
    image: "/images/DAUniverlogistics-logo.png",
    quote:
      "We highly recommend GTS to any trucking business looking for a trusted and reliable partner. They’re the driving force behind our continued success and play a critical role in our dispatch and logistics operation.",
  },
] as const;

export const clients = [
  { src: "/images/DAUniverlogistics-logo.png", alt: "D&A Univerlogistics logo" },
  { src: "/images/JDR-logo.png", alt: "JDR logo" },
  { src: "/images/gallery_item1.png", alt: "Z Transport" },
  { src: "/images/Logo.png", alt: "Transport Systems, LLC" },
  { src: "/images/OTR-Express-Logo.png", alt: "OTR Express logo" },
  { src: "/images/Navix_io_Logo-scaled.jpg", alt: "Navix.io" },
  { src: "/images/KYT-logo.png", alt: "KYT logo" },
  { src: "/images/2020-11-04.jpg", alt: "FG Transport & Logistics" },
  { name: "Elements Logistics" },
  { name: "FNE Transport LLC" },
] as const;

export const packages = [
  {
    title: "Truck Dispatch Service",
    image: "/images/Package-A.png",
    alt: "Truck dispatch service at 4 percent, including best paying loads, paperwork and invoicing, 24/7 availability, and no forced dispatch",
  },
  {
    title: "Complete Fleet Management",
    image: "/images/Package-B.png",
    alt: "Complete fleet management at 5 percent, including dispatch, safety and compliance, driver training and recruiting, trip and settlement management, and maintenance support",
  },
  {
    title: "Trip and Settlement Management",
    image: "/images/Package-C.png",
    alt: "Trip and settlement management at 50 dollars per truck, including trip sheets, weekly driver settlements, company-truck settlements, and fuel, maintenance, toll, and permit costs",
  },
  {
    title: "Freight Dispatch Service",
    image: "/images/Package-D.png",
    alt: "Freight dispatch service at 5 percent, including maximized profitability, expert load booking, 24/7 support, paperwork handling, and timely dispatch",
  },
] as const;

export const states = [
  "AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN",
  "KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
  "NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA",
  "WI","WV","WY",
] as const;

export const equipmentTypes = [
  "VAN",
  "REEFER",
  "FLATBED",
  "LOWBOY",
  "BOX TRUCK",
  "CAR HAULER",
] as const;

export const faqs = [
  {
    q: "What is truck dispatching, and how can it benefit my trucking business?",
    a: "Truck dispatching is a service that helps trucking companies efficiently manage their operations, including load booking, route planning, and administrative tasks. It can benefit your business by saving time, reducing administrative burdens, and ensuring your trucks stay on the road, maximizing your profits.",
  },
  {
    q: "How does your dispatch service work?",
    a: "Our dispatch service involves assigning dedicated dispatchers to work closely with your drivers. They handle load booking, route planning, and all necessary administrative tasks, allowing you and your drivers to focus on driving. We offer customized solutions tailored to your specific needs.",
  },
  {
    q: "What types of trucking businesses do you serve?",
    a: "We work with a wide range of trucking businesses, from owner-operators to large fleets. Whether you have a few trucks or an extensive fleet, our dispatch services are designed to meet your needs.",
  },
  {
    q: "Do you offer load booking services, and how do you find loads for my trucks?",
    a: "Yes, we provide load booking services. Our experienced dispatchers use load boards, industry connections, and market knowledge to find the best available loads for your trucks, ensuring you get quality routes and competitive rates.",
  },
  {
    q: "How do you ensure my drivers are paid accurately and on time?",
    a: "We offer services for preparing driver settlements for payroll. Our team accurately calculates driver settlements, including regular pay, bonuses, and deductions, ensuring your drivers are compensated promptly and fairly.",
  },
  {
    q: "Can I choose the routes and areas my drivers operate in?",
    a: "Absolutely. We work closely with you to customize routes and areas based on your preferences and business goals. You have control over the lanes your drivers operate in.",
  },
  {
    q: "Do you handle IFTA (International Fuel Tax Agreement) filings?",
    a: "Yes, we provide IFTA filing assistance, ensuring that you are in compliance with tax regulations and that your fuel taxes are submitted accurately and on time.",
  },
  {
    q: "What sets your truck dispatch service apart from others in the industry?",
    a: "Our commitment to providing comprehensive, personalized dispatch services, compliance with industry regulations, and a strong focus on customer satisfaction distinguish us from the competition. We are dedicated to simplifying the complexities of the trucking industry for our clients.",
  },
  {
    q: "How can I get started with your truck dispatch services?",
    a: "Getting started is easy. Simply reach out to us through our contact page, and we’ll be in touch to discuss your specific needs and tailor our services to your business.",
  },
  {
    q: "What are your service fees, and how does your pricing work?",
    a: "Our service fees vary based on the scope of services you require and the size of your fleet. Truck dispatch is offered at 4% of the gross load amount for loads booked through GTS. Complete fleet management and freight dispatch are offered at 5%. We can provide a customized quote once we understand your needs.",
  },
] as const;
