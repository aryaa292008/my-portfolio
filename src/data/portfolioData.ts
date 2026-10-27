export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
  grade?: string;
}

export interface Coursework {
  id: string;
  title: string;
  category: 'Laboratory & Biology' | 'Physical Evidence' | 'Legal & Criminology' | 'Digital & Cyber';
  shortDesc: string;
  fullDesc: string;
  topics: string[];
  practicalSkills: string[];
  icon: string;
}

export interface SkillItem {
  name: string;
  category: 'Technical & Subject' | 'Professional';
  level: 'Core Competency' | 'Proficient' | 'Fundamental';
  description: string;
  iconName: string;
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export interface Language {
  name: string;
  proficiency: string;
  levelDesc: string;
  native: boolean;
}

export const personalInfo = {
  name: "Arya Choudhary",
  role: "Forensic Science & Technology Student",
  tagline: "Aspiring Forensic Scientist | Crime Scene Analysis | Digital & Laboratory Forensics",
  location: "Jaipur, Rajasthan, India",
  email: "aryaa292008@gmail.com",
  phone: "9828029050",
  formattedPhone: "+91 98280 29050",
  github: "https://github.com/aryaa292008/my-portfolio",
  linkedin: "https://linkedin.com/in/aryaa292008",
  status: "Seeking Internship & Entry-Level Opportunities",
  bio: "Motivated B.Sc. Forensic Science and Technology student at JECRC University, Jaipur, seeking internship or entry-level opportunities. Deeply committed to the rigorous application of science to justice, specializing in crime scene investigation, evidence preservation, physical pattern analysis, laboratory serology/chemistry, and modern digital forensics.",
  careerObjective: "To apply rigorous scientific methodologies, meticulous chain-of-custody protocols, and analytical laboratory skills in an internship or junior forensic role. Driven to support crime scene analysis, biological/chemical examinations, and evidence handling with utmost ethical integrity, precision, and dedication to criminal justice."
};

export const educationList: Education[] = [
  {
    degree: "B.Sc. in Forensic Science and Technology",
    institution: "JECRC University",
    location: "Jaipur, Rajasthan",
    period: "Pursuing | Expected Graduation: 2030",
    status: "Currently Enrolled",
    highlights: [
      "Rigorous coursework in Forensic Biology, Serology, Toxicology, and Criminology.",
      "Practical hands-on laboratory exercises in evidence gathering, chemical reagent testing, and latent print development.",
      "Training in mock crime scene reconstruction, preservation protocols, and scientific report documentation.",
      "Interdisciplinary studies spanning criminal procedure, cyber crime forensics, and digital evidence integrity."
    ]
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Shri Gurukul Vidhya Ashram",
    location: "Rajasthan",
    period: "Passed in 2026",
    status: "Completed with First Division",
    grade: "First Division",
    highlights: [
      "Strong foundational coursework in Physics, Chemistry, and Biology/Mathematics.",
      "Developed high analytical capability, mathematical problem-solving, and laboratory experimentation habits.",
      "Achieved First Division academic distinction, reinforcing discipline and attention to detail."
    ]
  }
];

export const courseworkList: Coursework[] = [
  {
    id: "intro-forensic-science",
    title: "Introduction to Forensic Science",
    category: "Physical Evidence",
    shortDesc: "Foundational principles of criminalistics, legal framework, and Locard's Exchange Principle.",
    fullDesc: "Comprehensive exploration of forensic science history, fundamental laws of physical evidence, roles of crime scene investigators, and courtroom admissibility standards under evidentiary laws.",
    topics: [
      "Locard's Exchange Principle & Law of Individuality",
      "Crime Scene Management & Systematic Search Methods",
      "Chain of Custody & Contamination Prevention",
      "Expert Witness Testimony & Legal Admissibility"
    ],
    practicalSkills: [
      "Crime scene sketching & grid search patterns",
      "Packaging & tamper-evident sealing of evidence",
      "Standard Operating Procedure (SOP) documentation"
    ],
    icon: "ShieldAlert"
  },
  {
    id: "forensic-biology-serology",
    title: "Forensic Biology & Serology",
    category: "Laboratory & Biology",
    shortDesc: "Biological fluid identification, bloodstain pattern analysis, and immunological assays.",
    fullDesc: "Study of human biological traces encountered at crime scenes. Covers presumptive and confirmatory serological tests for blood, semen, and saliva, along with bloodstain pattern dynamics and basic DNA extraction principles.",
    topics: [
      "Bloodstain Pattern Analysis (Spatter, Voids, Cast-off)",
      "Presumptive Tests (Kastle-Meyer, Luminol, Tetramethylbenzidine)",
      "Confirmatory Crystal Tests (Teichmann & Takayama)",
      "Electrophoresis & DNA Profiling Foundations"
    ],
    practicalSkills: [
      "Serological spot testing & reagent handling",
      "Preservation of biological evidentiary samples",
      "Microscopic identification of cellular elements"
    ],
    icon: "FlaskConical"
  },
  {
    id: "forensic-chemistry-toxicology",
    title: "Forensic Chemistry & Toxicology",
    category: "Laboratory & Biology",
    shortDesc: "Chemical analysis of unknown substances, poison classification, and chromatographic screening.",
    fullDesc: "Chemical identification of physical and biological evidence including narcotics, poisons, accelerants, and explosives. Focus on extraction techniques, colorimetric tests, and analytical instrumentation.",
    topics: [
      "Classification of Poisons & Toxic Substances",
      "Presumptive Chemical Spot Tests & Reagents",
      "Thin-Layer Chromatography (TLC) & Gas Chromatography (GC)",
      "Alcohol & Volatile Organic Compound Detection"
    ],
    practicalSkills: [
      "Qualitative chemical reagent preparation",
      "Micro-chemical testing & spot reactions",
      "Safe laboratory protocols for hazardous compounds"
    ],
    icon: "FlaskRound"
  },
  {
    id: "fingerprints-questioned-documents",
    title: "Fingerprints & Questioned Documents",
    category: "Physical Evidence",
    shortDesc: "Dactyloscopy, ridge minutiae analysis, handwriting examination, and forgery detection.",
    fullDesc: "In-depth study of friction ridge skin patterns (loops, whorls, arches), latent fingerprint development using physical and chemical methods, and comprehensive analysis of disputed handwriting, signatures, inks, and paper characteristics.",
    topics: [
      "Friction Ridge Classification & Minutiae Points",
      "Latent Print Development (Powders, Ninhydrin, Cyanoacrylate)",
      "Handwriting Characteristics & Individual Variations",
      "Forgery Detection, Erasures & Obliterations"
    ],
    practicalSkills: [
      "Dusting, lifting, and recording latent impressions",
      "Comparative visual analysis of signature specimens",
      "Stereo-microscope inspection of questioned papers"
    ],
    icon: "Fingerprint"
  },
  {
    id: "criminology-criminal-law",
    title: "Criminology & Criminal Law",
    category: "Legal & Criminology",
    shortDesc: "Theories of crime etiology, penal codes, criminal procedure, and forensic psychology.",
    fullDesc: "Investigation into sociological and psychological foundations of crime, statutory criminal procedure, provisions governing search and seizure, evidence submission, and offender profiling methodologies.",
    topics: [
      "Theories of Criminal Behavior & Victimology",
      "Indian Penal Code (IPC) & Criminal Procedure Provisions",
      "Evidentiary Rules for Scientific Testimony",
      "Forensic Psychology & Investigative Interviewing"
    ],
    practicalSkills: [
      "Case law analysis regarding scientific evidence",
      "Drafting expert forensic deposition outlines",
      "Ethical handling of sensitive criminal case files"
    ],
    icon: "Scale"
  },
  {
    id: "cyber-crime-digital-forensics",
    title: "Cyber Crime & Digital Forensics",
    category: "Digital & Cyber",
    shortDesc: "Digital evidence acquisition, forensic imaging, file hashing, and cybercrime triage.",
    fullDesc: "Foundations of incident response and digital investigations. Covers procedures for seizing electronic hardware, maintaining cryptographic hash integrity (MD5, SHA-256), analyzing file artifacts, and understanding anti-forensics.",
    topics: [
      "Electronic Evidence Seizure & Write-Blockers",
      "Bit-stream Imaging & Cryptographic Hashing",
      "File System Artifacts & Metadata Analysis",
      "Cyber Crime Typologies (Phishing, Malware, Data Theft)"
    ],
    practicalSkills: [
      "Verification of evidence hash integrity",
      "Documentation of digital chain-of-custody",
      "Triage of suspect computing and storage media"
    ],
    icon: "Binary"
  }
];

export const technicalSkills: SkillItem[] = [
  {
    name: "Crime Scene Investigation",
    category: "Technical & Subject",
    level: "Core Competency",
    description: "Systematic scene perimeter cordoning, search patterns (grid, spiral, zone), evidentiary photography, and rough/finished scene sketching.",
    iconName: "Search"
  },
  {
    name: "Evidence Preservation",
    category: "Technical & Subject",
    level: "Core Competency",
    description: "Strict chain-of-custody logging, anti-contamination packaging, biological swabbing, and secure tamper-evident sealing procedures.",
    iconName: "ShieldCheck"
  },
  {
    name: "Fingerprint Pattern Identification",
    category: "Technical & Subject",
    level: "Core Competency",
    description: "Identification of Loops, Whorls, and Arches; minutiae ridge mapping (bifurcations, ridge endings), and latent print lifting using powder techniques.",
    iconName: "Fingerprint"
  },
  {
    name: "Forensic Chemistry & Toxicology",
    category: "Technical & Subject",
    level: "Proficient",
    description: "Chemical spot testing, qualitative reagent preparation, understanding chromatographic separation (TLC), and poison classification.",
    iconName: "FlaskConical"
  },
  {
    name: "Questioned Document Examination",
    category: "Technical & Subject",
    level: "Proficient",
    description: "Handwriting comparison, signature stroke analysis, identification of indentations, erasures, alterations, and counterfeit document features.",
    iconName: "FileSearch"
  },
  {
    name: "Cyber Forensics Basics",
    category: "Technical & Subject",
    level: "Fundamental",
    description: "Basic digital evidence handling, disk imaging protocols, write-blocker usage, hash generation (MD5/SHA256) for evidence integrity.",
    iconName: "Binary"
  },
  {
    name: "Report Documentation",
    category: "Technical & Subject",
    level: "Core Competency",
    description: "Drafting standardized forensic observation logs, evidence transfer vouchers, analytical test logs, and investigative summaries.",
    iconName: "FileText"
  },
  {
    name: "MS Office Suite",
    category: "Technical & Subject",
    level: "Proficient",
    description: "Microsoft Word (formal forensic reports), Excel (laboratory inventory and data tabulation), PowerPoint (case presentations).",
    iconName: "Laptop"
  }
];

export const professionalSkills: SkillItem[] = [
  {
    name: "Analytical & Critical Thinking",
    category: "Professional",
    level: "Core Competency",
    description: "Evaluating complex crime scenarios objectively without cognitive bias; formulating hypothesis based purely on empirical physical traces.",
    iconName: "Brain"
  },
  {
    name: "Attention to Detail",
    category: "Professional",
    level: "Core Competency",
    description: "High precision in observing microscopic trace evidence, subtle fingerprint minutiae, and slight handwriting variations.",
    iconName: "Eye"
  },
  {
    name: "Problem Solving",
    category: "Professional",
    level: "Core Competency",
    description: "Methodical approach to overcoming experimental obstacles and reconstructing crime scene timelines step-by-step.",
    iconName: "Sparkles"
  },
  {
    name: "Written & Verbal Communication",
    category: "Professional",
    level: "Proficient",
    description: "Translating scientific laboratory findings into clear, unambiguous reports and structured oral summaries suitable for judicial review.",
    iconName: "MessageSquare"
  },
  {
    name: "Teamwork & Ethics",
    category: "Professional",
    level: "Core Competency",
    description: "Unwavering commitment to forensic ethics, truthfulness, impartiality, and seamless coordination with multi-disciplinary investigative teams.",
    iconName: "Users"
  }
];

export const languages: Language[] = [
  {
    name: "Hindi",
    proficiency: "Native / Bilingual",
    levelDesc: "Native fluency in verbal articulation, technical comprehension, and formal writing.",
    native: true
  },
  {
    name: "English",
    proficiency: "Professional Working Proficiency",
    levelDesc: "Professional competence in scientific literature reading, technical report drafting, and academic presentations.",
    native: false
  }
];

export const achievements: Achievement[] = [
  {
    title: "Completed Senior Secondary (Class XII) with First Division",
    organization: "Shri Gurukul Vidhya Ashram, Rajasthan",
    year: "2026",
    description: "Graduated with First Division honors in Science stream, exhibiting strong theoretical grounding in Physics, Chemistry, and biological sciences.",
    badge: "First Division Honors"
  },
  {
    title: "Admission into B.Sc. Forensic Science & Technology",
    organization: "JECRC University, Jaipur",
    year: "2026",
    description: "Admitted into the specialized undergraduate degree program at JECRC University, pursuing an intensive curriculum in criminalistics and laboratory forensics.",
    badge: "Undergraduate Scholar"
  },
  {
    title: "Laboratory Safety & Protocol Training",
    organization: "JECRC Forensic Science Department",
    year: "2026",
    description: "Trained in standard chemical handling, biosafety measures, anti-contamination PPE procedures, and chain-of-custody documentation.",
    badge: "Lab Safety Ready"
  }
];

export const investigativePillars = [
  {
    title: "Crime Scene Investigation",
    tagline: "Methodical scene preservation & evidence recovery",
    description: "Applying systematic search patterns, strict perimeter control, and detailed photographic logging to ensure zero contamination of critical evidence.",
    icon: "ShieldAlert"
  },
  {
    title: "Forensic Serology & Chemistry",
    tagline: "Qualitative screening & biological typing",
    description: "Conducting presumptive reagent testing, micro-chemical analysis of unknown compounds, and biological fluid characterization with strict safety protocols.",
    icon: "FlaskConical"
  },
  {
    title: "Physical Pattern Analysis",
    tagline: "Fingerprints & Questioned Documents",
    description: "Examining friction ridge minutiae (Loops, Whorls, Arches) and handwriting stroke variations to provide objective comparative evidence.",
    icon: "Fingerprint"
  },
  {
    title: "Digital Evidence & Chain of Custody",
    tagline: "Cryptographic integrity & legal compliance",
    description: "Documenting transparent chain-of-custody logs, digital hash verifications, and secure packaging to meet evidentiary standards in a court of law.",
    icon: "Binary"
  }
];
