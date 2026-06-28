import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";

const nav = [
  { to: "/", label: "الرئيسية" },
  { to: "/categories", label: "التصنيفات" },
  { to: "/about", label: "عن المدوّنة" },
  { to: "/contact", label: "تواصل" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-blog flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg font-bold">
            م
          </span>
          <span className="font-serif text-xl font-bold tracking-tight">
            مَجلّة <span className="text-primary">مِداد</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-foreground/75 transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-bold"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="بحث"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition hover:border-primary hover:text-primary"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
