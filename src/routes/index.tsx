import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Github, Instagram, Mail, ArrowRight, Sparkles,
  Code2, Palette, Rocket, ExternalLink, Menu, X, Send,
  MapPin, Calendar, Coffee, Heart, Star, Download, Languages,
  GraduationCap,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { I18nProvider, useI18n, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: PortfolioRoot,
});

function PortfolioRoot() {
  return (
    <I18nProvider>
      <Portfolio />
    </I18nProvider>
  );
}

const NAV_KEYS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

const SKILLS = [
  { name: "HTML & CSS", level: 90, icon: Code2 },
  { name: "JavaScript", level: 78, icon: Code2 },
  { name: "React & Tailwind", level: 75, icon: Sparkles },
  { name: "Figma / UI Design", level: 85, icon: Palette },
  { name: "Laravel / PHP", level: 70, icon: Rocket },
  { name: "Git & GitHub", level: 80, icon: Code2 },
];

const PROJECTS = [
  { keyT: "p1.title", keyD: "p1.desc", tags: ["HTML", "CSS", "JS"],
    color: "from-[oklch(0.78_0.11_140)] to-[oklch(0.9_0.05_15)]" },
  { keyT: "p2.title", keyD: "p2.desc", tags: ["Laravel", "MySQL", "Bootstrap"],
    color: "from-[oklch(0.9_0.05_15)] to-[oklch(0.78_0.11_140)]" },
  { keyT: "p3.title", keyD: "p3.desc", tags: ["React", "Tailwind"],
    color: "from-[oklch(0.72_0.14_10)] to-[oklch(0.58_0.13_145)]" },
  { keyT: "p4.title", keyD: "p4.desc", tags: ["React Native", "Figma"],
    color: "from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)]" },
];

