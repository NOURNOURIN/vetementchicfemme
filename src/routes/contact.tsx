import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact et horaires | Rosalie" },
      {
        name: "description",
        content: "Adresse, horaires et contact de la boutique de mode féminine Rosalie.",
      },
      { property: "og:title", content: "Contact — Rosalie" },
      {
        property: "og:description",
        content: "Retrouvez l'adresse, les horaires et les moyens de contacter la boutique Rosalie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const infos = [
  { title: "Adresse", lines: ["12 rue des Roses", "75000 Paris"] },
  { title: "Horaires", lines: ["Mardi – Samedi", "10h – 19h"] },
  { title: "Contact", lines: ["01 23 45 67 89", "bonjour@rosalie.fr"] },
];

function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 text-center">
      <h1 className="text-5xl sm:text-6xl">Venez nous voir</h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        Nous serons ravies de vous accueillir et de vous conseiller.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {infos.map((i) => (
          <div key={i.title} className="rounded-lg bg-secondary p-8">
            <h2 className="text-2xl text-primary">{i.title}</h2>
            {i.lines.map((l) => (
              <p key={l} className="mt-1 text-sm text-secondary-foreground">
                {l}
              </p>
            ))}
          </div>
        ))}
      </div>
      <a
        href="mailto:bonjour@rosalie.fr"
        className="mt-12 inline-block rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
      >
        Nous écrire
      </a>
    </div>
  );
}
