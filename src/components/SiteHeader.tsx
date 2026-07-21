export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-stamped-gold/20 bg-mahogany/40 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-serif text-xl tracking-wide text-parchment transition hover:text-stamped-gold"
        >
          Weed and Read
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6 text-base">
          <a
            href="#catalog"
            className="text-parchment/85 transition hover:text-stamped-gold"
          >
            Catalog
          </a>
          <a
            href="#visit"
            className="text-parchment/85 transition hover:text-stamped-gold"
          >
            Visit
          </a>
        </nav>
      </div>
    </header>
  );
}
