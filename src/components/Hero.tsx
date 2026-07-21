import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      aria-label="Weed and Read introduction"
    >
      <Image
        src="/images/interior-hero.jpg"
        alt="Interior reading room with wood paneling and warm lighting at Weed and Read"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] scale-105"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,54,93,0.45)_0%,rgba(43,29,20,0.55)_40%,rgba(26,18,12,0.92)_100%)]"
        aria-hidden="true"
      />
      <div
        className="animate-soft-glow pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.16)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 border-[12px] border-stamped-gold/15"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-28">
        <h1 className="animate-fade-up font-berkshire text-[length:var(--ad-largest)] leading-[1.05] text-parchment">
          Weed and Read
        </h1>
        <p className="animate-fade-up-delay mt-5 max-w-2xl font-serif text-3xl leading-snug text-stamped-gold sm:text-4xl">
          A Victorian reading room for the discreet cannabis patron.
        </p>
        <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-lg leading-relaxed text-parchment/85">
          Quiet shelves, stamped ledgers, and a storefront that keeps its voice
          low—on San Mateo, in Albuquerque.
        </p>
        <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#catalog"
            className="bg-sign-red px-7 py-3.5 text-center text-lg font-medium text-parchment transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamped-gold"
          >
            Browse the catalog
          </a>
          <a
            href="#visit"
            className="border border-stamped-gold/70 px-7 py-3.5 text-center text-lg text-parchment transition hover:bg-stamped-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamped-gold"
          >
            Plan a visit
          </a>
        </div>
        <p className="mt-8 text-base font-medium text-parchment/75">
          Please Consume Responsibly
        </p>
      </div>
    </section>
  );
}
