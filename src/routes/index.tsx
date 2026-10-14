import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import boutique from "@/assets/boutique.jpg";
import { categories } from "@/lib/categories";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rosalie — Mode féminine, robes, manteaux et accessoires" },
      {
        name: "description",
        content:
          "Découvrez la nouvelle collection Rosalie : robes, hauts, manteaux et accessoires pour femme, dans notre boutique.",
      },
      { property: "og:title", content: "Rosalie — Mode féminine" },
      {
        property: "og:description",
        content: "La nouvelle collection de robes, manteaux et accessoires pour femme.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const promises = [
  "Nouvelle collection",
  "Conseils personnalisés en boutique",
  "Retouches offertes",
  "Pièces sélectionnées avec soin",
];

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Femme portant une robe longue rose fluide"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[75%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero-mobile)] md:bg-[image:var(--gradient-hero)]" />
        <div className="mx-auto flex min-h-[78vh] max-w-6xl items-center px-5 py-20">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Collection printemps
            </p>
            <h1 className="text-5xl leading-[1.05] text-foreground sm:text-7xl">
              L'élégance au féminin
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Des robes, des hauts et des manteaux choisis pour vous faire sentir belle, chaque
              jour.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Voir les collections
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-primary px-7 py-3 font-medium text-primary transition-colors hover:bg-secondary"
              >
                Nous rendre visite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <ul className="mx-auto grid max-w-6xl gap-2 px-5 py-4 text-center text-sm font-medium sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-20">
        <div className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl">Nos univers</h2>
          <p className="mt-3 text-muted-foreground">Trouvez la pièce qui vous ressemble.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to="/collections"
              className="group relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={800}
                height={1008}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[image:var(--gradient-card)]" />
              <span className="absolute bottom-4 left-4 font-display text-2xl text-primary-foreground">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <img
          src={boutique}
          alt="Intérieur de la boutique Rosalie"
          loading="lazy"
          width={1200}
          height={912}
          className="rounded-lg shadow-[var(--shadow-soft)]"
        />
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Notre boutique
          </p>
          <h2 className="text-4xl sm:text-5xl">Un lieu pensé pour vous</h2>
          <p className="mt-5 text-muted-foreground">
            Chez Rosalie, nous prenons le temps de vous conseiller, d'essayer, de comparer. Venez
            découvrir nos pièces dans une ambiance chaleureuse et repartez avec une tenue qui vous
            ressemble.
          </p>
          <Link
            to="/a-propos"
            className="mt-7 inline-block rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Découvrir la boutique
          </Link>
        </div>
      </section>
    </>
  );
}
