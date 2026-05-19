import {
  Award,
  Blocks,
  Globe,
  LineChart,
  MapPinned,
  MessageCircle,
  Palette,
  Search,
  Server,
  Zap,
} from "lucide-react"

export const siteConfig = {
  name: "HashiraDevs",
  domain: "https://hashiradevs.com",
  phoneDisplay: "+917818869663",
  phoneHref: "tel:+917818869663",
  whatsappUrl:
    "https://wa.me/+917818869663?text=Hi%20HashiraDevs%2C%20I%20want%20help%20growing%20my%20business%20online.",
  email: "hello@hashiradevs.com",
  location: "Prabhat market, moradabad, 244001",
} as const

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const heroHeadline =
  "We Help Local Businesses Get More Calls, Customers & Bookings"

export const heroSubheadline =
  "We build high-converting websites, Google visibility systems, and WhatsApp lead funnels designed to help local businesses grow revenue — not just look modern online."

export const heroTrustItems = [
  "Local SEO Ready",
  "Mobile Optimized",
  "WhatsApp Integrated",
  "Conversion Focused",
]

export const heroStatHighlights = [
  { label: "Built to convert", value: "Local growth" },
  { label: "Results focus", value: "Calls & bookings" },
  { label: "Lead channel", value: "WhatsApp ready" },
]

export const trustMetrics = [
  "42% more inquiries",
  "3x increase in bookings",
  "Fast mobile optimization",
  "SEO-ready architecture",
]

export const socialProofLine =
  "Trusted by growing businesses that need stronger websites, clearer positioning, and better inquiry flow."

export const serviceItems = [
  {
    icon: Globe,
    title: "Customer-Generating Websites",
    description:
      "Built to turn every visitor into a call, booking, or inquiry — not just a page view.",
  },
  {
    icon: Search,
    title: "Local SEO Services",
    description:
      "Get found by nearby customers who are already searching for what you offer.",
  },
  {
    icon: MapPinned,
    title: "Google Maps Visibility Optimization",
    description:
      "Dominate local Google searches so more profile views turn into real inquiries.",
  },
  {
    icon: MessageCircle,
    title: "Automated Lead Follow-Up Systems",
    description:
      "Capture and respond to every WhatsApp inquiry automatically — even after hours.",
  },
  {
    icon: Palette,
    title: "Website Redesign",
    description:
      "Modernise your site so it builds instant trust and moves visitors toward action.",
  },
  {
    icon: Server,
    title: "Website Conversion Improvement",
    description:
      "Optimise layouts, CTAs, and messaging so more of your traffic becomes real revenue.",
  },
]

export const advantageItems = [
  {
    icon: Award,
    title: "Revenue-First Thinking",
    description:
      "Every decision we make is tied to one goal: getting your business more calls, bookings, and paying customers.",
  },
  {
    icon: Zap,
    title: "Speed That Keeps Customers",
    description:
      "Fast-loading, mobile-optimised pages reduce drop-off and ensure every visitor stays long enough to convert.",
  },
  {
    icon: MessageCircle,
    title: "Always-On Lead Capture",
    description:
      "WhatsApp funnels and smart CTAs ensure no inquiry slips through — even outside business hours.",
  },
  {
    icon: Blocks,
    title: "Local SEO Built In",
    description:
      "Your site and Google presence are structured to rank for the searches that bring you real local customers.",
  },
  {
    icon: LineChart,
    title: "Growth Beyond Launch",
    description:
      "We track visibility, inquiries, and conversion outcomes so your online presence keeps improving over time.",
  },
]

export const projectItems = [
  {
    title: "High-Converting Restaurant Website",
    description:
      "A restaurant website refined for menu discovery, mobile browsing, and more direct inquiries.",
    technologies: [
      "⚡️ Faster mobile experience",
      "🍽️ Better customer journey",
      "💬 More inquiry-ready CTAs",
      "📱 Built for bookings",
    ],
    gradient: "from-sky-600/20 via-indigo-500/10 to-transparent",
    accentColor: "group-hover:shadow-sky-500/20",
    link: "/case-study/restaurant-website",
    ss: ["/chinese-1.png", "/chinese-2.png", "/chinese-3.png", "/chinese-4.png"],
  },
  {
    title: "Scalable E-Learning Platform",
    description:
      "A structured platform experience designed for clearer offers, stronger trust, and better user flow.",
    technologies: [
      "🎥 Smooth platform UX",
      "🔐 Secure payments",
      "📈 Scalable foundations",
      "✨ Better conversion flow",
    ],
    gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
    accentColor: "group-hover:shadow-emerald-500/20",
    link: "/case-study/e-learning-website",
    ss: ["/elearning-1.png", "/elearning-2.png", "/elearning-3.png", "/elearning-4.png"],
  },
  {
    title: "Lead-Generating Real Estate Website",
    description:
      "A property-focused website optimized for trust, clearer browsing, and higher-quality lead capture.",
    technologies: [
      "📍 Search-friendly structure",
      "🧲 Stronger lead capture",
      "⚡️ Faster loading pages",
    ],
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accentColor: "group-hover:shadow-violet-500/20",
    link: "/case-study/dholera-realestate-website",
    ss: ["/realestate-1.png", "/realestate-2.png", "/realestate-3.png", "/realestate-4.png"],
  },
]

