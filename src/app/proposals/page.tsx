import { Column, Heading } from "@/once-ui/components";
import { Proposals } from "@/components/proposals";
import { baseURL } from "@/app/resources";
import { proposals, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: proposals.title,
    description: proposals.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(proposals.title)}`,
    path: proposals.path,
  });
}

export default function ProposalsPage() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={proposals.title}
        description={proposals.description}
        path={proposals.path}
        image={`${baseURL}/og?title=${encodeURIComponent(proposals.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/proposals`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {proposals.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Proposals range={[1, 1]} thumbnail direction="column" />
        <Proposals range={[2, 3]} thumbnail />
        <Proposals range={[4]} columns="2" />
      </Column>
    </Column>
  );
}
