import { images } from "@/assets/images";
import type { Dictionary } from "@/lib/getDictionary";

export const es: Dictionary = {
  metadata: {
    title: "Gotita: ahorra agua en la ducha | Cada gota cuenta",
    description:
      "App para Android que mide tu ducha con el micrófono, cuenta los litros y te ayuda a ahorrar agua con una gota amiga. Gratis, sin cuentas y sin grabar audio.",
    keywords: ["ahorrar agua", "ducha", "temporizador de ducha", "cuidar el agua", "hábitos en familia"],
    ogAlt: "Gotita – Cada gota cuenta",
  },
  brand: {
    name: "Gotita",
    tagline: "Cada gota cuenta",
  },
  navbar: {
    links: [
      { href: "#how", label: "Cómo funciona" },
      { href: "#features", label: "Funciones" },
      { href: "#privacy", label: "Privacidad" },
      { href: "#faq", label: "Preguntas" },
    ],
    download: "Descargar",
    comingSoon: "Muy pronto",
    switchLanguage: "Switch to English",
  },
  store: {
    badgeAlt: "Disponible en Google Play",
    comingSoon: "Muy pronto en Google Play",
    androidOnly: "Gratis · Android 8.0 o más reciente",
    testerCta: "¿Quieres probarla antes del lanzamiento? Escríbenos",
    testerSubject: "Quiero probar Gotita",
  },
  hero: {
    eyebrow: "App gratis para Android",
    description: "Mide tu ducha con el micrófono y ahorra agua con la ayuda de una gota amiga.",
    highlights: ["Gratis", "Sin cuentas", "Sin publicidad", "Sin grabar audio"],
    bubble: "¡Te quedan 3:10! 💧",
    screenshotAlt: "Pantalla de inicio de Gotita con la gota y 312 litros ahorrados",
    screenshotAlt2: "Resultado de la ducha: 11.3 litros, dentro de la meta",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos. Sin aparatos que instalar.",
    description: "Solo tu teléfono en el baño y una gota que te anima.",
    steps: [
      {
        emoji: "🪣",
        title: "Calibra una vez",
        description:
          "Llena una jarra o un balde y la app aprende cuánta agua sale y cómo suena tu ducha.",
      },
      {
        emoji: "🚿",
        title: "Mide tu ducha",
        description:
          "Toca “Medir mi ducha” y deja el teléfono en el baño. Cuenta solo el tiempo con agua; funciona con la pantalla apagada.",
      },
      {
        emoji: "💧",
        title: "Ahorra con la gota",
        description:
          "Cada vez que cierras, la gota te dice cuánta agua te queda. Al final ves los litros y lo que ahorraste.",
      },
    ],
  },
  features: {
    eyebrow: "Lo que trae",
    title: "Pequeños hábitos, grandes gotas.",
    description: "Todo es visual, amable y rápido, para que toda la familia quiera sumarse.",
    items: [
      { icon: "💬", title: "Una gota amiga", description: "Te habla por tu nombre y te guía." },
      { icon: "⏱️", title: "Meta en minutos", description: "Sugerimos 5, con pitidos cortos al llegar." },
      { icon: "🏆", title: "Puntos y rachas", description: "Suma puntos, cuida tu racha y sube 5 niveles." },
      { icon: "🪣", title: "Un ahorro que se ve", description: "En botellas, baldes, tinas y carrotanques." },
      { icon: "📅", title: "Historial por mes", description: "Cada ducha y cuánto ahorraste." },
      { icon: "🔔", title: "Recordatorio diario", description: "Opcional, a la hora que elijas." },
    ],
    trust: { icon: "🔒", text: "Sin cuentas, sin publicidad, sin grabar audio" },
  },
  levels: {
    eyebrow: "Sube de nivel",
    title: "Tu gota crece contigo.",
    description: "Las duchas cortas suman puntos. Cada nivel le da a tu gota un accesorio nuevo.",
    levelLabel: "Nivel",
    items: [
      { name: "Gotita", accessory: "Recién empieza" },
      { name: "Gota Exploradora", accessory: "Gorra" },
      { name: "Gota Guardiana", accessory: "Capa" },
      { name: "Gota Heroína", accessory: "Antifaz" },
      { name: "Gota Leyenda", accessory: "Corona" },
    ],
  },
  screenshots: {
    eyebrow: "Capturas",
    title: "Así se ve por dentro.",
    description: "Pantallas reales con datos de ejemplo. Números grandes, emoji grandes, pocas palabras.",
    prev: "Captura anterior",
    next: "Captura siguiente",
    items: [
      {
        src: images.screenshots.es[0],
        alt: "Inicio: buenos días Sofía, 312 litros ahorrados, unas 2 tinas llenas",
        caption: "Tu inicio: la gota, tus litros ahorrados y tu racha.",
      },
      {
        src: images.screenshots.es[1],
        alt: "Midiendo: 4.9 de 14 litros, agua corriendo, te quedan 3:10",
        caption: "Mientras te duchas cuenta solo el tiempo con agua.",
      },
      {
        src: images.screenshots.es[2],
        alt: "Resultado: bien hecho Sofía, 11.3 litros dentro de la meta de 14",
        caption: "Al terminar: tus litros, tu meta y tus puntos.",
      },
      {
        src: images.screenshots.es[3],
        alt: "Mis duchas: 68.7 litros ahorrados, unos 7 baldes",
        caption: "Mis duchas: el ahorro del mes, en baldes.",
      },
      {
        src: images.screenshots.es[4],
        alt: "Antes de medir: tu agua de hoy 5:00, botón Empezar",
        caption: "Antes de empezar: tu agua de hoy.",
      },
      {
        src: images.screenshots.es[5],
        alt: "Bienvenida con la gota y un candado",
        caption: "Tu privacidad primero, desde la primera pantalla.",
      },
    ],
  },
  privacy: {
    eyebrow: "Tu privacidad",
    title: "La gota solo escucha el agua.",
    quote:
      "Uso el micrófono solo para escuchar el agua. No grabo nada y tus duchas quedan en tu teléfono. Si la app falla, envía un aviso del error, sin audio ni datos tuyos.",
    points: ["No graba ni envía audio", "Tus duchas quedan en tu teléfono", "Sin cuentas", "Sin publicidad"],
    policyLink: "Lee la política de privacidad",
  },
  faqs: {
    title: "Preguntas frecuentes",
    description: "Lo que nos preguntan las familias antes de su primera ducha.",
    items: [
      {
        question: "¿Graba lo que pasa en el baño?",
        answer:
          "No. La app usa el micrófono solo para saber si el agua está corriendo. No graba nada ni envía audio. Tus duchas quedan en tu teléfono.",
        prelaunchOnly: false,
      },
      {
        question: "¿Qué tan exacta es?",
        answer:
          "Mide aproximadamente: los tiempos y los litros son aproximados. Calibrar una vez con una jarra o un balde la ajusta a tu ducha, y puedes recalibrar cuando quieras.",
        prelaunchOnly: false,
      },
      {
        question: "¿Tengo que instalar algo en la ducha?",
        answer:
          "No. Solo necesitas tu teléfono. Déjalo en el baño, lejos del agua, y funciona con la pantalla apagada.",
        prelaunchOnly: false,
      },
      {
        question: "¿Está para iPhone?",
        answer: "Solo Android por ahora, en Android 8.0 o más reciente.",
        prelaunchOnly: false,
      },
      {
        question: "¿Cuánto cuesta?",
        answer: "Es gratis. Sin publicidad y sin cuentas.",
        prelaunchOnly: false,
      },
      {
        question: "¿La pueden usar mis hijos?",
        answer:
          "Sí, junto con un adulto. Está pensada para familias: la gota habla con emoji grandes y pocas palabras, para que toda la casa se sume.",
        prelaunchOnly: false,
      },
      {
        question: "¿Qué pasa cuando cierro para enjabonarme?",
        answer:
          "Las pausas no cuentan. La app cuenta solo el tiempo con agua y, cada vez que cierras, la gota te dice cuánta agua te queda.",
        prelaunchOnly: false,
      },
      {
        question: "¿Cuándo la puedo descargar?",
        answer:
          "Gotita está en prueba cerrada y llegará muy pronto a Google Play. Si quieres probarla antes del lanzamiento, escríbenos.",
        prelaunchOnly: true,
      },
    ],
  },
  finalCta: {
    eyebrow: "¿Lista tu próxima ducha?",
    title: "Cada gota cuenta 💧",
    description: "Descarga Gotita y deja que la gota ayude a tu familia a ahorrar agua, una ducha a la vez.",
    closingLine: "💡 Las duchas cortas ahorran agua y energía. ¡Cada gota cuenta!",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    madeIn: "Hecho en Colombia 🇨🇴",
    privacy: "Política de privacidad",
    contact: "Contacto",
    playTrademark: "Google Play y el logotipo de Google Play son marcas de Google LLC.",
  },
};
