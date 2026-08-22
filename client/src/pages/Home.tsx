/**
 * Signal Field design system: bilingual editorial systems-cartography.
 * The interface supports an explicit top-level Farsi/English switch and mirrors its reading direction per language.
 */
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpLeft,
  BatteryMedium,
  Binary,
  ChevronDown,
  Code2,
  CopyCheck,
  Database,
  ExternalLink,
  FileCode2,
  Github,
  Globe2,
  Layers3,
  Menu,
  Moon,
  Network,
  Pause,
  Play,
  Radio,
  ShieldCheck,
  Signal,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Language = "fa" | "en";

const ASSETS = {
  repositoryMark: "/assets/rezvanmesh-mark.webp",
  ifemMark: "/assets/ifem-doctrine-mark.webp",
  cube: "/assets/rezvanmesh-cube.webp",
  networkScreen: "/assets/rezvanmesh-network-screen.webp",
  emergencyScreen: "/assets/rezvanmesh-emergency-screen.webp",
  radioRustBoundary: "/assets/rezvanmesh-radio-rust-boundary.webp",
};

const languageCopy = {
  fa: {
    languageName: "فارسی",
    languageControl: "انتخاب زبان",
    themeLabel: "تغییر حالت نمایش",
    menuOpen: "باز کردن ناوبری",
    menuClose: "بستن ناوبری",
    brandHome: "RezvanMesh — بازگشت به آغاز",
    nav: [["معماری", "#architecture"], ["IFEM", "#ifem"], ["شواهد فنی", "#evidence"], ["توسعه‌دهنده", "#developer"]],
    record: "پروندهٔ فنی / ۰۰۱",
    heroKicker: "ارتباط همتا‌به‌همتا، خارج از شبکه، روی Android",
    heroTitle: "یک مسیر ارتباطی که به زیرساخت مرکزی وابسته نیست.",
    heroLead: "یک برنامهٔ ارتباطی مش برای Android است که برای پیام‌رسانی تاب‌آور در خاموشی اینترنت و اختلال زیرساخت طراحی شده؛ بدون اتکا به اینترنت، دکل مخابراتی یا سرور مرکزی.",
    explore: "کاوش معماری",
    openRepository: "باز کردن مخزن",
    projectSummary: "خلاصهٔ وضعیت پروژه",
    cubeAlt: "نماد مکعب سیمی آبی و فیروزه‌ای، به‌عنوان نمایهٔ بصری ساختار مش",
    fieldNote: "طراحی پیرامون مرزهای صریح: UI، رادیو، هستهٔ مش و کریپتو.",
    scope: "دامنهٔ قابل‌بررسی",
    sharing: {
      title: "RezvanMesh | پروندهٔ فنی ارتباط خارج از شبکه",
      description: "یک پروندهٔ فنی مبتنی بر مخزن برای RezvanMesh؛ سامانهٔ ارتباط مش Android با Kotlin، Rust، BLE، رمزنگاری و ذخیره‌سازی رمز‌شده.",
      twitterTitle: "RezvanMesh | پروندهٔ مهندسی ارتباط خارج از شبکه",
      locale: "fa_IR",
    },
    architecture: {
      index: "۰۱",
      rail: "ARCHITECTURE",
      eyebrow: "نقشهٔ سامانه",
      title: "لایه‌ها در امتداد رابط‌ها تعریف شده‌اند، نه درهم‌تنیده.",
      text: "ساختار مخزن، مسئولیت‌های رابط کاربر، انتقال رادیویی، پردازش مش و حفاظت داده را از هم تفکیک می‌کند. اینجا همان لایه‌هایی آمده‌اند که کد و مستندات پروژه نشان می‌دهند.",
      noteLead: "پیوند زبان‌ها:",
      note: "رابط JNI، Kotlin/Android را به MeshEngine در Rust وصل می‌کند؛ ابزار بررسی رابط و مرحلهٔ cross-compile بخشی از گردش‌کار ساخت هستند.",
      noteLabel: "باز کردن اسکریپت‌های ساخت",
      diagram: {
        eyebrow: "رکورد مرز اجرایی",
        title: "رادیو در Android؛ تصمیم‌گیری در Rust.",
        text: "RezvanRadioService بسته‌های دریافتی، RSSI و زمان را از مسیر MeshCore به هستهٔ بومی می‌فرستد. MeshEngine نیز بایت‌های عمل را برای صف انتقال Android بازمی‌گرداند.",
        source: "SOURCE / MeshCore.kt + RezvanRadioService.kt",
        interactionHint: "برای جزئیات هر جزء، نشانگرها را نگه دارید یا با کلید Tab روی آن‌ها تمرکز کنید.",
        flow: {
          title: "نمایش جریان بسته",
          text: "یک مسیر سطح‌بالا از جریان بسته را میان اجزای پیاده‌سازی‌شده نمایش می‌دهد؛ این نمایش جایگزین ثبت تشخیصی یا تأیید تحویل نیست.",
          inbound: "دریافت → Rust",
          outbound: "Rust → ارسال",
          play: "نمایش حرکت",
          pause: "توقف حرکت",
          reduce: "کاهش حرکت",
          fullMotion: "حرکت کامل",
          systemReduced: "تنظیم سیستم، حرکت را کاهش داده است.",
          static: "نمایش ایستا",
          stages: {
            inbound: [
              ["01", "دریافت رادیویی", "بستهٔ BLE/GATT همراه RSSI وارد RezvanRadioService می‌شود.", ["47%", "89%"]],
              ["02", "عبور از JNI", "MeshCore، nativeProcessIncoming را با بسته، RSSI و زمان فراخوانی می‌کند.", ["52%", "46%"]],
              ["03", "تصمیم مش", "MeshEngine بسته را برای مسیریابی، نشست و وضعیت توان پردازش می‌کند.", ["10%", "68%"]],
            ],
            outbound: [
              ["01", "خروجی عمل بومی", "MeshEngine یک جریان بایت عمل برای Android بازمی‌گرداند.", ["10%", "68%"]],
              ["02", "واگشایی و dispatch", "ActionDispatcher قاب عمل را باز می‌کند و عمل انتقال را انتخاب می‌کند.", ["56%", "70%"]],
              ["03", "صف انتقال محلی", "RadioControllerImpl ارسال را به‌عنوان پذیرش محلی در صف BLE/GATT قرار می‌دهد.", ["47%", "89%"]],
            ],
          },
        },
        items: [
          ["ANDROID SIDE", "RezvanRadioService، RadioControllerImpl و ActionDispatcher انتقال و صف رادیویی را هدایت می‌کنند."],
          ["JNI CONTRACT", "بسته‌ها، RSSI، زمان و وضعیت باتری وارد می‌شوند؛ بایت‌های عمل برای dispatch بازمی‌گردند."],
          ["RUST SIDE", "MeshEngine، مسیریابی، نشست و وضعیت توان را در پیوند با کریپتو نگه می‌دارد."],
        ],
        tooltips: [
          ["01", "Jetpack Compose UI", "رویدادهای پیام، SOS و تنظیمات را به سرویس عملیاتی می‌فرستد.", ["36.5%", "7%"], "cyan"],
          ["02", "RezvanRadioService", "یک سرویس پیش‌زمینه که کنترل‌کنندهٔ رادیو را نگه می‌دارد، هسته را آغاز می‌کند و nativeTick را به‌صورت دوره‌ای فراخوانی می‌کند.", ["37%", "24%"], "cyan"],
          ["03", "MeshCore / JNI", "یک wrapper در Kotlin برای فراخوانی‌های native مانند nativeProcessIncoming، nativeSendMessage و nativeTick.", ["52%", "46%"], "amber"],
          ["04", "ActionDispatcher", "بایت‌های عملِ بازگشتی را بررسی می‌کند و آن‌ها را برای تبلیغات BLE، اسکن یا ارسال محلی به کنترل‌کنندهٔ رادیو می‌سپارد.", ["56%", "70%"], "green"],
          ["05", "RadioControllerImpl", "لایهٔ انتقال Android برای اسکن BLE، تبلیغات، GATT و انتقال WiFi Direct.", ["47%", "89%"], "cyan"],
          ["06", "MeshEngine", "هستهٔ Rust برای مسیریابی، نشست‌ها و وضعیت توان؛ اینجا تصمیم‌های مش خارج از سرویس Android گرفته می‌شوند.", ["10%", "68%"], "blue"],
          ["07", "CryptoProvider", "مسئول هویت، امضا و عملیات رمزنگاری در سمت native است.", ["10%", "89%"], "blue"],
          ["08", "Boundary contract", "داده‌های ورودی شامل بایت بسته، RSSI، زمان و وضعیت باتری هستند؛ خروجی بایت‌های عمل برای dispatch در Android است.", ["86%", "26%"], "slate"],
        ],
      },
      layers: [
        ["رابط کاربر و جریان‌های عملیاتی", "KOTLIN · JETPACK COMPOSE", "رابط کاربری در Kotlin و Jetpack Compose، جریان‌های وضعیت، پیام، مخاطب، کانال، اضطرار و تشخیص را سازمان می‌دهد. پشتیبانی از فارسی و انگلیسی نیز در کد پروژه تعریف شده است."],
        ["رادیو و رابط انتقال", "ANDROID SERVICE · BLE · WIFI DIRECT", "RezvanRadioService و کنترل‌کننده‌های رادیو، اسکن BLE، تبلیغات، GATT و انتقال WiFi Direct را میان برنامهٔ Android و هستهٔ بومی هماهنگ می‌کنند. مسیر رلهٔ WiFi Direct هنوز پیاده‌سازی نشده است."],
        ["هستهٔ مش و پردازش بسته", "RUST · JNI · MESHENGINE", "MeshEngine نوشته‌شده با Rust، مسیریابی الهام‌گرفته از BATMAN-Adv، پردازش بسته، وضعیت توان و مدیریت نشست را پشت یک مرز JNI صریح نگه می‌دارد."],
        ["کریپتو و دادهٔ رمز‌شده", "VODOZEMAC · LIBSODIUM · SQLCIPHER", "هویت، امضا و مسیرهای رمزنگاری در Rust نگهداری می‌شوند؛ داده‌های برنامه با Room و SQLCipher ذخیره می‌شوند. مستندات مخزن وضعیت وابستگی sodiumoxide و برنامهٔ مهاجرت آن را نیز شفاف می‌کند."],
      ],
    },
    ifem: {
      title: "معماری، پیش از پیاده‌سازیِ جزئیات.",
      text: "IFEM یا Interface-First Execution Methodology، روش معماری است؛ RezvanMesh، کاربرد مهندسی آن. در این پرونده، تفکیک مسئولیت‌ها، مرزهای دادهٔ روشن، مراحل پردازش ماژولار و مسیرهای تأییدپذیر، نمود عملی این نگاه‌اند.",
      principles: ["مرزهای محاسباتی جدا", "رابط‌های صریح داده", "مرحله‌بندی ماژولار", "توسعهٔ قابل‌تأیید"],
      link: "مطالعهٔ IFEM Doctrine",
    },
    operating: {
      index: "۰۲",
      eyebrow: "مهندسی تاب‌آوری",
      title: "تبادل، مسیریابی، حفاظت و ثبت تشخیصی در یک زنجیرهٔ قابل‌مشاهده.",
      cards: [
        ["Discovery", "BLE advertisement + GATT", "کشف همسایه و انتقال نقطه‌به‌نقطه در لایهٔ رادیو."],
        ["Relay", "Multi-hop mesh routing", "مسیریابی چندگامی در هستهٔ Rust پیاده‌سازی و آزمون واحد شده است."],
        ["Protect", "On-device crypto + storage", "هویت، رمزنگاری و ذخیره‌سازی محلی با مرزهای مشخص محافظت می‌شوند."],
        ["Endure", "7-state power model", "پارامترهای اسکن با وضعیت توان و باتری سازگار می‌شوند."],
      ],
    },
    screens: {
      eyebrow: "شواهد رابط کاربر",
      title: "دو مسیر کاربردی، در قاب‌های قابل مشاهده.",
      text: "نماهای ارائه‌شده، کنترل وضعیت شبکه و اقدام اضطراری را در رابط Android نشان می‌دهند؛ هر دو با موضوع‌های تشخیص، مسیریابی و هشدار اضطراری که در ساختار پروژه دیده می‌شوند، هم‌راستا هستند.",
      network: { label: "کنترل شبکه", title: "نمای وضعیت و توپولوژی", caption: "نمایش گره‌ها، پیوندها، قدرت سیگنال و توپولوژی شبکه در یک سطح مشاهده‌پذیر." },
      emergency: { label: "اقدام اضطراری", title: "جریان هشدار SOS", caption: "یک مسیر متمرکز برای آماده‌سازی هشدار، انتخاب اطلاعات همراه و ارسال درخواست اضطراری." },
    },
    evidence: {
      index: "۰۳",
      eyebrow: "ردّ مهندسی",
      title: "هر ادعا باید به یک اثر قابل بررسی متصل شود.",
      text: "به‌جای اسکرین‌شات یا ادعای بازاریابی، این بخش به محل‌هایی در مخزن اشاره می‌کند که معماری، قراردادها و مسیرهای بررسی فنی را نشان می‌دهند.",
      statusLead: "یادداشت وضعیت:",
      status: "مخزن، پروژه را در مرحلهٔ Beta / Functional Testing توصیف می‌کند و برخی مسیرهای اعتبارسنجی سخت‌افزار از جمله پایداری مش چنددستگاهی و تحویل GATT را «در حال بررسی» نگه می‌دارد.",
      cards: [
        ["مخزن منبع", "کد، ساختار و تاریخچهٔ قابل بازرسی", "ساختار Android، فضای‌کار Rust، اسکریپت‌های ساخت و آزمون‌های یکپارچه در مخزن عمومی گرد آمده‌اند.", "باز کردن GitHub", "ARTIFACT / SOURCE"],
        ["تأیید رابط‌ها", "مرز JNI به‌عنوان یک قرارداد عملیاتی", "اسکریپت verify_interfaces.py برای بررسی هم‌خوانی رابط‌های Kotlin و Rust در چرخهٔ ساخت وجود دارد.", "مشاهدهٔ اسکریپت‌ها", "BOUNDARY / VERIFIED"],
        ["آزمون", "واحد، یکپارچه و اجرای CI", "فضای‌کار Rust دارای آزمون‌های بسته، کریپتو، مسیریابی، رله و توان است؛ گردش‌کار GitHub Actions نیز ساخت Android و آزمون‌های Rust را اجرا می‌کند.", "بررسی آزمون‌ها", "STATUS / TESTABLE"],
      ],
    },
    developer: { index: "۰۴ / ATTRIBUTION", role: "Software Engineer · Systems Architect", links: "پیوندهای حرفه‌ای", personal: "وب‌سایت شخصی" },
    footer: "یک پروندهٔ فنی دربارهٔ معماری ارتباط خارج از شبکه — مبتنی بر شواهد مخزن.",
    backToTop: "بازگشت به ابتدا",
  },
  en: {
    languageName: "English",
    languageControl: "Language selection",
    themeLabel: "Change display theme",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    brandHome: "RezvanMesh — return to the beginning",
    nav: [["Architecture", "#architecture"], ["IFEM", "#ifem"], ["Technical Evidence", "#evidence"], ["Developer", "#developer"]],
    record: "TECHNICAL RECORD / 001",
    heroKicker: "Peer-to-peer, off-grid communication on Android",
    heroTitle: "A communication path that does not depend on central infrastructure.",
    heroLead: "An Android mesh communication application designed for resilient messaging during internet shutdowns and infrastructure failures—without reliance on the internet, cellular towers, or central servers.",
    explore: "Explore the architecture",
    openRepository: "Open repository",
    projectSummary: "Project status summary",
    cubeAlt: "A cyan and blue wireframe cube used as a visual metaphor for mesh structure",
    fieldNote: "A design organized around explicit boundaries: UI, radio, mesh core, and cryptography.",
    scope: "Inspectable scope",
    sharing: {
      title: "RezvanMesh | Off-Grid Communication Engineering Case Study",
      description: "A repository-backed engineering record for RezvanMesh, an Android mesh communication system built with Kotlin, Rust, BLE, cryptography, and encrypted storage.",
      twitterTitle: "RezvanMesh | Off-Grid Communication Engineering Record",
      locale: "en_US",
    },
    architecture: {
      index: "01",
      rail: "ARCHITECTURE",
      eyebrow: "SYSTEM MAP",
      title: "Layers are defined across interfaces, not intertwined.",
      text: "The repository separates responsibilities for user interface, radio transport, mesh processing, and data protection. These are the layers shown by the project code and documentation.",
      noteLead: "Language boundary:",
      note: "The JNI interface connects Kotlin/Android to MeshEngine in Rust; an interface-verification utility and cross-compilation step are part of the build workflow.",
      noteLabel: "Open build scripts",
      diagram: {
        eyebrow: "EXECUTION BOUNDARY RECORD",
        title: "Radio in Android; decision-making in Rust.",
        text: "RezvanRadioService forwards received packets, RSSI, and time through MeshCore to the native core. MeshEngine returns action bytes for the Android transport queue.",
        source: "SOURCE / MeshCore.kt + RezvanRadioService.kt",
        interactionHint: "Hover over a marker or move keyboard focus to it with Tab for component detail.",
        flow: {
          title: "PACKET FLOW VIEW",
          text: "Shows one high-level packet path across implemented components; this view does not replace diagnostic logging or prove remote delivery.",
          inbound: "RX → Rust",
          outbound: "Rust → TX",
          play: "Play flow",
          pause: "Pause flow",
          reduce: "Reduce motion",
          fullMotion: "Full motion",
          systemReduced: "System preference is reducing motion.",
          static: "Static view",
          stages: {
            inbound: [
              ["01", "Radio receipt", "A BLE/GATT packet with RSSI enters RezvanRadioService.", ["47%", "89%"]],
              ["02", "JNI handoff", "MeshCore calls nativeProcessIncoming with the packet, RSSI, and timestamp.", ["52%", "46%"]],
              ["03", "Mesh decision", "MeshEngine processes the packet for routing, sessions, and power state.", ["10%", "68%"]],
            ],
            outbound: [
              ["01", "Native action output", "MeshEngine returns an action-byte stream for Android.", ["10%", "68%"]],
              ["02", "Parse and dispatch", "ActionDispatcher parses the action frame and selects a transport action.", ["56%", "70%"]],
              ["03", "Local transport queue", "RadioControllerImpl queues a local BLE/GATT send acceptance.", ["47%", "89%"]],
            ],
          },
        },
        items: [
          ["ANDROID SIDE", "RezvanRadioService, RadioControllerImpl, and ActionDispatcher orchestrate radio transport and its local queue."],
          ["JNI CONTRACT", "Packet bytes, RSSI, time, and battery state cross inward; action bytes cross back for dispatch."],
          ["RUST SIDE", "MeshEngine holds routing, sessions, and power state alongside the cryptographic provider."],
        ],
        tooltips: [
          ["01", "Jetpack Compose UI", "Passes messaging, SOS, and settings intents into the operational service.", ["36.5%", "7%"], "cyan"],
          ["02", "RezvanRadioService", "A foreground service that owns the radio controller, initializes the core, and calls nativeTick on a periodic loop.", ["37%", "24%"], "cyan"],
          ["03", "MeshCore / JNI", "A Kotlin wrapper for native calls including nativeProcessIncoming, nativeSendMessage, and nativeTick.", ["52%", "46%"], "amber"],
          ["04", "ActionDispatcher", "Parses returned action bytes and asks the radio controller to advertise, scan, or locally queue a send action.", ["56%", "70%"], "green"],
          ["05", "RadioControllerImpl", "The Android transport layer for BLE scanning, advertising, GATT, and WiFi Direct transport.", ["47%", "89%"], "cyan"],
          ["06", "MeshEngine", "The Rust core for routing, sessions, and power state—the mesh decisions remain outside the Android service.", ["10%", "68%"], "blue"],
          ["07", "CryptoProvider", "Owns native-side identity, signing, and cryptographic operations.", ["10%", "89%"], "blue"],
          ["08", "Boundary contract", "Inputs carry packet bytes, RSSI, time, and battery state; outputs are action bytes for Android dispatch.", ["86%", "26%"], "slate"],
        ],
      },
      layers: [
        ["User interface and operational flows", "KOTLIN · JETPACK COMPOSE", "The Kotlin and Jetpack Compose interface organizes status, messaging, contacts, channels, emergency, and diagnostics flows. The project code also defines Farsi and English UI support."],
        ["Radio and transport interface", "ANDROID SERVICE · BLE · WIFI DIRECT", "RezvanRadioService and radio controllers coordinate BLE scanning, advertising, GATT, and WiFi Direct transport between the Android application and native core. WiFi Direct packet relaying is not yet implemented."],
        ["Mesh core and packet processing", "RUST · JNI · MESHENGINE", "The Rust MeshEngine retains BATMAN-Adv-inspired routing, packet processing, power state, and session management behind an explicit JNI boundary."],
        ["Cryptography and encrypted data", "VODOZEMAC · LIBSODIUM · SQLCIPHER", "Identity, signatures, and cryptographic paths live in Rust; application data is stored through Room and SQLCipher. The repository also documents the sodiumoxide dependency status and migration plan."],
      ],
    },
    ifem: {
      title: "Architecture before implementation detail.",
      text: "IFEM, or Interface-First Execution Methodology, is the architectural method; RezvanMesh is its engineering application. In this record, separated responsibilities, explicit data boundaries, modular processing stages, and verification paths demonstrate that approach.",
      principles: ["Separated computational boundaries", "Explicit data interfaces", "Modular processing stages", "Verification-oriented development"],
      link: "Read the IFEM Doctrine",
    },
    operating: {
      index: "02",
      eyebrow: "RESILIENCE ENGINEERING",
      title: "Exchange, routing, protection, and diagnostics in one inspectable chain.",
      cards: [
        ["Discovery", "BLE advertisement + GATT", "Neighbor discovery and point-to-point transfer in the radio layer."],
        ["Relay", "Multi-hop mesh routing", "Multi-hop routing is implemented and unit-tested within the Rust core."],
        ["Protect", "On-device crypto + storage", "Identity, encryption, and local storage are protected through explicit boundaries."],
        ["Endure", "7-state power model", "Scan parameters adapt to battery and power state."],
      ],
    },
    screens: {
      eyebrow: "INTERFACE EVIDENCE",
      title: "Two operational paths, framed as observable interfaces.",
      text: "The supplied views show network-status control and emergency action within the Android interface; both align with the diagnostics, routing, and emergency-alert concerns visible in the project structure.",
      network: { label: "NETWORK CONTROL", title: "Status and topology view", caption: "Nodes, links, signal strength, and network topology are presented in one observable surface." },
      emergency: { label: "EMERGENCY ACTION", title: "SOS alert flow", caption: "A focused path for preparing an alert, selecting accompanying information, and sending an emergency request." },
    },
    evidence: {
      index: "03",
      eyebrow: "ENGINEERING TRACE",
      title: "Every claim should connect to an inspectable artifact.",
      text: "Rather than using promotional claims or decorative screenshots, this section points to repository locations that expose architecture, contracts, and technical verification paths.",
      statusLead: "Status note:",
      status: "The repository describes the project as Beta / Functional Testing and retains selected hardware-validation paths—such as multi-device mesh stability and GATT delivery—as under review.",
      cards: [
        ["SOURCE REPOSITORY", "Inspectable code, structure, and history", "The public repository holds the Android structure, Rust workspace, build scripts, and integration tests.", "Open GitHub", "ARTIFACT / SOURCE"],
        ["INTERFACE VERIFICATION", "The JNI boundary as an operational contract", "The verify_interfaces.py script checks Kotlin and Rust interface alignment within the build workflow.", "View scripts", "BOUNDARY / VERIFIED"],
        ["TESTING", "Unit, integration, and CI execution", "The Rust workspace includes packet, cryptography, routing, relay, and power tests; GitHub Actions also runs the Rust tests and Android build.", "Inspect tests", "STATUS / TESTABLE"],
      ],
    },
    developer: { index: "04 / ATTRIBUTION", role: "Software Engineer · Systems Architect", links: "Professional links", personal: "Personal website" },
    footer: "A technical record of off-grid communication architecture—grounded in repository evidence.",
    backToTop: "Back to top",
  },
} as const;

