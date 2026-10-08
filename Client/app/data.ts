// Eco-Friendly Platform Data & Categories
// Completely transformed to sustainable, zero-waste, organic, and circular economy concepts

const topCat = [
    {
        imgLink: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=120&q=80',
        name: "ORGANIC APPAREL",
        quantity: 64,
        showLink: "/sub-category/fashion/organic-cotton"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=120&q=80',
        name: "ZERO-WASTE LIVING",
        quantity: 82,
        showLink: "/sub-category/fashion/zero-waste"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=120&q=80',
        name: "CORK & RECYCLED SHOES",
        quantity: 41,
        showLink: "/sub-category/footwear/cork-walkers"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=120&q=80',
        name: "SOLAR & CLEAN TECH",
        quantity: 35,
        showLink: "/sub-category/electronics/solar-chargers"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1608248597359-07b973f55403?auto=format&fit=crop&w=120&q=80',
        name: "BOTANICAL WELLNESS",
        quantity: 58,
        showLink: "/sub-category/cosmetics/shampoo-bars"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=120&q=80',
        name: "BAMBOO HOME",
        quantity: 73,
        showLink: "/sub-category/fashion/bamboo-kitchen"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=120&q=80',
        name: "RECLAIMED WOOD GEAR",
        quantity: 29,
        showLink: "/sub-category/electronics/wood-watches"
    },
    {
        imgLink: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=120&q=80',
        name: "NATURAL AROMATHERAPY",
        quantity: 47,
        showLink: "/sub-category/perfume/essential-oils"
    }
];

const navBtns = [
    { name: "Home", isExtendable: false, extendables: [], catLink: '/' },
    { name: "Categories", isExtendable: false, extendables: [], catLink: '' },
    {
        name: "Eco Apparel",
        isExtendable: true,
        extendables: [
            { title: "Organic Cotton Basics", link: "/sub-category/fashion/organic-cotton" },
            { title: "Hemp & Linen Casuals", link: "/sub-category/fashion/hemp-linen" },
            { title: "Recycled Wool & Fleece", link: "/sub-category/fashion/recycled-fleece" },
            { title: "Bamboo Fiber Wear", link: "/sub-category/fashion/bamboo-wear" },
        ],
        catLink: '/categories/fashion'
    },
    {
        name: "Zero-Waste Home",
        isExtendable: true,
        extendables: [
            { title: "Reusable Beeswax Wraps", link: "/sub-category/fashion/beeswax-wraps" },
            { title: "Bamboo Kitchen Utensils", link: "/sub-category/fashion/bamboo-kitchenware" },
            { title: "Stainless Steel Containers", link: "/sub-category/fashion/steel-containers" },
            { title: "Coconut Fiber Cleaners", link: "/sub-category/fashion/coconut-cleaners" },
        ],
        catLink: '/categories/fashion'
    },
    {
        name: "Sustainable Footwear",
        isExtendable: true,
        extendables: [
            { title: "Cork Sole Walkers", link: "/sub-category/footwear/cork-walkers" },
            { title: "Natural Rubber Slides", link: "/sub-category/footwear/natural-rubber" },
            { title: "Recycled Ocean Canvas", link: "/sub-category/footwear/recycled-canvas" },
            { title: "Organic Cotton Slip-Ons", link: "/sub-category/footwear/cotton-slips" },
        ],
        catLink: '/categories/footwear'
    },
    {
        name: "Botanical Care",
        isExtendable: true,
        extendables: [
            { title: "Zero-Waste Shampoo Bars", link: "/sub-category/cosmetics/shampoo-bars" },
            { title: "Cold-Pressed Body Soap", link: "/sub-category/cosmetics/botanical-soap" },
            { title: "Mineral Reef-Safe Sunscreen", link: "/sub-category/cosmetics/mineral-sunscreen" },
            { title: "Soy Wax Botanical Candles", link: "/sub-category/cosmetics/soy-candles" },
        ],
        catLink: '/categories/cosmetics'
    },
    {
        name: "Clean Tech",
        isExtendable: true,
        extendables: [
            { title: "Solar Power Banks", link: "/sub-category/electronics/solar-chargers" },
            { title: "Bamboo Mechanical Keyboards", link: "/sub-category/electronics/bamboo-keyboards" },
            { title: "Biodegradable Phone Cases", link: "/sub-category/electronics/compostable-cases" },
            { title: "Reclaimed Wood Solar Watches", link: "/sub-category/electronics/wood-watches" },
        ],
        catLink: '/categories/electronics'
    },
    {
        name: "Ethical Jewelry",
        isExtendable: true,
        extendables: [
            { title: "Recycled Silver Pendants", link: "/sub-category/jewellery/recycled-silver" },
            { title: "Tagua Nut Botanical Earrings", link: "/sub-category/jewellery/tagua-earrings" },
            { title: "Upcycled Wood Bracelets", link: "/sub-category/jewellery/wood-bracelets" },
            { title: "Ocean Sea Glass Rings", link: "/sub-category/jewellery/sea-glass" },
        ],
        catLink: '/categories/jewellery'
    },
    { name: "Blog", isExtendable: false, extendables: [], catLink: '/blog' }
];

