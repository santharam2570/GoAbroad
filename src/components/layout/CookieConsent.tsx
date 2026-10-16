"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

const KEY = "ga-cookie-consent";
const EVENT = "ga-cookie-settings";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(!localStorage.getItem(KEY)), 3500);
    const open = () => setShow(true);
    window.addEventListener(EVENT, open);
    return () => {
      clearTimeout(t);
      window.removeEventListener(EVENT, open);
    };
  }, []);

  const choose = (value: "all" | "essential") => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="dialog"
          aria-label="Cookie preferences"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass fixed bottom-4 left-4 right-20 z-[65] rounded-2xl p-4 shadow-2xl sm:left-auto sm:right-24 sm:max-w-sm sm:p-5"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-sun-400" />
            <p className="text-sm leading-relaxed text-white/75">
              We use essential cookies to run this site and, with your consent, analytics cookies to improve it. Read our{" "}
              <Link href="/privacy-policy" className="text-brand-300 underline underline-offset-2">privacy policy</Link>.
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={() => choose("all")} className="flex-1 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400">
              Accept all
            </button>
            <button type="button" onClick={() => choose("essential")} className="flex-1 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              Essential only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(EVENT))} className="hover:text-white">
      Cookie Settings
    </button>
  );
}
