export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type PageDoc = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  blocks: Block[];
};

export const aboutPage: PageDoc = {
  title: "About",
  eyebrow: "Our story",
  description:
    "GTS was born from a passion for the open road. With more than 8 years of industry experience, we support trucking companies and owner-operators across the United States.",
  image: "/images/shutterstock_2278726917-s-scaled.jpeg",
  imageAlt: "Owner-operator standing beside a semi truck",
  blocks: [
    { type: "h2", text: "Our Story" },
    {
      type: "p",
      text: "GTS was born from a passion for the open road and a deep understanding of the trucking industry. With more than 8 years of industry experience, we’ve evolved from a small team of trucking enthusiasts into a leading name in dispatch services.",
    },
    { type: "h2", text: "Our Core Purpose" },
    {
      type: "p",
      text: "We exist to simplify the complexities of transportation, empowering trucking companies and owner-operators to achieve their full potential. We recognize the challenges of this dynamic industry and are dedicated to providing comprehensive support that helps our clients not only survive but thrive.",
    },
    { type: "h2", text: "What Makes Us Unique" },
    {
      type: "ul",
      items: [
        "Expertise: Our team is a blend of industry veterans and innovative minds who know the industry inside and out.",
        "Round-the-clock assistance: The road never rests, and neither do we. Dispatch support is available 24/7.",
        "Cutting-edge technology: We use technology to optimize routes and keep you ahead of the competition.",
        "Tailored solutions: We take the time to learn your requirements and deliver a personalized approach.",
        "Partnership-focused: We don’t just dispatch your trucks. We build relationships and take pride in your success.",
      ],
    },
    { type: "h2", text: "Why Partner with Us?" },
    {
      type: "p",
      text: "When you choose GTS Dispatch, you’re not just hiring a dispatch service; you’re gaining a dedicated partner in your journey. We eliminate the administrative hassles, allowing you to focus solely on what you do best – driving. Our aim is simple: enhance your profitability, reduce downtime, and drive your business to new heights.",
    },
    {
      type: "p",
      text: "We are honored to serve the transportation industry and look forward to joining you on the road to success. Discover the GTS Dispatch difference.",
    },
  ],
};

export const servicesPage: PageDoc = {
  title: "Our Services",
  eyebrow: "What we handle",
  description:
    "A full suite of dispatch, fleet, payroll, recruiting, and IFTA services for carriers and independent owner-operators.",
  image: "/images/services-banner.jpg",
  imageAlt: "White semi trucks on a mountain highway",
  blocks: [
    {
      type: "p",
      text: "At GTS Dispatch, we offer a comprehensive suite of services for carriers and independent owner-operators. We handle the logistics so you can stay focused on running loads and growing your business.",
    },
    { type: "h2", text: "Fleet Management" },
    {
      type: "p",
      text: "Streamline your fleet operations with our advanced management solutions. We’ll help you optimize routes, minimize downtime, and enhance overall fleet efficiency.",
    },
    { type: "h2", text: "Semi Truck Dispatch" },
    {
      type: "p",
      text: "Trust our experienced dispatchers to connect you with top brokers and shippers, ensuring your trucks stay on the road with quality loads and competitive rates.",
    },
    { type: "h2", text: "Box Truck Dispatch" },
    {
      type: "p",
      text: "We specialize in dispatching box trucks, providing you with the right connections to maximize your business’s potential in the box truck niche.",
    },
    { type: "h2", text: "IFTA Filing" },
    {
      type: "p",
      text: "Simplify the complex process of International Fuel Tax Agreement (IFTA) filing. We handle the paperwork, so you can stay compliant and avoid penalties.",
    },
    { type: "h2", text: "Drivers Hiring" },
    {
      type: "p",
      text: "Finding the right drivers for your team can be a challenging task. Let us take care of driver recruitment, ensuring you have a reliable and qualified team on the road.",
    },
    { type: "h2", text: "Payroll Management" },
    {
      type: "p",
      text: "Our payroll services make paying your drivers and staff hassle-free. We handle the details, from calculating wages to processing payments, so you can focus on your core business.",
    },
    {
      type: "p",
      text: "With GTS Dispatch as your trusted partner, you gain access to a team of experts dedicated to your success. We tailor our services to your specific needs, ensuring your trucking business thrives.",
    },
  ],
};

