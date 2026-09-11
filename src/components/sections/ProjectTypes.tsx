import {
  UserCircle,
  ShoppingCart,
  Smartphone,
  UtensilsCrossed,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

const projectTypes = [
  {
    icon: UserCircle,
    title: { en: "Profils", ar: "الملفات الشخصية" },
    description: {
      en: "A personal or professional profile page — contact info, links, and portfolio in one place.",
      ar: "صفحة شخصية أو مهنية تجمع معلومات التواصل والروابط والأعمال في مكان واحد.",
    },
    tags: [
      { en: "Frontend", ar: "الواجهة الأمامية" },
      { en: "UI/UX", ar: "تصميم واجهات" },
    ],
  },
  {
    icon: ShoppingCart,
    title: { en: "E-commerce", ar: "تجارة إلكترونية" },
    description: {
      en: "Full storefronts with cart, checkout, and payment integration built in.",
      ar: "متاجر إلكترونية متكاملة مع سلة شراء ودفع إلكتروني مدمج.",
    },
    tags: [
      { en: "E-commerce", ar: "تجارة إلكترونية" },
      { en: "Backend", ar: "الواجهة الخلفية" },
    ],
  },
  {
    icon: Smartphone,
    title: { en: "Mobile App", ar: "تطبيق جوال" },
    description: {
      en: "Cross-platform apps that feel native, from onboarding to push notifications.",
      ar: "تطبيقات متعددة المنصات بتجربة أصلية، من التسجيل إلى الإشعارات الفورية.",
    },
    tags: [
      { en: "Mobile", ar: "جوال" },
      { en: "UI/UX", ar: "تصميم واجهات" },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: { en: "Restaurant · Café Menu", ar: "منيو مطعم · كافيه" },
    description: {
      en: "Dynamic QR menus with live pricing and instant updates — no reprinting needed.",
      ar: "منيو ديناميكي عبر QR مع تحديث فوري للأسعار — بدون إعادة طباعة.",
    },
    tags: [
      { en: "Backend", ar: "الواجهة الخلفية" },
      { en: "Frontend", ar: "الواجهة الأمامية" },
    ],
  },
  {
    icon: Briefcase,
    title: { en: "Business Management", ar: "إدارة الأعمال" },
    description: {
      en: "Internal dashboards and tools to manage operations, orders, and data in one place.",
      ar: "لوحات تحكم داخلية وأدوات لإدارة العمليات والطلبات والبيانات في مكان واحد.",
    },
    tags: [
      { en: "Backend", ar: "الواجهة الخلفية" },
      { en: "Desktop", ar: "سطح المكتب" },
    ],
  },
];

function ProjectTypes() {
  const { language } = useLanguage();

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {language === "ar" ? "ما الذي نبنيه؟" : "What are you building?"}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/50">
            {language === "ar"
              ? "لكل مشروع نقطة انطلاق مختلفة. اختر نقطتك."
              : "Every project has a different starting point. Pick yours."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.title.en}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[#35D6B0]/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#35D6B0]/10 text-[#35D6B0] transition group-hover:bg-[#35D6B0]/20">
                  <Icon size={20} />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {type.title[language]}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/50">
                  {type.description[language]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {type.tags.map((tag) => (
                    <span
                      key={tag.en}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/50"
                    >
                      {tag[language]}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectTypes;