// Offline fallback for the chatbot. It is used when the AI server (/api/chat) is not
// available — for example while running `npm run dev` or if the API key is missing.
import { profile, skills, projects, certificates } from '../data.js'

const origin = () => (typeof window !== 'undefined' ? window.location.origin : '')

const intents = [
  {
    test: /\b(resume|cv)\b/i,
    reply: () => `You can download Madiha's resume here: ${origin()}${profile.resume}`,
  },
  {
    test: /\b(contact|email|mail|hire|reach|call|message|collaborat\w*)\b/i,
    reply: () =>
      `The best way to reach Madiha is by email: ${profile.email}\nYou can also use the contact form at the bottom of this page, or message her on LinkedIn: ${profile.links.linkedin}`,
  },
  {
    test: /\b(github|linkedin|instagram|tiktok|telegram|social|links?)\b/i,
    reply: () =>
      `Find Madiha online:\nGitHub: ${profile.links.github}\nLinkedIn: ${profile.links.linkedin}\nInstagram: ${profile.links.instagram}\nTelegram: ${profile.links.telegram}`,
  },
  {
    test: /\b(skills?|tech|stack|technolog\w*|language\w*|react|django|python|postgres\w*|javascript|know)\b/i,
    reply: () =>
      "Here is Madiha's skill set:\n" +
      Object.entries(skills).map(([group, rows]) => `• ${group}: ${rows.map((r) => r[0]).join(', ')}`).join('\n'),
  },
  {
    test: /\b(projects?|built|build|made|portfolio|demo|apps?)\b/i,
    reply: () =>
      "Madiha's projects:\n" +
      projects.map((p) => `• ${p.title} — ${p.desc}`).join('\n') +
      `\n\nSee them all on GitHub: ${profile.links.github}`,
  },
  {
    test: /\b(certificat\w*|course\w*|certif\w*|training|credential\w*|learn\w*|achievement\w*)\b/i,
    reply: () =>
      "Madiha's certificates & achievements:\n" +
      certificates.map(([meta, title]) => `• ${title} (${meta})`).join('\n'),
  },
  {
    test: /\b(who|about|yourself|introduce|madiha)\b|^(hi|hello|hey|salam|assalam\w*)\b/i,
    reply: () =>
      `${profile.name} is ${profile.about} I'm her AI assistant — ask me about her skills, projects, resume or how to contact her.`,
  },
]

export function localReply(question) {
  const hit = intents.find((i) => i.test.test(question))
  if (hit) return hit.reply()
  return `I can help with Madiha's skills, projects, leadership experience, resume and contact details. For anything else, please email her at ${profile.email}.`
}
