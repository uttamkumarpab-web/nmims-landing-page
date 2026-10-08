"use client";

import Image from "next/image";
import OpenFormButton from "./OpenFormButton";
import { trackCtaClick } from "@/lib/track";

const WHATSAPP_URL =
  "https://wa.me/919311417547?text=Hi%2C%20I%27m%20interested%20in%20the%20NMIMS%20Online%20MBA";

function WhatsAppCtaButton({ ctaId, text }: { ctaId: string; text: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      onClick={() => trackCtaClick(ctaId)}
      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb856] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current shrink-0"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {text}
    </a>
  );
}


const features = [
  {
    title: "Live & Recorded Learning Sessions",
    text: "24/7 access to learning materials, including recordings of every live session.",
  },
  {
    title: "Strong Focus on Academic Quality",
    text: "600+ faculty members comprising academicians and industry professionals. Globally designed curriculum.",
  },
  {
    title: "Practical & Application-Based Assessment",
    text: "Computer-based examinations conducted at designated centres across India.",
  },
  {
    title: "Flexible & Convenient Fee Options",
    text: "Flexible payment plans supported by convenient EMI and education loan facilities.",
  },
  {
    title: "Technology-Enabled Learning Experience",
    text: "Mobile-friendly learning platform featuring recorded lectures and digital eBooks.",
  },
  {
    title: "Career Support & Guidance",
    text: "Career development support with personalised mentoring and professional guidance.",
  },
];



const specialisations = [
  {
    title: "Marketing Management",
    text: "Explore digital marketing, brand building, consumer insights, and integrated marketing communication.",
  },
  {
    title: "Human Resources Management",
    text: "Develop expertise in talent management, employee performance, and organisational behaviour.",
  },
  {
    title: "Finance Management",
    text: "Build knowledge of corporate finance, investment decisions, financial markets, and risk management.",
  },
  {
    title: "Business Analytics",
    text: "Gain skills in predictive analytics, data visualisation, business intelligence, and data-led decisions.",
  },  
  {
    title: "Business Management",
    text: "Strengthen your understanding of business strategy, leadership, and management for advanced roles.",
  },
  {
    title: "Operations & Data Sciences",
    text: "Understand operations management, supply chain analytics, and data-driven business decision-making.",
  },
  {
    title: "Information Technology Management",
    text: "Learn about enterprise technology, digital transformation, IT strategy, and governance practices.",
  },
];

export function FutureReady() {
  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-[380px_1fr] gap-10 items-center max-lg:grid-cols-1">
        <div>
          <Image
            src="/images/bfr_img1.jpg"
            alt="Be Future Ready"
            width={600}
            height={500}
            className="w-full h-auto rounded-md block"
          />
        </div>
        <div>
          <h2 className="text-[30px] sm:text-[34px] text-[#36183e] font-bold mb-2">
            Advance Your <span className="text-[#d02f38]">Career</span>
          </h2>
          <p className="text-gray-600 mb-4">
             An NMIMS Online MBA designed to help you move confidently toward your professional goals.
          </p>
          <p className="text-gray-700 leading-7 mb-4">
            The NMIMS CDOE Online MBA combines academic learning with the flexibility
  working professionals need. Choose from seven industry-relevant
  specialisations and learn from experienced faculty while managing your
  studies alongside your professional commitments. The programme helps you
  strengthen your understanding of business, management, and leadership for
  today&apos;s evolving workplace.
          </p>
          <p className="text-gray-700 leading-7">
            Beyond academics, you can benefit from interactive learning experiences,
  career support, and access to a diverse alumni community. With the right
  knowledge, skills, and professional exposure, an NMIMS Online MBA can help
  you prepare for new opportunities and take the next step in your career.
          </p>
          <div className="mt-6 flex justify-start max-sm:justify-center">
          <WhatsAppCtaButton
            ctaId="cta-advance-career-whatsapp"
            text="Chat on WhatsApp"
          />
        </div>
        </div>
      </div>
    </section>
  );
}

