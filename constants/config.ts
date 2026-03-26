import { Award, ChartBar, ChartPie, Lock, Magnet, MapPinned, Puzzle, Smartphone, Utensils, Zap } from "lucide-react";

const categories = ["All", "Web", "Mobile", "SaaS", "E-commerce"] as const
type Category = (typeof categories)[number]

export const CaseStudies = [
        {
        id: "restaurant-website",
        title: "Restaurant Website",
        description: "Designed to attract customers, showcase menu offerings, and drive online orders with a visually engaging and mobile-friendly experience.",
        technologies: ["📱 Mobile-First Experience", "🍽️ Menu Visibility & Presentation", "📍 Easy Location & Accessibility", "💬 Easy contact"],
        category: "E-commerce" as Category,
        gradient: "from-orange-600/20 via-amber-500/10 to-transparent",
        accentColor: "group-hover:shadow-orange-500/20",
        link: "/case-study/restaurant-website",
        images: ["/chinese-1.png", "/chinese-2.png", "/chinese-3.png", "/chinese-4.png"],
        challenge:'The goal was to create a modern restaurant website that not only reflects the brand’s identity but also encourages users to explore the menu and take action — whether it’s visiting, ordering, or contacting.',
        solution:'We focused on creating an immersive visual experience combined with a clear user journey. The layout highlights key sections like menu, offers, and contact details while keeping navigation simple and intuitive.',
        results:[
            'Improved online presence and brand perception',
            'Easier access to menu and contact information', 
            'Better user engagement across devices',
            'Structured flow encouraging customer actions'
        ],
        feedback: "The website perfectly represents our restaurant and makes it easy for customers to explore our menu and get in touch. The overall experience feels smooth and professional.",
        client: "Abhishek S.",
        position: 'Business Owner',
        liveLink: "https://chinese-garden-restaurant-wesbite.vercel.app/",
        features: [
        {
            emoji: Utensils,
            title: "Engaging Menu",
            desc: "Designed to visually present dishes in an appealing way, helping customers explore offerings and make decisions",
        },
        {
            emoji: Smartphone,
            title: "Mobile Experience",
            desc: "Optimized for mobile users to ensure smooth browsing, as most restaurant traffic comes from smartphones.",
        },
        {
            emoji: Zap,
            title: "Fast Loading Performance",
            desc: "Built for speed to reduce bounce rates and keep users engaged from the first interaction.",
        },
        {
            emoji: MapPinned,
            title: "Location & Contact",
            desc: "Easy access to directions, contact details, and quick actions like calling or messaging the restaurant.",
        },
        {
            emoji: Magnet,
            title: "Conversion-Focused Layout",
            desc: "Strategically placed call-to-actions to encourage bookings, orders, and inquiries.",
        },
        ]
    },
    {
        id: "e-learning-website",
        title: "Scalable E-Learning Platform",
         description: "A complete learning system built to deliver seamless video streaming, secure payments, and user progress tracking — optimized for engagement and growth.",
        technologies: [
            "🎥 Smooth video streaming experience",
            "🔐 Secure authentication & payments",
            "📈 Built to scale with users",
            "✨ Modern UI/UX design",
        ],
        category: "SaaS" as Category,
        gradient: "from-emerald-600/20 via-teal-500/10 to-transparent",
        accentColor: "group-hover:shadow-emerald-500/20",
        link: "/case-study/e-learning-website",
        images: ["/elearning-1.png", "/elearning-2.png", "/elearning-3.png", "/elearning-4.png"],
        challenge:'The requirement was to build a platform capable of handling course delivery, payments, and user management while keeping the experience simple for both learners and administrators.',
        solution:'We designed a structured system focusing on performance and usability. Special attention was given to video streaming, authentication, and smooth user flow from browsing courses to completing purchases.',
        results:[
            'Smooth learning experience across devices',
            'Simplified course management for admins', 
            'Reliable system for handling users and content'
        ],
        feedback: "We needed a reliable team to build a complex platform, and HashiraDevs delivered on time without unnecessary delays. Communication was clear throughout the project",
        client: "Manish K.",
        position: 'Business Owner',
        liveLink: "https://moneyroots.in/",
        features: [
        {
            emoji: Zap,
            title: "Seamless Video Delivery",
            desc: "Optimized video streaming experience",
        },
        {
            emoji: Lock,
            title: "Secure User & Payment System",
            desc: "Pixel-perfect across all devices and screen sizes.",
        },
        {
            emoji: ChartBar,
            title: "Progress Tracking",
            desc: "Structured markup and meta tags for better search visibility.",
        },
        {
            emoji: Smartphone,
            title: "Mobile-Optimized Experience",
            desc: "Reusable sections for easy content updates and scaling.",
        },
        {
            emoji: Lock,
            title: "Scalable Architecture",
            desc: "Best practices for security headers and form handling.",
        },
        {
            emoji: ChartPie,
            title: "Analytics Ready",
            desc: "Integrated tracking for user behavior and conversion insights.",
        },
        ]
    },
    {
        id: "dholera-realestate-website",
        title: "Lead-Generating Real Estate Website",
        description:"Crafted to capture high-quality leads with intuitive search, map integration, and conversion-driven design tailored for property businesses.",
        technologies: [
            "📍 Smart search & map integration",
            "🧲 High-converting lead capture",
            "⚡️ Optimized for speed & SEO",
        ],
        category: "Web" as Category,
        gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
        accentColor: "group-hover:shadow-violet-500/20",
        link: "/case-study/dholera-realestate-website",
        images: ["/realestate-1.png", "/realestate-2.png", "/realestate-3.png", "/realestate-4.png"],
        challenge:'The main challenge was to create a platform where users can easily browse properties while ensuring the business receives consistent and meaningful inquiries.',
        solution:'We focused on simplifying property discovery and optimizing the layout for lead generation. Clear navigation, search functionality, and strong CTAs were prioritized.',
        results:[
            'Improved browsing experience for users',
            'Better structure for capturing leads', 
            'Clear presentation of property listings'
        ],
        feedback: "What stood out was their ability to simplify our ideas into a working product without overcomplicating things. They were easy to work with, and the final result matched exactly what we had envisioned.",
        client: "Abhishek S.",
        position: 'Business Owner',
        liveLink: "https://moneyroots.in/",
        features: [
        {
            emoji: Magnet,
            title: "Lead Capture System",
            desc: "Designed to convert visitors into inquiries with strategically placed forms.",
        },
        {
            emoji: Zap,
            title: "Optimized Performance",
            desc: "Fast-loading pages improve user experience and retention.",
        },
        {
            emoji: ChartBar,
            title: "Progress Tracking",
            desc: "Structured markup and meta tags for better search visibility.",
        },
        {
            emoji: Smartphone,
            title: "Responsive Across Devices",
            desc: "Ensures smooth browsing experience for users on all screen sizes.",
        },
        {
            emoji: ChartPie,
            title: "Analytics Ready",
            desc: "Integrated tracking for user behavior and conversion insights.",
        },
        ]
    },
      {
        id: "portfolio-website",
        title: "High-Converting Portfolio Website",
        description: "Designed to turn visitors into clients with fast performance, smooth interactions, and strategically placed call-to-actions for maximum lead generation.",
        technologies: [
            "⚡️ Blazing fast performance",
            "🎯 Conversion-focused UX",
            "📱 Fully responsive across all devices",
        ],
        category: "Web" as Category,
        gradient: "from-sky-600/20 via-indigo-500/10 to-transparent",
        accentColor: "group-hover:shadow-sky-500/20",
        link: "/case-study/portfolio-website",
        images: ["/portfolio-1.png", "/portfolio-2.png", "/portfolio-3.png", "/portfolio-4.png"],
        challenge:'The client needed a portfolio that not only showcased their work but also converted visitors into paying clients. The existing site was slow, cluttered, and failed to communicate the value proposition effectively.',
        solution:'We designed a sleek, modern portfolio focused on fast performance and clear messaging. By optimizing images, implementing lazy loading, and streamlining the user experience, we created a site that loads in under 2 seconds and guides visitors towards conversion with strategically placed call-to-actions.',
        results:['Improved user experience with intuitive navigation and clear visual hierarchy', 'Faster page load times through optimized assets and modern build tooling', 'Better engagement structure with strategic CTAs and content flow'],
        feedback: "HashiraDevs delivered exactly what we needed — a clean, fast website that actually helps us get leads. The whole process was smooth and professional.",
        client: "Param R.",
        position: 'Freelancer',
        liveLink: "https://param1raj.github.io/",
        features: [
        {
            emoji: Zap,
            title: "Fast Performance",
            desc: "Optimized video streaming experience",
        },
        {
            emoji: Smartphone,
            title: "Fully Responsive",
            desc: "Pixel-perfect across all devices and screen sizes.",
        },
        {
            emoji: Award,
            title: "SEO Optimized",
            desc: "Structured markup and meta tags for better search visibility.",
        },
        {
            emoji: Puzzle,
            title: "Modular Components",
            desc: "Reusable sections for easy content updates and scaling.",
        },
        {
            emoji: Lock,
            title: "Secure & Reliable",
            desc: "Best practices for security headers and form handling.",
        },
        {
            emoji: ChartPie,
            title: "Analytics Ready",
            desc: "Integrated tracking for user behavior and conversion insights.",
        },
        ]
    }
]