const leftStatus = [
    {
        imgLink: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=40&q=80",
        title: "Eco Apparel",
        links: [
            { title: "Organic Cotton Basics", link: "/sub-category/fashion/organic-cotton", quantity: 38 },
            { title: "Hemp & Linen Casuals", link: "/sub-category/fashion/hemp-linen", quantity: 24 },
            { title: "Recycled Fleece Outerwear", link: "/sub-category/fashion/recycled-fleece", quantity: 19 },
            { title: "Bamboo Loungewear", link: "/sub-category/fashion/bamboo-wear", quantity: 31 }
        ]
    },
    {
        imgLink: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=40&q=80",
        title: "Sustainable Footwear",
        links: [
            { title: "Cork Sole Walkers", link: "/sub-category/footwear/cork-walkers", quantity: 22 },
            { title: "Natural Rubber Slides", link: "/sub-category/footwear/natural-rubber", quantity: 18 },
            { title: "Recycled Ocean Canvas", link: "/sub-category/footwear/recycled-canvas", quantity: 27 },
            { title: "Organic Cotton Slips", link: "/sub-category/footwear/cotton-slips", quantity: 16 }
        ]
    },
    {
        imgLink: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=40&q=80",
        title: "Zero-Waste Home",
        links: [
            { title: "Reusable Beeswax Wraps", link: "/sub-category/fashion/beeswax-wraps", quantity: 45 },
            { title: "Bamboo Utensil Sets", link: "/sub-category/fashion/bamboo-kitchenware", quantity: 32 },
            { title: "Stainless Steel Bottles", link: "/sub-category/fashion/steel-containers", quantity: 29 },
            { title: "Coconut Fiber Dish Brushes", link: "/sub-category/fashion/coconut-cleaners", quantity: 41 }
        ]
    },
    {
        imgLink: "https://images.unsplash.com/photo-1608248597359-07b973f55403?auto=format&fit=crop&w=40&q=80",
        title: "Botanical Care",
        links: [
            { title: "Zero-Waste Shampoo Bars", link: "/sub-category/cosmetics/shampoo-bars", quantity: 34 },
            { title: "Cold-Pressed Soap Bars", link: "/sub-category/cosmetics/botanical-soap", quantity: 42 },
            { title: "Mineral Reef Sunscreen", link: "/sub-category/cosmetics/mineral-sunscreen", quantity: 25 },
            { title: "Soy Wax Botanical Candles", link: "/sub-category/cosmetics/soy-candles", quantity: 30 }
        ]
    },
    {
        imgLink: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=40&q=80",
        title: "Clean Tech & Solar",
        links: [
            { title: "Solar Power Banks", link: "/sub-category/electronics/solar-chargers", quantity: 21 },
            { title: "Bamboo Keyboards", link: "/sub-category/electronics/bamboo-keyboards", quantity: 15 },
            { title: "Compostable Phone Cases", link: "/sub-category/electronics/compostable-cases", quantity: 39 },
            { title: "Reclaimed Wood Solar Watches", link: "/sub-category/electronics/wood-watches", quantity: 18 }
        ]
    },
    {
        imgLink: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=40&q=80",
        title: "Ethical Jewelry",
        links: [
            { title: "Recycled Silver Pendants", link: "/sub-category/jewellery/recycled-silver", quantity: 18 },
            { title: "Tagua Nut Earrings", link: "/sub-category/jewellery/tagua-earrings", quantity: 24 },
            { title: "Reclaimed Wood Bracelets", link: "/sub-category/jewellery/wood-bracelets", quantity: 19 },
            { title: "Ocean Sea Glass Rings", link: "/sub-category/jewellery/sea-glass", quantity: 15 }
        ]
    },
    {
        imgLink: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=40&q=80",
        title: "Earth Bags & Carry",
        links: [
            { title: "Organic Canvas Grocery Totes", link: "/sub-category/fashion/canvas-totes", quantity: 50 },
            { title: "Cork Leather Wallets", link: "/sub-category/fashion/cork-wallets", quantity: 28 },
            { title: "Handwoven Jute Backpacks", link: "/sub-category/fashion/jute-backpacks", quantity: 22 },
            { title: "Upcycled Cotton Messengers", link: "/sub-category/fashion/upcycled-bags", quantity: 17 }
        ]
    }
];

const footerCategories = [
    {
        name: 'ECO APPAREL',
        subcategories: [
            { name: 'Organic Cotton Basics', subcatLink: '/sub-category/fashion/organic-cotton' },
            { name: 'Hemp & Linen Wear', subcatLink: '/sub-category/fashion/hemp-linen' },
            { name: 'Recycled Fleece Outerwear', subcatLink: '/sub-category/fashion/recycled-fleece' },
            { name: 'Bamboo Fiber Loungewear', subcatLink: '/sub-category/fashion/bamboo-wear' },
            { name: 'Botanical Plant Dyed', subcatLink: '/sub-category/fashion/plant-dyed' }
        ]
    },
    {
        name: 'SUSTAINABLE FOOTWEAR',
        subcategories: [
            { name: 'Cork Sole Walkers', subcatLink: '/sub-category/footwear/cork-walkers' },
            { name: 'Natural Rubber Slides', subcatLink: '/sub-category/footwear/natural-rubber' },
            { name: 'Recycled Canvas Sneakers', subcatLink: '/sub-category/footwear/recycled-canvas' },
            { name: 'Organic Cotton Slips', subcatLink: '/sub-category/footwear/cotton-slips' },
            { name: 'Vegan Piñatex Boots', subcatLink: '/sub-category/footwear/pinatex-boots' }
        ]
    },
    {
        name: 'ZERO-WASTE LIVING',
        subcategories: [
            { name: 'Reusable Beeswax Wraps', subcatLink: '/sub-category/fashion/beeswax-wraps' },
            { name: 'Bamboo Cutlery & Straws', subcatLink: '/sub-category/fashion/bamboo-kitchenware' },
            { name: 'Stainless Food Jars', subcatLink: '/sub-category/fashion/steel-containers' },
            { name: 'Coconut Fiber Cleaners', subcatLink: '/sub-category/fashion/coconut-cleaners' },
            { name: 'Organic Canvas Totes', subcatLink: '/sub-category/fashion/canvas-totes' }
        ]
    },
    {
        name: 'BOTANICAL WELLNESS',
        subcategories: [
            { name: 'Zero-Waste Shampoo Bars', subcatLink: '/sub-category/cosmetics/shampoo-bars' },
            { name: 'Cold-Pressed Herbal Soaps', subcatLink: '/sub-category/cosmetics/botanical-soap' },
            { name: 'Reef-Safe Mineral Sunscreen', subcatLink: '/sub-category/cosmetics/mineral-sunscreen' },
            { name: 'Pure Botanical Essential Oils', subcatLink: '/sub-category/perfume/essential-oils' },
            { name: 'Soy Wax Hand-Poured Candles', subcatLink: '/sub-category/cosmetics/soy-candles' }
        ]
    }
];