export const fleetPage: PageDoc = {
  title: "Fleet Management",
  eyebrow: "Beyond dispatch",
  description:
    "Comprehensive fleet management that covers back-office work, compliance, safety, tracking, and driver pay support.",
  image: "/images/service-1.jpg",
  imageAlt: "Dry van trailers staged at a warehouse",
  blocks: [
    {
      type: "p",
      text: "Before the journey begins on the open road, effective fleet management is at the heart of every successful transportation operation. At GTS, we take pride in offering a comprehensive truck dispatching service that efficiently manages essential back-office operations and lets you and your drivers focus on the road.",
    },
    {
      type: "p",
      text: "Our commitment extends to streamlining load bookings, managing invoices, handling load payments, and assisting with IFTA tax preparation. We do not enforce forced dispatches. We work collaboratively, respecting a daily, every-other-day, or bi-weekly schedule, and we are committed to fair compensation for detention, layovers, and TONU.",
    },
    { type: "h2", text: "Database Management" },
    {
      type: "ul",
      items: [
        "Audit-ready records for successful DOT audits",
        "Trip preparation and management",
        "Rate confirmations, bills of lading, invoices, fuel receipts, and pay settlements",
        "Inspection and maintenance receipts",
      ],
    },
    { type: "h2", text: "Compliance, Safety, and Training" },
    {
      type: "ul",
      items: [
        "FMCSA Hours of Service training",
        "Violation control to maintain favorable safety ratings",
        "HOS compliance and ELD connectivity monitoring",
        "Daily analysis of driver pre-trip reports",
        "Vehicle and equipment maintenance follow-through",
        "Speed restrictions and legal weight compliance",
      ],
    },
    { type: "h2", text: "Tracking & Reporting" },
    {
      type: "ul",
      items: [
        "24/7 real-time load updates for brokers and shippers",
        "Round-the-clock connectivity with drivers",
        "Arrival appointment scheduling and rescheduling",
        "Lumper payment assistance on deliveries",
        "Immediate delay reporting to address potential deductions",
        "Roadside assistance and mechanical shop coordination",
      ],
    },
  ],
};

export const semiPage: PageDoc = {
  title: "Semi-Truck Dispatch",
  eyebrow: "Structured freight",
  description:
    "Disciplined freight positioning, rate negotiation, and operational coordination for dry van, reefer, flatbed, and power only.",
  image: "/images/Semi-Truck-Dispatch-Services.jpg",
  imageAlt: "Blue semi trucks lined up for dispatch",
  blocks: [
    { type: "h2", text: "Structured Semi Truck Dispatch Built for Real Profit" },
    {
      type: "p",
      text: "GTS Dispatch empowers American owner operators and small carriers with disciplined freight positioning, aggressive rate negotiation, and full operational coordination. We do not chase temporary spikes. We build consistent revenue based on real market intelligence and corridor strategy.",
    },
    { type: "h2", text: "How We Control Your Freight Strategy" },
    { type: "h3", text: "Dry Van Dispatch" },
    {
      type: "p",
      text: "Dry van freight powers retail distribution, warehouse replenishment, and manufacturing supply chains nationwide. We build structured freight loops in strong outbound markets so reload density stays high and deadhead stays controlled.",
    },
    { type: "h3", text: "Reefer Dispatch" },
    {
      type: "p",
      text: "Reefer freight requires temperature compliance, strict appointment timing, and seasonal produce awareness. We coordinate detention enforcement, scheduling precision, and route timing to protect margin.",
    },
    { type: "h3", text: "Flatbed Dispatch" },
    {
      type: "p",
      text: "Flatbed supports construction, steel, machinery, and industrial freight. We manage tarping coordination, accessorial billing, and weather risk with disciplined oversight inside industrial corridors.",
    },
    { type: "h3", text: "Power Only Dispatch" },
    {
      type: "p",
      text: "Power only connects your tractor to broker-owned or shipper-owned trailers across major freight corridors. We coordinate trailer interchange agreements, appointment scheduling, and structured routing so utilization stays high without trailer ownership limitations.",
    },
    { type: "h2", text: "Carrier Portal and Operational Control" },
    {
      type: "p",
      text: "Every GTS Dispatch carrier receives secure portal access to upload rate confirmations, BOL and POD documents, fuel receipts, maintenance logs, and trip performance records. This centralized system supports audit readiness, tax organization, broker payment tracking, and operational transparency.",
    },
    {
      type: "p",
      text: "Structured lanes. Professional negotiation. Operational control.",
    },
  ],
};

