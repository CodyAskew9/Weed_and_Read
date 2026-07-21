import type { CatalogItem } from "@/data/catalog";

type CatalogCardProps = {
  item: CatalogItem;
};

export function CatalogCard({ item }: CatalogCardProps) {
  return (
    <article className="group flex h-full flex-col border border-stamped-gold/45 bg-parchment p-6 text-mahogany shadow-[inset_0_0_0_1px_rgba(43,29,20,0.06)] transition duration-300 hover:-translate-y-1 hover:border-stamped-gold hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      <div className="flex items-baseline justify-between gap-3 border-b border-mahogany/20 pb-3">
        <p className="font-mono text-sm tracking-wider text-wreath-green">
          {item.dewey}
        </p>
        <p className="text-sm uppercase tracking-[0.15em] text-san-mateo-blue">
          {item.cultivar}
        </p>
      </div>
      <h3 className="mt-4 font-serif text-2xl leading-tight text-mahogany">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-mahogany/65">
        {item.format} · THC {item.thc}
      </p>
      <div className="mt-4 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-san-mateo-blue">
          Synopsis
        </p>
        <p className="mt-2 text-base leading-relaxed text-mahogany/85">
          {item.synopsis}
        </p>
      </div>
      <button
        type="button"
        className="mt-6 w-full border border-mahogany/30 bg-mahogany px-4 py-2.5 text-base text-parchment transition group-hover:bg-sign-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-san-mateo-blue"
      >
        Request from the desk
      </button>
    </article>
  );
}
