import Image from "next/image";
import { business } from "@/data/business";

function formatHoursLabel(opens: string, closes: string) {
  const toDisplay = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return m === 0
      ? `${hour12} ${period}`
      : `${hour12}:${String(m).padStart(2, "0")} ${period}`;
  };
  return `${toDisplay(opens)} – ${toDisplay(closes)} daily`;
}

export function VisitSection() {
  const { address, openingHours } = business;
  const mapsQuery = encodeURIComponent(
    `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} ${address.postalCode}`,
  );

  return (
    <section
      id="visit"
      className="border-t border-stamped-gold/25 bg-mahogany"
      aria-labelledby="visit-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-stamped-gold/30">
          <Image
            src="/images/exterior.jpg"
            alt="Weed and Read storefront on San Mateo Blvd in Albuquerque"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-stamped-gold">
            Hours & address
          </p>
          <h2
            id="visit-heading"
            className="mt-3 font-serif text-4xl text-parchment"
          >
            Come for the quiet
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-parchment/85">
            Look for the blue sign on San Mateo. Inside: wood paneling, soft
            light, and room enough to browse without being hurried. Cash only.
          </p>
          <dl className="mt-10 grid gap-8 text-lg text-parchment/90 sm:grid-cols-2">
            <div>
              <dt className="text-sm uppercase tracking-[0.2em] text-stamped-gold">
                Location
              </dt>
              <dd className="mt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-stamped-gold/50 underline-offset-4 transition hover:text-stamped-gold"
                >
                  {address.streetAddress}
                  <br />
                  {address.addressLocality}, {address.addressRegion}{" "}
                  {address.postalCode}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-[0.2em] text-stamped-gold">
                Hours
              </dt>
              <dd className="mt-2">
                {formatHoursLabel(openingHours.opens, openingHours.closes)}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm uppercase tracking-[0.2em] text-stamped-gold">
                Atmosphere
              </dt>
              <dd className="mt-2">
                Adults 21+ · Low voices preferred · No photography of patrons
              </dd>
            </div>
          </dl>
          <p className="mt-10 text-base font-medium text-parchment/75">
            Please Consume Responsibly
          </p>
        </div>
      </div>
    </section>
  );
}
