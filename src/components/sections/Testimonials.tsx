import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { projects } from "../../data/projects";

const AVATAR_COLORS = [
  { bg: "#F5B98A", fg: "#3A2417" }, // tan
  { bg: "#7FD1AE", fg: "#0F3D2A" }, // green
  { bg: "#E8A0BF", fg: "#4A1D2E" }, // pink
  { bg: "#8FB8E8", fg: "#1B2E4A" }, // blue
  { bg: "#D9C77A", fg: "#3D3419" }, // gold
];

function Avatar({ seed }: { seed: string }) {
  const index =
    seed.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) %
    AVATAR_COLORS.length;
  const { bg, fg } = AVATAR_COLORS[index];

  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full"
      style={{ backgroundColor: bg }}
    >
      <svg viewBox="0 0 40 40" className="h-full w-full">
        <circle cx="20" cy="15.5" r="7" fill={fg} />
        <path
          d="M20 25c-8 0-13 4.5-13 10.5V41h26v-5.5C33 29.5 28 25 20 25Z"
          fill={fg}
        />
      </svg>
    </div>
  );
}

function Testimonials() {
  const { t, language } = useLanguage();

  return (
    <section className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
            {t.testimonials.label}
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {language === "ar" ? "ماذا يقول عملاؤنا" : "What clients say"}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item) => {
            const project = item.projectSlug
              ? projects.find((p) => p.slug === item.projectSlug)
              : null;

            return (
              <div
                key={item.author}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#35D6B0]/30 hover:bg-white/[0.05]"
              >
                {project && (
                  <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                    <img
                      src={project.images[0]}
                      alt={project.title[language]}
                      className="absolute inset-0 h-full w-full object-contain p-4"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-7">
                  <p className="leading-7 text-[#A8B0D0]">"{item.quote}"</p>

                  <div className="mt-8">
                    <div className="flex items-center gap-3">
                      <Avatar seed={item.author} />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.author}
                        </p>
                        <p className="text-xs text-[#A8B0D0]">{item.role}</p>
                      </div>
                    </div>

                    {project && (
                      <Link
                        to={`/work/${project.slug}`}
                        className="group mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#35D6B0] transition hover:text-[#4DE4C0]"
                      >
                        {project.title[language]}
                        <ArrowUpRight
                          size={13}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;