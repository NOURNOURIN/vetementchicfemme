import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/collections", label: "Collections" },
  { to: "/a-propos", label: "La boutique" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="font-display text-2xl tracking-wide text-primary">
          Rosalie
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-primary">Rosalie</p>
          <p className="mt-2 text-sm text-muted-foreground">
            La mode féminine, élégante et accessible.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold">Explorer</p>
          <ul className="space-y-1 text-muted-foreground">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-semibold">Nous trouver</p>
          <p className="text-muted-foreground">12 rue des Roses, 75000 Paris</p>
          <p className="text-muted-foreground">Mardi – Samedi · 10h – 19h</p>
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rosalie. Tous droits réservés.
      </p>
    </footer>
  );
}
