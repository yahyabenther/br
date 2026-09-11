import { Car, ShoppingBag, BarChart3 } from "lucide-react";
import carMarketplaceImg from "../assets/projects/car-marketplace.png";
import ecommerceImg from "../assets/projects/ecommerce-platform.png";
import businessManagementImg from "../assets/projects/business-management.jpg";

export const projects = [
  {
    slug: "car-marketplace",
    number: "01",
    title: { en: "Car Marketplace", ar: "سوق بيع السيارات" },
    description: {
      en: "A complete marketplace platform for buying and selling vehicles, with search, filters, authentication, favorites and real-time messaging.",
      ar: "منصة سوق متكاملة لبيع وشراء السيارات، تتضمن البحث والفلاتر وتسجيل الدخول والمفضلة والمراسلة الفورية.",
    },
    category: { en: "Web Application", ar: "تطبيق ويب" },
    technologies: ["React", "Node.js", "MySQL", "Socket.io"],
    gradient: "from-[#1824A8] via-[#243BFF] to-[#635BFF]",
    icon: Car,
    images: [carMarketplaceImg],
    liveUrl: "https://example.com",
    stat: {
      label: { en: "Active listings", ar: "إعلانات نشطة" },
      value: "1,204",
    },
    brief: {
      en: "The client had a static listings page with no way to filter inventory, no accounts, and no way for buyers and sellers to talk to each other directly.",
      ar: "كان لدى العميل صفحة إعلانات ثابتة بدون إمكانية فلترة المخزون، وبدون حسابات مستخدمين، وبدون وسيلة تواصل مباشرة بين البائع والمشتري.",
    },
    approach: {
      en: "We rebuilt the platform around a proper search index with faceted filters, added authentication and saved favorites, and layered in real-time messaging so buyers could message sellers without leaving the site.",
      ar: "أعدنا بناء المنصة حول فهرس بحث حقيقي مع فلاتر متعددة، وأضفنا تسجيل الدخول وقائمة المفضلة، ودمجنا نظام مراسلة فورية يتيح للمشترين التواصل مع البائعين دون مغادرة الموقع.",
    },
    results: [
      { label: { en: "Active listings", ar: "إعلانات نشطة" }, value: "1,204" },
      { label: { en: "Avg. time to list", ar: "متوسط وقت النشر" }, value: "3 min" },
      { label: { en: "Messages sent / mo", ar: "رسائل شهريًا" }, value: "6,800" },
    ],
    testimonial: null as { quote: string; author: string; role: string } | null,
  },
  {
    slug: "ecommerce-platform",
    number: "02",
    title: { en: "E-commerce Platform", ar: "منصة تجارة إلكترونية" },
    description: {
      en: "A modern online store designed to help businesses manage products, customers and orders from one powerful platform.",
      ar: "متجر إلكتروني حديث مصمم لمساعدة الشركات على إدارة المنتجات والعملاء والطلبات من منصة واحدة قوية.",
    },
    category: { en: "E-commerce", ar: "تجارة إلكترونية" },
    technologies: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-[#102A43] via-[#164E63] to-[#0F766E]",
    icon: ShoppingBag,
    images: [ecommerceImg],
    liveUrl: "https://example.com",
    stat: {
      label: { en: "Orders processed", ar: "طلبات تمت معالجتها" },
      value: "8,940",
    },
    brief: {
      en: "Orders, inventory and customer data were split across spreadsheets and a third-party checkout tool that didn't talk to either.",
      ar: "كانت الطلبات والمخزون وبيانات العملاء موزعة بين جداول بيانات وأداة دفع خارجية لا تتواصل مع أي منها.",
    },
    approach: {
      en: "We built a single platform covering catalog management, checkout and order fulfillment, so the business runs one system instead of stitching three together by hand.",
      ar: "بنينا منصة واحدة تغطي إدارة المنتجات والدفع وتنفيذ الطلبات، بحيث يعمل العمل بنظام واحد بدل ربط ثلاثة أنظمة يدويًا.",
    },
    results: [
      { label: { en: "Orders processed", ar: "طلبات تمت معالجتها" }, value: "8,940" },
      { label: { en: "Checkout time", ar: "وقت الدفع" }, value: "-40%" },
      { label: { en: "Manual entry hrs / wk", ar: "ساعات إدخال يدوي / أسبوعيًا" }, value: "-12" },
    ],
    testimonial: null,
  },
  {
    slug: "business-management",
    number: "03",
    title: { en: "Business Management", ar: "إدارة الأعمال" },
    description: {
      en: "Custom management software that helps businesses organize their daily operations, data and workflows.",
      ar: "برنامج إدارة مخصص يساعد الشركات على تنظيم عملياتها اليومية وبياناتها وسير العمل.",
    },
    category: { en: "Custom Software", ar: "برمجيات مخصصة" },
    technologies: [".NET", "Angular", "PostgreSQL"],
    gradient: "from-[#30115E] via-[#5B21B6] to-[#7C3AED]",
    icon: BarChart3,
    images: [businessManagementImg],
    liveUrl: "https://example.com",
    stat: {
      label: { en: "Hours saved / mo", ar: "ساعات موفّرة شهريًا" },
      value: "120+",
    },
    brief: {
      en: "Day-to-day operations were tracked across email threads and disconnected tools, making it hard to see what was actually happening across the business.",
      ar: "كانت العمليات اليومية تُتابع عبر رسائل بريد إلكتروني وأدوات منفصلة، مما صعّب معرفة ما يحدث فعليًا داخل الشركة.",
    },
    approach: {
      en: "We designed a single internal dashboard around the team's existing workflow rather than forcing a generic off-the-shelf tool on them, so adoption didn't require retraining anyone.",
      ar: "صممنا لوحة تحكم داخلية واحدة تتماشى مع سير عمل الفريق الحالي بدل فرض أداة جاهزة عامة، مما جعل التبني سهلًا دون الحاجة لإعادة تدريب أحد.",
    },
    results: [
      { label: { en: "Hours saved / mo", ar: "ساعات موفّرة شهريًا" }, value: "120+" },
      { label: { en: "Teams onboarded", ar: "فرق تم تفعيلها" }, value: "6" },
      { label: { en: "Data entry errors", ar: "أخطاء إدخال البيانات" }, value: "-65%" },
    ],
    testimonial: null,
  },
];

export type Project = (typeof projects)[number];