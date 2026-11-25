import { images } from "@/assets/images";

export const en = {
  metadata: {
    title: "Water Saver: shower tracker | Every drop counts",
    description:
      "Android app that measures your shower with the microphone, counts the liters and helps you save water with a friendly drop. Free, no accounts, no audio recorded.",
    keywords: ["save water", "shower timer", "shower tracker", "water saving", "family habits"],
    ogAlt: "Water Saver – Every drop counts",
  },
  brand: {
    name: "Water Saver",
    tagline: "Every drop counts",
  },
  navbar: {
    links: [
      { href: "#how", label: "How it works" },
      { href: "#features", label: "Features" },
      { href: "#privacy", label: "Privacy" },
      { href: "#faq", label: "FAQ" },
    ],
    download: "Download",
    switchLanguage: "Cambiar a español",
  },
  store: {
    badgeAlt: "Get it on Google Play",
    androidOnly: "Free · Android 8.0 or newer",
  },
  hero: {
    eyebrow: "Free app for Android",
    description: "Measure your shower with the mic and save water with a friendly water drop.",
    highlights: ["Free", "No accounts", "No ads", "No audio recorded"],
    bubble: "You have 3:10 left! 💧",
    screenshotAlt: "Water Saver home screen with the drop and 312 liters saved",
    screenshotAlt2: "Shower result: 11.3 liters, within the goal",
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Three steps. No devices to install.",
    description: "Just your phone in the bathroom and a drop that cheers you on.",
    steps: [
      {
        emoji: "🪣",
        title: "Calibrate once",
        description:
          "Fill a jug or a bucket and the app learns how much water comes out and how your shower sounds.",
      },
      {
        emoji: "🚿",
        title: "Measure your shower",
        description:
          "Tap “Measure my shower” and leave the phone in the bathroom. It counts only the time the water runs, with the screen off.",
      },
      {
        emoji: "💧",
        title: "Save with the drop",
        description:
          "Every time you turn the water off, the drop tells you how much is left. At the end you see the liters and what you saved.",
      },
    ],
  },
  features: {
    eyebrow: "What's inside",
    title: "Small habits, big drops.",
    description: "Everything is visual, friendly and fast, so the whole family wants to join in.",
    items: [
      { icon: "💬", title: "A friendly drop", description: "It calls you by your name and guides you." },
      { icon: "⏱️", title: "Goal in minutes", description: "5 minutes suggested, with short chimes when you get there." },
      { icon: "🏆", title: "Points and streaks", description: "Earn points, keep your streak and unlock 5 levels." },
      { icon: "🪣", title: "Savings you can picture", description: "In bottles, buckets, bathtubs and tanker trucks." },
      { icon: "📅", title: "History by month", description: "See every shower and how much you saved." },
      { icon: "🔔", title: "Daily reminder", description: "Optional, at the time you choose." },
    ],
    trust: { icon: "🔒", text: "No accounts, no ads, no audio recorded" },
  },
  levels: {
    eyebrow: "Level up",
    title: "Your drop grows with you.",
    description: "Short showers add points. Every level gives your drop a new accessory.",
    levelLabel: "Level",
    items: [
      { name: "Droplet", accessory: "Just getting started" },
      { name: "Explorer Drop", accessory: "Cap" },
      { name: "Guardian Drop", accessory: "Cape" },
      { name: "Hero Drop", accessory: "Mask" },
      { name: "Legend Drop", accessory: "Crown" },
    ],
  },
  screenshots: {
    eyebrow: "Screenshots",
    title: "Take a look inside the app.",
    description: "Real screens with demo data. Big numbers, big emoji, few words.",
    prev: "Previous screenshot",
    next: "Next screenshot",
    items: [
      {
        src: images.screenshots.en[0],
        alt: "Home screen: good morning Sofía, 312 liters saved, about 2 full bathtubs",
        caption: "Your home: the drop, your liters saved and your streak.",
      },
      {
        src: images.screenshots.en[1],
        alt: "Measuring: 4.9 of 14 liters, water running, 3:10 left",
        caption: "While you shower it counts only the time the water runs.",
      },
      {
        src: images.screenshots.en[2],
        alt: "Result: well done Sofía, 11.3 liters within the 14 liter goal",
        caption: "At the end: your liters, your goal and your points.",
      },
      {
        src: images.screenshots.en[3],
        alt: "My showers: 68.7 liters saved, about 7 buckets",
        caption: "My showers: your month's savings, in buckets.",
      },
      {
        src: images.screenshots.en[4],
        alt: "Before measuring: today's water 5:00, Start button",
        caption: "Before you start: your water for today.",
      },
      {
        src: images.screenshots.en[5],
        alt: "Welcome screen with the drop and a padlock",
        caption: "Privacy first, from the very first screen.",
      },
    ],
  },
  privacy: {
    eyebrow: "Your privacy",
    title: "The drop only listens to the water.",
    quote:
      "I use the microphone only to hear the water. I record nothing and your showers stay on your phone. If the app fails, it sends an error report, with no audio or personal data.",
    points: ["No audio recorded or sent", "Your showers stay on your phone", "No accounts", "No ads"],
    policyLink: "Read the privacy policy",
  },
  faqs: {
    title: "Frequently asked questions",
    description: "What families ask us before their first shower.",
    items: [
      {
        question: "Does it record what happens in the bathroom?",
        answer:
          "No. The app uses the microphone only to hear whether the water is running. It records nothing and sends no audio. Your showers stay on your phone.",
      },
      {
        question: "How accurate is it?",
        answer:
          "It measures approximately: times and liters are estimates. Calibrating once with a jug or a bucket adjusts it to your own shower, and you can recalibrate whenever you want.",
      },
      {
        question: "Do I need to install anything in the shower?",
        answer:
          "No. You only need your phone. Leave it in the bathroom, away from the water, and it works with the screen off.",
      },
      {
        question: "Is it available for iPhone?",
        answer: "Android only for now, on Android 8.0 or newer.",
      },
      {
        question: "How much does it cost?",
        answer: "It's free. No ads and no accounts.",
      },
      {
        question: "Can my kids use it?",
        answer:
          "Yes, together with an adult. It is made for families: the drop speaks with big emoji and few words, so the whole house can join in.",
      },
      {
        question: "What happens when I pause to soap up?",
        answer:
          "Pauses don't count. The app counts only the time the water runs, and every time you turn it off the drop tells you how much water you have left.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready for your next shower?",
    title: "Every drop counts 💧",
    description: "Download Water Saver and let the drop help your family save water, one shower at a time.",
    closingLine: "💡 Short showers save water and energy. Every drop counts!",
  },
  footer: {
    rights: "All rights reserved.",
    madeIn: "Made in Colombia",
    privacy: "Privacy policy",
    contact: "Contact",
    playTrademark: "Google Play and the Google Play logo are trademarks of Google LLC.",
  },
};
