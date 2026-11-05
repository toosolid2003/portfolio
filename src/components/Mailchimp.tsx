"use client";

import { useState, FormEvent } from "react";
import { mailchimp, contactForm } from "@/app/resources";
import { Button, Heading, Text, Background, Column, Input, Textarea } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

type Status = "idle" | "sending" | "sent" | "error";

const track = (event: string) => {
  if (typeof umami !== "undefined") umami.track(event);
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setStatus("sent");
      form.reset();
      track("Contact form sent");
    } catch {
      setStatus("error");
      track("Contact form error");
    }
  };

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

      {status === "sent" ? (
        <Text style={{ position: "relative" }} variant="body-strong-m" onBackground="brand-strong">
          Thanks, your message is on its way. I&apos;ll get back to you shortly.
        </Text>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "480px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <input type="hidden" name="access_key" value={contactForm.accessKey} />
          <input type="hidden" name="subject" value="New message from segura.build" />
          <input type="hidden" name="from_name" value="segura.build contact form" />
          {/* Honeypot: hidden from people, bots fill it in and get rejected */}
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

          <Input id="contact-name" name="name" label="Name" required />
          <Input id="contact-email" name="email" type="email" label="Email" required />
          <Textarea id="contact-message" name="message" label="Message" lines={4} required />

          <Button type="submit" size="m" fillWidth loading={status === "sending"} disabled={status === "sending"}>
            Send message
          </Button>

          {status === "error" && (
            <Text variant="body-default-s" onBackground="danger-medium">
              Something went wrong. Please email me directly at{" "}
              <a href={`mailto:${contactForm.email}`}>{contactForm.email}</a>.
            </Text>
          )}
          <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
            Or write to <a href={`mailto:${contactForm.email}`}>{contactForm.email}</a>
          </Text>
        </form>
      )}
    </Column>
  );
};