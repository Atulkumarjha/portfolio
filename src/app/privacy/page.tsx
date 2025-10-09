import type { Metadata } from "next";

const policySections = [
  {
    title: "1. Introduction",
    body: "This Privacy Policy explains how I collect, use, and protect your personal information when you explore my portfolio, interact with embedded services, or reach out via the contact form.",
  },
  {
    title: "2. Information I Collect",
    body: "I collect only the information you intentionally share—such as your name, email address, and message content—when you submit the contact form or book a call.",
    items: [
      "Contact details (name, email, social profile links)",
      "Message content",
      "Aggregated analytics data provided by hosting providers",
    ],
  },
  {
    title: "3. How I Use Your Information",
    body: "Any information you submit is used exclusively to reply to your inquiry, coordinate a call, or share relevant updates when you request them.",
    items: [
      "Responding to queries",
      "Managing collaborations or project requests",
      "Improving the portfolio experience", 
    ],
  },
  {
    title: "4. Third-Party Services",
    body: "This site may reference or embed third-party services (such as GitHub, Spotify, or analytics providers). These services operate under their own privacy policies and may collect usage data independently.",
  },
  {
    title: "5. Data Retention",
    body: "Contact form submissions are stored only for as long as needed to continue our conversation or meet contractual requirements. You can request deletion at any time.",
  },
  {
    title: "6. Your Rights",
  body: "You can request, update, or delete your personal information by emailing me at jhaak301@gmail.com.",
    body: "You can request, update, or delete your personal information by emailing me at atulpc682@gmail.com.",
  },
  {
    title: "7. Updates",
    body: "This policy may be updated periodically to reflect new features or compliance requirements. The last revision date will always be posted here.",
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | Atul Kumar Jha",
  description:
    "Learn how personal information is collected, used, and protected on Atul Kumar Jha's portfolio website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200">
      <section className="mx-auto max-w-4xl px-6 py-24 space-y-16">
        <header className="space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-indigo-400">Privacy Policy</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">
            Your privacy matters.
          </h1>
          <p className="text-lg text-gray-400">
            Transparency and trust are fundamental to every collaboration I take on.
          </p>
          <p className="text-sm text-gray-500">Last updated: October 9, 2025</p>
        </header>

        <div className="space-y-12">
          {policySections.map(({ title, body, items }) => (
            <article key={title} className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="text-base leading-relaxed text-gray-300">{body}</p>
              {items && (
                <ul className="list-disc space-y-2 pl-6 text-sm text-gray-400">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <footer className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 text-sm text-indigo-200">
          <p>
            Have questions about how your information is handled? Email me at {" "}
            <a href="mailto:jhaak301@gmail.com" className="font-medium text-white hover:underline">
              jhaak301@gmail.com
            <a href="mailto:atulpc682@gmail.com" className="font-medium text-white hover:underline">
              atulpc682@gmail.com
            </a>
            .
          </p>
        </footer>
      </section>
    </main>
  );
}
