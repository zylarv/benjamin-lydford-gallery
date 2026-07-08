import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Benjamin Lydford" },
      {
        name: "description",
        content:
          "Contact Australian abstract artist Benjamin Lydford for gallery enquiries, commissions and available work.",
      },
      { property: "og:title", content: "Contact | Benjamin Lydford" },
      {
        property: "og:description",
        content: "Gallery enquiries, commissions and available work.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Enquiry from ${data.get("name") || "website"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:artbybenjaminlydford@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 pt-20 md:pt-28 pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl mt-4 leading-[1.05]">
            Enquiries & commissions
          </h1>
          <p className="mt-8 text-foreground/80 leading-relaxed">
            For available work, commissioned paintings or gallery
            representation, please leave a note. Responses within a few days.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Follow the studio
            </p>
            <a
              href="https://www.instagram.com/_benjaminmichael/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-foreground pb-1 hover:text-accent transition-colors"
            >
              @_benjaminmichael
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          {sent ? (
            <div className="border border-border p-10 text-center">
              <p className="font-display text-2xl">Thank you.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Your email client should have opened. If not, please write to
                artbybenjaminlydford@gmail.com.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 resize-none"
                />
              </div>
              <button
                type="submit"
                className="border border-foreground px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
              >
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2"
      />
    </div>
  );
}
