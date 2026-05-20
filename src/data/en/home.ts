// src/data/home.ts

export const homeData = {
    navBar: {
        brand: "NIUMODAO",
        icons: [
            "Products",
            "Blog",
            "Contact Us",
        ]
    },

    trust: {
        title: "WE HAVE",
        descriptions: [
            { label: "Years Experience", value: 20 },
            { label: "Monthly Capacity", value: 30000 },
            { label: "Export Countries", value: 10 }
        ]
    } as { title: string; descriptions: { label: string; value: number }[] },
    capabilities: [
        { title: "OEM / ODM Manufacturing", icon: "🏭", desc: "Full-service production from tech pack review to final delivery", link: "/capabilities#oem" },
        { title: "Custom Fabric Sourcing", icon: "🧵", desc: "Access to 300+ certified mills with bulk pricing & sample support", link: "/capabilities#fabric" },
        { title: "Strict Quality Control", icon: "🛡️", desc: "IQC → IPQC → OQC with AQL 2.5 standard & third-party inspection welcome", link: "/factory#qc" },
        { title: "Global Logistics Support", icon: "🚢", desc: "FOB/CIF/DDP options with experienced forwarder partnerships", link: "/inquiry#shipping" }
    ],
    CircularGallery: {
        items: [
            {
                image: "/images/factory/cutting-machine.webp",
                text: "Automated Cutting System"
            },
            {
                image: "/images/factory/sewing-line.webp",
                text: "Modern Sewing Lines"
            },
            {
                image: "/images/factory/qc-inspection.webp",
                text: "Quality Control Lab"
            },
            {
                image: "/images/factory/warehouse.webp",
                text: "Storage & Logistics"
            },
            {
                image: "/images/factory/packaging.webp",
                text: "Professional Packaging"
            },
            {
                image: "/images/certifications/iso.webp",
                text: "ISO 9001 Certified"
            },
            {
                image: "/images/certifications/oekotex.webp",
                text: "OEKO-TEX Standard 100"
            },
            {
                image: "/images/certifications/bsci.webp",
                text: "BSCI Compliance"
            }
        ],
        bend: 3,
        textColor: "#ffffff",
        borderRadius: 0.05,
        scrollSpeed: 2,
        scrollEase: 0.05
    },
    process: [
        { step: 1, title: "Material Inspection", desc: "100% fabric testing for colorfastness, shrinkage & composition before cutting", image: "/images/step-1.webp" },
        { step: 2, title: "Precision Cutting", desc: "Computer-aided layout with <1% fabric waste, laser-cut for complex patterns", image: "/images/step-2.webp" },
        { step: 3, title: "Skilled Sewing", desc: "ISO-certified lines with 5+ years experienced operators, specialized by product type", image: "/images/step-3.webp" },
        { step: 4, title: "3-Stage Quality Check", desc: "IQC → IPQC → OQC with AQL 2.5 standard, third-party inspection welcome", image: "/images/step-4.webp" },
        { step: 5, title: "Secure Packaging & Shipping", desc: "Custom branding, moisture-proof packing, FOB/CIF/DDP flexible options", image: "/images/step-5.webp" }
    ],
    factory: {
        images: ["/factory/line-1.webp", "/factory/warehouse.webp", "/factory/qc-lab.webp"],
        esgStats: [
            { label: "Water Saved", value: "30% vs Industry Avg", icon: "💧" },
            { label: "Renewable Energy", value: "40% of Production", icon: "⚡" },
            { label: "Waste Recycled", value: "95% Packaging Materials", icon: "♻️" }
        ],
        quote: { text: "We believe ethical manufacturing is not a cost, but an investment in long-term partnership.", author: "Zhang Wei, Factory Director" }
    },
    cta: {
        title: "Ready to Start Your Custom Garment Project?",
        subtitle: "Free tech review • 24h response • Dedicated English-speaking PM",
        btnText: "Submit Inquiry Now",
        email: "sales@yourbrand.com",
        whatsapp: "+86 138 XXXX XXXX"
    }
} as const;