const footerSections = [
    {
        sectionName: "Popular Categories",
        items: [
            { title: "Organic Apparel", link: "/categories/fashion" },
            { title: "Sustainable Footwear", link: "/categories/footwear" },
            { title: "Botanical Wellness", link: "/categories/cosmetics" },
            { title: "Clean Tech & Solar", link: "/categories/electronics" },
            { title: "Ethical Jewelry", link: "/categories/jewellery" }
        ]
    },
    {
        sectionName: "Sustainability & Store",
        items: [
            { title: "Sustainability Blog", link: "/blog" },
            { title: "Eco Advisory & Contact", link: "/contact" },
            { title: "Our Eco Services & Impact", link: "/our-services" }
        ]
    },
    {
        sectionName: "Our Commitment",
        items: [
            { title: "About Our Mission", link: "/about" },
            { title: "Privacy Policy", link: "/policy/privacypolicy" },
            { title: "Secure Ethical Checkout", link: "/securepayment" },
            { title: "Terms & Fair Practices", link: "/policy/terms&conditions" },
            { title: "Circular Return Policy", link: "/policy/refund&cancellation" }
        ]
    },
    {
        sectionName: 'Sustainable Hub',
        items: [
            { title: 'EcoBloom Circular Living HQ, Portland, OR 97201', link: "#" },
            { title: '+1 (800) 456-ECO1', link: "#" },
            { title: 'care@ecobloom-market.com', link: "#" }
        ]
    }
];

const featuresSec = [
    {
        title: "Carbon-Neutral Delivery",
        description: "100% emission offset on every order",
        siteLink: "/our-services",
        icon: 'fa-solid fa-leaf fa-2xl',
    },
    {
        title: "Plastic-Free Packaging",
        description: "Compostable mailers & paper tape",
        siteLink: "/our-services",
        icon: 'fa-solid fa-box-open fa-2xl',
    },
    {
        title: "Fair Trade & Ethical",
        description: "Direct-trade certified artisans",
        siteLink: "/our-services",
        icon: 'fa-solid fa-handshake-angle fa-2xl',
    },
    {
        title: "Circular Return & Recycle",
        description: "Return old items for store credit",
        siteLink: "/our-services",
        icon: 'fa-solid fa-recycle fa-2xl',
    },
    {
        title: "1% For The Planet",
        description: "Portion of all profits plants native trees",
        siteLink: "/our-services",
        icon: 'fa-solid fa-seedling fa-2xl',
    }
];

const currentEvent = {
    discount: 30,
    titleFirst: "Spring Zero-Waste",
    titleLast: "Living Festival",
    starting: 12,
    isDiscount: true,
    eventLink: '/categories/fashion'
};

const testimonial = {
    imgLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    name: 'ELENA ROSTOVA',
    position: 'Environmental Scientist & Verified Buyer',
    description: 'Switching our home to EcoBloom zero-waste essentials reduced our household plastic by 80%. Exceptional quality, plastic-free shipping, and truly transparent eco-scores!'
};

