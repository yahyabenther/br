export type Tier = {
  name: { en: string; ar: string };
  price: string;
  note: { en: string; ar: string };
  description: { en: string; ar: string };
  featured: boolean;
  features: { en: string; ar: string }[];
};

export type PricingService = {
  slug: string;
  title: { en: string; ar: string };
  intro: { en: string; ar: string };
  tiers: Tier[];
};

export const pricingServices: PricingService[] = [
  {
    slug: "web-development",
    title: { en: "Web Development", ar: "تطوير الويب" },
    intro: {
      en: "From a single-page site to a full custom platform — pick the tier that matches what you're building.",
      ar: "من موقع بصفحة واحدة إلى منصة مخصصة متكاملة — اختر الباقة التي تناسب مشروعك.",
    },
    tiers: [
      {
        name: { en: "Basic Site", ar: "موقع أساسي" },
        price: "1,200 TND",
        note: { en: "Paid in 3 installments", ar: "الدفع على 3 دفعات" },
        description: {
          en: "A complete site ready to launch, no extras.",
          ar: "موقع متكامل جاهز للإطلاق، بدون إضافات.",
        },
        featured: false,
        features: [
          { en: "Custom-branded interface", ar: "واجهة مخصصة لعلامتك" },
          { en: "Your own domain name", ar: "اسم نطاق خاص بك" },
          { en: "Free hosting & storage", ar: "استضافة وتخزين مجانيان" },
          { en: "Professional SEO", ar: "تحسين احترافي لمحركات البحث" },
          { en: "Free setup & training", ar: "تركيب وتدريب مجانيان" },
          { en: "30-day warranty & support", ar: "ضمان ودعم لمدة 30 يومًا" },
        ],
      },
      {
        name: { en: "Advanced Site", ar: "موقع متقدم" },
        price: "1,800 TND",
        note: { en: "Paid in 3 installments", ar: "الدفع على 3 دفعات" },
        description: {
          en: "For sites that need real content or store features.",
          ar: "للمواقع التي تحتاج محتوى حقيقيًا أو ميزات متجر.",
        },
        featured: true,
        features: [
          { en: "Everything in Basic", ar: "كل ما في الباقة الأساسية" },
          { en: "Product/content management panel", ar: "لوحة إدارة المنتجات/المحتوى" },
          { en: "Google Analytics integration", ar: "ربط مع Google Analytics" },
          { en: "Meta Pixel integration", ar: "ربط مع Meta Pixel" },
          { en: "Advanced reporting", ar: "تقارير متقدمة" },
          { en: "Priority support", ar: "دعم ذو أولوية" },
        ],
      },
      {
        name: { en: "Custom Platform", ar: "منصة مخصصة" },
        price: "From 2,500 TND",
        note: { en: "Scoped to your requirements", ar: "حسب احتياجاتك" },
        description: {
          en: "Fully custom-built, priced around what you need.",
          ar: "مبني بالكامل حسب الطلب، وبسعر يتناسب مع احتياجاتك.",
        },
        featured: false,
        features: [
          { en: "Custom UX/engineering design", ar: "تصميم تجربة مستخدم وهندسة مخصصة" },
          { en: "Features tailored to your business", ar: "ميزات مصممة خصيصًا لعملك" },
          { en: "Integrates with your existing tools", ar: "يتكامل مع أدواتك الحالية" },
          { en: "Scope defined upfront, no surprises", ar: "نطاق محدد مسبقًا، بدون مفاجآت" },
        ],
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: { en: "Mobile Apps", ar: "تطبيقات الجوال" },
    intro: {
      en: "iOS and Android apps, from a simple utility app to a full custom product.",
      ar: "تطبيقات iOS و Android، من تطبيق بسيط إلى منتج مخصص متكامل.",
    },
    tiers: [
      {
        name: { en: "Starter App", ar: "تطبيق أساسي" },
        price: "3,000 TND",
        note: { en: "Paid in 3 installments", ar: "الدفع على 3 دفعات" },
        description: {
          en: "A focused app with core functionality, launch-ready.",
          ar: "تطبيق مركّز بوظائف أساسية، جاهز للإطلاق.",
        },
        featured: false,
        features: [
          { en: "iOS & Android builds", ar: "نسخ لـ iOS و Android" },
          { en: "Custom UI matching your brand", ar: "واجهة مخصصة تناسب علامتك" },
          { en: "App Store & Play Store submission", ar: "رفع التطبيق على المتجرين" },
          { en: "30-day warranty & support", ar: "ضمان ودعم لمدة 30 يومًا" },
        ],
      },
      {
        name: { en: "Advanced App", ar: "تطبيق متقدم" },
        price: "5,500 TND",
        note: { en: "Paid in 3 installments", ar: "الدفع على 3 دفعات" },
        description: {
          en: "For apps with accounts, data, or backend logic.",
          ar: "للتطبيقات التي تحتاج حسابات مستخدمين أو بيانات أو منطق خادم.",
        },
        featured: true,
        features: [
          { en: "Everything in Starter", ar: "كل ما في الباقة الأساسية" },
          { en: "User accounts & authentication", ar: "حسابات مستخدمين وتسجيل دخول" },
          { en: "Push notifications", ar: "إشعارات فورية" },
          { en: "Admin dashboard", ar: "لوحة تحكم إدارية" },
          { en: "Analytics integration", ar: "ربط أدوات التحليل" },
        ],
      },
      {
        name: { en: "Custom App", ar: "تطبيق مخصص" },
        price: "From 9,000 TND",
        note: { en: "Scoped to your requirements", ar: "حسب احتياجاتك" },
        description: {
          en: "Complex apps — marketplaces, real-time features, etc.",
          ar: "تطبيقات معقدة — أسواق إلكترونية، ميزات فورية، وغيرها.",
        },
        featured: false,
        features: [
          { en: "Custom architecture for your use case", ar: "بنية مخصصة لحالتك" },
          { en: "Third-party integrations (payments, maps, etc.)", ar: "ربط مع خدمات خارجية (دفع، خرائط، وغيرها)" },
          { en: "Scalable backend", ar: "خادم قابل للتوسع" },
          { en: "Ongoing support plan available", ar: "خطة دعم مستمرة متوفرة" },
        ],
      },
    ],
  },
  {
    slug: "desktop-software",
    title: { en: "Desktop Software", ar: "برمجيات سطح المكتب" },
    intro: {
      en: "Internal tools and desktop applications built around your team's actual workflow.",
      ar: "أدوات داخلية وتطبيقات مكتبية مبنية حول سير عمل فريقك الفعلي.",
    },
    tiers: [
      {
        name: { en: "Starter Tool", ar: "أداة أساسية" },
        price: "2,500 TND",
        note: { en: "Paid in 3 installments", ar: "الدفع على 3 دفعات" },
        description: {
          en: "A single-purpose tool solving one clear problem.",
          ar: "أداة بغرض واحد تحل مشكلة محددة.",
        },
        featured: false,
        features: [
          { en: "Windows & macOS builds", ar: "نسخ لـ Windows و macOS" },
          { en: "Core workflow automation", ar: "أتمتة سير العمل الأساسي" },
          { en: "Basic reporting", ar: "تقارير أساسية" },
          { en: "30-day warranty & support", ar: "ضمان ودعم لمدة 30 يومًا" },
        ],
      },
      {
        name: { en: "Advanced Tool", ar: "أداة متقدمة" },
        price: "4,500 TND",
        note: { en: "Paid in 3 installments", ar: "الدفع على 3 دفعات" },
        description: {
          en: "Multi-user tools with roles and structured data.",
          ar: "أدوات متعددة المستخدمين بأدوار وبيانات منظمة.",
        },
        featured: true,
        features: [
          { en: "Everything in Starter", ar: "كل ما في الباقة الأساسية" },
          { en: "User roles & permissions", ar: "أدوار وصلاحيات المستخدمين" },
          { en: "Database-backed records", ar: "سجلات مرتبطة بقاعدة بيانات" },
          { en: "Custom reports & exports", ar: "تقارير وتصدير مخصص" },
        ],
      },
      {
        name: { en: "Custom Platform", ar: "منصة مخصصة" },
        price: "From 8,000 TND",
        note: { en: "Scoped to your requirements", ar: "حسب احتياجاتك" },
        description: {
          en: "Full internal systems built around your operations.",
          ar: "أنظمة داخلية متكاملة مبنية حول عمليات شركتك.",
        },
        featured: false,
        features: [
          { en: "Built around your existing process", ar: "مبنية حول أسلوب عملك الحالي" },
          { en: "Integrates with tools you already use", ar: "تتكامل مع الأدوات التي تستخدمها بالفعل" },
          { en: "Staff training included", ar: "تدريب الموظفين مشمول" },
          { en: "Ongoing support plan available", ar: "خطة دعم مستمرة متوفرة" },
        ],
      },
    ],
  },
];