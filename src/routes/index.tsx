import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import {
  Github, Linkedin, Instagram, MessageCircle, Mail, ArrowRight, Sparkles,
  Code2, Palette, Rocket, Menu, X, Send, GraduationCap, Cpu, Database,
  FileSearch, Briefcase, Award, Users, Heart, Music, BookOpen, Sun,
  Figma, Smartphone, Layers, Star, MapPin, Download,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import ashaPhoto from "@/assets/asha.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Zahida Asha Falia — UI/UX & Web Portfolio" },
      {
        name: "description",
        content:
          "Portofolio Zahida Asha Falia, siswi PPLG SMK Negeri 1 Bangsri — UI/UX Design, Website Design, dan Software Analysis.",
      },
      { property: "og:title", content: "Zahida Asha Falia — UI/UX & Web Portfolio" },
      {
        property: "og:description",
        content:
          "Portofolio siswi PPLG SMKN 1 Bangsri: UI/UX Design, Web Development, IoT, dan Software Analysis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Pendidikan", href: "#education" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

const MATERI = [
  {
    title: "UI/UX Design",
    icon: Palette,
    items: ["Wireframe", "Mockup", "Prototype", "Design System", "Responsive Design", "User Experience (UX)"],
  },
  {
    title: "Web Development",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    items: ["Flutter", "Android Studio", "Java"],
  },
  {
    title: "Internet of Things (IoT)",
    icon: Cpu,
    items: ["Arduino IDE", "Arduino Uno", "Blynk IoT", "Ubidots", "Robot Car", "Smart Lighting", "Smart Lock", "Gas Detection System"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MySQL", "Entity Relationship Diagram (ERD)"],
  },
  {
    title: "Software Analysis",
    icon: FileSearch,
    items: ["Flowchart", "Analisis Kebutuhan Sistem", "User Story", "Product Backlog", "Agile", "Scrum"],
  },
  {
    title: "Produk Kreatif & Kewirausahaan",
    icon: Rocket,
    items: ["Dasar-dasar kewirausahaan", "Analisis peluang usaha", "Perhitungan modal", "Harga pokok produksi", "Margin keuntungan", "Perencanaan usaha"],
  },
];

const KEAHLIAN = [
  { title: "UI/UX Design", icon: Palette, items: ["UI Design", "UX Design", "Wireframing", "Prototyping", "Responsive Design"] },
  { title: "Website", icon: Layers, items: ["Website Design", "Laravel (Basic)", "HTML", "CSS", "PHP"] },
  { title: "Software Analysis", icon: FileSearch, items: ["Flowchart", "User Story", "Product Backlog", "Requirement Analysis"] },
  { title: "Tools", icon: Figma, items: ["Figma", "Canva", "Visual Studio Code", "Git & GitHub", "Android Studio", "Arduino IDE", "Blynk IoT", "Ubidots"] },
];

const PROJECTS = [
  {
    title: "Website Jadwal Pelajaran Dinamis",
    period: "Kelas X → Kenaikan Kelas XI",
    type: "Individu",
    role: "Web Developer",
    desc:
      "Membangun website jadwal pelajaran sebagai proyek kenaikan kelas pertama. Proyek ini dipresentasikan di hadapan guru penguji sebagai bentuk evaluasi kompetensi dasar pengembangan website.",
    contributions: [] as string[],
    tech: ["HTML"],
  },
  {
    title: "Website Texcer Hot",
    period: "Kelas XI → Kenaikan Kelas XII",
    type: "Kelompok (4 Orang)",
    role: "Web Developer",
    desc: "Proyek kelompok pengembangan website dengan PHP beserta perancangan antarmuka bersama tim.",
    contributions: [
      "Mengembangkan website menggunakan PHP.",
      "Membantu proses pembuatan desain antarmuka bersama anggota tim agar proyek selesai sesuai target.",
    ],
    tech: ["PHP"],
  },
  {
    title: "Website Gateway SMK Negeri 1 Bangsri",
    period: "Kelas XII (Sedang Berjalan)",
    type: "Kelompok (3 Orang)",
    role: "System Analyst",
    desc:
      "Website ini dirancang sebagai pusat akses berbagai website dan layanan digital sekolah, serta akan digunakan langsung oleh warga sekolah.",
    contributions: [
      "Analisis kebutuhan sistem",
      "User Story",
      "Product Backlog",
      "Dokumentasi Scrum",
      "Flowchart",
      "Analisis alur website",
    ],
    tech: ["Laravel"],
  },
];

const ORGANISASI = [
  {
    title: "Web Development",
    period: "Kelas XI – Sekarang",
    desc: "Aktif mengikuti ekstrakurikuler Web Development untuk mengembangkan kemampuan di bidang pengembangan website dan teknologi web.",
    icon: Code2,
  },
  {
    title: "Palang Merah Remaja (PMR)",
    period: "Kelas X",
    desc: "Mengikuti kegiatan PMR hingga masa pelantikan sebagai pengalaman awal dalam kegiatan organisasi sekolah.",
    icon: Users,
  },
];

const MINAT = ["UI/UX Design", "Website Design", "Software Analysis", "Digital Product Design", "AI-assisted Coding"];

const HOBI = [
  { label: "Mendesain antarmuka website", icon: Palette },
  { label: "Mendengarkan musik", icon: Music },
  { label: "Membaca novel", icon: BookOpen },
  { label: "Berolahraga ringan di pagi hari", icon: Sun },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/zahidaashafalia", icon: Github, handle: "@zahidaashafalia" },
  { label: "Instagram", href: "https://www.instagram.com/ashafally/tagged/", icon: Instagram, handle: "@ashafally" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/", icon: Linkedin, handle: "Zahida Asha Falia" },
  { label: "WhatsApp", href: "https://wa.me/6285647076201", icon: MessageCircle, handle: "+62 856-4707-6201" },
];

/* ---------------- shared bits ---------------- */

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className="inline-flex cursor-default items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-sm"
    >
      {children}
    </motion.span>
  );
}

function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-blob animate-float-3d absolute -left-24 top-[-6rem] h-80 w-80 opacity-50 blur-3xl" style={{ background: "var(--gradient-blob)" }} />
      <div className="animate-blob absolute right-[-8rem] top-1/3 h-96 w-96 opacity-40 blur-3xl" style={{ background: "var(--gradient-hero)", animationDelay: "2s" }} />
      <div className="animate-blob animate-float-3d absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] opacity-35 blur-3xl" style={{ background: "var(--gradient-blob)", animationDelay: "4s" }} />
    </div>
  );
}

