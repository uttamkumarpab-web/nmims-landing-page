"use client";

import { useEffect, useState } from "react";
import FormPopup from "./FormPopup";
import OpenFormButton from "./OpenFormButton";
import { trackCtaClick } from "@/lib/track";

export function FloatingCtas() {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-[9998] flex flex-col gap-2.5 items-start">
      <OpenFormButton
        id="cta-floating-apply-now"
        label="Floating Apply Now"
        intent="apply"
        className="bg-[#d02f38] text-white font-bold text-[15px] tracking-[0.5px] [writing-mode:vertical-rl] px-3 py-[12px] rounded-r-lg shadow-[2px_2px_12px_rgba(0,0,0,0.25)] hover:opacity-90"
      >
        Apply Now
      </OpenFormButton>
      <OpenFormButton
        id="cta-floating-download-brochure"
        label="Floating Download Brochure"
        intent="brochure"
        className="bg-[#1c3150] text-white font-bold text-[15px] tracking-[0.5px] [writing-mode:vertical-rl] px-3 py-[12px] rounded-r-lg shadow-[2px_2px_12px_rgba(0,0,0,0.25)] hover:opacity-90"
      >
        Download Brochure
      </OpenFormButton>
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] z-[9998] no-underline"
      href="https://wa.me/919311417547?text=Hi%2C%20I%27m%20interested%20in%20the%20NMIMS%20Online%20MBA"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      onClick={() => trackCtaClick("whatsapp-float")}
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export function UncontrolledFormPopup() {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState("apply");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as { intent?: string } | undefined;
      if (detail?.intent) setIntent(detail.intent);
      setOpen(true);
    };
    window.addEventListener("open-form-popup", handler);
    return () => window.removeEventListener("open-form-popup", handler);
  }, []);

  if (!open) return null;
  return <FormPopup open onClose={() => setOpen(false)} intent={intent} />;
}