export const testimonialItems = [
  {
    quote:
      "HashiraDevs made the process smooth and strategic. The site feels stronger, faster, and more aligned with how we actually win customers.",
    author: "Manish Kumar",
    role: "Founder, MoneyRoots",
    avatar: "MK",
  },
  {
    quote:
      "They helped us simplify the user journey and improve how visitors contact us. The end result feels polished and professional.",
    author: "Abhishek Sharma",
    role: "Founder, Chinese Garden",
    avatar: "AS",
  },
  {
    quote:
      "What stood out most was their ability to turn business goals into a website experience that feels clean, modern, and practical.",
    author: "Nitesh Kumar",
    role: "Founder, Dholera Real Estates",
    avatar: "NK",
  },
  {
    quote:
      "They helped us simplify the user journey and improve how visitors contact us. The end result feels polished and professional.",
    author: "Abhishek Sharma",
    role: "Founder, Chinese Garden",
    avatar: "AS",
  },
  {
    quote:
      "What stood out most was their ability to turn business goals into a website experience that feels clean, modern, and practical.",
    author: "Nitesh Kumar",
    role: "Founder, Dholera Real Estates",
    avatar: "NK",
  }
]

export const faqItems = [
  {
    question: "How can local SEO help my business get more customers?",
    answer:
      "Local SEO helps your business appear when nearby customers search for services you offer — on Google Search, Google Maps, and in the local pack. We structure your website and Google presence so you capture these high-intent searches and convert them into real calls, bookings, and walk-ins.",
  },
  {
    question: "Do you optimize Google Business Profiles?",
    answer:
      "Yes. We improve your Google Business Profile structure and align it with your website so your business appears more prominently in Google Maps results and local searches. A well-optimized profile drives more profile views, direction requests, and direct calls.",
  },
  {
    question: "Can a website improve customer inquiries for my local business?",
    answer:
      "Absolutely. We build websites with clear calls to action, WhatsApp entry points, click-to-call buttons, and local SEO foundations — so every visitor has a simple, frictionless path to becoming a customer inquiry.",
  },
  {
    question: "How long does local SEO take to show results?",
    answer:
      "Most local businesses start seeing measurable improvements in 30 to 90 days — better rankings, more profile views, and increased inquiries. The timeline depends on your market competition and starting position.",
  },
  {
    question: "Do you build websites for restaurants, clinics, and salons?",
    answer:
      "Yes. We regularly build and improve websites for local service businesses including restaurants, clinics, salons, gyms, educational institutes, and repair services. Every site is built around your specific business goals and customer journey.",
  },
  {
    question: "Why does mobile optimization matter for local businesses?",
    answer:
      "Over 80% of local searches happen on mobile devices. If your website is slow, hard to navigate, or not built for phones, you lose most of your potential customers before they ever contact you. We build every site to be fast and seamless on mobile from day one.",
  },
  {
    question: "My current website isn't bringing in leads. Can you fix it?",
    answer:
      "Yes. We regularly audit and improve existing websites — tightening trust signals, improving CTAs, adding WhatsApp integration, and fixing the local SEO foundation — so more of the traffic you already get turns into real business inquiries.",
  },
]

export const footerServiceLinks = [
  { label: "Customer-Generating Websites", href: "/services/web-development" },
  { label: "Local SEO Services", href: "/services/local-seo" },
  { label: "Google Maps Visibility", href: "/services/google-business-optimization" },
  { label: "WhatsApp Lead Systems", href: "/services/whatsapp-automation" },
]

export const localBusinessDescription =
  "HashiraDevs is a local business growth company helping restaurants, clinics, salons, gyms, and service businesses across India grow through strategic websites, local SEO, Google Maps visibility optimization, and WhatsApp lead capture systems — built to drive real customer acquisition, not just online presence."

export const organizationServices = [
  "Local Business Website Development",
  "Local SEO Services",
  "Google Business Profile Optimization",
  "Google Maps Visibility Optimization",
  "WhatsApp Lead Capture Systems",
  "Website Conversion Rate Optimization",
  "Customer Acquisition Strategy",
  "Mobile-Optimized Website Design",
]

export const geoAreasServed = [
  "Moradabad",
  "Delhi",
  "Noida",
  "Gurugram",
  "Amroha",
  "Bareilly",
  "Lucknow",
  "Meerut",
  "Uttar Pradesh",
  "Delhi NCR",
]

export const organizationSameAs = [
  "https://wa.me/+917818869663",
  "https://hashiradevs.com",
]

export const servicesHeadline = "Growth Systems Designed for Local Businesses"
export const servicesIntro =
  "Everything a local business needs to get found on Google, capture more leads, and turn website visitors into paying customers."
export const whyUsHeadline = "Built to help businesses grow, not just look good"
export const whyUsIntro =
  "We combine strong design with practical growth strategy so your website not only looks premium — it generates calls, bookings, and revenue."
export const workIntro =
  "Real businesses. Real outcomes. See how stronger positioning, local SEO, and conversion-focused websites drive measurable growth."
export const faqIntro =
  "Common questions from local business owners before starting a website or growth project."
export const ctaHeadline = "Ready to Get More Customers From Your Online Presence?"
export const ctaDescription =
  "Let's find what's stopping your business from growing online and build a system that brings you more calls, bookings, and visibility."
export const footerTagline =
  "Helping Local Businesses Grow Through Strategic Websites, Local SEO & Digital Growth Systems."
