import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  Github, Linkedin, Mail, Twitter, ArrowRight, Sparkles,
  Code2, Palette, Rocket, ExternalLink, Menu, X, Send,
  MapPin, Calendar, Coffee, Heart, Star, Download
} from "lucide-react";
import { toast, Toaster } from "sonner";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Skill", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

const SKILLS = [
  { name: "React & Next.js", level: 95, icon: Code2 },
  { name: "TypeScript", level: 90, icon: Code2 },
  { name: "UI / UX Design", level: 88, icon: Palette },
  { name: "Node.js & API", level: 85, icon: Rocket },
  { name: "Framer Motion", level: 92, icon: Sparkles },
  { name: "Tailwind CSS", level: 96, icon: Palette },
];

const PROJECTS = [
  {
    title: "Matcha Commerce",
    desc: "Platform e-commerce khusus produk matcha premium dengan pengalaman belanja imersif.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    color: "from-[oklch(0.78_0.11_140)] to-[oklch(0.9_0.05_15)]",
  },
  {
    title: "Bloom Dashboard",
    desc: "Dashboard analitik SaaS dengan visualisasi data real-time dan tema pastel.",
    tags: ["React", "D3.js", "Supabase"],
    color: "from-[oklch(0.9_0.05_15)] to-[oklch(0.78_0.11_140)]",
  },
  {
    title: "Pixel Portfolio",
    desc: "Portfolio 3D interaktif untuk seorang illustrator dengan animasi scroll yang halus.",
    tags: ["Three.js", "GSAP", "Vite"],
    color: "from-[oklch(0.72_0.14_10)] to-[oklch(0.58_0.13_145)]",
  },
  {
    title: "Zen Journal",
    desc: "Aplikasi journaling mindfulness dengan mood tracker dan reminder harian.",
    tags: ["React Native", "Expo", "Firebase"],
    color: "from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)]",
  },
];

const STATS = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "5+", label: "Tahun Pengalaman" },
  { value: "30+", label: "Klien Bahagia" },
  { value: "∞", label: "Cangkir Kopi" },
];

function Portfolio() {
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
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Tersedia untuk proyek baru</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
            >
              Halo, saya <br />
              <span className="text-gradient">Creative Dev</span> <br />
              yang suka <em className="font-normal italic">matcha</em>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-8"
            >
              Saya merancang & membangun pengalaman digital yang cantik, cepat, dan bermakna —
              memadukan estetika lembut dengan kode yang rapi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-pink transition-all hover:-translate-y-0.5">
                Lihat Karya <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-semibold hover:bg-secondary transition-all hover:-translate-y-0.5">
                Hubungi Saya
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="flex items-center gap-6 mt-10 text-muted-foreground"
            >
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
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
              style={mounted ? {
                rotateY: mouse.x * 15,
                rotateX: -mouse.y * 15,
              } : undefined}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {/* Layered 3D cards */}
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
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)] flex items-center justify-center shadow-soft"
                  >
                    <Coffee className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold text-gradient">Matcha + Pink</div>
                    <div className="text-xs text-muted-foreground mt-1">Design & Code Studio</div>
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

              {/* Floating orbs */}
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
                  A
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold">Ayu Pratama</div>
                  <div className="text-sm text-muted-foreground">Creative Developer</div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3" /> Jakarta</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> 2019 — kini</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">TENTANG SAYA</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Merancang produk yang <span className="text-gradient">terasa hangat</span> & bekerja mulus.
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Saya seorang creative developer dengan passion di persimpangan desain dan teknologi.
              Selama 5+ tahun, saya membantu startup dan brand membangun produk digital yang tidak hanya
              berfungsi baik — tapi juga meninggalkan kesan.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Ketika tidak coding, kamu bisa menemukan saya menyeruput matcha latte, membaca buku desain,
              atau menjelajahi kafe-kafe baru di kota.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Coffee, label: "Passion", value: "Matcha & Kode" },
                { icon: Palette, label: "Fokus", value: "Design Systems" },
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
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">KEAHLIAN</div>
            <h2 className="text-4xl md:text-5xl font-bold">Tools yang saya <span className="text-gradient">kuasai</span></h2>
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
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">PROYEK</div>
            <h2 className="text-4xl md:text-5xl font-bold">Karya <span className="text-gradient">terpilih</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Sebagian proyek yang saya kerjakan dari konsep sampai peluncuran.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 perspective-1000">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
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
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all">{p.title}</h3>
                  <p className="text-muted-foreground mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{t}</span>
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
            <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">KONTAK</div>
            <h2 className="text-4xl md:text-5xl font-bold">Ayo <span className="text-gradient">bekerja sama</span></h2>
            <p className="text-muted-foreground mt-4">Punya ide atau proyek? Ceritakan pada saya.</p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Navbar({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[oklch(0.58_0.13_145)] to-[oklch(0.72_0.14_10)] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-gradient">Ayu.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:shadow-pink transition-all">
            Hire Me
          </a>

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
              {NAV.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl hover:bg-secondary transition-colors font-medium">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3 rounded-2xl bg-primary text-primary-foreground text-center font-semibold">
                Hire Me
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Mohon lengkapi semua kolom.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Format email tidak valid.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Pesan terkirim! Saya akan segera membalas.");
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
          <label className="text-sm font-medium mb-2 block">Nama</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="Nama kamu"
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="kamu@email.com"
          />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Pesan</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder="Ceritakan tentang proyekmu..."
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-pink transition-all hover:-translate-y-0.5 disabled:opacity-60"
      >
        {sending ? "Mengirim..." : "Kirim Pesan"}
        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.form>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          Dibuat dengan <Heart className="w-4 h-4 text-[oklch(0.72_0.14_10)]" fill="currentColor" /> & matcha latte
        </div>
        <div>© {new Date().getFullYear()} Ayu Pratama. All rights reserved.</div>
      </div>
    </footer>
  );
}