const layerIcons = [Layers3, Radio, Network, ShieldCheck];
const layerTones = ["teal", "blue", "amber", "rose"];
const evidenceIcons = [Github, CopyCheck, Terminal];
const evidenceLinks = [
  "https://github.com/SMozaff/RezvanMesh",
  "https://github.com/SMozaff/RezvanMesh/tree/main/scripts",
  "https://github.com/SMozaff/RezvanMesh/tree/main/integration-tests",
];
const operatingIcons = [Radio, Network, ShieldCheck, BatteryMedium];

function getInitialLanguage(): Language {
  if (typeof navigator === "undefined") return "en";
  const languageParam = new URLSearchParams(window.location.search).get("lang");
  if (languageParam === "fa" || languageParam === "en") return languageParam;
  const preferredLocales = [navigator.language, ...navigator.languages].filter(Boolean);
  return preferredLocales.some((locale) => locale.toLowerCase().split("-")[0] === "fa") ? "fa" : "en";
}

function setMetaContent(selector: string, content: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

function setLinkHref(selector: string, href: string) {
  document.head.querySelector<HTMLLinkElement>(selector)?.setAttribute("href", href);
}

function Crosshair({ className = "" }: { className?: string }) {
  return <span className={`crosshair ${className}`} aria-hidden="true" />;
}

function ExternalArrow() {
  return <ArrowUpLeft aria-hidden="true" className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />;
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [flowDirection, setFlowDirection] = useState<"inbound" | "outbound">("inbound");
  const [flowRunning, setFlowRunning] = useState(true);
  const [motionOptOut, setMotionOptOut] = useState(false);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);
  const [flowStageIndex, setFlowStageIndex] = useState(0);
  const [languageTransition, setLanguageTransition] = useState<Language | null>(null);
  const languageTransitionTimer = useRef<number | null>(null);
  const c = languageCopy[language];
  const direction = language === "fa" ? "rtl" : "ltr";
  const flowPath = flowDirection === "inbound"
    ? "M47 89 C37 78 31 49 37 24 L52 46 L10 68"
    : "M10 68 L52 46 L56 70 L47 89";
  const flowStart = flowDirection === "inbound" ? [47, 89] : [10, 68];
  const flowAnimated = flowRunning && !motionOptOut && !systemReducedMotion;
  const flowStages = c.architecture.diagram.flow.stages[flowDirection];
  const [stageNumber, stageTitle, stageText, [stageLeft, stageTop]] = flowStages[flowStageIndex];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title = c.sharing.title;

    const localizedUrl = new URL(window.location.href);
    localizedUrl.searchParams.set("lang", language);
    const canonicalUrl = localizedUrl.toString();
    const alternateEn = new URL(canonicalUrl); alternateEn.searchParams.set("lang", "en");
    const alternateFa = new URL(canonicalUrl); alternateFa.searchParams.set("lang", "fa");
    window.history.replaceState({}, "", `${localizedUrl.pathname}${localizedUrl.search}${localizedUrl.hash}`);

    setMetaContent('meta[name="description"]', c.sharing.description);
    setMetaContent('meta[property="og:title"]', c.sharing.title);
    setMetaContent('meta[property="og:description"]', c.sharing.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:locale"]', c.sharing.locale);
    setMetaContent('meta[property="og:locale:alternate"]', language === "fa" ? "en_US" : "fa_IR");
    setMetaContent('meta[name="twitter:title"]', c.sharing.twitterTitle);
    setMetaContent('meta[name="twitter:description"]', c.sharing.description);
    setLinkHref('link[rel="canonical"]', canonicalUrl);
    setLinkHref('link[rel="alternate"][hreflang="en"]', alternateEn.toString());
    setLinkHref('link[rel="alternate"][hreflang="fa"]', alternateFa.toString());
    setLinkHref('link[rel="alternate"][hreflang="x-default"]', alternateEn.toString());
  }, [c.sharing, direction, language]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setSystemReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => () => {
    if (languageTransitionTimer.current !== null) window.clearTimeout(languageTransitionTimer.current);
  }, []);

  const handleLanguageChange = (nextLanguage: Language) => {
    if (nextLanguage === language) return;
    setLanguage(nextLanguage);
    if (systemReducedMotion) return;
    if (languageTransitionTimer.current !== null) window.clearTimeout(languageTransitionTimer.current);
    setLanguageTransition(nextLanguage);
    languageTransitionTimer.current = window.setTimeout(() => {
      setLanguageTransition(null);
      languageTransitionTimer.current = null;
    }, 280);
  };

  useEffect(() => {
    setFlowStageIndex(0);
    if (!flowAnimated) return;
    const intervalId = window.setInterval(() => {
      setFlowStageIndex((current) => (current + 1) % flowStages.length);
    }, 1600);
    return () => window.clearInterval(intervalId);
  }, [flowAnimated, flowDirection, flowStages.length]);

  return (
    <div className={`site-shell language-${language}${languageTransition ? ` language-transition to-${languageTransition}` : ""}`} dir={direction} lang={language}>
      <div className="grid-noise" aria-hidden="true" />
      <div className="global-signal-axis" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <header className="site-header">
        <a href="#top" className="brand" aria-label={c.brandHome}>
          <img src={ASSETS.repositoryMark} alt="" className="brand-mark" />
          <span className="brand-type"><strong>REZVANMESH</strong><small>ANDROID MESH COMMUNICATION</small></span>
        </a>

        <nav className="desktop-nav" aria-label={language === "fa" ? "ناوبری اصلی" : "Primary navigation"}>
          {c.nav.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>

        <div className="header-actions">
          <div className="language-toggle" role="group" aria-label={c.languageControl}>
            <button type="button" className={language === "fa" ? "active" : ""} onClick={() => handleLanguageChange("fa")} aria-pressed={language === "fa"}>فا</button>
            <button type="button" className={language === "en" ? "active" : ""} onClick={() => handleLanguageChange("en")} aria-pressed={language === "en"}>EN</button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={c.themeLabel} type="button">{theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}</button>
          <a className="repo-button" href="https://github.com/SMozaff/RezvanMesh" target="_blank" rel="noreferrer"><Github className="size-4" /><span>GitHub</span></a>
          <button className="mobile-menu-trigger" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? c.menuClose : c.menuOpen} type="button">{mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button>
        </div>

        {mobileOpen && <nav className="mobile-nav" aria-label={language === "fa" ? "ناوبری موبایل" : "Mobile navigation"}>{c.nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow-line"><span className="pulse-dot" /> {c.record}</div>
            <div className="hero-product-lockup"><img src={ASSETS.repositoryMark} alt="" /><span><b>REZVANMESH</b><small>ANDROID MESH COMMUNICATION / SYSTEM 001</small></span></div>
            <p className="hero-kicker">{c.heroKicker}</p>
            <h1 id="hero-title">{c.heroTitle}</h1>
            <p className="hero-deck"><strong>RezvanMesh</strong> {c.heroLead}</p>
            <div className="hero-actions"><a href="#architecture" className="signal-button"><span>{c.explore}</span><ChevronDown className="size-4" /></a><a href="https://github.com/SMozaff/RezvanMesh" className="text-button group" target="_blank" rel="noreferrer">{c.openRepository}<ExternalArrow /></a></div>
            <div className="hero-meta" aria-label={c.projectSummary}><div><span>PLATFORM</span><b>ANDROID 8.0+</b></div><div><span>RUNTIME</span><b>KOTLIN / RUST</b></div><div><span>RECORD</span><b>BETA · FUNCTIONAL TESTING</b></div></div>
          </div>

          <div className="hero-observation">
            <Crosshair className="hero-crosshair" />
            <div className="observation-label top-label">OBSERVATION BAY / 01</div>
            <div className="observation-frame"><img src={ASSETS.cube} alt={c.cubeAlt} /><div className="image-fade" /><div className="image-status"><Signal className="size-3.5" /> TOPOLOGY / ACTIVE</div></div>
            <div className="mesh-routes" aria-hidden="true"><i /><i /><i /><b /><b /></div>
            <div className="observation-caption"><span>FIELD NOTE</span><p>{c.fieldNote}</p></div>
          </div>
        </section>

        <section className="scope-strip" aria-label={c.scope}><div className="scope-lead"><Activity className="size-4" /> {c.scope}</div><span>BLE / GATT</span><i /><span>BATMAN-ADV INSPIRED ROUTING</span><i /><span>ENCRYPTED LOCAL STORAGE</span><i /><span>ANDROID + RUST BOUNDARY</span></section>

        <section id="architecture" className="section-wrap architecture-section" aria-labelledby="architecture-title">
          <div className="section-rail"><span className="section-index">{c.architecture.index}</span><Crosshair /><span className="section-name">{c.architecture.rail}</span></div>
          <div className="section-content">
            <div className="section-heading"><div><p className="eyebrow-line">{c.architecture.eyebrow}</p><h2 id="architecture-title">{c.architecture.title}</h2></div><p>{c.architecture.text}</p></div>
            <div className="architecture-map"><div className="interface-spine" aria-hidden="true"><span /><span /><span /><span /></div>{c.architecture.layers.map(([title, eyebrow, text], index) => {
              const Icon = layerIcons[index];
              return <article className={`architecture-layer ${layerTones[index]}`} key={title}><div className="layer-index">{String(index + 1).padStart(2, "0")}</div><div className="layer-icon"><Icon className="size-5" /></div><div className="layer-copy"><p>{eyebrow}</p><h3>{title}</h3><span>{text}</span></div><div className="layer-boundary"><span>INTERFACE</span><Binary className="size-4" /></div></article>;
            })}</div>
            <div className="implementation-note"><Code2 className="size-5" /><p><strong>{c.architecture.noteLead}</strong> {c.architecture.note}</p><a href="https://github.com/SMozaff/RezvanMesh/tree/main/scripts" target="_blank" rel="noreferrer" aria-label={c.architecture.noteLabel}><ExternalArrow /></a></div>
          </div>
        </section>

        <section className="section-wrap boundary-diagram-section" aria-labelledby="boundary-diagram-title">
          <div className="boundary-diagram-heading"><div><p className="eyebrow-line">{c.architecture.diagram.eyebrow}</p><h2 id="boundary-diagram-title">{c.architecture.diagram.title}</h2></div><p>{c.architecture.diagram.text}</p></div>
          <figure className="architecture-diagram-figure"><div className="diagram-source"><span>{c.architecture.diagram.source}</span><i /></div><p className="diagram-interaction-hint">{c.architecture.diagram.interactionHint}</p><div className="packet-flow-panel"><div><span>{c.architecture.diagram.flow.title}</span><p>{c.architecture.diagram.flow.text}</p></div><div className="packet-flow-controls" role="group" aria-label={c.architecture.diagram.flow.title}><button type="button" className={`flow-mode ${flowDirection === "inbound" ? "active" : ""}`} onClick={() => setFlowDirection("inbound")} aria-pressed={flowDirection === "inbound"}>{c.architecture.diagram.flow.inbound}</button><button type="button" className={`flow-mode ${flowDirection === "outbound" ? "active" : ""}`} onClick={() => setFlowDirection("outbound")} aria-pressed={flowDirection === "outbound"}>{c.architecture.diagram.flow.outbound}</button><button type="button" className="flow-icon-control" onClick={() => setFlowRunning(!flowRunning)} aria-label={flowRunning ? c.architecture.diagram.flow.pause : c.architecture.diagram.flow.play}>{flowRunning ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}</button><button type="button" className={`motion-control ${motionOptOut ? "active" : ""}`} onClick={() => setMotionOptOut(!motionOptOut)} aria-pressed={motionOptOut}>{motionOptOut ? c.architecture.diagram.flow.fullMotion : c.architecture.diagram.flow.reduce}</button></div></div>{systemReducedMotion && <p className="motion-preference-note">{c.architecture.diagram.flow.systemReduced}</p>}<div className="diagram-canvas"><img src={ASSETS.radioRustBoundary} alt={language === "fa" ? "نمودار معماری مرز میان RezvanRadioService در Android و MeshEngine در Rust، با قرارداد JNI و جریان بایت‌های بسته و عمل" : "Architecture diagram of the boundary between Android RezvanRadioService and Rust MeshEngine, showing the JNI contract and packet/action-byte flow"} /><svg className={`diagram-flow-overlay ${flowAnimated ? "is-animating" : "is-static"} ${flowDirection}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path className="packet-flow-path" d={flowPath} /><circle className="packet-flow-dot" cx={flowStart[0]} cy={flowStart[1]} r="1.15">{flowAnimated && <animateMotion dur="4.8s" repeatCount="indefinite" path={flowPath} />}</circle></svg><div className={`packet-stage-label ${flowAnimated ? "is-moving" : "is-static"} ${flowDirection} stage-${flowStageIndex + 1}`} style={{ left: stageLeft, top: stageTop }} aria-live="polite"><span>{stageNumber} / {stageTitle}</span><p>{stageText}</p></div><div className="diagram-flow-status"><span className={flowAnimated ? "active" : ""} /><b>{flowAnimated ? c.architecture.diagram.flow.title : c.architecture.diagram.flow.static}</b></div><div className="diagram-hotspots">{c.architecture.diagram.tooltips.map(([index, label, text, [left, top], tone]) => <Tooltip key={index}><TooltipTrigger asChild><button type="button" className={`diagram-hotspot ${tone}`} style={{ left, top }} aria-label={`${label}: ${text}`}><span>{index}</span></button></TooltipTrigger><TooltipContent side="top" sideOffset={10} className="diagram-tooltip-content"><strong>{label}</strong><p>{text}</p></TooltipContent></Tooltip>)}</div></div><figcaption>{c.architecture.diagram.items.map(([label, text], index) => <div className={`diagram-callout callout-${index + 1}`} key={label}><span>{String(index + 1).padStart(2, "0")} / {label}</span><p>{text}</p></div>)}</figcaption></figure>
        </section>

        <section id="ifem" className="section-wrap ifem-section" aria-labelledby="ifem-title">
          <div className="ifem-card"><div className="ifem-seal-wrap"><img src={ASSETS.ifemMark} alt="IFEM Doctrine" className="ifem-seal" /><span>METHOD / IFEM</span></div><div className="ifem-copy"><p className="eyebrow-line">BUILT WITH IFEM</p><h2 id="ifem-title">{c.ifem.title}</h2><p>{c.ifem.text}</p></div><div className="ifem-principles">{c.ifem.principles.map((principle, index) => <div key={principle}><span>{String(index + 1).padStart(2, "0")}</span><b>{principle}</b></div>)}</div></div>
          <a href="https://IFEM-doctrine.github.io/" className="ifem-link group" target="_blank" rel="noreferrer"><span>{c.ifem.link}</span><ExternalArrow /></a>
        </section>

        <section className="section-wrap protocol-section" aria-labelledby="protocol-title">
          <div className="section-rail"><span className="section-index">{c.operating.index}</span><Crosshair /><span className="section-name">OPERATING MODEL</span></div>
          <div className="section-content protocol-content"><div className="protocol-title"><p className="eyebrow-line">{c.operating.eyebrow}</p><h2 id="protocol-title">{c.operating.title}</h2></div><div className="protocol-grid">{c.operating.cards.map(([label, title, text], index) => { const Icon = operatingIcons[index]; return <article key={label}><Icon className="size-6" /><p>{label}</p><strong>{title}</strong><span>{text}</span></article>; })}</div></div>
        </section>

        <section className="section-wrap app-evidence-section" aria-labelledby="app-evidence-title">
          <div className="app-evidence-heading"><div><p className="eyebrow-line">{c.screens.eyebrow}</p><h2 id="app-evidence-title">{c.screens.title}</h2></div><p>{c.screens.text}</p></div>
          <div className="app-screen-grid">
            <figure className="app-screen-card network-screen"><div className="screen-heading"><span>01 / {c.screens.network.label}</span><i /></div><div className="phone-frame"><img src={ASSETS.networkScreen} alt={language === "fa" ? "نمای رابط شبکهٔ RezvanMesh با وضعیت اتصال و توپولوژی گره‌ها" : "RezvanMesh Network interface showing connection status and node topology"} /></div><figcaption><strong>{c.screens.network.title}</strong><span>{c.screens.network.caption}</span></figcaption></figure>
            <figure className="app-screen-card emergency-screen"><div className="screen-heading"><span>02 / {c.screens.emergency.label}</span><i /></div><div className="phone-frame"><img src={ASSETS.emergencyScreen} alt={language === "fa" ? "نمای رابط اضطراری RezvanMesh با هشدار SOS و گزینه‌های همراه" : "RezvanMesh Emergency interface with an SOS alert and alert options"} /></div><figcaption><strong>{c.screens.emergency.title}</strong><span>{c.screens.emergency.caption}</span></figcaption></figure>
          </div>
        </section>

        <section id="evidence" className="section-wrap evidence-section" aria-labelledby="evidence-title">
          <div className="section-rail"><span className="section-index">{c.evidence.index}</span><Crosshair /><span className="section-name">EVIDENCE</span></div>
          <div className="section-content"><div className="section-heading evidence-heading"><div><p className="eyebrow-line">{c.evidence.eyebrow}</p><h2 id="evidence-title">{c.evidence.title}</h2></div><p>{c.evidence.text}</p></div><div className="evidence-grid">{c.evidence.cards.map(([label, title, text, cta, status], index) => { const Icon = evidenceIcons[index]; return <a className="evidence-card group" key={label} href={evidenceLinks[index]} target="_blank" rel="noreferrer"><span className="evidence-number">0{index + 1}</span><Icon className="evidence-icon size-6" /><p>{label}</p><span className="evidence-status">{status}</span><h3>{title}</h3><span>{text}</span><b>{cta} <ExternalArrow /></b></a>; })}</div><div className="caveat-band"><Zap className="size-4" /><p><strong>{c.evidence.statusLead}</strong> {c.evidence.status}</p></div></div>
        </section>

        <section id="developer" className="section-wrap developer-section" aria-labelledby="developer-title">
          <div className="developer-panel"><div className="developer-identity"><span className="developer-index">{c.developer.index}</span><h2 id="developer-title">Suhail Muzaffari</h2><p>{c.developer.role}</p><div className="contact-chip">Suhail Muzaffari · so.muzaff@gmail.com</div></div><div className="developer-links"><p>{c.developer.links}</p><a href="https://SMozaff.github.io/" target="_blank" rel="noreferrer"><Globe2 className="size-5" /><span>{c.developer.personal}</span><ExternalLink className="size-4" /></a><a href="https://IFEM-doctrine.github.io/" target="_blank" rel="noreferrer"><FileCode2 className="size-5" /><span>IFEM Doctrine</span><ExternalLink className="size-4" /></a><a href="https://orcid.org/0009-0001-2428-1295" target="_blank" rel="noreferrer"><Database className="size-5" /><span>ORCID: 0009-0001-2428-1295</span><ExternalLink className="size-4" /></a><a href="https://github.com/SMozaff" target="_blank" rel="noreferrer"><Github className="size-5" /><span>GitHub / SMozaff</span><ExternalLink className="size-4" /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><img src={ASSETS.repositoryMark} alt="" /><span>REZVANMESH / CASE STUDY</span></div><p>{c.footer}</p><a href="#top">{c.backToTop}<ChevronDown className="size-4 rotate-180" /></a></footer>
    </div>
  );
}
