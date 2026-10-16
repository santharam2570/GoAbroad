"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/site";
import { useScrollToTop } from "./SmoothScroll";

export function FloatingActions() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const scrollToTop = useScrollToTop();
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 600));

  return (
    <div className="fixed bottom-5 right-4 z-[55] flex flex-col items-end gap-3 sm:right-6">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            aria-label="Back to top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <a href={site.phoneHref} aria-label={`Call ${site.phone}`} className="glass flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform hover:scale-110">
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}
