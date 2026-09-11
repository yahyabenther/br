import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import logo from "../../assets/logo.png"; // TODO: point this at your actual logo file
import { useLanguage } from "../../i18n/LanguageContext";

const STEP_ICONS = [Search, PenTool, Code2, Rocket];

// top, right, bottom, left
const POSITIONS = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "top-1/2 right-0 -translate-y-1/2 translate-x-1/2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "top-1/2 left-0 -translate-y-1/2 -translate-x-1/2",
];

function Process() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % t.process.steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.process.steps.length]);

  return (
    <section id="process" className="relative overflow-hidden py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-32 text-center lg:mb-40">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
            {t.process.label}
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {t.process.headingA}
            <span className="text-[#A8B0D0]"> {t.process.headingB}</span>
          </h2>
        </div>

        {/* Radial layout — desktop */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
          {/* comet trail ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 265deg, rgba(53,214,176,0.08) 305deg, rgba(53,214,176,0.5) 335deg, #35D6B0 350deg, #C7FFF1 359deg, transparent 360deg)",
              WebkitMaskImage:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px), #000 100%)",
              maskImage:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px), #000 100%)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* faint base ring */}
          <div className="absolute inset-0 rounded-full border border-[#35D6B0]/10" />

          {/* quadrant marker dots */}
          <svg
            viewBox="0 0 100 100"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {[0, 90, 180, 270].map((angle) => {
              const rad = (angle * Math.PI) / 180;
              const x = 50 + 42 * Math.sin(rad);
              const y = 50 - 42 * Math.cos(rad);
              return (
                <motion.circle
                  key={angle}
                  cx={x}
                  cy={y}
                  r="1.2"
                  fill="#35D6B0"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                />
              );
            })}
          </svg>

          {/* center hub */}
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
            <img src={logo} alt="Noveal" className="h-8 w-8 object-contain" />
            <span className="font-display text-xs font-semibold tracking-tight text-white">
              Noveal
            </span>
          </div>

          {t.process.steps.map((step, index) => {
            const Icon = STEP_ICONS[index];
            const isSpotlighted =
              hoveredIndex === null
                ? activeIndex === index
                : hoveredIndex === index;

            return (
              <motion.div
                key={step.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`absolute w-48 rounded-2xl border p-5 text-center backdrop-blur-sm transition-colors duration-500 ${POSITIONS[index]} ${
                  isSpotlighted
                    ? "border-[#35D6B0]/50 bg-[#35D6B0]/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ scale: isSpotlighted ? 1.05 : 1 }}
                transition={{
                  opacity: { delay: 0.2 + index * 0.15, duration: 0.5 },
                  scale: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <div
                  className={`mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-500 ${
                    isSpotlighted
                      ? "bg-[#35D6B0] text-[#080B2A]"
                      : "bg-[#35D6B0]/10 text-[#35D6B0]"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-[#A8B0D0]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* fallback — mobile/tablet keeps original grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
          {t.process.steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <span className="font-display text-5xl font-semibold text-white/10">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#A8B0D0]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;