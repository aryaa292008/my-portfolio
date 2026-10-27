# Arya Choudhary — Forensic Science & Technology Portfolio

A modern, high-tech, and interactive personal portfolio website for **Arya Choudhary**, a **B.Sc. Forensic Science and Technology** student at **JECRC University**, Jaipur.

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🔬 Key Highlights & Features

- **High-Tech Forensic Aesthetic**: Dark mode theme with deep slate navy (`#070c16`), glowing cyan/teal accents (`#06b6d4`, `#14b8a6`), subtle investigative grid lines, crosshairs, and frosted glass cards.
- **Sticky Section Navigation & Scroll Spy**: Smooth scrolling sticky top navigation bar with active section highlighting across:
  - **About** (`#about`)
  - **Education** (`#education`)
  - **Coursework** (`#coursework`)
  - **Skills** (`#skills`)
  - **Investigation Lab** (`#lab-toolkit`)
  - **Achievements & Languages** (`#achievements`)
  - **Contact** (`#contact`)
- **Interactive Forensic Lab Workbench**:
  1. *Fingerprint Minutiae Analysis*: Interactive dactyloscopy classification comparing Whorls, Loops, and Arches with ridge details and minutiae points.
  2. *Chain of Custody Pipeline*: Interactive 5-stage evidentiary lifecycle (Scene Cordoning & Discovery &rarr; In-Situ Documentation &rarr; Packaging & Tamper-Evident Sealing &rarr; Laboratory Transfer &rarr; Judicial Presentation).
  3. *Serology Reagents Guide*: Presumptive spot tests (Kastle-Meyer Phenolphthalein, Luminol Chemiluminescence, Ninhydrin, and Acid Phosphatase).
- **Interactive Coursework Modules**: Filter by category or search through 6 core modules with in-depth modals explaining theoretical concepts and practical laboratory skills:
  - Introduction to Forensic Science
  - Forensic Biology & Serology
  - Forensic Chemistry & Toxicology
  - Fingerprints & Questioned Documents
  - Criminology & Criminal Law
  - Cyber Crime & Digital Forensics
- **Key Skills Matrix**: Filterable grid categorized into *Technical & Forensic* and *Professional Strengths* with competency badges and search.
- **Curriculum Vitae Preview Modal**: Full-featured modal with 1-click **Print to PDF** functionality for academic and internship submissions.
- **Direct Contact System**: Quick-copy buttons for Email (`aryaa292008@gmail.com`) and Phone (`+91 9828029050`), WhatsApp link, GitHub repository, LinkedIn profile, and an interactive message form with prefilled mailto actions.

---

## 🚀 Quick Start Guide

### 1. Recommended Workspace
Set this folder as your active workspace in your editor:
```
C:\Users\gaur0\.gemini\antigravity\scratch\portfolio-website
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Lint Check
```bash
npx oxlint src
```

---

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky top navbar with scroll-spy & quick CV action
│   │   ├── Hero.tsx                  # Hero section with investigator ID badge & quick contact pills
│   │   ├── About.tsx                 # Career objective & core investigative pillars
│   │   ├── Education.tsx             # JECRC University & Class XII First Division timeline
│   │   ├── Coursework.tsx            # Filterable coursework grid with deep-dive modals
│   │   ├── Skills.tsx                # Categorized technical & professional skills matrix
│   │   ├── ForensicLabShowcase.tsx   # Interactive fingerprint, chain-of-custody & serology workbench
│   │   ├── AchievementsLanguages.tsx # Academic milestones, certifications & language cards
│   │   ├── Contact.tsx               # Direct contact channels & validated inquiry form
│   │   ├── Footer.tsx                # Sleek footer with navigation, quote & back-to-top
│   │   ├── ResumeModal.tsx           # Printable full-page CV modal (Print / Save as PDF)
│   │   └── icons.tsx                 # Clean vector icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.ts          # Centralized data store (all bio, education, coursework, skills)
│   ├── App.tsx                       # Master single-page app layout
│   ├── index.css                     # Tailwind CSS v4 styling & forensic grid textures
│   └── main.tsx                      # React root entry
├── index.html                        # Meta tags, favicon, and SEO configuration
├── package.json                      # Project dependencies & scripts
├── tsconfig.json                     # TypeScript strict configuration
└── vite.config.ts                    # Vite build configuration
```

---

## 📄 Centralized Data Customization

All personal information, education entries, coursework syllabi, and skills are abstracted in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts). Updating any detail in this single file propagates across the entire website and CV modal automatically.