const categoryDropDown = [
    {
        title: 'Clean Tech',
        catLink: "/categories/electronics",
        imgLink: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80",
        imgAlt: "Solar & Clean Tech Banner",
        imgRedirectLink: "/categories/electronics",
        subCategories: [
            { title: "Solar Power Banks", link: "/sub-category/electronics/solar-chargers" },
            { title: "Bamboo Keyboards", link: "/sub-category/electronics/bamboo-keyboards" },
            { title: "Biodegradable Phone Cases", link: "/sub-category/electronics/compostable-cases" },
            { title: "Reclaimed Wood Solar Watches", link: "/sub-category/electronics/wood-watches" },
            { title: "Eco Bluetooth Audio", link: "/sub-category/electronics/eco-speakers" },
        ]
    },
    {
        title: "Eco Apparel",
        catLink: "/categories/fashion",
        imgLink: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
        imgAlt: "Organic Apparel Banner",
        imgRedirectLink: "/categories/fashion",
        subCategories: [
            { title: "Organic Cotton Basics", link: "/sub-category/fashion/organic-cotton" },
            { title: "Hemp & Linen Casuals", link: "/sub-category/fashion/hemp-linen" },
            { title: "Recycled Wool & Fleece", link: "/sub-category/fashion/recycled-fleece" },
            { title: "Bamboo Fiber Loungewear", link: "/sub-category/fashion/bamboo-wear" },
            { title: "Cork Wallets & Carry", link: "/sub-category/fashion/cork-wallets" },
        ]
    },
    {
        title: "Botanical Care",
        catLink: "/categories/cosmetics",
        imgLink: "https://images.unsplash.com/photo-1608248597359-07b973f55403?auto=format&fit=crop&w=600&q=80",
        imgAlt: "Botanical Wellness Banner",
        imgRedirectLink: "/categories/cosmetics",
        subCategories: [
            { title: "Zero-Waste Shampoo Bars", link: "/sub-category/cosmetics/shampoo-bars" },
            { title: "Cold-Pressed Soap Bars", link: "/sub-category/cosmetics/botanical-soap" },
            { title: "Mineral Reef Sunscreen", link: "/sub-category/cosmetics/mineral-sunscreen" },
            { title: "Soy Wax Botanical Candles", link: "/sub-category/cosmetics/soy-candles" },
            { title: "Pure Essential Oil Aromas", link: "/sub-category/perfume/essential-oils" },
        ]
    },
    {
        title: 'Sustainable Footwear',
        catLink: "/categories/footwear",
        imgLink: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
        imgAlt: "Eco Footwear Banner",
        imgRedirectLink: "/categories/footwear",
        subCategories: [
            { title: "Cork Sole Walkers", link: "/sub-category/footwear/cork-walkers" },
            { title: "Natural Rubber Slides", link: "/sub-category/footwear/natural-rubber" },
            { title: "Recycled Ocean Canvas", link: "/sub-category/footwear/recycled-canvas" },
            { title: "Organic Cotton Slips", link: "/sub-category/footwear/cotton-slips" },
            { title: "Vegan Piñatex Boots", link: "/sub-category/footwear/pinatex-boots" },
        ]
    },
];

const paymentSecure = [
    {
        title: 'Ethical & Secure Checkout',
        description: "We protect your transactions with high-grade 256-bit SSL encryption. We also partner exclusively with payment processors that maintain net-zero carbon operations.",
        imgLink: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Secure Payment',
    },
    {
        title: 'Bank-Grade SSL Encryption',
        description: "All payment information is transmitted through authenticated SSL channels so your sensitive credit card and banking details are encrypted and safe.",
        imgLink: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Encryption',
    },
    {
        title: 'Full PCI DSS Compliance',
        description: "We strictly adhere to Level 1 PCI DSS standards to ensure payment card data is processed under the highest verified security controls.",
        imgLink: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Compliance',
    },
    {
        title: 'Transparent Pricing Guarantee',
        description: "No hidden environmental surcharges or surprise fees. Carbon offset calculations and sustainable packaging are built into our promise.",
        imgLink: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Transparency',
    }
];

const aboutUS = {
    section1: [
        {
            title: "About EcoBloom",
            description: "EcoBloom was born from a simple belief: daily shopping should regenerate the planet rather than deplete it. We carefully curate products that replace disposable plastics and fast fashion with long-lasting, ethical, and circular alternatives.",
            imgLink: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
            imgAlt: "EcoBloom Story"
        },
        {
            title: "Our Circular Philosophy",
            description: "Every item in our catalog is vetted for natural materials, ethical labor conditions, low water usage, and biodegradable or infinitely recyclable end-of-life cycles.",
            imgLink: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
            imgAlt: "Circular Philosophy"
        },
        {
            title: "Our Reforestation Pledge",
            description: "Through our 1% For The Planet membership, each purchase directly funds verified reforestation and plastic-intercept cleanup initiatives around the world.",
            imgLink: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
            imgAlt: "Reforestation Pledge"
        },
        {
            title: "Radical Transparency",
            description: "We introduced our standardized Eco Score (0-100) so you know exactly how each product performs in materials, durability, packaging, and carbon footprint.",
            imgLink: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
            imgAlt: "Radical Transparency"
        }
    ],
    section2: {
        title: "Our Core Environmental Values",
        imgLink: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        imgAlt: "Environmental Values",
        listPoints: [
            {
                title: "Zero Single-Use Plastics",
                description: "100% plastic-free packaging, paper tape, and compostable protective padding on every single order."
            },
            {
                title: "Certified Organic & Regenerative",
                description: "GOTS-certified organic cotton, FSC-certified reclaimed wood, and wildcrafted organic botanicals."
            },
            {
                title: "Ethical Fair-Trade Sourcing",
                description: "We ensure living wages, safe working conditions, and respect for artisan heritage."
            },
            {
                title: "Circular Product Lifecycle",
                description: "Designed for longevity, repairability, and responsible composting or recycling."
            }
        ]
    },
    section3: {
        title: "Join the Eco Movement",
        description: [
            "Every conscious swap matters. Whether replacing cling wrap with beeswax sheets, synthetic shoes with cork soles, or plastic shampoo bottles with solid bars, your choices drive collective change.",
            "Thank you for choosing EcoBloom. Together, we are building a greener, cleaner, and more vibrant tomorrow."
        ]
    }
};