/* ---------------- sections ---------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 shadow-soft sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-display text-base font-bold sm:text-lg">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-hero text-sm font-bold text-primary-foreground shadow-pink">Z</span>
          <span className="text-gradient">Zahida</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/6285647076201"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105 sm:inline-flex"
          >
            Hubungi Saya
          </a>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl p-2 shadow-soft lg:hidden"
          >
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/60"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -16, y: ((e.clientX - r.left) / r.width - 0.5) * 16 });
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-28 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div style={{ y }} className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> Jepara, Jawa Tengah · XII PPLG 2
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Zahida <br />
              <span className="text-gradient">Asha Falia</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
              Siswi Pengembangan Perangkat Lunak dan Gim di SMK Negeri 1 Bangsri yang menyukai{" "}
              <strong className="text-foreground">UI/UX Design</strong>,{" "}
              <strong className="text-foreground">Website Design</strong>, dan{" "}
              <strong className="text-foreground">Software Analysis</strong>.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
                Lihat Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                download
                onClick={() => toast.success("CV sedang diunduh 🌸")}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-pink transition-transform hover:scale-105"
              >
                <Download className="h-4 w-4" /> Unduh CV
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -4, rotate: -6 }}
                  className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-card text-primary shadow-sm"
                >
                  <s.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </Reveal>
        </motion.div>

        <div ref={ref} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} className="perspective-1000 mx-auto w-full max-w-sm">
          <motion.div
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="preserve-3d glass relative rounded-[2rem] p-8 shadow-soft"
          >
            <div className="animate-blob mx-auto h-40 w-40 bg-hero shadow-pink" />
            <div className="mt-6 text-center">
              <p className="font-display text-2xl font-bold text-gradient">Zahida Asha Falia</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">UI/UX · Web · Analyst</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              {[
                { v: "3+", l: "Proyek" },
                { v: "XII", l: "PPLG 2" },
                { v: "2", l: "Ekskul" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-card/80 px-2 py-3">
                  <p className="font-display text-lg font-bold text-primary">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 grid h-14 w-14 place-items-center rounded-2xl bg-secondary shadow-pink"
            >
              <Heart className="h-6 w-6 text-[oklch(0.72_0.14_10)]" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-5 grid h-14 w-14 place-items-center rounded-2xl bg-accent shadow-soft"
            >
              <Star className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Tentang Saya" title="Halo, saya Zahida 🌿" />
        <Reveal>
          <div className="glass mx-auto max-w-3xl rounded-[2rem] p-8 shadow-soft sm:p-10">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Halo! Saya <strong className="text-foreground">Zahida Asha Falia</strong>, siswi Pengembangan Perangkat Lunak dan Gim (PPLG)
              di SMK Negeri 1 Bangsri. Saya memiliki ketertarikan pada UI/UX Design, Website Design, dan Software Analysis. Saya senang
              merancang antarmuka yang modern, responsif, dan mudah digunakan. Meskipun mempelajari berbagai bidang teknologi, saya lebih
              menikmati proses mendesain, menganalisis kebutuhan sistem, serta mengembangkan ide menjadi produk digital yang bermanfaat.
              Untuk membantu proses pengembangan website, saya juga memanfaatkan{" "}
              <strong className="text-foreground">AI-assisted coding (Vibe Coding)</strong> sebagai alat bantu implementasi.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {MINAT.map((m) => (
                <Chip key={m}>{m}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Pendidikan"
          title="SMK Negeri 1 Bangsri"
          subtitle="Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) — Kelas XII PPLG 2"
        />
        <Reveal>
          <div className="glass mb-12 rounded-[2rem] p-8 shadow-soft">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-pink">
                <GraduationCap className="h-6 w-6" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Selama menempuh pendidikan di SMK Negeri 1 Bangsri, saya mempelajari berbagai bidang yang berkaitan dengan pengembangan
                perangkat lunak, mulai dari desain antarmuka, pengembangan website, aplikasi mobile, Internet of Things (IoT), analisis
                sistem, hingga dasar-dasar kewirausahaan.
              </p>
            </div>
          </div>
        </Reveal>

        <h3 className="mb-6 text-center font-display text-2xl font-bold">📖 Materi yang Dipelajari</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MATERI.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="preserve-3d h-full rounded-[1.75rem] border border-border bg-card p-6 shadow-soft"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                  <m.icon className="h-5 w-5" />
                </span>
                <h4 className="font-display text-lg font-bold">{m.title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Keahlian" title="💡 Skill & Tools" subtitle="Kemampuan yang saya kembangkan selama belajar di PPLG." />
        <div className="grid gap-5 sm:grid-cols-2">
          {KEAHLIAN.map((k, i) => (
            <Reveal key={k.title} delay={i * 0.08}>
              <motion.div whileHover={{ scale: 1.02 }} className="h-full rounded-[1.75rem] border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-pink">
                    <k.icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-xl font-bold">{k.title}</h4>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {k.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Proyek Akademik" title="🚀 Karya & Proyek" subtitle="Proyek sekolah yang pernah saya kerjakan secara individu maupun tim." />
        <div className="space-y-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="glass grid gap-6 rounded-[2rem] p-7 shadow-soft md:grid-cols-[auto_1fr] sm:p-9"
              >
                <div className="flex md:flex-col md:items-center md:gap-3">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-hero font-display text-xl font-bold text-primary-foreground shadow-pink">
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.period}</p>
                  <h4 className="mt-2 font-display text-2xl font-bold">{p.title}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip>Jenis: {p.type}</Chip>
                    <Chip>Peran: {p.role}</Chip>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  {p.contributions.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {p.contributions.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Pengalaman & Organisasi" title="🏅 Perjalanan Saya" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[2rem] p-8 shadow-soft">
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-hero text-primary-foreground shadow-pink">
                <Award className="h-6 w-6" />
              </span>
              <h4 className="font-display text-xl font-bold">Seleksi Program Pembelajaran Dicoding Indonesia</h4>
              <p className="mt-3 text-sm text-muted-foreground">Mengikuti proses seleksi yang meliputi:</p>
              <ul className="mt-3 space-y-2">
                {["Wawancara", "Tes pengetahuan sesuai kompetensi PPLG", "Penyelesaian soal teknis"].map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Meskipun belum lolos ke tahap berikutnya, pengalaman ini memberikan wawasan mengenai proses seleksi di dunia industri dan
                memotivasi saya untuk terus meningkatkan kemampuan.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {ORGANISASI.map((o, i) => (
              <Reveal key={o.title} delay={0.08 * (i + 1)}>
                <motion.div whileHover={{ x: 6 }} className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                      <o.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-display text-lg font-bold">{o.title}</h4>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{o.period}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <h4 className="font-display text-xl font-bold">❤️ Minat</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {MINAT.map((m) => (
                  <Chip key={m}>{m}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-border bg-card p-8 shadow-soft">
              <h4 className="font-display text-xl font-bold">🎧 Hobi</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {HOBI.map((h) => (
                  <li key={h.label} className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3 text-sm text-foreground">
                    <h.icon className="h-4 w-4 shrink-0 text-primary" /> {h.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Mohon lengkapi semua kolom terlebih dahulu.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Format email belum benar.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Terima kasih! Pesan kamu sudah terkirim 🌸");
    }, 900);
  }

  const input =
    "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Kontak" title="Mari Terhubung ✨" subtitle="Punya proyek, kolaborasi, atau sekadar ingin menyapa? Silakan hubungi saya." />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass h-full rounded-[2rem] p-8 shadow-soft">
              <h4 className="font-display text-xl font-bold">Sosial Media</h4>
              <ul className="mt-5 space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <motion.a
                      whileHover={{ x: 6 }}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">{s.label}</span>
                        <span className="block text-xs text-muted-foreground">{s.handle}</span>
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={submit} className="glass rounded-[2rem] p-8 shadow-pink">
              <h4 className="font-display text-xl font-bold">Kirim Pesan</h4>
              <div className="mt-5 space-y-4">
                <input className={input} placeholder="Nama kamu" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className={input} type="email" placeholder="Email kamu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <textarea rows={5} className={input} placeholder="Tulis pesan..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {sending ? "Mengirim..." : (<>Kirim Pesan <Send className="h-4 w-4" /></>)}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-6 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-[2rem] px-8 py-6 text-center shadow-soft sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Zahida Asha Falia</span> · XII PPLG 2 · SMKN 1 Bangsri
        </p>
        <div className="flex gap-2">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-primary">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <a href="mailto:" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-hero" />
      <Blobs />
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
