"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ADMISSION_TIMELINE_OPTIONS,
  EDUCATION_LEVELS,
  indianStates,
} from "@/data/states";
import {
  normalizeIndianMobile,
  splitFullName,
  validateEmail,
  validateFullName,
  validateMobile,
} from "@/lib/validation";
import { getTrackingContext } from "@/lib/track";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_content",
  "utm_campaign",
  "utm_id",
  "utm_keyword",
  "utm_term",
  "utm_adgroup",
  "gclid",
  "fbclid",
  "gad_source",
  "msclkid",
];

type Sanitizer = (value: string) => string;

function getCookie(name: string) {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );

  return match ? decodeURIComponent(match[2]) : null;
}

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};

  UTM_KEYS.forEach((key) => {
    utm[key] = params.get(key) || "";
  });

  return utm;
}

const initialForm = {
  name: "",
  email: "",
  phone: "",
  educationLevel: "",
  admissionTimeline: "",
  state: "",
};

export default function LeadForm({
  title,
  intent = "counselling",
}: {
  title?: string;
  intent?: string;
}) {
  const router = useRouter();

  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateField =
    (field: keyof typeof initialForm, sanitizer?: Sanitizer) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { value } = e.target;

      setForm((prev) => ({
        ...prev,
        [field]: sanitizer ? sanitizer(value) : value,
      }));
    };

  const onlyLetters = (value: string) =>
    value.replace(/[^a-zA-Z\s'-]/g, "");

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 6000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cleanPhone = normalizeIndianMobile(form.phone);

    const errors = [
      validateFullName(form.name),
      validateEmail(form.email),
      validateMobile(cleanPhone),
      !form.educationLevel &&
        "Please select your highest qualification.",
      !form.state && "Please select your state.",
    ].filter((v): v is string => Boolean(v));

    if (errors.length > 0) {
      showMessage(errors[0]);
      return;
    }

    setSubmitting(true);

    const {
      cta_source,
      medium,
      landing_page,
      referrer,
      user_agent,
    } = getTrackingContext();

    const { fname, lname } = splitFullName(form.name);

    const payload = {
      name: form.name.trim().replace(/\s+/g, " "),
      fname,
      lname,
      email: form.email.trim(),
      phone: cleanPhone,
      mobile: cleanPhone,
      education_level: form.educationLevel,
      admission_timeline: form.admissionTimeline,
      admissionTimeline: form.admissionTimeline,
      location: form.state,
      state: form.state,
      university: "NMIMS",
      course: "MBA",
      source: "Google",
      lead_intent: intent,

      ...getUtmParams(),

      cta_source,
      medium,
      landing_page: landing_page || "nmims-onlinemba-lp",
      page_url: window.location.href,
      referrer,
      user_agent: user_agent || navigator.userAgent,

      _ga: getCookie("_ga"),
      _fbc: getCookie("_fbc"),
      _fbp: getCookie("_fbp"),
      _gcl_aw: getCookie("_gcl_aw"),
      _ei_sid: getCookie("_ei_sid"),

      timestamp: Math.floor(Date.now() / 1000),
      event: "form_submit",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      /*
       * IMPORTANT:
       * The Google Ads conversion event is fired ONLY after
       * the API confirms a successful lead submission.
       *
       * It is NOT fired by the /thank-you page.
       */
      if (data.status && data.id) {
        /*
         * Fresh GTM event.
         *
         * Google Tag Manager will listen for:
         *
         *     generate_lead
         *
         * and the Google Ads conversion tag will fire from GTM.
         */
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: "generate_lead",
          form_name: "nmims_online_mba",
          intent,
          lead_id: String(data.id),
        });
        try {
          sessionStorage.setItem("lead_submitted", "1");
        } catch {
          /* ignore storage errors */
        }

        /*
         * Keep the existing custom browser event in case
         * another UI component depends on it.
         */
        window.dispatchEvent(
          new CustomEvent("lead-submitted")
        );

        /*
         * Redirect AFTER the successful lead event has
         * been pushed to the dataLayer.
         */
        router.push("/thank-you");
        return;
      }

      showMessage(
        data.message ||
          "Something went wrong. Please try again."
      );
    } catch {
      showMessage(
        "Unable to submit the form. Please try again."
      );
    }

    setSubmitting(false);
  };

  const inputClass =
    "w-full px-3 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#36183e]";

  const labelClass =
    "text-[#334C4C] text-sm font-medium";

  return (
    <div className="bg-white text-gray-800 rounded-md shadow-[0_6px_24px_rgba(54,24,62,0.15)] px-4 py-4 animate-soft-blink">
      <h2 className="text-center font-bold mb-1 text-[22px] text-[#36183e]">
        {title || "Get Career Counselling"}
      </h2>

      <p className="text-center text-sm text-[#4A5565] mb-1">
        Speak to a counsellor &amp; download brochure
      </p>

      <p className="text-center mb-4">
        <a
          href="tel:+919311417547"
          className="text-[#d02f38] text-[15px] font-semibold no-underline"
        >
          📞 Call Now: +91 9311417547
        </a>
      </p>

      {message && (
        <p className="text-white bg-red-500 text-sm mt-1 mb-3 px-[20px] py-[10px] rounded-lg text-center">
          {message}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-2.5"
        noValidate
      >
        <div>
          <label
            htmlFor="nmims-name"
            className={labelClass}
          >
            Full Name
          </label>

          <input
            id="nmims-name"
            type="text"
            className={inputClass}
            placeholder="Enter Your Full Name"
            value={form.name}
            onChange={updateField(
              "name",
              onlyLetters
            )}
          />
        </div>

        <div>
          <label
            htmlFor="nmims-email"
            className={labelClass}
          >
            Email ID
          </label>

          <input
            id="nmims-email"
            type="email"
            className={inputClass}
            placeholder="Enter Your Email ID"
            value={form.email}
            onChange={updateField("email")}
          />
        </div>

        <div>
          <label
            htmlFor="nmims-phone"
            className={labelClass}
          >
            Mobile Number
          </label>

          <input
            id="nmims-phone"
            type="tel"
            className={inputClass}
            placeholder="Enter Your Mobile Number"
            maxLength={10}
            inputMode="numeric"
            value={form.phone}
            onChange={updateField(
              "phone",
              (v) =>
                normalizeIndianMobile(
                  v.replace(/\D/g, "")
                )
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
          <div>
            <label
              htmlFor="nmims-education"
              className={labelClass}
            >
              Highest Qualification
            </label>

            <select
              id="nmims-education"
              className={`${inputClass} ${
                form.educationLevel
                  ? "text-gray-800"
                  : "text-gray-500"
              }`}
              value={form.educationLevel}
              onChange={updateField(
                "educationLevel"
              )}
            >
              <option value="">
                -- Select --
              </option>

              {EDUCATION_LEVELS.map(
                (level) => (
                  <option
                    key={level}
                    value={level}
                  >
                    {level}
                  </option>
                )
              )}
            </select>
          </div>

          <div>
            <label
              htmlFor="nmims-state"
              className={labelClass}
            >
              State
            </label>

            <select
              id="nmims-state"
              className={`${inputClass} ${
                form.state
                  ? "text-gray-800"
                  : "text-gray-500"
              }`}
              value={form.state}
              onChange={updateField("state")}
            >
              <option value="">
                -- Select State --
              </option>

              {indianStates.map(
                (state) => (
                  <option
                    key={state.value}
                    value={state.value}
                  >
                    {state.label}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="nmims-admission-timeline"
            className={labelClass}
          >
            How soon do you want to take admission?
          </label>

          <select
            id="nmims-admission-timeline"
            className={`${inputClass} ${
              form.admissionTimeline
                ? "text-gray-800"
                : "text-gray-500"
            }`}
            value={form.admissionTimeline}
            onChange={updateField(
              "admissionTimeline"
            )}
          >
            <option value="">
              -- Select --
            </option>

            {ADMISSION_TIMELINE_OPTIONS.map(
              (opt) => (
                <option
                  key={opt}
                  value={opt}
                >
                  {opt}
                </option>
              )
            )}
          </select>
        </div>

        <div className="inline-flex justify-center items-center w-full pt-2">
          <button
            id="cta-form-submit"
            type="submit"
            disabled={submitting}
            className="w-full bg-[#d02f38] hover:bg-[#a91f26] text-white font-bold text-[16px] tracking-wide py-3.5 px-4 rounded transition duration-300 cursor-pointer disabled:opacity-70"
          >
            {submitting
              ? "Submitting..."
              : "SUBMIT"}
          </button>
        </div>
      </form>
    </div>
  );
}