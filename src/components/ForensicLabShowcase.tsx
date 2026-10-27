import React, { useState } from 'react';
import { 
  Fingerprint, 
  FlaskConical, 
  ShieldCheck
} from 'lucide-react';

export const ForensicLabShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fingerprints' | 'chainOfCustody' | 'serology'>('fingerprints');

  // Fingerprint interactive state
  const [selectedPattern, setSelectedPattern] = useState<'loop' | 'whorl' | 'arch'>('whorl');

  // Chain of custody interactive step
  const [activeStep, setActiveStep] = useState<number>(0);

  // Serology reagent test state
  const [selectedReagent, setSelectedReagent] = useState<'kastleMeyer' | 'luminol' | 'ninhydrin' | 'acidPhosphatase'>('kastleMeyer');

  const custodySteps = [
    {
      title: "1. Scene Cordoning & Discovery",
      role: "First Responding Officer / CSI",
      action: "Secure perimeter using barrier tape; log all personnel entering and exiting scene. Identify physical trace item under oblique lighting.",
      protocol: "Strict anti-contamination protocol; nitrile gloves, shoe covers, and scene entry logbook updated."
    },
    {
      title: "2. Systematic In-Situ Documentation",
      role: "Forensic Evidence Technician",
      action: "Photograph evidence with scale (millimeter metric scale), record GPS coordinates, and sketch precise distance from two fixed reference landmarks.",
      protocol: "Macro-photography before physical item disturbance; 90-degree angle lighting."
    },
    {
      title: "3. Packaging & Tamper-Evident Sealing",
      role: "Evidence Custodian",
      action: "Package in breathable porous paper bag (for biologicals) or rigid container. Affix tamper-evident security tape signed and dated across seam.",
      protocol: "Unique Barcode / Serial tag assigned (e.g. AC-FST-EV-042). Air-dry moist biological samples."
    },
    {
      title: "4. Laboratory Transfer & Logging",
      role: "Forensic Laboratory Intake Officer",
      action: "Physical handover verified; recipient inspects seal integrity, verifies barcode, and countersigns the Chain of Custody Form.",
      protocol: "Stored in temperature-regulated, access-controlled forensic vault pending analysis."
    },
    {
      title: "5. Analysis & Judicial Presentation",
      role: "Forensic Scientist (Expert Witness)",
      action: "Case examiner breaks seal in designated clean room, completes bench examination notes, and compiles official forensic report for court submission.",
      protocol: "Admissibility under Indian Evidence Act / BNSS; transparent audit trail."
    }
  ];

  const reagentData = {
    kastleMeyer: {
      name: "Kastle-Meyer (Phenolphthalein) Test",
      target: "Presumptive identification of blood (Hemoglobin)",
      reagent: "Reduced phenolphthalein + Hydrogen Peroxide (H2O2)",
      result: "Immediate bright pink / magenta coloration within 5 seconds",
      colorClass: "bg-pink-500",
      significance: "High sensitivity test for trace bloodstains; eliminates non-hemic reddish stains."
    },
    luminol: {
      name: "Luminol Chemiluminescence",
      target: "Latent / washed bloodstain visualization",
      reagent: "Luminol + Oxidizing agent (Sodium Perborate)",
      result: "Vibrant blue-cyan chemiluminescent glow in complete darkness",
      colorClass: "bg-cyan-400",
      significance: "Uncovers wiped blood patterns across large surface areas at crime scenes."
    },
    ninhydrin: {
      name: "Ninhydrin Formulation",
      target: "Latent fingerprints on porous surfaces (paper, cardboard)",
      reagent: "Ninhydrin solution reacting with amino acids in skin perspiration",
      result: "Ruhemann's Purple color change under gentle heat & humidity",
      colorClass: "bg-purple-500",
      significance: "Essential for Questioned Documents, forged cheques, and ransom letters."
    },
    acidPhosphatase: {
      name: "Acid Phosphatase (Brentamine) Test",
      target: "Presumptive detection of seminal fluid",
      reagent: "Alpha-naphthyl phosphate + Fast Blue B salt",
      result: "Deep intense purple / violet coloration within 30 seconds",
      colorClass: "bg-indigo-500",
      significance: "Critical primary screening tool in sexual assault evidence processing."
    }
  };

  return (
    <section id="lab-toolkit" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <FlaskConical className="h-3.5 w-3.5" />
            <span>Interactive Practical Demonstration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Forensic Investigation & Laboratory Workbench
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Experience an interactive overview of core forensic disciplines: fingerprint ridge analysis, strict chain of custody protocols, and presumptive serology tests.
          </p>
        </div>

        {/* Interactive Workbench Container */}
        <div className="rounded-3xl border border-cyan-500/30 bg-slate-900/90 shadow-2xl overflow-hidden">
          {/* Top Bar Switcher */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 sm:px-8 py-3.5 gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                SIMULATION BENCH // JECRC LAB READY
              </span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('fingerprints')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'fingerprints'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Fingerprint className="h-3.5 w-3.5" />
                <span>Fingerprint Classification</span>
              </button>

              <button
                onClick={() => setActiveTab('chainOfCustody')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'chainOfCustody'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Chain of Custody</span>
              </button>

              <button
                onClick={() => setActiveTab('serology')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'serology'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FlaskConical className="h-3.5 w-3.5" />
                <span>Serology Reagents</span>
              </button>
            </div>
          </div>

          {/* Workbench Body */}
          <div className="p-6 sm:p-10">
            {/* TAB 1: FINGERPRINTS */}
            {activeTab === 'fingerprints' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-bold">
                    Dactyloscopy & Ridge Pattern Mapping
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Friction Ridge Pattern Analysis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Fingerprint identification relies on two unalterable scientific principles: <em>permanence</em> (persisting from birth to decomposition) and <em>individuality</em> (no two fingerprints are identical).
                  </p>

                  {/* Pattern Selector */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => setSelectedPattern('whorl')}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
                        selectedPattern === 'whorl'
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      Whorl (~30-35%)
                    </button>
                    <button
                      onClick={() => setSelectedPattern('loop')}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
                        selectedPattern === 'loop'
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      Loop (~60-65%)
                    </button>
                    <button
                      onClick={() => setSelectedPattern('arch')}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition ${
                        selectedPattern === 'arch'
                          ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      Arch (~5%)
                    </button>
                  </div>

                  {/* Key Minutiae Characteristics */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold text-slate-300">Minutiae Points Examined:</div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <strong className="text-cyan-400">Bifurcation:</strong> Ridge dividing into two branches
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <strong className="text-cyan-400">Ridge Ending:</strong> Abrupt termination of ridge line
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <strong className="text-cyan-400">Island / Dot:</strong> Isolated single ridge point
                      </div>
                      <div className="p-2 rounded bg-slate-950 border border-slate-800">
                        <strong className="text-cyan-400">Delta & Core:</strong> Tri-radiate landmark points
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Diagram Representation */}
                <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-950 border border-slate-800 relative">
                  <div className="relative w-64 h-64 flex items-center justify-center rounded-2xl border border-cyan-500/40 bg-slate-900/60 shadow-inner">
                    {/* Concentric / Morphing SVG fingerprint representation */}
                    <svg viewBox="0 0 100 100" className="w-48 h-48 text-cyan-400 stroke-current fill-none stroke-[1.8] stroke-linecap-round">
                      {selectedPattern === 'whorl' && (
                        <>
                          <circle cx="50" cy="50" r="8" />
                          <circle cx="50" cy="50" r="16" strokeDasharray="3 2" />
                          <circle cx="50" cy="50" r="24" />
                          <circle cx="50" cy="50" r="32" strokeDasharray="4 2" />
                          <circle cx="50" cy="50" r="40" />
                          {/* Deltas */}
                          <polygon points="20,70 24,76 16,76" fill="currentColor" opacity="0.6" />
                          <polygon points="80,70 84,76 76,76" fill="currentColor" opacity="0.6" />
                        </>
                      )}
                      {selectedPattern === 'loop' && (
                        <>
                          <path d="M 50,85 C 50,55 35,35 50,20 C 65,35 50,55 50,85" />
                          <path d="M 42,88 C 42,50 25,30 50,12 C 75,30 58,50 58,88" />
                          <path d="M 34,90 C 34,45 15,25 50,4 C 85,25 66,45 66,90" />
                          {/* Delta */}
                          <polygon points="24,75 28,81 20,81" fill="currentColor" opacity="0.6" />
                        </>
                      )}
                      {selectedPattern === 'arch' && (
                        <>
                          <path d="M 15,75 C 35,50 65,50 85,75" />
                          <path d="M 15,62 C 35,37 65,37 85,62" />
                          <path d="M 15,49 C 35,24 65,24 85,49" />
                          <path d="M 15,36 C 35,11 65,11 85,36" />
                          <path d="M 20,23 C 38,4 62,4 80,23" />
                        </>
                      )}
                    </svg>

                    {/* Scan effect line */}
                    <div className="absolute inset-x-0 h-0.5 bg-cyan-400/80 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                      Pattern: {selectedPattern.toUpperCase()} ({selectedPattern === 'whorl' ? 'Two deltas + central circuit' : selectedPattern === 'loop' ? 'One delta + recurving ridge' : 'Wave pattern + zero deltas'})
                    </span>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Latent print development: Black magnetic powder / Ninhydrin solution / Cyanoacrylate fuming chamber.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CHAIN OF CUSTODY */}
            {activeTab === 'chainOfCustody' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Evidence Integrity & Chain of Custody Pipeline
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Click through each stage to view the forensic protocol required to ensure evidence survives judicial cross-examination.
                  </p>
                </div>

                {/* Step navigation badges */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
                  {custodySteps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-xl text-left border transition ${
                        activeStep === idx
                          ? 'border-cyan-400 bg-cyan-950/60 text-white shadow-md shadow-cyan-950'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-cyan-400">PHASE 0{idx + 1}</div>
                      <div className="text-xs font-bold truncate mt-0.5">{step.title.split('. ')[1]}</div>
                    </button>
                  ))}
                </div>

                {/* Active Step Details Card */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <h4 className="text-base font-bold text-white">
                      {custodySteps[activeStep].title}
                    </h4>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                      Responsible: {custodySteps[activeStep].role}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-400 font-medium">Standard Operating Procedure:</span>
                      <p className="text-slate-200 mt-1 leading-relaxed">
                        {custodySteps[activeStep].action}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-200/90 text-xs">
                      <strong className="text-cyan-300">Evidentiary Protocol: </strong>
                      {custodySteps[activeStep].protocol}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: SEROLOGY */}
            {activeTab === 'serology' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-bold">
                    Forensic Serology & Presumptive Chemistry
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Chemical Spot Tests & Reagents
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Presumptive tests provide rapid qualitative indication at crime scenes before confirmatory laboratory tests (micro-crystal and DNA profiling) are conducted.
                  </p>

                  {/* Reagent Buttons */}
                  <div className="space-y-2 pt-2">
                    {Object.entries(reagentData).map(([key, val]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedReagent(key as any)}
                        className={`w-full text-left p-3 rounded-xl text-xs font-semibold border transition flex items-center justify-between ${
                          selectedReagent === key
                            ? 'border-cyan-400 bg-cyan-950/60 text-white'
                            : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>{val.name}</span>
                        <div className={`h-3 w-3 rounded-full ${val.colorClass}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reagent Inspection Card */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h4 className="text-base font-bold text-white">
                      {reagentData[selectedReagent].name}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-700">
                      PRESUMPTIVE TEST
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400">Target Analyte:</span>
                      <p className="font-semibold text-white mt-0.5">{reagentData[selectedReagent].target}</p>
                    </div>

                    <div>
                      <span className="text-slate-400">Chemical Composition:</span>
                      <p className="text-slate-300 mt-0.5">{reagentData[selectedReagent].reagent}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                      <div className={`h-6 w-6 rounded-lg ${reagentData[selectedReagent].colorClass} shrink-0 shadow-lg`} />
                      <div>
                        <div className="text-[11px] text-slate-400 font-semibold uppercase">Observable Reaction:</div>
                        <div className="text-xs text-white font-medium">{reagentData[selectedReagent].result}</div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
                      <strong className="text-cyan-400">Significance: </strong>
                      {reagentData[selectedReagent].significance}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