export const boxPage: PageDoc = {
  title: "Box Truck Dispatch",
  eyebrow: "Box trucking",
  description:
    "Professional box truck dispatch for owner-operators and small fleets that need profitable loads and less paperwork.",
  image: "/images/boxtruck.webp",
  imageAlt: "Box truck on the road",
  blocks: [
    { type: "h2", text: "Professional Box Truck Dispatch Services for Your Success" },
    {
      type: "p",
      text: "Running a box trucking business presents a world of opportunities because of its versatility and the ability to stay on the road with less downtime. The key is securing profitable loads, coordinating trips, and managing the paperwork. If you are a small or mid-size box truck company or an owner-operator, you already know how hard it is to handle the back office while deliveries stay on schedule.",
    },
    {
      type: "p",
      text: "At GTS, we understand the demands of box trucking. Our mission is to find quality loads, take the administrative weight off your desk, and let you focus on hauling. You are meant to drive and transport, not get buried in negotiations.",
    },
    { type: "h2", text: "What We Do for You" },
    {
      type: "ul",
      items: [
        "Handling the necessary paperwork, invoices, and document management",
        "A dedicated personal dispatcher for your truck",
        "Finding lucrative loads by negotiating with brokers",
        "Invoicing and billing so you can stay in the seat",
        "Route optimization for efficiency and profitability",
        "Lumper and detention handling",
        "24/7 support, because the road never sleeps",
      ],
    },
    {
      type: "p",
      text: "We don’t force you to haul loads. We boost growth by delivering quality freight that aligns with your objectives. At GTS, you’re not just a client — you’re a business partner.",
    },
  ],
};

export const iftaPage: PageDoc = {
  title: "IFTA Filing",
  eyebrow: "Fuel tax",
  description:
    "IFTA activation, preparation, and filing so motor carriers stay compliant across the 48-state agreement.",
  image: "/images/IFTA.jpg",
  imageAlt: "Fuel and mileage records used for IFTA filing",
  blocks: [
    { type: "h2", text: "Simplify Your IFTA Filing with GTS" },
    {
      type: "p",
      text: "Tax season can be a source of unease, especially for business owners. GTS offers assistance for International Fuel Tax Agreement (IFTA) filing so motor carriers across the United States can stay focused on the road.",
    },
    { type: "h2", text: "Demystifying IFTA" },
    {
      type: "p",
      text: "The International Fuel Tax Agreement is an accord involving 48 states. It creates a structured framework for fuel tax submission by motor carriers so states receive fair compensation for fuel usage.",
    },
    { type: "h2", text: "Who Needs to File" },
    {
      type: "p",
      text: "You must file for IFTA if you have established your trucking company in a base state and you operate a qualified motor vehicle in more than one member jurisdiction. If you have a base state, that state is where your IFTA account lives.",
    },
    { type: "h2", text: "What We Offer" },
    {
      type: "ul",
      items: [
        "IFTA activation so your account is set up correctly",
        "Preparation of the documents required for accurate, timely filings",
        "Peace of mind while you stay on the road",
        "Compliance with state and federal fuel tax rules",
        "Support for state mileage and weight-distance filings such as New Mexico, Oregon, Kentucky, and New York HUT",
      ],
    },
  ],
};