function Portfolio() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const STATS = [
    { value: "12+", label: t("stats.projects") },
    { value: "3", label: t("stats.years") },
    { value: "5+", label: t("stats.certs") },
    { value: "∞", label: t("stats.coffee") },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Toaster position="top-center" richColors />

      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-blob)" }}
          animate={{ x: [0, 100, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "linear-gradient(135deg, var(--pink-milk), var(--matcha))" }}
          animate={{ x: [0, -80, 0], y: [0, -100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* HERO */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center pt-24 pb-16 px-6">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-soft mb-6"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{t("hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            >
              {t("hero.hello")} <br />
              <span className="text-gradient">{t("hero.name")}</span> <br />
              <em className="font-normal italic text-3xl md:text-4xl text-muted-foreground">{t("hero.role")}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-pink transition-all hover:-translate-y-0.5">
                {t("hero.cta.projects")} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-semibold hover:bg-secondary transition-all hover:-translate-y-0.5">
                {t("hero.cta.contact")}
              </a>
              <a
                href="/resume.pdf"
                download="Zahida-Asha-Falia-CV.pdf"
                onClick={() => toast.success(t("cv.toast"))}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 border border-[oklch(0.72_0.14_10)]/40 text-[oklch(0.4_0.12_10)] font-semibold shadow-pink hover:bg-[oklch(0.9_0.05_15)] transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                {t("hero.cta.cv")}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-10 text-muted-foreground"
            >
              {[Github, Instagram, Mail].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3, color: "var(--matcha-deep)" }} className="transition-colors">
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* 3D Hero visual */}
          <div className="perspective-1000 flex items-center justify-center h-[500px]">
            <motion.div
              className="relative preserve-3d"
              style={mounted ? { rotateY: mouse.x * 15, rotateX: -mouse.y * 15 } : undefined}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <motion.div
                className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[oklch(0.78_0.11_140)] to-[oklch(0.9_0.05_15)] opacity-70 blur-2xl animate-blob"
                style={{ transform: "translateZ(-100px)" }}
              />
              <motion.div
                className="w-72 h-96 md:w-80 md:h-[440px] rounded-[2.5rem] bg-gradient-to-br from-[oklch(0.9_0.05_15)] via-white to-[oklch(0.78_0.11_140)] shadow-pink relative overflow-hidden animate-float-3d"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 20%, white 0%, transparent 50%)" }} />
                <div className="absolute inset-6 rounded-3xl glass flex flex-col items-center justify-center gap-4 p-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)] flex items-center justify-center shadow-soft text-white font-display font-bold text-4xl"
                  >
                    Z
                  </motion.div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-gradient">{t("hero.card.title")}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t("hero.card.sub")}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 w-full mt-2">
                    {[Code2, Palette, Rocket].map((Icon, i) => (
                      <div key={i} className="aspect-square rounded-xl bg-white/70 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-[oklch(0.72_0.14_10)] to-[oklch(0.9_0.05_15)] shadow-pink"
                style={{ transform: "translateZ(120px)" }}
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.58_0.13_145)] to-[oklch(0.78_0.11_140)] shadow-soft flex items-center justify-center"
                style={{ transform: "translateZ(100px)" }}
                animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-6 h-6 text-white" fill="white" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-16 w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center"
                style={{ transform: "translateZ(80px)" }}
                animate={{ x: [0, -10, 0], rotate: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-5 h-5 text-[oklch(0.72_0.14_10)]" fill="currentColor" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, rotateX: 5, rotateY: 5 }}
              className="glass rounded-3xl p-6 text-center preserve-3d shadow-soft"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient font-display">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="perspective-1000"
          >
            <div className="preserve-3d relative aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[oklch(0.78_0.11_140)] to-[oklch(0.9_0.05_15)] animate-blob shadow-soft"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-6 rounded-[2.5rem] glass flex items-center justify-center flex-col gap-3">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[oklch(0.72_0.14_10)] to-[oklch(0.58_0.13_145)] flex items-center justify-center text-white text-5xl font-display font-bold shadow-pink">
                  Z
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold">Zahida Asha Falia</div>
                  <div className="text-sm text-muted-foreground">{t("about.class")} — {t("about.school")}</div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> Bangsri, Jepara</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> 2023 — {new Date().getFullYear()}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">{t("about.tag")}</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("about.title.1")} <span className="text-gradient">{t("about.title.2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">{t("about.p1")}</p>
            <p className="text-muted-foreground text-lg mb-8">{t("about.p2")}</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, label: t("about.item1.label"), value: t("about.item1.value") },
                { icon: Palette, label: t("about.item2.label"), value: t("about.item2.value") },
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl p-4 shadow-soft">
                  <item.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                  <div className="font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">{t("skills.tag")}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t("skills.title.1")} <span className="text-gradient">{t("skills.title.2")}</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[oklch(0.78_0.11_140)] to-[oklch(0.9_0.05_15)] flex items-center justify-center">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-16"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">{t("projects.tag")}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t("projects.title.1")} <span className="text-gradient">{t("projects.title.2")}</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{t("projects.desc")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 perspective-1000">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.keyT}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                className="preserve-3d group relative rounded-3xl overflow-hidden glass shadow-soft cursor-pointer"
              >
                <div className={`h-56 bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 30%, white 0%, transparent 60%)" }} />
                  <motion.div
                    className="absolute bottom-4 right-4 w-20 h-20 rounded-2xl bg-white/40 backdrop-blur-md flex items-center justify-center"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ExternalLink className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">{t(p.keyT)}</h3>
                  <p className="text-muted-foreground mb-4">{t(p.keyD)}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-12"
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">{t("contact.tag")}</div>
            <h2 className="text-4xl md:text-5xl font-bold">{t("contact.title.1")} <span className="text-gradient">{t("contact.title.2")}</span></h2>
            <p className="text-muted-foreground mt-4">{t("contact.desc")}</p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function LangSwitcher() {
  const { lang, setLang } = useI18n();
  const langs: { code: Lang; label: string }[] = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
  ];
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-full glass shadow-soft" role="group" aria-label="Language switcher">
      <Languages className="w-4 h-4 ml-2 text-primary" />
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          aria-pressed={lang === l.code}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
            lang === l.code
              ? "bg-primary text-primary-foreground shadow-pink"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass shadow-soft" : ""}`}>
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)] flex items-center justify-center text-white">
              Z
            </div>
            <span className="text-gradient">Zahida.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_KEYS.map((item) => (
              <a key={item.href} href={item.href} className="px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary transition-colors">
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LangSwitcher />
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-pink transition-all">
              {t("nav.hire")}
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-3 p-4 glass rounded-3xl shadow-soft flex flex-col gap-1"
            >
              {NAV_KEYS.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl hover:bg-secondary transition-colors font-medium">
                  {t(item.key)}
                </a>
              ))}
              <div className="mt-2 flex justify-center"><LangSwitcher /></div>
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-2xl bg-primary text-primary-foreground text-center font-semibold">
                {t("nav.hire")}
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function ContactForm() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(t("form.err.fill"));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error(t("form.err.email"));
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success(t("form.ok"));
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <motion.form
      onSubmit={submit}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-3xl p-8 shadow-soft space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium mb-2 block">{t("form.name")}</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder={t("form.name.ph")}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">{t("form.email")}</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder={t("form.email.ph")}
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">{t("form.message")}</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder={t("form.message.ph")}
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-pink transition-all hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? t("form.sending") : t("form.send")}
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.form>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="px-6 py-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          {t("footer.made")} <Heart className="w-4 h-4 text-[oklch(0.72_0.14_10)]" fill="currentColor" /> {t("footer.and")}
        </div>
        <div>© {new Date().getFullYear()} Zahida Asha Falia. {t("footer.rights")}</div>
      </div>
    </footer>
  );
}
