import { useLanguage } from "../../i18n/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
              {t.about.label}
            </p>
            <h2 className="max-w-lg text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {t.about.headingA}
              <span className="text-[#A8B0D0]"> {t.about.headingB}</span>
            </h2>
            <p className="mt-6 max-w-lg leading-7 text-[#A8B0D0]">
              {t.about.paragraph}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:mt-4">
            {t.about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#A8B0D0]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;