const availableCategories = [
    {
        title: 'fashion',
        banners: [
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=80"
        ],
        subcategories: [
            { title: 'Organic Cotton Basics', link: '/organic-cotton' },
            { title: 'Hemp & Linen Casuals', link: '/hemp-linen' },
            { title: 'Recycled Fleece', link: '/recycled-fleece' },
            { title: 'Bamboo Loungewear', link: '/bamboo-wear' },
            { title: 'Beeswax Wraps', link: '/beeswax-wraps' },
            { title: 'Bamboo Utensils', link: '/bamboo-kitchenware' },
            { title: 'Organic Canvas Totes', link: '/canvas-totes' }
        ]
    },
    {
        title: 'footwear',
        banners: [
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1600&q=80"
        ],
        subcategories: [
            { title: 'Cork Sole Walkers', link: '/cork-walkers' },
            { title: 'Natural Rubber Slides', link: '/natural-rubber' },
            { title: 'Recycled Ocean Canvas', link: '/recycled-canvas' },
            { title: 'Organic Cotton Slips', link: '/cotton-slips' },
            { title: 'Vegan Piñatex Boots', link: '/pinatex-boots' }
        ]
    },
    {
        title: 'jewellery',
        banners: [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1611591475806-904005cf4b76?auto=format&fit=crop&w=1600&q=80"
        ],
        subcategories: [
            { title: 'Recycled Silver Pendants', link: '/recycled-silver' },
            { title: 'Tagua Nut Earrings', link: '/tagua-earrings' },
            { title: 'Reclaimed Wood Bracelets', link: '/wood-bracelets' },
            { title: 'Ocean Sea Glass Rings', link: '/sea-glass' }
        ]
    },
    {
        title: 'cosmetics',
        banners: [
            "https://images.unsplash.com/photo-1608248597359-07b973f55403?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80"
        ],
        subcategories: [
            { title: 'Zero-Waste Shampoo Bars', link: '/shampoo-bars' },
            { title: 'Cold-Pressed Herbal Soaps', link: '/botanical-soap' },
            { title: 'Mineral Reef Sunscreen', link: '/mineral-sunscreen' },
            { title: 'Soy Wax Candles', link: '/soy-candles' },
            { title: 'Bamboo Toothbrushes', link: '/bamboo-brushes' }
        ]
    },
    {
        title: 'electronics',
        banners: [
            "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
        ],
        subcategories: [
            { title: 'Solar Power Banks', link: '/solar-chargers' },
            { title: 'Bamboo Keyboards', link: '/bamboo-keyboards' },
            { title: 'Compostable Phone Cases', link: '/compostable-cases' },
            { title: 'Reclaimed Wood Solar Watches', link: '/wood-watches' }
        ]
    }
];

const loginFeatures = [
    {
        title: 'Track Carbon-Neutral Deliveries',
        description: 'Real-time carbon offset tracking and order updates for each parcel.',
        iconType: 'search',
    },
    {
        title: 'Tailored Eco Recommendations',
        description: 'Discover zero-waste swaps specifically aligned with your lifestyle.',
        iconType: 'star',
    },
    {
        title: 'Save Sustainable Favourites',
        description: 'Bookmark organic essentials to your mindful wishlist for low-waste shopping.',
        iconType: 'heart',
    },
    {
        title: 'Encrypted & Ethical Checkout',
        description: 'Secure, green-powered payment processing with instant eco-point rewards.',
        iconType: 'lock',
    },
];

const serviceFeatures = [
    {
        title: '100% Carbon-Neutral Shipping',
        description: "We measure the logistics footprint of every order and invest directly in verified native woodland restoration and ocean cleanups to offset all delivery emissions completely.",
        imgLink: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Carbon Neutral Delivery',
    },
    {
        title: 'Free Shipping Over $45',
        description: "Enjoy mindful shopping with free plastic-free delivery on orders above $45. We bundle items responsibly to minimize transport packaging and fuel emissions.",
        imgLink: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Free Shipping',
    },
    {
        title: 'Guaranteed Plastic-Free Mailers',
        description: "Every shipment arrives in 100% post-consumer recycled cardboard and compostable plant-based mailers with water-activated paper tape.",
        imgLink: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Plastic Free Packaging',
    },
    {
        title: 'Circular Return & Repair Service',
        description: "Return gently worn or damaged items under our circular program to be repaired, rehomed, or recycled into new fibers in exchange for store credit.",
        imgLink: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Circular Return',
    },
    {
        title: 'Dedicated Eco Advisory Support',
        description: "Our knowledgeable sustainability advisors are here daily to help you understand product materials, certifications, and zero-waste disposal guidelines.",
        imgLink: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
        imgAlt: 'Eco Support',
    }
];

const allCategories = [
    { name: "Eco Apparel", link: '/categories/fashion' },
    { name: "Sustainable Footwear", link: '/categories/footwear' },
    { name: "Botanical Care", link: '/categories/cosmetics' },
    { name: "Clean Tech & Solar", link: '/categories/electronics' },
    { name: "Ethical Jewelry", link: '/categories/jewellery' },
    { name: "Natural Aromas", link: '/categories/perfume' },
    { name: "Men's Eco Basics", link: '/categories/MEN' },
    { name: "Women's Eco Wear", link: '/categories/WOMEN' }
];

