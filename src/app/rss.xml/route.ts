const feedItems = [
  {
    title: "Moody – Your Vibe, Your Playlist",
    description:
      "A vibrant platform for music lovers to create and explore personalized playlists powered by Next.js and Spotify integrations.",
  path: "/work#moody",
    publishedAt: "2025-06-15T09:00:00.000Z",
  },
  {
    title: "DrumMusic – Create Your Own Sound",
    description:
      "An interactive drum machine experience that lets visitors layer beats, trigger samples, and craft tracks in the browser.",
  path: "/work#drummusic",
    publishedAt: "2025-04-28T09:00:00.000Z",
  },
  {
    title: "Stories, Tutorials & Lessons",
    description:
      "Long-form writing that captures lessons from building modern full-stack web applications and creative coding projects.",
  path: "/more",
    publishedAt: "2025-02-02T09:00:00.000Z",
  },
];

const buildRss = (origin: string) => {
  const channelLink = `${origin}`;
  const itemsXml = feedItems
    .map(({ title, description, path, publishedAt }) => {
      const itemLink = `${origin}${path}`;
      return `    <item>
      <title><![CDATA[${title}]]></title>
      <link>${itemLink}</link>
      <guid>${itemLink}</guid>
      <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${description}]]></description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title><![CDATA[Atul Kumar Jha – Portfolio Highlights]]></title>
    <link>${channelLink}</link>
    <description><![CDATA[Project updates, stories, and highlights from Atul Kumar Jha.]]></description>
    <language>en-us</language>
${itemsXml}
  </channel>
</rss>`;
};

export async function GET(request: Request) {
  const origin = new URL(request.url).origin;
  const xml = buildRss(origin);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=UTF-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
