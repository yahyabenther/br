import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import { pricingServices } from "../data/pricing";
import { useLanguage } from "../i18n/LanguageContext";

function PricingPage() {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const service = pricingServices.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative pb-20 pt-40 lg:pt-48">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
            <ArrowLeft size={16} className="rtl:rotate-180" />
            {t.pricingPage.backToServices}
          </Link>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
            {t.pricingPage.pricingLabel}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {service.title[language]}
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-[#A8B0D0]">
            {service.intro[language]}
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {service.tiers.map((tier) => (
              <div
                key={tier.name.en}
                className={`relative flex flex-col rounded-[2rem] border p-8 ${
                  tier.featured ? "border-[#35D6B0]/40 bg-[#35D6B0]/[0.06] lg:-mt-4 lg:mb-4" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#35D6B0] px-4 py-1 text-xs font-semibold text-[#080B2A]">
                    {t.pricingPage.recommended}
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white/80">{tier.name[language]}</h3>
                <p className="mt-4 font-display text-4xl font-semibold tracking-tight">{tier.price}</p>
                <p className="mt-1 text-xs text-white/40">{tier.note[language]}</p>
                <p className="mt-4 text-sm leading-6 text-[#A8B0D0]">{tier.description[language]}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.en} className="flex items-start gap-2 text-sm text-[#A8B0D0]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#35D6B0]" />
                      {feature[language]}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`group mt-8 flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition ${
                    tier.featured
                      ? "border-transparent bg-[#35D6B0] text-[#080B2A] hover:bg-[#4DE4C0]"
                      : "border-white/20 text-white hover:border-white hover:bg-white hover:text-[#080B2A]"
                  }`}
                >
                  {t.pricingPage.getPlan}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default PricingPage;