// Rich Fallback Eco-Products (Displayed when database is empty or offline)
const fallbackEcoProducts = [
    {
        productid: 101,
        title: "GOTS Organic Cotton Everyday Tee",
        category: "Organic Cotton Basics",
        maincategory: "fashion",
        price: "38.00",
        discount: "29.00",
        stars: 5,
        isnew: true,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 1, name: "Sage Green", colorname: "Sage Green", colorclass: "bg-emerald-700" },
            { colorid: 2, name: "Natural Oat", colorname: "Natural Oat", colorclass: "bg-amber-100" }
        ],
        sizes: [
            { sizeid: 1, name: "S", sizename: "S", instock: true },
            { sizeid: 2, name: "M", sizename: "M", instock: true },
            { sizeid: 3, name: "L", sizename: "L", instock: true }
        ],
        reviewCount: 42,
        images: {
            imageid: 101,
            imglink: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
            imgalt: "Organic Cotton T-Shirt"
        },
        ecoScore: 96,
        ecoRating: "Excellent",
        ecoSummary: "100% GOTS certified organic cotton, dyed with closed-loop water treatment.",
        ecoFactors: ["Zero pesticides", "Non-toxic botanical dyes", "100% biodegradable fiber"],
        sustainabilityTags: ["Organic", "Fair-Trade", "Compostable"]
    },
    {
        productid: 102,
        title: "Natural Cork Sole Everyday Walkers",
        category: "Cork Sole Walkers",
        maincategory: "footwear",
        price: "98.00",
        discount: "79.00",
        stars: 5,
        isnew: true,
        issale: false,
        isdiscount: true,
        colors: [
            { colorid: 3, name: "Raw Cork", colorname: "Raw Cork", colorclass: "bg-amber-600" },
            { colorid: 4, name: "Forest Olive", colorname: "Forest Olive", colorclass: "bg-stone-800" }
        ],
        sizes: [
            { sizeid: 4, name: "38", sizename: "38", instock: true },
            { sizeid: 5, name: "40", sizename: "40", instock: true },
            { sizeid: 6, name: "42", sizename: "42", instock: true }
        ],
        reviewCount: 29,
        images: {
            imageid: 102,
            imglink: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80",
            imgalt: "Natural Cork Sole Shoes"
        },
        ecoScore: 94,
        ecoRating: "Excellent",
        ecoSummary: "Harvested from regeneratively stripped Portuguese oak bark with natural latex footbed.",
        ecoFactors: ["Trees unharmed during harvest", "Natural rubber outsole", "Plastic-free construction"],
        sustainabilityTags: ["Cork", "Low-Carbon", "Renewable"]
    },
    {
        productid: 103,
        title: "Solar-Powered Sandalwood Minimalist Watch",
        category: "Reclaimed Wood Solar Watches",
        maincategory: "electronics",
        price: "140.00",
        discount: "115.00",
        stars: 5,
        isnew: false,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 5, name: "Natural Sandalwood", colorname: "Natural Sandalwood", colorclass: "bg-amber-800" }
        ],
        sizes: [
            { sizeid: 7, name: "40mm", sizename: "40mm", instock: true }
        ],
        reviewCount: 38,
        images: {
            imageid: 103,
            imglink: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
            imgalt: "Solar Powered Wood Watch"
        },
        ecoScore: 91,
        ecoRating: "Excellent",
        ecoSummary: "Powered by natural sunlight with no disposable batteries. Reclaimed furniture offcut body.",
        ecoFactors: ["Zero battery waste", "FSC reclaimed timber", "Organic cork strap"],
        sustainabilityTags: ["Solar-Powered", "Reclaimed Wood", "Zero-Battery"]
    },
    {
        productid: 104,
        title: "Zero-Waste Organic Beeswax Food Wraps (Pack of 4)",
        category: "Reusable Beeswax Wraps",
        maincategory: "fashion",
        price: "24.00",
        discount: "18.00",
        stars: 5,
        isnew: true,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 6, name: "Botanical Print", colorname: "Botanical Print", colorclass: "bg-yellow-200" }
        ],
        sizes: [
            { sizeid: 8, name: "Multi-Pack", sizename: "Multi-Pack", instock: true }
        ],
        reviewCount: 56,
        images: {
            imageid: 104,
            imglink: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
            imgalt: "Organic Beeswax Food Wraps"
        },
        ecoScore: 98,
        ecoRating: "Excellent",
        ecoSummary: "Eliminates single-use plastic wrap completely. Washable and naturally antibacterial.",
        ecoFactors: ["Replaces 200 plastic rolls", "Ethical beeswax & tree resin", "100% backyard compostable"],
        sustainabilityTags: ["Zero-Waste", "Plastic-Free", "Compostable"]
    },
    {
        productid: 105,
        title: "Cold-Pressed Solid Shampoo & Conditioner Bar",
        category: "Zero-Waste Shampoo Bars",
        maincategory: "cosmetics",
        price: "18.00",
        discount: "14.00",
        stars: 5,
        isnew: false,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 7, name: "Rosemary Mint", colorname: "Rosemary Mint", colorclass: "bg-emerald-300" }
        ],
        sizes: [
            { sizeid: 9, name: "100g Bar", sizename: "100g Bar", instock: true }
        ],
        reviewCount: 67,
        images: {
            imageid: 105,
            imglink: "https://images.unsplash.com/photo-1608248597359-07b973f55403?auto=format&fit=crop&w=600&q=80",
            imgalt: "Solid Shampoo Bar"
        },
        ecoScore: 97,
        ecoRating: "Excellent",
        ecoSummary: "Saves 3 plastic shampoo bottles per bar. Enriched with wild argan and jojoba oils.",
        ecoFactors: ["Sulfate & palm-oil free", "Waterless concentrated formula", "Paper box packaging"],
        sustainabilityTags: ["Waterless", "Palm-Oil Free", "Plastic-Free"]
    },
    {
        productid: 106,
        title: "Solar 20,000mAh Clean Energy Power Bank",
        category: "Solar Power Banks",
        maincategory: "electronics",
        price: "65.00",
        discount: "49.00",
        stars: 5,
        isnew: true,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 8, name: "Forest Moss", colorname: "Forest Moss", colorclass: "bg-emerald-900" }
        ],
        sizes: [
            { sizeid: 10, name: "Standard", sizename: "Standard", instock: true }
        ],
        reviewCount: 34,
        images: {
            imageid: 106,
            imglink: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80",
            imgalt: "Solar Power Bank"
        },
        ecoScore: 89,
        ecoRating: "Excellent",
        ecoSummary: "Dual monocrystalline solar panels with casing molded from post-consumer recycled plastic.",
        ecoFactors: ["Clean off-grid charging", "85% recycled casing", "High longevity LiFePO4 cells"],
        sustainabilityTags: ["Solar-Power", "Recycled-Body", "Long-Life"]
    },
    {
        productid: 107,
        title: "Recycled Ocean Plastic Canvas Sneakers",
        category: "Recycled Ocean Canvas",
        maincategory: "footwear",
        price: "85.00",
        discount: "68.00",
        stars: 4,
        isnew: false,
        issale: false,
        isdiscount: true,
        colors: [
            { colorid: 9, name: "Ocean White", colorname: "Ocean White", colorclass: "bg-slate-100" }
        ],
        sizes: [
            { sizeid: 11, name: "40", sizename: "40", instock: true },
            { sizeid: 12, name: "42", sizename: "42", instock: true }
        ],
        reviewCount: 22,
        images: {
            imageid: 107,
            imglink: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
            imgalt: "Recycled Ocean Sneakers"
        },
        ecoScore: 92,
        ecoRating: "Excellent",
        ecoSummary: "Upper woven from 12 intercepted ocean-bound plastic bottles. Wild natural rubber sole.",
        ecoFactors: ["Intercepts ocean waste", "Algae foam insole", "Non-toxic water-based adhesive"],
        sustainabilityTags: ["Ocean-Plastic", "Algae-Foam", "Circularity"]
    },
    {
        productid: 108,
        title: "Handmade Reclaimed Silver Leaf Pendant",
        category: "Recycled Silver Pendants",
        maincategory: "jewellery",
        price: "72.00",
        discount: "58.00",
        stars: 5,
        isnew: true,
        issale: false,
        isdiscount: true,
        colors: [
            { colorid: 10, name: "Polished Silver", colorname: "Polished Silver", colorclass: "bg-gray-300" }
        ],
        sizes: [
            { sizeid: 13, name: "One Size", sizename: "One Size", instock: true }
        ],
        reviewCount: 19,
        images: {
            imageid: 108,
            imglink: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80",
            imgalt: "Recycled Silver Pendant"
        },
        ecoScore: 93,
        ecoRating: "Excellent",
        ecoSummary: "Cast from 100% recycled eco-silver diverted from end-of-life electronics. Fairmined certified.",
        ecoFactors: ["Zero destructive mining", "Conflict-free origin", "Recycled gift packaging"],
        sustainabilityTags: ["Eco-Silver", "Conflict-Free", "Fair-Trade"]
    },
    {
        productid: 109,
        title: "Pure Hemp & Linen Relaxed Trousers",
        category: "Hemp & Linen Casuals",
        maincategory: "fashion",
        price: "82.00",
        discount: "64.00",
        stars: 5,
        isnew: false,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 11, name: "Earthy Clay", colorname: "Earthy Clay", colorclass: "bg-stone-500" }
        ],
        sizes: [
            { sizeid: 14, name: "M", sizename: "M", instock: true },
            { sizeid: 15, name: "L", sizename: "L", instock: true }
        ],
        reviewCount: 31,
        images: {
            imageid: 109,
            imglink: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
            imgalt: "Hemp Linen Trousers"
        },
        ecoScore: 95,
        ecoRating: "Excellent",
        ecoSummary: "Naturally breathable hemp requires 75% less water than conventional cotton and zero synthetic fertilizers.",
        ecoFactors: ["Soil regenerative crop", "Carbon negative crop yield", "Coconut shell buttons"],
        sustainabilityTags: ["Hemp", "Low-Water", "Natural-Buttons"]
    },
    {
        productid: 110,
        title: "Non-Nano Reef-Safe Zinc Sunscreen SPF 50",
        category: "Mineral Reef Sunscreen",
        maincategory: "cosmetics",
        price: "26.00",
        discount: "21.00",
        stars: 5,
        isnew: true,
        issale: false,
        isdiscount: true,
        colors: [
            { colorid: 12, name: "Clear Mineral", colorname: "Clear Mineral", colorclass: "bg-white" }
        ],
        sizes: [
            { sizeid: 16, name: "150ml Aluminum Tin", sizename: "150ml Aluminum Tin", instock: true }
        ],
        reviewCount: 48,
        images: {
            imageid: 110,
            imglink: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
            imgalt: "Reef Safe Mineral Sunscreen"
        },
        ecoScore: 98,
        ecoRating: "Excellent",
        ecoSummary: "100% non-nano zinc oxide formula safe for coral reefs and ocean wildlife. Plastic-free aluminum tin.",
        ecoFactors: ["Safe for marine ecosystems", "Infinitely recyclable tin", "Organic aloe & jojoba base"],
        sustainabilityTags: ["Reef-Safe", "Non-Nano", "Zero-Plastic"]
    },
    {
        productid: 111,
        title: "Artisan Bamboo Mechanical Keyboard",
        category: "Bamboo Keyboards",
        maincategory: "electronics",
        price: "110.00",
        discount: "89.00",
        stars: 5,
        isnew: false,
        issale: true,
        isdiscount: true,
        colors: [
            { colorid: 13, name: "Caramel Bamboo", colorname: "Caramel Bamboo", colorclass: "bg-amber-700" }
        ],
        sizes: [
            { sizeid: 17, name: "Compact 75%", sizename: "Compact 75%", instock: true }
        ],
        reviewCount: 39,
        images: {
            imageid: 111,
            imglink: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
            imgalt: "Bamboo Mechanical Keyboard"
        },
        ecoScore: 90,
        ecoRating: "Excellent",
        ecoSummary: "Solid CNC milled FSC bamboo housing replaces plastic casing. Hot-swappable switches for easy repair.",
        ecoFactors: ["Rapidly renewable bamboo", "Modular repairable design", "Braided recycled cable"],
        sustainabilityTags: ["Bamboo", "Repairable", "Plastic-Reduced"]
    },
    {
        productid: 112,
        title: "Heavyweight Organic Canvas Everyday Tote",
        category: "Organic Canvas Totes",
        maincategory: "fashion",
        price: "28.00",
        discount: "22.00",
        stars: 5,
        isnew: true,
        issale: false,
        isdiscount: true,
        colors: [
            { colorid: 14, name: "Raw Cotton", colorname: "Raw Cotton", colorclass: "bg-stone-200" }
        ],
        sizes: [
            { sizeid: 18, name: "20L", sizename: "20L", instock: true }
        ],
        reviewCount: 52,
        images: {
            imageid: 112,
            imglink: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=600&q=80",
            imgalt: "Organic Canvas Tote"
        },
        ecoScore: 97,
        ecoRating: "Excellent",
        ecoSummary: "Reinforced 16oz unbleached organic canvas designed to last 10+ years of daily grocery shopping.",
        ecoFactors: ["Zero chlorine bleaching", "Replaces 1,000 plastic bags", "Reinforced box stitching"],
        sustainabilityTags: ["Zero-Waste", "Unbleached", "Ultra-Durable"]
    }
];

