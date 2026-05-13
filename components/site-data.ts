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
  phoneDisplay: "+91 7818869663",
  phoneHref: "tel:+917818869663",
  whatsappUrl:
    "https://wa.me/+917818869663?text=Hi%20HashiraDevs%2C%20I%20want%20help%20growing%20my%20business%20online.",
  email: "hashiradevs@hashiradevs.com",
  location: "Prabhat market, moradabad, 244001",
} as const

export const navLinks = [
  // { href: "/services", label: "Services" },
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
    question: "How long does a typical website project take?",
    answer:
      "Most business websites take around 3 to 6 weeks depending on scope, content readiness, and required integrations.",
  },
  {
    question: "Will a new website actually help me get more customers?",
    answer:
      "Yes. We build websites specifically around conversion — clear calls to action, fast load times, local SEO, and WhatsApp integration — so more of your visitors turn into inquiries and bookings.",
  },
  {
    question: "My current website isn't bringing in leads. Can you fix it?",
    answer:
      "Yes. We regularly improve existing websites to build stronger trust, drive more inquiries, and convert more of the traffic you're already getting.",
  },
  {
    question: "Do you optimize Google Business Profiles?",
    answer:
      "Yes. We can help improve your profile structure and how it connects with your website for better local positioning.",
  },
  {
    question: "Can you integrate WhatsApp into the website?",
    answer:
      "Absolutely. We can add direct WhatsApp entry points and conversation-focused CTAs for faster lead capture.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We provide maintenance, improvements, and ongoing support after launch based on your needs.",
  },
]

export const footerServiceLinks = [
  { label: "Customer-Generating Websites", href: "#services" },
  { label: "Local SEO Services", href: "#services" },
  { label: "Google Maps Visibility", href: "#services" },
  { label: "WhatsApp Lead Systems", href: "#services" },
]

export const localBusinessDescription =
  "HashiraDevs helps local businesses grow online with customer-generating websites, local SEO, Google Maps visibility, and WhatsApp lead systems — built to drive real revenue, not just online presence."

export const organizationServices = [
  "Customer-Generating Websites",
  "Local SEO Services",
  "Google Maps Visibility Optimization",
  "Automated WhatsApp Lead Systems",
  "Website Conversion Improvement",
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
