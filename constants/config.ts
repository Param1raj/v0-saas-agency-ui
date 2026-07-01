import { Award, ChartBar, ChartPie, Clock, Lock, Magnet, MapPinned, MessageCircle, Puzzle, Smartphone, Utensils, Zap } from "lucide-react";

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
    },
    {
        id: "ember-cafe",
        title: "Ember Café landing page",
        description: "A cozy specialty coffee sanctuary in Civil Lines, Moradabad, featuring a premium editorial layout and direct reservation funnel.",
        technologies: ["☕️ Editorial layout & design", "📅 Seamless booking flow", "📱 Responsive space preview", "✨ Fluid micro-interactions"],
        category: "Web" as Category,
        gradient: "from-amber-900/20 via-amber-700/10 to-transparent",
        accentColor: "group-hover:shadow-amber-950/20",
        link: "/case-study/ember-cafe",
        images: ["/ember-1.png", "/ember-2.png", "/ember-3.png", "/ember-4.png"],
        challenge: "The client wanted to translate the quiet, cozy, and slow-paced physical ambiance of their specialty coffee shop in Moradabad into an elegant digital editorial experience that facilitates direct table reservations.",
        solution: "We designed a premium minimalist landing page using warm coffee tones, sophisticated typography, and subtle scroll-triggered effects. We implemented an interactive menu preview, a horizontal workspace showcase, and a friction-free WhatsApp reservation flow.",
        results: [
            "Crafted a beautiful brand identity and modern web layout",
            "Enabled seamless reservation requests directly to the cafe's WhatsApp",
            "Significantly improved online menu discovery and space visualization"
        ],
        feedback: "The site's editorial feel perfectly captures what makes Ember special. The reservation flow has made it incredibly simple for weekend guests to book tables in advance.",
        client: "Rohan M.",
        position: "Founder & Lead",
        liveLink: "https://ember-cafe-alpha.vercel.app/",
        features: [
            {
                emoji: Utensils,
                title: "Curated Menu Preview",
                desc: "Showcases signature brass-filter brews, zafrani lattes, and shahi tukda French toast with premium hover interactions.",
            },
            {
                emoji: Smartphone,
                title: "Aesthetic Responsive Layout",
                desc: "Fully optimized for smartphone visitors checking space details and availability on the move.",
            },
            {
                emoji: MapPinned,
                title: "Civil Lines Locator",
                desc: "Integrated direction actions, timings, and map integration to easily locate the café near Town Hall.",
            },
            {
                emoji: Zap,
                title: "Smooth Animations",
                desc: "Provides subtle transitions and high-engagement visuals that elevate brand trust.",
            }
        ]
    },
    {
        id: "ghar-restaurant",
        title: "Ghar — A Family Restaurant",
        description: "A luxury heritage dining website for Moradabad's premier family restaurant, featuring timeline storytelling and custom occasion packages.",
        technologies: ["🏰 Heritage storytelling", "🎂 Occasions package bookings", "🕰️ Interactive cooking timeline", "📞 WhatsApp hospitality integration"],
        category: "Web" as Category,
        gradient: "from-yellow-700/20 via-yellow-600/10 to-transparent",
        accentColor: "group-hover:shadow-yellow-600/20",
        link: "/case-study/ghar-restaurant",
        images: ["/ghar-1.png", "/ghar-2.png", "/ghar-3.png", "/ghar-4.png"],
        challenge: "With a 30-year legacy in Civil Lines, Ghar Restaurant needed to elevate its brand presence to match modern boutique standards while celebrating its historical place in Moradabad and driving package bookings.",
        solution: "We engineered a heritage-inspired digital storefront emphasizing family legacy, traditional craftsmanship, and slow-cooking. We integrated a detailed celebration package booking structure and an interactive 36-hour slow-cooking timeline.",
        results: [
            "Successfully preserved and communicated Ghar's 30-year heritage online",
            "Structured clear booking funnels for high-value family packages",
            "Streamlined direct group reservation coordination via WhatsApp"
        ],
        feedback: "Ghar has been a fixture of Moradabad since 1994, and this website respects that heritage while introducing us to the next generation of patrons. The package booking flow works beautifully.",
        client: "Rajeev Kapoor",
        position: "Managing Director",
        liveLink: "https://ghar-family-restaurant.vercel.app/",
        features: [
            {
                emoji: Award,
                title: "Anniversary & Milestone Packages",
                desc: "Provides clear, structured options for hosting milestone birthdays and candlelight dinners with dedicated butler details.",
            },
            {
                emoji: Clock,
                title: "36-Hour Cooking Timeline",
                desc: "Animates and highlights the stages of crafting the signature Dal Ghar from charcoal embers to churned butter finish.",
            },
            {
                emoji: Utensils,
                title: "Mughlai Platter Showcase",
                desc: "Presents traditional recipes, kebabs, and paneer dishes with premium descriptions and price transparency.",
            },
            {
                emoji: MapPinned,
                title: "Civil Lines Location",
                desc: "Clean details and map routes for their main road venue situated near the District Magistrate's residence.",
            }
        ]
    },
    {
        id: "dum-dash-biryani",
        title: "Dum Dash Biryani storefront",
        description: "A high-converting local e-commerce platform for a premium dum biryani shop, driving commission-free direct WhatsApp orders.",
        technologies: ["🛍️ Direct WhatsApp e-commerce", "🎠 3D plate-spinning carousel", "🌶️ Interactive menu category filters", "🔥 Daily specials checkout"],
        category: "E-commerce" as Category,
        gradient: "from-amber-600/20 via-yellow-500/10 to-transparent",
        accentColor: "group-hover:shadow-amber-500/20",
        link: "/case-study/dum-dash-biryani",
        images: ["/dum-dash-ss-1.png", "/dum-dash-ss-2.png", "/dum-dash-ss-3.png", "/dum-dash-ss-4.png"],
        challenge: "To increase profitability, Dum Dash Biryani wanted to shift online customer demand away from high-commission third-party delivery apps to a direct, fast ordering experience built around local cravings.",
        solution: "We built a conversion-optimized dark-themed storefront featuring a unique 3D plate-spinning carousel, live filterable categories, a daily specials countdown banner, and direct WhatsApp-connected CTAs.",
        results: [
            "Cut out third-party delivery commission fees by routing customers to direct WhatsApp ordering",
            "Delivered an incredibly immersive mobile-first visual experience",
            "Enhanced ordering efficiency for family packs and chef-exclusive dishes"
        ],
        feedback: "The plate-spinning carousel is a huge hit on mobile, and the direct WhatsApp order templates make delivering food so much faster. It's a complete win for our business.",
        client: "Chef Vikram Sharma",
        position: "Founder & Head Khansama",
        liveLink: "https://dum-dash-bryani.vercel.app/",
        features: [
            {
                emoji: MessageCircle,
                title: "WhatsApp Order Routing",
                desc: "Transfers user selections into clean, pre-filled WhatsApp messages for seamless checkout.",
            },
            {
                emoji: Zap,
                title: "3D Interactive Plate Carousel",
                desc: "An interactive menu display that lets users spin and select Chicken, Mutton, Veg, or Paneer Dum Biryanis.",
            },
            {
                emoji: Award,
                title: "Chef's Specials Promotion",
                desc: "Features the limited daily 20 plates of Mutton Raan Biryani to create high urgency and interest.",
            },
            {
                emoji: Smartphone,
                title: "Mobile-First Ordering",
                desc: "Optimized for speed and thumb-friendly checkout since over 80% of local delivery traffic comes from mobile.",
            }
        ]
    }
]