const fallbackEcoBanners = [
    {
        bannerid: 1,
        toptitle: "Regenerative Living",
        middletitle: "Zero-Waste Home & Kitchen",
        bottomtitle: "Mindful essentials starting at",
        imglink: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80",
        startprice: 14,
        buttontitle: "Shop Zero-Waste",
        redirect_link: "/categories/fashion",
        createdat: new Date(),
        updatedat: new Date()
    },
    {
        bannerid: 2,
        toptitle: "Earth-Friendly Fiber",
        middletitle: "Certified Organic Cotton & Hemp",
        bottomtitle: "Low-water apparel starting at",
        imglink: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=80",
        startprice: 28,
        buttontitle: "Explore Apparel",
        redirect_link: "/categories/fashion",
        createdat: new Date(),
        updatedat: new Date()
    },
    {
        bannerid: 3,
        toptitle: "Clean Energy Tech",
        middletitle: "Solar Chargers & Bamboo Accessories",
        bottomtitle: "Off-grid green gadgets starting at",
        imglink: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1400&q=80",
        startprice: 22,
        buttontitle: "Discover Clean Tech",
        redirect_link: "/categories/electronics",
        createdat: new Date(),
        updatedat: new Date()
    }
];

const fallbackEcoDeals = [
    {
        productid: 104,
        title: "Zero-Waste Kitchen Starter Bundle (Wraps, Bamboo Utensils & Steel Straws)",
        stars: 5,
        description: "Everything needed to eliminate single-use kitchen plastics. Includes 4 organic beeswax wraps, 5-piece bamboo cutlery, and 2 stainless steel tumblers.",
        price: 32,
        discount: 48,
        sold: 142,
        available: 35,
        rating: 4.9,
        imglink: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        imgalt: "Zero Waste Kitchen Bundle",
        end_time: new Date(Date.now() + 86400000 * 3).toISOString()
    }
];

