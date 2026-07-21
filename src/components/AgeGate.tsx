"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "wnr-age-verified";

type AgeGateProps = {
  children: React.ReactNode;
};

export function AgeGate({ children }: AgeGateProps) {
  const [ready, setReady] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setVerified(saved === "true");
    setReady(true);
  }, []);

  function confirmAge() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setVerified(true);
  }

  function declineAge() {
    window.location.href = "https://www.google.com";
  }

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mahogany text-parchment">
        <p className="font-serif text-2xl tracking-wide text-stamped-gold">
          Weed and Read
        </p>
      </div>
    );
  }

  if (!verified) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-mahogany/95 px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-gate-title"
      >
        <div className="animate-gate-in w-full max-w-lg border border-stamped-gold/60 bg-[linear-gradient(160deg,#3a281c_0%,#2b1d14_55%,#1b365d_140%)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] sm:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-stamped-gold">
            Private reading room
          </p>
          <h1
            id="age-gate-title"
            className="font-berkshire text-4xl leading-tight text-parchment sm:text-5xl"
          >
            Weed and Read
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-parchment/85">
            This establishment is reserved for adults 21 years of age and older.
            Please confirm your age to continue.
          </p>
          <p className="mt-3 text-base leading-relaxed text-parchment/70">
            Please Consume Responsibly
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={confirmAge}
              className="bg-sign-red px-6 py-3 text-center text-lg font-medium text-parchment transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamped-gold"
            >
              I am 21 or older
            </button>
            <button
              type="button"
              onClick={declineAge}
              className="border border-parchment/40 px-6 py-3 text-center text-lg text-parchment transition hover:border-stamped-gold hover:text-stamped-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stamped-gold"
            >
              I am under 21
            </button>
          </div>
          <p className="compliance-warning mt-8 text-parchment/65">
            For use only by adults 21 and older. Keep out of reach of children.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
