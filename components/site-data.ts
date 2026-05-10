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
  location: "Moradabad, Uttar Pradesh, India",
} as const

export const navLinks = [
  // { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const heroHeadline =
  "Websites That Help Local Businesses Get More Calls, Customers & Bookings"

export const heroSubheadline =
  "We help local businesses grow with high-converting websites, local SEO, and WhatsApp-ready customer journeys."

export const heroTrustItems = [
  "SEO Ready",
  "Mobile Optimized",
  "Fast Loading",
  "WhatsApp Integrated",
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
    title: "Website Development",
    description:
      "Modern websites designed to turn visitors into calls, bookings, and qualified leads.",
  },
  {
    icon: Search,
    title: "Local SEO Services",
    description:
      "Improve visibility for nearby customers searching for the services you already offer.",
  },
  {
    icon: MapPinned,
    title: "Google Business Optimization",
    description:
      "Strengthen your Google presence so more local searches become profile visits and inquiries.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description:
      "Make it easier for prospects to message you instantly and move into your follow-up flow.",
  },
  {
    icon: Palette,
    title: "Website Redesign",
    description:
      "Upgrade outdated websites into cleaner, faster experiences that build trust quickly.",
  },
  {
    icon: Server,
    title: "Conversion Optimization",
    description:
      "Refine page flow, CTA placement, and messaging so more traffic turns into real business.",
  },
]

export const advantageItems = [
  {
    icon: Award,
    title: "Trust-First Positioning",
    description:
      "We structure your website so local customers understand your value quickly and feel confident reaching out.",
  },
  {
    icon: Zap,
    title: "Performance-First Delivery",
    description:
      "Fast-loading pages and better mobile UX help reduce drop-off and improve lead quality.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "You get direct updates, honest timelines, and a process that keeps decisions simple and transparent.",
  },
  {
    icon: Blocks,
    title: "Scalable Foundations",
    description:
      "Your site is built to support future growth, better content, and stronger SEO without constant rework.",
  },
  {
    icon: LineChart,
    title: "Growth-Focused Strategy",
    description:
      "We care about what happens after launch: more visibility, more inquiries, and more booked conversations.",
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
]

export const faqItems = [
  {
    question: "How long does a typical website project take?",
    answer:
      "Most business websites take around 3 to 6 weeks depending on scope, content readiness, and required integrations.",
  },
  {
    question: "Do you provide local SEO services?",
    answer:
      "Yes. We help with on-page local SEO, service-page structure, metadata, and local visibility improvements.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We regularly improve existing websites that need better trust, stronger conversions, and cleaner mobile UX.",
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
  { label: "Website Development", href: "#services" },
  { label: "Local SEO Services", href: "#services" },
  { label: "Website Redesign", href: "#services" },
  { label: "WhatsApp Automation", href: "#services" },
]

export const localBusinessDescription =
  "HashiraDevs helps local businesses grow online with conversion-focused websites, local SEO services, website redesigns, Google Business optimization, and WhatsApp automation."

export const organizationServices = [
  "Website Development",
  "Local SEO Services",
  "Website Redesign",
  "Google Business Optimization",
  "WhatsApp Automation",
]

export const servicesHeadline = "Services focused on visibility, trust, and conversions"
export const servicesIntro =
  "Strategic website and growth services tailored for businesses that want more visibility, more trust, and more customer action."
export const whyUsHeadline = "Built to help businesses grow, not just look good"
export const whyUsIntro =
  "We combine strong design execution with practical growth strategy so your website looks better and performs better."
export const workIntro =
  "Selected projects that show how stronger positioning, faster UX, and clearer conversion paths create better business outcomes."
export const faqIntro =
  "Answers to the questions local businesses ask before starting a website or SEO project."
export const ctaHeadline = "Ready to grow your business online?"
export const ctaDescription =
  "Let’s improve how your business looks online, how customers find you, and how more visitors turn into inquiries."
