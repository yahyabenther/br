import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Basic Store",
    price: "1,200",
    note: "TND · paid in 3 installments",
    description: "For businesses that need a store fully ready to sell.",
    featured: false,
    features: [
      "Custom-branded interface",
      "Your own domain name",
      "Free hosting & storage",
      "Professional SEO",
      "Free store setup & training",
      "Tips to grow your online sales",
      "30-day warranty & support",
    ],
    adminPanel: [
      "Products",
      "Dashboard",
      "Cargo / Shipping",
      "Banners",
      "Delivery",
      "Clients",
    ],
  },
  {
    name: "Advanced Store",
    price: "1,800",
    note: "TND · paid in 3 installments",
    description: "For bigger stores that need extra firepower.",
    featured: true,
    features: [
      "Everything in the Basic plan",
      "Custom staff roles & permissions",
      "Designer time for major campaigns",
      "Google Analytics integration",
      "Free Meta Pixel integration",
      "Advanced reporting",
      "Extra modules as you grow",
    ],
    adminPanel: null,
  },
  {
    name: "Custom Site",
    price: "2,500+",
    note: "TND · paid in 3 installments",
    description:
      "Based on what you need: portfolio, store, landing pages, or a fully custom platform.",
    featured: false,
    features: [
      "Fully custom-built site",
      "Features tailored to your business",
      "Custom UX/engineering design",
      "Integrates with your existing tools",
      "Scope defined upfront, no surprises",
      "Priced around your requirements",
    ],
    adminPanel: null,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
            Pricing
          </p>
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Pick the plan
            <span className="text-[#A8B0D0]"> that fits your business.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[2rem] border p-8 ${
                plan.featured
                  ? "border-[#35D6B0]/40 bg-[#35D6B0]/[0.06] lg:-mt-4 lg:mb-4"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#35D6B0] px-4 py-1 text-xs font-semibold text-[#080B2A]">
                  Recommended
                </span>
              )}

              <h3 className="text-lg font-semibold text-white/80">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight">
                  {plan.price}
                </span>
              </div>
              <p className="mt-1 text-xs text-white/40">{plan.note}</p>

              <p className="mt-4 text-sm leading-6 text-[#A8B0D0]">
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#A8B0D0]"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#35D6B0]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.adminPanel && (
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    Admin panel includes
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                    {plan.adminPanel.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-[#A8B0D0]"
                      >
                        <Check
                          size={14}
                          className="shrink-0 text-[#35D6B0]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href="#contact"
                className={`group mt-8 flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition ${
                  plan.featured
                    ? "border-transparent bg-[#35D6B0] text-[#080B2A] hover:bg-[#4DE4C0]"
                    : "border-white/20 text-white hover:border-white hover:bg-white hover:text-[#080B2A]"
                }`}
              >
                Get this plan
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;