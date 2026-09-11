import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#35D6B0]">
              {t.contact.label}
            </p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              {t.contact.headingA}
              <span className="text-[#A8B0D0]"> {t.contact.headingB}</span>
            </h2>
            <p className="mt-6 max-w-sm leading-7 text-[#A8B0D0]">
              {t.contact.paragraph}
            </p>

            <div className="mt-10 space-y-4">
              <a href="mailto:hello@ybdev.com" className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white">
                <Mail size={18} className="text-[#35D6B0]" />
                hello@ybdev.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin size={18} className="text-[#35D6B0]" />
                {t.contact.location}
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input type="text" placeholder={t.contact.formName} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#35D6B0]/50" />
              <input type="email" placeholder={t.contact.formEmail} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#35D6B0]/50" />
            </div>

            <textarea placeholder={t.contact.formMessage} rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-[#35D6B0]/50" />

            <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#35D6B0] px-7 py-4 font-semibold text-[#080B2A] transition hover:bg-[#4DE4C0] sm:w-auto">
              {t.contact.send}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;