export function LeadFuture() {
  return (
    <section className="bg-[#36183e] mt-12 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-center text-white text-[30px] sm:text-[34px] font-bold">
          Why Choose NMIMS Online MBA?
        </h2>
        <ul className="list-none p-0 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="bg-white/10 p-6 rounded-lg border border-white/15"
            >
              <h4 className="text-[#d1b16f] text-[18px] font-semibold mb-2.5">
                {f.title}
              </h4>
              <p className="text-[14px] leading-6 text-white/90">{f.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <OpenFormButton
            id="cta-why-nmims-apply-now"
            label="Why NMIMS Apply Now"
            intent="apply"
            className="w-full sm:w-auto text-center bg-[#d02f38] hover:bg-[#a91f26] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Apply Now
          </OpenFormButton>
          <OpenFormButton
            id="cta-why-nmims-brochure"
            label="Why NMIMS Download Brochure"
            intent="brochure"
            className="w-full sm:w-auto text-center bg-[#eea727] hover:bg-[#d6941f] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Download Brochure
          </OpenFormButton>
        </div>
      </div>
    </section>
  );
}

export function Specialisations() {
  return (
    <section className="bg-[#1c1c2b] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-center text-white text-[32px] font-bold">
          NMIMS Online MBA Specializations
        </h2>
        <ul className="list-none p-0 m-0 mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialisations.map((s, i) => (
            <li
              key={s.title}
              className={`p-6 rounded-lg text-white ${
                i % 3 === 0
                  ? "bg-[#d02f38]"
                  : i % 3 === 1
                    ? "bg-[#1c3150]"
                    : "bg-[#d1b16f] text-black"
              }`}
            >
              <h4
                className={`text-[18px] font-bold mb-2 ${i % 3 === 2 ? "text-black" : "text-white"}`}
              >
                {s.title}
              </h4>
              <p
                className={`text-[14px] leading-6 ${i % 3 === 2 ? "text-black/80" : "text-white/90"}`}
              >
                {s.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <OpenFormButton
            id="cta-specialisations-apply-now"
            label="Specialisations Apply Now"
            intent="apply"
            className="w-full sm:w-auto text-center bg-[#d02f38] hover:bg-[#a91f26] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Apply Now
          </OpenFormButton>
          <OpenFormButton
            id="cta-specialisations-brochure"
            label="Specialisations Download Brochure"
            intent="brochure"
            className="w-full sm:w-auto text-center bg-[#eea727] hover:bg-[#d6941f] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Download Brochure
          </OpenFormButton>
        </div>
      </div>
    </section>
  );
}

export function ProgrammeDetails() {
  return (
    <section className="bg-[#24243e] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-center text-white text-[32px] font-bold">
          Programme Details
        </h2>
        <div className="grid gap-6 mt-8 md:grid-cols-3">
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <h5 className="text-[#d1b16f] text-[18px] font-bold mb-3">
              Eligibility
            </h5>
            <ul className="space-y-2 text-[14px] leading-6">
              <li>✓ Graduate from a recognised university</li>
              <li>✓ Minimum 50% aggregate marks</li>
              <li>✓ No work experience required</li>
              <li>✓ Final-year graduates may also apply</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <h5 className="text-[#d1b16f] text-[18px] font-bold mb-3">
              Duration
            </h5>
            <p className="text-[20px] mt-2.5">2 Years</p>
            <p className="text-[14px] mt-2 opacity-90">
              4 semesters · Live + Recorded sessions · Weekend-friendly
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-6 text-white">
            <h5 className="text-[#d1b16f] text-[18px] font-bold mb-3">
              Total Fee
            </h5>
            <p className="text-[28px] mt-2.5 font-bold">₹1,96,000</p>
            <p className="text-[14px] mt-2 opacity-90">
              EMI from ₹8,750/month · No-cost EMI options available
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <OpenFormButton
            id="cta-programme-details-apply-now"
            label="Programme Details Apply Now"
            intent="apply"
            className="w-full sm:w-auto text-center bg-[#d02f38] hover:bg-[#a91f26] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Apply Now
          </OpenFormButton>
          <WhatsAppCtaButton
            ctaId="cta-programme-details-whatsapp"
            text="Chat on WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}

export function Excellence() {
  const items = [
    { value: "25%", label: "Average Salary Growth" },
    { value: "82K+", label: "Alumni Community" },
    { value: "500+", label: "Recruitment Partners" },
    { value: "1,85,000+", label: "Learners Empowered" },
  ];
  return (
    <section className="bg-white py-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-center text-[30px] text-[#d1b16f] font-semibold mb-9 relative pb-3.5">
          NMIMS Excellence at a Glance
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[54px] h-[3px] bg-[#d1b16f]" />
        </h2>
        <ul className="list-none p-0 m-0 grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.label} className="p-6 bg-[#f7f7f9] rounded-md">
              <h3 className="text-[40px] text-[#36183e] font-bold m-0">
                {it.value}
              </h3>
              <p className="text-[#666] mt-1.5">{it.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutAndCampus() {
  return (
    <>
      <section className="bg-[#2a1230] py-[90px] bg-cover bg-center" style={{ backgroundImage: "url('/images/about_nmims_bg.jpg')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-center text-[#d1b16f] text-[30px] sm:text-[42px] font-semibold relative pb-4 mb-10">
            About NMIMS CDOE
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[3px] bg-[#d1b16f]" />
          </h2>
          <div className="max-w-[1000px] mx-auto text-center">
            <p className="leading-[30px] text-[16px] text-white/90">
        NMIMS CDOE serves as the distance and online learning centre of NMIMS
        Deemed-to-be University. Since beginning its ODL and online education
        journey in 2013, the centre has built a technology-enabled learning
        environment that gives students access to interactive academic
        resources and connected learning platforms around the clock.
      </p>

      <p className="mt-6 leading-[30px] text-[16px] text-white/90">
        With a focus on accessible and flexible higher education, NMIMS CDOE
        continues to contribute to the evolving education landscape in India,
        helping learners build knowledge, develop professional skills, and
        work towards their academic and career aspirations.
      </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <OpenFormButton
              id="cta-about-apply-now"
              label="About NMIMS Apply Now"
              intent="apply"
              className="w-full sm:w-auto text-center bg-[#d02f38] hover:bg-[#a91f26] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Apply Now
            </OpenFormButton>
            <OpenFormButton
              id="cta-about-brochure"
              label="About NMIMS Download Brochure"
              intent="brochure"
              className="w-full sm:w-auto text-center bg-[#eea727] hover:bg-[#d6941f] text-white font-bold text-[15px] sm:text-base px-8 py-3 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Download Brochure
            </OpenFormButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-[50px] items-center lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-[38px] max-sm:text-[28px] text-[#36183e] font-bold relative pb-2.5 mb-7">
              NMIMS CDOE Mumbai Address:
              <span className="absolute bottom-0 left-0 w-[54px] h-[3px] bg-[#36183e]" />
            </h2>
            <p className="text-[#36183e] text-[18px] leading-[34px] m-0">
              NMIMS CDOE, 2nd Floor, NMIMS Building, V. L., Pherozeshah Mehta
              Rd, Vile Parle West, Mumbai, Maharashtra 400056
            </p>
            <p className="text-[#36183e] text-[18px] leading-[34px] m-0">
              Phone:{" "}
              <a
                href="tel:+919311417547"
                className="text-[#d02f38] font-semibold no-underline hover:underline"
              >
                +91 9311417547
              </a>
            </p>
            <div className="mt-6 flex justify-start max-sm:justify-center">
              <WhatsAppCtaButton
                ctaId="cta-address-whatsapp"
                text="Chat on WhatsApp"
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/nmims-campus-building.jpg"
              alt="NMIMS Mumbai Campus"
              width={600}
              height={400}
              className="w-full h-auto rounded-md block"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function DisclaimerFooter() {
  return (
    <>
      <section className="bg-white pt-[30px] pb-[50px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <p className="text-[#333] leading-6 text-[14px]">
            <strong>Disclaimer:</strong> As an Affiliate Enquiry Partner (AEP)
            of NMIMS CDOE, we display and showcase programme information of
            NMIMS CDOE. Counselling, admission, programme delivery and
            examination are solely managed by NMIMS CDOE and as an AEP, we have
            no role to play in it. Programme fees, structure, and eligibility
            are subject to change as per NMIMS guidelines. The NMIMS Online MBA
            is UGC-Entitled and AICTE-Approved.
          </p>
        </div>
      </section>
      <footer className="bg-[#821723] py-[18px] text-center">
        <div className="max-w-[1300px] mx-auto px-6">
          <span className="text-[15px] text-white">
            CopyRight © {new Date().getFullYear()} All Rights Reserved. |{" "}
            <a
              href="https://radhyaeducationacademy.com/privacy-policy/"
              target="_blank"
              rel="noopener"
              className="text-white/90 underline hover:text-white"
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}
