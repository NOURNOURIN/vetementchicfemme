import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Robes, hauts, manteaux | Rosalie" },
      {
        name: "description",
        content:
          "Parcourez les collections Rosalie : robes, hauts et pantalons, manteaux et accessoires pour femme.",
      },
      { property: "og:title", content: "Collections — Rosalie" },
      {
        property: "og:description",
        content: "Robes, hauts, manteaux et accessoires : toute la mode féminine Rosalie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Collections,
});

function Collections() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-5xl sm:text-6xl">Nos collections</h1>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Retrouvez ces pièces et bien d'autres en boutique.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2">
        {categories.map((c) => (
          <article key={c.name} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-[var(--shadow-soft)]">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={800}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-5 text-3xl text-primary">{c.name}</h2>
            <p className="mt-1 text-muted-foreground">{c.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link
          to="/contact"
          className="rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Venir essayer en boutique
        </Link>
      </div>
    </div>
  );
}
