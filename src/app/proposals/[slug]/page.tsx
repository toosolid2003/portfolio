import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { Column, Heading, Text } from "@/once-ui/components";
import { formatDate } from "@/app/utils/formatDate";

export const metadata = {
  robots: "noindex, nofollow",
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = getPosts(["src", "app", "proposals", "proposals"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ProposalPage({
  params
}: { params: Promise<{ slug: string }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "proposals", "proposals"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  return (
    <Column maxWidth="xs" gap="l">
      <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
      </Text>
      <Column as="article" fillWidth>
        <CustomMDX source={post.content} />
      </Column>
    </Column>
  );
}
