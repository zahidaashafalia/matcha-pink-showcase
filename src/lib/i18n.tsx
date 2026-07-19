import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "id" | "en";

type Dict = Record<string, string>;

const ID: Dict = {
  "nav.home": "Beranda",
  "nav.about": "Tentang",
  "nav.skills": "Skill",
  "nav.projects": "Proyek",
  "nav.contact": "Kontak",
  "nav.hire": "Hubungi",

  "hero.badge": "Siswi PPLG • SMKN 1 Bangsri",
  "hero.hello": "Halo, saya",
  "hero.name": "Zahida Asha Falia",
  "hero.role": "yang suka belajar hal baru",
  "hero.desc": "Siswi kelas XII PPLG 2 di SMKN 1 Bangsri yang antusias merancang tampilan web modern, memadukan estetika lembut matcha & milk pink dengan kode yang rapi.",
  "hero.cta.projects": "Lihat Karya",
  "hero.cta.contact": "Hubungi Saya",
  "hero.cta.cv": "Unduh CV",
  "hero.card.title": "Matcha + Milk Pink",
  "hero.card.sub": "Portofolio Zahida",

  "stats.projects": "Proyek Sekolah",
  "stats.years": "Tahun di PPLG",
  "stats.certs": "Sertifikat",
  "stats.coffee": "Cangkir Matcha",

  "about.tag": "TENTANG SAYA",
  "about.title.1": "Belajar, berkarya, dan",
  "about.title.2": "tumbuh setiap hari.",
  "about.p1": "Nama saya Zahida Asha Falia, siswi kelas XII PPLG 2 di SMKN 1 Bangsri. Saya tertarik dengan dunia pengembangan web, desain UI, dan segala hal yang membuat teknologi terasa lebih ramah.",
  "about.p2": "Di luar sekolah, saya suka menyeruput matcha latte, membaca, dan bereksperimen dengan proyek kecil untuk menajamkan skill saya.",
  "about.school": "SMKN 1 Bangsri",
  "about.class": "XII PPLG 2",
  "about.item1.label": "Kelas",
  "about.item1.value": "XII PPLG 2",
  "about.item2.label": "Fokus",
  "about.item2.value": "Web & UI Design",

  "skills.tag": "KEAHLIAN",
  "skills.title.1": "Tools yang saya",
  "skills.title.2": "pelajari",

  "projects.tag": "PROYEK",
  "projects.title.1": "Karya",
  "projects.title.2": "terpilih",
  "projects.desc": "Beberapa proyek sekolah dan pribadi yang saya kerjakan.",
  "p1.title": "Web Profil Sekolah",
  "p1.desc": "Landing page profil SMKN 1 Bangsri versi latihan dengan animasi halus dan tema pastel.",
  "p2.title": "Dashboard Perpustakaan",
  "p2.desc": "Sistem admin sederhana untuk mengelola koleksi buku dan peminjaman.",
  "p3.title": "Toko Kue Online",
  "p3.desc": "Prototype e-commerce UMKM lokal dengan katalog dan keranjang.",
  "p4.title": "Journal Mood",
  "p4.desc": "Aplikasi mini untuk mencatat mood harian dengan visual yang lembut.",

  "contact.tag": "KONTAK",
  "contact.title.1": "Ayo",
  "contact.title.2": "berkenalan",
  "contact.desc": "Ingin berkolaborasi untuk tugas atau proyek? Kirim pesan ya!",
  "form.name": "Nama",
  "form.name.ph": "Nama kamu",
  "form.email": "Email",
  "form.email.ph": "kamu@email.com",
  "form.message": "Pesan",
  "form.message.ph": "Tulis pesan kamu di sini...",
  "form.send": "Kirim Pesan",
  "form.sending": "Mengirim...",
  "form.err.fill": "Mohon lengkapi semua kolom.",
  "form.err.email": "Format email tidak valid.",
  "form.ok": "Pesan terkirim! Terima kasih.",

  "cv.toast": "CV sedang diunduh…",
  "footer.made": "Dibuat dengan",
  "footer.and": "& matcha latte",
  "footer.rights": "Hak cipta dilindungi.",
  "lang.label": "Bahasa",
};

const EN: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",
  "nav.hire": "Contact",

  "hero.badge": "PPLG Student • SMKN 1 Bangsri",
  "hero.hello": "Hi, I'm",
  "hero.name": "Zahida Asha Falia",
  "hero.role": "always eager to learn.",
  "hero.desc": "A 12th grade PPLG 2 student at SMKN 1 Bangsri who loves crafting modern web experiences — mixing soft matcha & milk pink aesthetics with clean code.",
  "hero.cta.projects": "See Projects",
  "hero.cta.contact": "Contact Me",
  "hero.cta.cv": "Download CV",
  "hero.card.title": "Matcha + Milk Pink",
  "hero.card.sub": "Zahida's Portfolio",

  "stats.projects": "School Projects",
  "stats.years": "Years in PPLG",
  "stats.certs": "Certificates",
  "stats.coffee": "Cups of Matcha",

  "about.tag": "ABOUT ME",
  "about.title.1": "Learning, creating, and",
  "about.title.2": "growing every day.",
  "about.p1": "My name is Zahida Asha Falia, a 12th grade PPLG 2 student at SMKN 1 Bangsri. I'm passionate about web development, UI design, and anything that makes technology feel friendlier.",
  "about.p2": "Outside school, I enjoy matcha lattes, reading, and tinkering with small projects to sharpen my skills.",
  "about.school": "SMKN 1 Bangsri",
  "about.class": "XII PPLG 2",
  "about.item1.label": "Class",
  "about.item1.value": "XII PPLG 2",
  "about.item2.label": "Focus",
  "about.item2.value": "Web & UI Design",

  "skills.tag": "SKILLS",
  "skills.title.1": "Tools I'm",
  "skills.title.2": "learning",

  "projects.tag": "PROJECTS",
  "projects.title.1": "Featured",
  "projects.title.2": "work",
  "projects.desc": "A few school and personal projects I've built.",
  "p1.title": "School Landing Page",
  "p1.desc": "A practice landing page for SMKN 1 Bangsri with soft animations and a pastel theme.",
  "p2.title": "Library Dashboard",
  "p2.desc": "A simple admin system to manage book collections and loans.",
  "p3.title": "Online Bakery Shop",
  "p3.desc": "An e-commerce prototype for a local SMB with catalog and cart.",
  "p4.title": "Mood Journal",
  "p4.desc": "A mini app to log daily moods with a soft visual style.",

  "contact.tag": "CONTACT",
  "contact.title.1": "Let's",
  "contact.title.2": "get in touch",
  "contact.desc": "Want to collaborate on a task or project? Send me a message!",
  "form.name": "Name",
  "form.name.ph": "Your name",
  "form.email": "Email",
  "form.email.ph": "you@email.com",
  "form.message": "Message",
  "form.message.ph": "Write your message here...",
  "form.send": "Send Message",
  "form.sending": "Sending...",
  "form.err.fill": "Please fill in all fields.",
  "form.err.email": "Invalid email format.",
  "form.ok": "Message sent! Thank you.",

  "cv.toast": "Downloading CV…",
  "footer.made": "Made with",
  "footer.and": "& matcha latte",
  "footer.rights": "All rights reserved.",
  "lang.label": "Language",
};

const DICTS: Record<Lang, Dict> = { id: ID, en: EN };

type I18nCtx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const Ctx = createContext<I18nCtx>({ lang: "id", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "id" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const t = (k: string) => DICTS[lang][k] ?? k;
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