export const driversPage: PageDoc = {
  title: "Drivers Recruitment & Social Media Marketing",
  eyebrow: "People and presence",
  description:
    "Driver and owner-operator recruiting plus social media marketing built for trucking companies.",
  image: "/images/driver-rectuitment-scaled.jpeg",
  imageAlt: "Professional driver recruitment",
  blocks: [
    {
      type: "p",
      text: "The heart of any thriving trucking operation is the people behind the wheel. Hiring drivers and owner-operators is a multifaceted challenge. GTS simplifies recruiting and pairs it with social media marketing so the right candidates can find you.",
    },
    { type: "h2", text: "Our Commitment" },
    {
      type: "ul",
      items: [
        "Quality first: we look for the right fit, not just any available driver.",
        "Integrated marketing: campaigns that show your company’s strengths, values, and open seats.",
        "Simplified selection: we handle the groundwork so you can keep running freight.",
        "Customized solutions: every fleet’s requirements are different, and the search should be too.",
      ],
    },
    { type: "h2", text: "Our Services" },
    {
      type: "ul",
      items: [
        "Recruitment of drivers and owner-operators against your qualifications",
        "Social media campaigns that promote jobs and company visibility",
        "Screening with background checks, driving records, and interviews",
        "Matching candidates to your goals and values",
        "Ongoing support after the hire",
      ],
    },
    {
      type: "p",
      text: "Your success is our success. Trust us to simplify hiring, strengthen your digital footprint, and bring capable people into the fleet.",
    },
  ],
};

export const payrollPage: PageDoc = {
  title: "Payroll Management",
  eyebrow: "Driver settlements",
  description:
    "Accurate, on-time driver settlement preparation so your team is paid correctly. Tax filing is not included.",
  image: "/images/Payroll.jpeg",
  imageAlt: "Payroll and settlement paperwork",
  blocks: [
    { type: "h2", text: "Simplify Driver Settlements with GTS" },
    {
      type: "p",
      text: "Running a successful trucking business means keeping the fleet moving and making sure drivers are compensated fairly. Our dispatch services extend to preparing driver settlements for payroll.",
    },
    {
      type: "p",
      text: "Settlements involve calculations, record-keeping, and a stack of rules. We make that process smoother and get accurate numbers out on time.",
    },
    { type: "h2", text: "What You Get" },
    {
      type: "ul",
      items: [
        "Precision and timeliness on regular pay, overtime, bonuses, and deductions",
        "A lighter administrative load so you can run the rest of the business",
        "Meticulous records and historical settlement data when you need them",
      ],
    },
    {
      type: "p",
      text: "A well-compensated driving team is part of staying profitable. Please note that our settlement services do not include handling tax-related issues.",
    },
  ],
};

export const equipmentPage: PageDoc = {
  title: "Equipment Expertise",
  eyebrow: "Every trailer type",
  description:
    "Dispatch built around dry van, reefer, flatbed, and specialized trailers including lowboy, stepdeck, RGN, conestoga, and side kit.",
  image: "/images/service-3.jpg",
  imageAlt: "Flatbed hauling specialized freight",
  blocks: [
    { type: "h2", text: "Dry Vans" },
    {
      type: "p",
      text: "GTS Truck Dispatch is your trusted partner for dry vans. We secure quality loads and manage the details, including lumper fees and detention pay. Paperwork comes off your plate, and we connect you directly with brokers and shippers so the van stays moving.",
    },
    { type: "h2", text: "Reefers" },
    {
      type: "p",
      text: "Temperature-sensitive cargo needs precise control and timely deliveries. Our team handles load selection, paperwork, and broker communication so perishable freight stays in prime condition.",
    },
    { type: "h2", text: "Flatbed" },
    {
      type: "p",
      text: "Flatbed trucking has its own challenges. Our dispatchers secure strong rates and quality routes for oversized or irregular cargo, and they keep direct relationships with shippers and brokers so communication stays clean from load selection through paperwork.",
    },
    { type: "h2", text: "Specialized Equipment" },
    {
      type: "p",
      text: "We dispatch Lowboy, Stepdeck, Double Drop, RGN (Removable Gooseneck), Conestoga, and Side Kit trailers. Oversized loads, height limits, and protected cargo each need a different plan. Customized dispatch and careful load selection keep that equipment earning.",
    },
    {
      type: "p",
      text: "Partnering with GTS Truck Dispatch means a team that understands the intricacies of each equipment type, plus direct connections with brokers and shippers.",
    },
  ],
};

