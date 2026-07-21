import { business } from "@/data/business";

const WARNINGS = [
  "For use only by adults 21 and older.",
  "Keep out of reach of children.",
  "This product is not approved by the FDA to treat, cure, or prevent any disease. FDA has not evaluated this product for safety, effectiveness, and quality.",
  "Do not drive a motor vehicle or operate machinery while under the influence of cannabis.",
  "There may be long term adverse health effects from consumption of cannabis, including additional risks for women who are or may become pregnant or are breastfeeding.",
] as const;

export function ComplianceFooter() {
  const { address } = business;

  return (
    <footer className="border-t border-stamped-gold/30 bg-san-mateo-blue text-parchment">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-3xl text-stamped-gold">Weed and Read</p>
            <p className="mt-2 max-w-md text-lg leading-relaxed text-parchment/80">
              A privacy-first cannabis boutique and reading room at{" "}
              {address.streetAddress}, {address.addressLocality},{" "}
              {address.addressRegion}.
            </p>
          </div>
          <p className="text-xl font-medium tracking-wide text-parchment">
            Please Consume Responsibly
          </p>
        </div>

        <ul className="compliance-warning mt-10 space-y-2 border-t border-parchment/20 pt-8 text-parchment/70">
          {WARNINGS.map((warning) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-parchment/50">
          © {new Date().getFullYear()} Weed and Read. Licensed cannabis retail
          for adults 21+.
        </p>
      </div>
    </footer>
  );
}
