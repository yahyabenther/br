import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { useLanguage } from "../../i18n/LanguageContext";

const AUTO_ADVANCE_MS = 4000;
const RESUME_DELAY_MS = 6000;

function Projects() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const didDrag = useRef(false);
  const downIndex = useRef<number | null>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scrolls only the horizontal track — never touches page/vertical scroll
  const scrollTrackTo = (index: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    const trackRect = track.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset =
      cardRect.left -
      trackRect.left -
      (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left: track.scrollLeft + offset, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.95) {
            setActive(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { root: track, threshold: 0.95 }
    );
    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  // Auto-advance through projects, looping back to the start
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % projects.length;
        scrollTrackTo(next);
        return next;
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Temporarily pause auto-advance after manual interaction, then resume
  const pauseThenResume = () => {
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  };

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setActive(clamped);
    scrollTrackTo(clamped);
  };

  const goPrev = () => {
    pauseThenResume();
    goTo(active - 1);
  };
  const goNext = () => {
    pauseThenResume();
    goTo(active + 1);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    const cardEl = (e.target as HTMLElement).closest("[data-index]");
    downIndex.current = cardEl ? Number(cardEl.getAttribute("data-index")) : null;
    isDragging.current = true;
    didDrag.current = false;
    dragStartX.current = e.clientX;
    dragStartScroll.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 5) didDrag.current = true;
    track.scrollLeft = dragStartScroll.current - delta;
  };

  const handlePointerUp = () => {
    pauseThenResume();
    if (!didDrag.current && downIndex.current !== null) goTo(downIndex.current);
    isDragging.current = false;
    downIndex.current = null;
  };

  const current = projects[active];

  return (
    <section id="projects" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
              {t.projectsSection.label}
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {t.projectsSection.headingA}
              <span className="text-[#A8B0D0]"> {t.projectsSection.headingB}</span>
            </h2>
          </div>

          <Link to="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-white">
            {t.projectsSection.viewAll}
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 rtl:-scale-x-100" />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div key={current.slug} className="animate-[fadeIn_0.4s_ease]">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
              {current.category[language]}
            </span>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              {current.title[language]}
            </h3>

            <p className="mt-5 max-w-lg leading-7 text-[#A8B0D0]">
              {current.description[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {current.technologies.map((technology) => (
                <span key={technology} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                  {technology}
                </span>
              ))}
            </div>

            <Link
              to={`/work/${current.slug}`}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#35D6B0] px-6 py-3 text-sm font-semibold text-[#080B2A] transition hover:bg-[#4DE4C0]"
            >
              {t.projectsSection.viewCaseStudy}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </Link>
          </div>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative mb-6 h-64 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] sm:h-80">
              {projects.map((project, index) => (
                <img
                  key={project.slug}
                  src={project.images[0]}
                  alt={project.title[language]}
                  className={`absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-700 ${
                    index === active ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <a
                href={current.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-[#080B2A] rtl:right-auto rtl:left-4"
              >
                {t.projectsSection.visitSite}
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
              </a>
            </div>

            <div
              ref={trackRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden active:cursor-grabbing cursor-grab"
            >
              {projects.map((project, index) => {
                const CardIcon = project.icon;
                return (
                  <div
                    key={project.slug}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    data-index={index}
                    className={`relative flex h-64 w-56 shrink-0 select-none snap-center flex-col justify-between overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 ${
                      index === active ? "border-[#35D6B0]/50 bg-white/10" : "border-white/10 bg-white/[0.03] opacity-60"
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <CardIcon size={22} className="text-white" />
                    </div>
                    <div>
                      <span className="font-display text-4xl font-semibold text-white/20">{project.number}</span>
                      <h4 className="mt-2 text-lg font-semibold tracking-tight">{project.title[language]}</h4>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button onClick={goPrev} disabled={active === 0} aria-label="Previous project" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white disabled:opacity-30">
                <ArrowLeft size={16} />
              </button>
              <button onClick={goNext} disabled={active === projects.length - 1} aria-label="Next project" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white disabled:opacity-30">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;