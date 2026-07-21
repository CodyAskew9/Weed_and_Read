import { catalog } from "@/data/catalog";
import { CatalogCard } from "@/components/CatalogCard";

export function CatalogSection() {
  return (
    <section
      id="catalog"
      className="relative border-t border-stamped-gold/25 bg-[linear-gradient(180deg,#2b1d14_0%,#241810_100%)] py-20 sm:py-28"
      aria-labelledby="catalog-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-stamped-gold">
            The ledger
          </p>
          <h2
            id="catalog-heading"
            className="mt-3 font-serif text-4xl text-parchment sm:text-5xl"
          >
            Today&apos;s catalog cards
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-parchment/80">
            Entries are filed like a small library collection—synopsis first,
            spectacle last.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-10 text-base font-medium text-parchment/70">
          Please Consume Responsibly
        </p>
      </div>
    </section>
  );
}