export const howPage: PageDoc = {
  title: "How We Work",
  eyebrow: "Realistic freight",
  description:
    "We do not sell dreams. We run freight realistically, with a carrier portal, lane strategy, and clear advice for new and established authorities.",
  image: "/images/pexels-pixabay-315938-scaled.jpg",
  imageAlt: "Highway light trails at night",
  blocks: [
    {
      type: "p",
      text: "We do not sell dreams. We run freight realistically and profitably. Our job is simple: keep your truck moving in lanes that make financial sense for your situation. Driver preferences, home time, equipment condition, authority age, and operating goals all matter. We do not apply the same formula to every truck.",
    },
    { type: "h2", text: "No False Promises" },
    {
      type: "p",
      text: "If a driver wants to be home every day while expecting $7,000 per week, that combination is rarely realistic in most markets. We believe in education, not illusion. When carriers understand the market, they make better decisions. Our role is to advise clearly, operate professionally, and maximize profit within real-world limits.",
    },
    { type: "h2", text: "For Established Authorities" },
    {
      type: "p",
      text: "If your authority is active and running, we analyze preferred lanes, driver schedule, equipment type and condition, current rate trends, and deadhead exposure. We then build a practical lane strategy, negotiate directly with brokers, manage paperwork, and stay in communication from pickup to delivery.",
    },
    { type: "h2", text: "For New Authorities" },
    {
      type: "ul",
      items: [
        "Limited broker access because of authority age",
        "Limited freight availability for 26ft box trucks",
        "Personal operating conditions such as home time and equipment limits",
      ],
    },
    {
      type: "p",
      text: "We guide new authorities through these filters step by step. We do not rush you into unrealistic expectations. We help you operate within what the market allows and build from there.",
    },
    { type: "h2", text: "Carrier Portal and Document System" },
    {
      type: "p",
      text: "Every client receives access to our cloud-based Carrier Portal. It is your organized business workspace for rate confirmations, BOL and POD, fuel receipts, maintenance receipts, settlement worksheets, trip records, and driver and truck transaction logs. That organization supports tax filing, audit readiness, and a clear view of profitability.",
    },
    { type: "h2", text: "Our Commitment" },
    {
      type: "ul",
      items: [
        "Transparent communication",
        "Realistic revenue planning",
        "Strong negotiation",
        "Continuous learning and adaptation",
        "Long-term carrier relationships",
      ],
    },
    {
      type: "p",
      text: "We do not promise the highest numbers. We focus on consistent and structured growth.",
    },
  ],
};

export const privacyPage: PageDoc = {
  title: "Privacy Policy",
  eyebrow: "Goodlanes Transportation Services LLC",
  description:
    "How GTS Dispatch collects, uses, and protects personal information on this site. Effective November 13, 2023.",
  image: "/images/Artboard-1-Copy.png",
  imageAlt: "GTS logo",
  blocks: [
    {
      type: "p",
      text: "Goodlanes Transportation Services LLC (“us”, “we”, or “our”) operates gtsdispatch.us (the “Site”). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.",
    },
    {
      type: "p",
      text: "We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.",
    },
    { type: "h2", text: "Information Collection And Use" },
    {
      type: "p",
      text: "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name (“Personal Information”).",
    },
    { type: "h2", text: "Log Data" },
    {
      type: "p",
      text: "Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.",
    },
    { type: "h2", text: "Communications" },
    {
      type: "p",
      text: "We may use your Personal Information to contact you with newsletters, marketing, or promotional materials.",
    },
    { type: "h2", text: "Cookies" },
    {
      type: "p",
      text: "Cookies are files with small amounts of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer’s hard drive. Like many sites, we use cookies to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, you may not be able to use some portions of our Site.",
    },
    { type: "h2", text: "Security" },
    {
      type: "p",
      text: "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
    },
    { type: "h2", text: "Changes To This Privacy Policy" },
    {
      type: "p",
      text: "This Privacy Policy is effective as of November 13, 2023, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.",
    },
    {
      type: "p",
      text: "If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website.",
    },
    { type: "h2", text: "Contact Us" },
    {
      type: "p",
      text: "If you have any questions about this Privacy Policy, please contact us at Support@GTSDispatch.us or (832) 699-0420.",
    },
  ],
};
