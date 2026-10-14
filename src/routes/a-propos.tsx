import { createFileRoute } from "@tanstack/react-router";
import boutique from "@/assets/boutique.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "La boutique — Notre histoire | Rosalie" },
      {
        name: "description",
        content:
          "Découvrez l'univers de la boutique Rosalie : une sélection de mode féminine choisie avec soin et des conseils personnalisés.",
      },
      { property: "og:title", content: "La boutique Rosalie" },
      {
        property: "og:description",
        content: "Une boutique de mode féminine, des conseils sincères et des pièces choisies avec soin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Sélection soignée", text: "Chaque pièce est choisie pour sa qualité, sa coupe et sa matière." },
  { title: "Conseils sincères", text: "Nous vous aidons à trouver ce qui vous met vraiment en valeur." },
  { title: "Pour toutes", text: "Des tailles et des styles variés, pour chaque silhouette et chaque occasion." },
];

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Notre histoire
          </p>
          <h1 className="text-5xl sm:text-6xl">La boutique Rosalie</h1>
          <p className="mt-6 text-muted-foreground">
            Rosalie est née d'une envie simple : proposer une mode féminine élégante, facile à
            porter et accessible. Notre boutique est un lieu chaleureux où l'on prend le temps
            d'essayer, de conseiller et de se faire plaisir.
          </p>
        </div>
        <img
          src={boutique}
          alt="Intérieur de la boutique Rosalie"
          width={1200}
          height={912}
          className="rounded-lg shadow-[var(--shadow-soft)]"
        />
      </div>
      <div className="mt-20 grid gap-6 sm:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="rounded-lg bg-secondary p-8">
            <h2 className="text-2xl text-primary">{v.title}</h2>
            <p className="mt-3 text-sm text-secondary-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
