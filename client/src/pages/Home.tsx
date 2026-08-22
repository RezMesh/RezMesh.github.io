/**
 * Coordinate Field design system: technical editorial layout using navy boundary rules,
 * mesh-teal operational signals, and evidence-forward content for RezMesh.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Github,
  Menu,
  Moon,
  Network,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react";

const links = {
  github: "https://github.com/SMozaff/RezMesh",
  personal: "https://SMozaff.github.io/",
  ifem: "https://IFEM-doctrine.github.io/",
  orcid: "https://orcid.org/0009-0001-2428-1295",
};

const architecture = [
  {
    index: "01",
    title: "Android interface",
    eyebrow: "Kotlin · Jetpack Compose",
    body: "Status, messaging, contacts, push-to-talk, SOS, diagnostics, and an English/Farsi runtime-switchable interface sit at the device boundary.",
    tone: "teal",
  },
  {
    index: "02",
    title: "Radio transport",
    eyebrow: "BLE · Wi-Fi Direct",
    body: "BLE advertising, scanning, and GATT unicast are handled in the Android radio service. Wi-Fi Direct group formation and socket transport are implemented; mesh relaying over it remains a stated gap.",
    tone: "blue",
  },
  {
    index: "03",
    title: "Rust mesh core",
    eyebrow: "JNI · Routing · Power",
    body: "The native core owns BATMAN-Adv-style routing, packet handling, sessions, crypto wrappers, and the seven-state power machine.",
    tone: "amber",
  },
  {
    index: "04",
    title: "Security & persistence",
    eyebrow: "Rust/C · SQLCipher",
    body: "vodozemac-backed session handling, libsodium primitives, Android Keystore-backed identity storage, and encrypted local persistence establish separate security responsibilities.",
    tone: "navy",
  },
];

const evidence = [
  ["Rust workspace", "rezvan-common · rezvan-core · rezvan-crypto"],
  ["Interface checks", "scripts/verify_interfaces.py"],
  ["Integration harness", "2-node · 5-node · emergency broadcast cases"],
  ["Build evidence", "GitHub Actions · Gradle · cargo-ndk"],
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label-line" />
      <p>{children}</p>
    </div>
  );
}

function MeshMark({ className = "" }: { className?: string }) {
  return (
    <img
      className={`mesh-mark ${className}`}
      src="/manus-storage/rezmesh-layer-mark_5b83e1e1.png"
      alt="Abstract stacked mesh mark"
    />
  );
}

function StatusPill({ children, variant = "neutral" }: { children: string; variant?: "neutral" | "warning" }) {
  return <span className={`status-pill ${variant}`}>{children}</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="coordinate-spine" aria-hidden="true">
        <span className="spine-rule" />
        <span className="spine-node node-a">01</span>
        <span className="spine-node node-b">02</span>
        <span className="spine-node node-c">03</span>
        <span className="spine-node node-d">04</span>
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="RezMesh home" onClick={closeMenu}>
          <span className="brand-mark-cage"><MeshMark /></span>
          <span className="brand-copy">
            <strong>REZVANMESH</strong>
            <small>TECHNICAL CASE STUDY</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#architecture" onClick={closeMenu}>Architecture</a>
          <a href="#method" onClick={closeMenu}>IFEM relation</a>
          <a href="#evidence" onClick={closeMenu}>Evidence</a>
          <a href="#record" onClick={closeMenu}>Record</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle colour theme">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-source" href={links.github} target="_blank" rel="noreferrer">
            <Github size={16} /> <span>Source</span><ArrowUpRight size={15} />
          </a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-rail rail-copy">
            <p className="eyebrow"><span className="signal-dot" />Project record / RM-01</p>
            <h1>RezMesh<br /><em>resilient communication,</em><br />built by <span>boundaries.</span></h1>
            <p className="hero-summary">RezMesh is a resilient Android communication framework designed for device-to-device networking when centralized infrastructure is unavailable. Architected with IFEM principles, it separates interfaces, transport, routing, security, and verification responsibilities.</p>
            <div className="hero-actions">
              <a className="button primary" href={links.github} target="_blank" rel="noreferrer">Inspect repository <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#architecture">Trace the system <ArrowDownRight size={18} /></a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-meta top-meta"><span>FIELD VIEW / 2026</span><span>ANDROID 8.0+</span></div>
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <img src="/manus-storage/rezmesh-hero-geometry_55967f08.png" alt="Abstract layered network topology" />
            <span className="visual-datum datum-a">01 / BLE LINK</span>
            <span className="visual-datum datum-b">02 / CORE BOUNDARY</span>
            <span className="visual-datum datum-c">03 / RELAY PATH</span>
            <div className="visual-caption"><span className="caption-node" /> An abstract view of topology, links, and separable layers.</div>
            <span className="corner corner-bl" />
            <span className="corner corner-br" />
          </div>

          <div className="hero-footnote">
            <span className="foot-index">01 / 04</span>
            <p>Android interface &amp; radio control <i>→</i> JNI boundary <i>→</i> Rust routing, sessions &amp; crypto</p>
          </div>
        </section>

        <section className="signal-band" aria-label="Project technologies">
          <p>DEVICE-TO-DEVICE</p><span />
          <p>BLE + WI-FI DIRECT</p><span />
          <p>KOTLIN ↔ RUST</p><span />
          <p>LOCAL ENCRYPTION</p>
        </section>

        <section className="capability-section section-shell">
          <SectionLabel number="00">Core capabilities</SectionLabel>
          <div className="capability-grid">
            <article><strong>Offline networking</strong><p>Device-to-device communication without dependence on centralized infrastructure.</p></article>
            <article><strong>Layered architecture</strong><p>Clear separation between Android, transport, native core, and security responsibilities.</p></article>
            <article><strong>Secure communication</strong><p>Cryptographic boundaries and local persistence designed as explicit components.</p></article>
            <article><strong>IFEM-oriented design</strong><p>Interfaces, contracts, and verification points remain visible throughout the system.</p></article>
          </div>
        </section>

        <section id="architecture" className="architecture section-shell">
          <SectionLabel number="01">System architecture</SectionLabel>
          <div className="section-heading architecture-heading">
            <p className="eyebrow">Four responsibilities / explicit interfaces</p>
            <h2>The communication stack is not one <span className="research-note">black box.</span></h2>
            <p>Repository structure places platform interaction, radio transport, native mesh operations, and cryptographic persistence in distinct layers. JNI is the declared crossing point between Android and the Rust core.</p>
          </div>

          <div className="architecture-layout">
            <div className="architecture-cards">
              {architecture.map((item) => (
                <article className={`architecture-card ${item.tone}`} key={item.index}>
                  <div className="card-index">{item.index}</div>
                  <p className="card-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <figure className="topology-figure">
              <img src="/manus-storage/rezmesh-topology-detail_dff0af72.png" alt="Abstract network topology mesh" />
              <figcaption><span>TOPOLOGY STUDY</span> The project’s network is a communications mesh—not a geometry-processing product.</figcaption>
            </figure>
          </div>
        </section>

        <section id="method" className="method-section section-shell">
          <SectionLabel number="02">Method relationship</SectionLabel>
          <div className="method-grid">
            <div className="method-copy">
              <p className="eyebrow"><span className="signal-dot" />Built with IFEM principles</p>
              <h2>A framework.<br />A <em>methodology.</em><br />A visible boundary.</h2>
              <p>RezMesh is the communication framework. IFEM is the architectural methodology that treats interfaces, contracts, responsibilities, and verification as deliberate design objects. The Kotlin/Rust JNI boundary, discrete radio and core duties, and verification tooling make that relationship legible in the repository.</p>
              <a className="text-link long" href={links.ifem} target="_blank" rel="noreferrer">Read the IFEM Doctrine <ExternalLink size={17} /></a>
            </div>
            <div className="method-model">
              <div className="model-head"><span>IFEM / APPLICATION MAPPING</span><span>02.1</span></div>
              <div className="layer teal-layer"><span>EXPERIENCE</span><b>Compose UI &amp; device actions</b></div>
              <div className="layer blue-layer"><span>SERVICE</span><b>Radio transport &amp; persistence</b></div>
              <div className="layer amber-layer"><span>CORE</span><b>Routing, sessions &amp; crypto</b></div>
              <div className="interface-pin pin-left">CONTRACT</div>
              <div className="interface-pin pin-right">VERIFY</div>
              <div className="model-foot"><span><Check size={15} /> Responsibilities separated</span><span><Check size={15} /> Boundaries inspectable</span></div>
            </div>
          </div>
        </section>

        <section className="processing-section section-shell">
          <div className="processing-visual"><img src="/manus-storage/rezmesh-pipeline-visual_d99a4ecf.png" alt="Abstract system layers in a vertical communication pipeline" /></div>
          <div className="processing-copy">
            <p className="eyebrow">Processing path / constrained by implementation</p>
              <h2>From local event to <span className="research-note">mesh relay.</span></h2>
            <ol className="process-list">
              <li><span>01</span><div><strong>Compose event</strong><p>A user action begins at the Android UI boundary.</p></div></li>
              <li><span>02</span><div><strong>Radio service</strong><p>BLE or Wi-Fi Direct handles device-side transport concerns.</p></div></li>
              <li><span>03</span><div><strong>JNI bridge</strong><p>A declared native interface carries requests into the Rust workspace.</p></div></li>
              <li><span>04</span><div><strong>Mesh core</strong><p>Routing, session, cryptographic, and power responsibilities execute independently.</p></div></li>
            </ol>
          </div>
        </section>

        <section id="evidence" className="evidence-section section-shell">
          <SectionLabel number="03">Technical evidence</SectionLabel>
          <div className="evidence-heading">
            <div>
              <p className="eyebrow">Source over assertion</p>
              <h2>Evidence that can be <span className="research-note">inspected.</span></h2>
            </div>
            <p>This record distinguishes implemented components, documented validation, and known constraints. It does not represent pending physical-device validation as a completed outcome.</p>
          </div>
          <div className="evidence-grid">
            <a className="source-card source-card-main" href={links.github} target="_blank" rel="noreferrer">
              <div className="source-card-top"><Github size={24} /><ArrowUpRight size={20} /></div>
              <p className="eyebrow">Primary source</p>
              <h3>RezMesh<br />repository</h3>
              <p>Source structure, README, build tooling, integration test cases, and project documentation.</p>
              <span className="source-url">github.com/SMozaff/RezMesh</span>
            </a>
            <div className="evidence-list">
              {evidence.map(([label, detail]) => <div className="evidence-row" key={label}><span className="evidence-check"><Check size={15} /></span><div><strong>{label}</strong><p>{detail}</p></div></div>)}
            </div>
            <div className="status-panel">
              <p className="eyebrow">Repository-declared status</p>
              <StatusPill variant="warning">BETA / FUNCTIONAL TESTING</StatusPill>
              <p>Unit tests and the integration harness are present. The repository lists physical two-device GATT delivery, receiver-side voice playback, and real 3+ device mesh stability as pending validation.</p>
              <a href={links.github} target="_blank" rel="noreferrer">Read known limitations <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="reference-panel section-shell">
          <img src="/manus-storage/rezmesh-ifem-method_c609731a.png" alt="Conceptual visual of separated interfaces and modules" />
          <div className="reference-overlay">
            <p className="eyebrow">Architectural reading</p>
            <h2>Explicit interfaces make<br />responsibility <span className="research-note">legible.</span></h2>
            <a className="button light" href={links.ifem} target="_blank" rel="noreferrer">Explore the methodology <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section id="record" className="record-section section-shell">
          <SectionLabel number="04">Project record</SectionLabel>
          <div className="record-grid">
            <div className="attribution">
              <p className="eyebrow">Developed by</p>
              <h2>Soheil<br /><em>Mozaffari</em></h2>
              <p>Software Engineer · Systems Architect</p>
              <div className="profile-links">
                <a href={links.personal} target="_blank" rel="noreferrer">Personal website <ArrowUpRight size={16} /></a>
                <a href={links.ifem} target="_blank" rel="noreferrer">IFEM Doctrine <ArrowUpRight size={16} /></a>
                <a href={links.orcid} target="_blank" rel="noreferrer">ORCID 0009-0001-2428-1295 <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="record-note">
              <div className="record-mark-wrap"><img src="/manus-storage/ifem-doctrine-supplied-mark_d7dbfabb.png" alt="IFEM Doctrine logo provided by the project" /></div>
              <p className="eyebrow">About this project</p>
              <p>RezMesh is a practical case study in a communication system where platform controls, radio behavior, routing, cryptography, and verification must be stated as separate engineering concerns.</p>
              <a className="text-link" href={links.personal} target="_blank" rel="noreferrer">Return to selected work <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><MeshMark /><span>REZVANMESH</span></div>
        <p>RezMesh / IFEM engineering case study</p>
        <a href="#top">Back to top <ChevronDown size={15} /></a>
      </footer>
    </div>
  );
}
