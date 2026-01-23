import { Column, Heading, Text } from "@/once-ui/components";
import { getPosts } from "@/app/utils/utils";
import Link from "next/link";

export const metadata = {
  robots: "noindex, nofollow",
};

export default function ProposalsPage() {
  const proposals = getPosts(['src', 'app', 'proposals', 'proposals']);

  return (
    <Column maxWidth="s" gap="l">
      <Heading variant="display-strong-s">Proposals</Heading>
      {proposals.map((proposal) => (
        <Link key={proposal.slug} href={`/proposals/${proposal.slug}`}>
          <Text>{proposal.metadata.title}</Text>
        </Link>
      ))}
    </Column>
  );
}
