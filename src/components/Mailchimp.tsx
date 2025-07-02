"use client";

import { mailchimp } from "@/app/resources"; // You can remove this if unused elsewhere
import { Button, Heading, Text, Background, Column } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
        <Background
            position="absolute"
            mask={{
              x: mailchimp.effects.mask.x,
              y: mailchimp.effects.mask.y,
              radius: mailchimp.effects.mask.radius,
              cursor: mailchimp.effects.mask.cursor
            }}
            gradient={{
              display: mailchimp.effects.gradient.display,
              opacity: mailchimp.effects.gradient.opacity as opacity,
              x: mailchimp.effects.gradient.x,
              y: mailchimp.effects.gradient.y,
              width: mailchimp.effects.gradient.width,
              height: mailchimp.effects.gradient.height,
              tilt: mailchimp.effects.gradient.tilt,
              colorStart: mailchimp.effects.gradient.colorStart,
              colorEnd: mailchimp.effects.gradient.colorEnd,
            }}
            dots={{
              display: mailchimp.effects.dots.display,
              opacity: mailchimp.effects.dots.opacity as opacity,
              size: mailchimp.effects.dots.size as SpacingToken,
              color: mailchimp.effects.dots.color,
            }}
            grid={{
              display: mailchimp.effects.grid.display,
              opacity: mailchimp.effects.grid.opacity as opacity,
              color: mailchimp.effects.grid.color,
              width: mailchimp.effects.grid.width,
              height: mailchimp.effects.grid.height,
            }}
            lines={{
              display: mailchimp.effects.lines.display,
              opacity: mailchimp.effects.lines.opacity as opacity,
              size: mailchimp.effects.lines.size as SpacingToken,
              thickness: mailchimp.effects.lines.thickness,
              angle: mailchimp.effects.lines.angle,
              color: mailchimp.effects.lines.color,
            }}
          />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {newsletter.title}
      </Heading>

      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {newsletter.description}
      </Text>

      <a href="mailto:contact@segura.design" style={{ textDecoration: "none", width: "100%", maxWidth:"320px" }}>
        <Button size="m" fillWidth data-umami-event="contact">
          Contact me
        </Button>
      </a>
    </Column>
  );
};