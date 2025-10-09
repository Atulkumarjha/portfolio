import type { Metadata } from "next";

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using this portfolio website, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using the site.",
  },
  {
    title: "2. Use of Content",
    body: "All content, including projects, blog posts, and visual assets, is provided for informational purposes. You may reference this work with proper attribution, but redistribution or commercial use requires written consent.",
  },
  {
    title: "3. Intellectual Property",
    body: "Unless otherwise stated, all code samples, designs, and media assets are the intellectual property of Atul Kumar Jha. Third-party logos and trademarks remain the property of their respective owners.",
  },
  {
    title: "4. External Links",
    body: "This site may include links to external services, such as GitHub, LinkedIn, or Spotify. I am not responsible for the content, privacy policies, or practices of external sites.",
  },
  {
    title: "5. Disclaimer",
    body: "The information provided is offered 'as-is' without warranties of any kind. I aim to keep the site accurate and up-to-date, but cannot guarantee completeness or reliability.",
  },
  {
    title: "6. Limitation of Liability",
    body: "In no event shall I be liable for any damages arising from your use of this website, including loss of data, profits, or business opportunities.",
  },
  {
    title: "7. Changes to the Terms",
    body: "These terms may change as new features are introduced or legal requirements evolve. Continued use of the site after changes indicates acceptance of the updated terms.",
  },
  {
    title: "8. Contact",
  body: "If you have questions about these terms, reach out at jhaak301@gmail.com.",
    body: "If you have questions about these terms, reach out at atulpc682@gmail.com.",
  },
];

export const metadata: Metadata = {
  title: "Terms & Conditions | Atul Kumar Jha",
  description: "Understand the usage guidelines and legal terms for interacting with Atul Kumar Jha's portfolio website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200">
      <section className="mx-auto max-w-4xl px-6 py-24 space-y-16">
        <header className="space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-400">Terms &amp; Conditions</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Know the rules of engagement.</h1>
          <p className="text-lg text-gray-400">These terms outline how you can use and reference the material on this portfolio.</p>
          <p className="text-sm text-gray-500">Last updated: October 9, 2025</p>
        </header>

        <div className="space-y-12">
          {termsSections.map(({ title, body }) => (
            <article key={title} className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <p className="text-base leading-relaxed text-gray-300">{body}</p>
            </article>
          ))}
        </div>

        <footer className="rounded-2xl border border-purple-500/40 bg-purple-500/10 p-6 text-sm text-purple-200">
          <p>
            Questions or collaboration ideas? Email me at {" "}
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
