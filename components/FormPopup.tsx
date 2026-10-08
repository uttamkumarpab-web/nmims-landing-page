"use client";

import { useCallback, useEffect, useState } from "react";
import LeadForm from "./LeadForm";

type FormPopupProps = {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  intent?: string;
};

export default function FormPopup({ open, onClose, title, intent }: FormPopupProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalIntent, setInternalIntent] = useState("apply");
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : internalOpen;
  const activeIntent = intent ?? internalIntent;

  const close = useCallback(() => {
    if (isControlled) onClose?.();
    else setInternalOpen(false);
  }, [isControlled, onClose]);

  useEffect(() => {
    if (isControlled) return;
    const handleOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail as { intent?: string } | undefined;
      if (detail?.intent) setInternalIntent(detail.intent);
      setInternalOpen(true);
    };
    window.addEventListener("open-form-popup", handleOpen);
    return () => window.removeEventListener("open-form-popup", handleOpen);
  }, [isControlled]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const modalTitle =
    title ?? (activeIntent === "brochure" ? "Download Brochure" : "Apply Now");
  const modalSubtitle =
    activeIntent === "brochure"
      ? "Enter your details to receive the brochure on email & WhatsApp"
      : "Speak to a counsellor & receive your brochure";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={modalTitle}
    >
      <div
        className="relative my-8 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close application form"
          className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow hover:text-[#d02f38]"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="px-6 pt-5 text-center">
            <h3 className="text-[#36183e] text-[22px] font-bold">{modalTitle}</h3>
            <p className="text-gray-500 text-sm mt-1">{modalSubtitle}</p>
          </div>
          <div className="p-4">
            <LeadForm title={modalTitle} intent={activeIntent} />
          </div>
        </div>
      </div>
    </div>
  );
}
