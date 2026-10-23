import { getPosts } from "@/app/utils/utils";
import { baseURL, person } from "@/app/resources";

export const dynamic = "force-static";

export async function GET() {
  const posts = getPosts(["src", "app", "blog", "posts"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.metadata.title}]]></title>
      <link>${baseURL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseURL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.metadata.summary}]]></description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${person.name}</title>
    <link>${baseURL}/blog</link>
    <description>Articles by ${person.name}</description>
    <language>en</language>
    <atom:link href="${baseURL}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseURL}${person.avatar}</url>
      <title>${person.name}</title>
      <link>${baseURL}/blog</link>
    </image>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