const fallbackEcoArticles = [
    {
        article_id: 1,
        category: "Zero-Waste Guide",
        title: "10 Easy Swaps to Cut Household Plastic by 80% This Month",
        imglink: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
        imgalt: "Zero Waste Kitchen",
        author: "Dr. Maya Lindqvist",
        published_date: "2026-03-15T09:00:00Z",
        content: "Discover how simple shifts—from solid shampoo bars and beeswax wraps to reusable produce sacks—create an immediate and measurable drop in landfill waste without disrupting daily routines."
    },
    {
        article_id: 2,
        category: "Sustainable Fashion",
        title: "Why Hemp and Organic Cotton are Transforming the Apparel Industry",
        imglink: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80",
        imgalt: "Organic Cotton",
        author: "Julian Chen",
        published_date: "2026-03-20T14:30:00Z",
        content: "Hemp produces up to three times more usable fiber per acre than cotton while enriching topsoil and requiring virtually no chemical pesticides. Here is how modern regenerative farming makes it luxurious."
    },
    {
        article_id: 3,
        category: "Clean Tech",
        title: "How Portable Solar & Monocrystalline Cells Minimize Your Tech Footprint",
        imglink: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80",
        imgalt: "Solar Gadgets",
        author: "Amina Al-Mansoor",
        published_date: "2026-03-28T11:00:00Z",
        content: "Harvesting sunlight on your balcony or commute to charge everyday mobile devices helps curb phantom grid draw while teaching circular energy literacy."
    }
];

export {
    topCat,
    allCategories,
    serviceFeatures,
    loginFeatures,
    navBtns,
    aboutUS,
    availableCategories,
    paymentSecure,
    leftStatus,
    categoryDropDown,
    footerCategories,
    footerSections,
    featuresSec,
    currentEvent,
    testimonial,
    fallbackEcoProducts,
    fallbackEcoBanners,
    fallbackEcoDeals,
    fallbackEcoArticles
};