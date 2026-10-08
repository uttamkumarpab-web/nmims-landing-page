import Image from "next/image";
import LeadForm from "./LeadForm";

const stats = [
  { value: "2 Years", label: "Duration" },
  { value: "7 Specializations", label: "Choose your path" },
  { value: "100% Online", label: "Live + Recorded" },
  { value: "EMI Available", label: "From ₹8,750/mo" },
];

const pointers = [
  "Online MBA",
  "Online BBA",
  "Online BCOM",
  "Executive MBA",
  "Online Diploma",
];

export default function HeroSection() {
  return (
    <section className="relative bg-[#e2dcfe] overflow-hidden lg:bg-fixed lg:bg-no-repeat lg:bg-[length:40%_auto] lg:bg-[position:center_120px] lg:bg-[url(/images/banner4.webp)]">
      {/* Fixed-background overlay (desktop only) — solid behind text, fading out so the image stays visible */}
      <div className="hidden lg:block absolute inset-0 "/>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* MAIN HERO */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[minmax(0,1fr)_390px]
            gap-4
            lg:gap-10
            items-center
            min-h-[610px]
            py-8
            lg:py-5
          "
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20 min-w-0 lg:pr-4">

            <h1
              className="
                text-[#36183e]
                font-bold
                leading-[1.06]
                tracking-[-1px]
                text-[42px]
                xl:text-[48px]
                2xl:text-[52px]
                max-lg:text-[40px]
                max-sm:text-[32px]
                sm:-mt-20
              "
            >
              Best Online MBA
              <br />
              from NMIMS CDOE
            </h1>

            <p
              className="
                text-[#36183e]
                italic
                text-[19px]
                xl:text-[21px]
                leading-[1.15]
                font-medium
                mt-8
                mb-2
                max-sm:text-[17px]
                max-w-sm
              "
            >
              Advance Your Career with a Globally Recognised Online MBA
            </p>

            <p
              className="
                text-[#36183e]
                text-[15px]
                xl:text-[16px]
                font-medium
                mb-5
              "
            >
              UGC-DEB Entitled || AICTE-Approved || NAAC A++
            </p>

           {/* POINTERS */}
<ul className="list-none p-0 m-0 space-y-3">
  {pointers.map((item) => (
    <li
      key={item}
      className="
        flex
        items-center
        gap-3
        text-[#36183e]
        text-[19px]
        xl:text-[21px]
        font-medium
      "
    >
      <span
        className="
          text-[#FFB51B]
          font-bold
          text-[23px]
          leading-none
        "
      >
        ✓
      </span>

      <span
        className="
          inline-flex
          items-center
          px-3
          py-1
          rounded-md
          bg-white/70
          border
          border-[#36183e]/15
          text-[#36183e]
          font-semibold
          shadow-sm
        "
      >
        {item}
      </span>
    </li>
  ))}
</ul>
          </div>

          {/* ================= CENTER IMAGE (mobile only — desktop uses it as fixed background) ================= */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              h-[430px]
              lg:hidden
              min-w-0
              -mx-4
            "
          >
            <Image
              src="/images/banner4.webp"
              alt="NMIMS Online MBA student"
              width={728}
              height={628}
              priority
              sizes="
                (max-width: 1024px) 70vw,
                (max-width: 1280px) 38vw,
                650px
              "
              className="
                absolute
                w-[400px]
                max-w-none
                h-auto
                object-contain
                object-center
                left-1/2
                -translate-x-1/2
                top-1/2
                -translate-y-1/2
              "
            />
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div
            id="main-form"
            className="
              scroll-mt-24
              relative
              z-20
              w-full
              lg:w-[390px]
              lg:justify-self-end
            "
          >
            <LeadForm />
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            pb-7
            lg:pb-8
          "
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="
                px-5
                py-4
                rounded-xl
                bg-[#36183e]
                shadow-sm
              "
            >
              <h3
                className="
                  text-white
                  text-[18px]
                  xl:text-[20px]
                  leading-6
                  font-bold
                  m-0
                "
              >
                {s.value}
              </h3>

              <span className="text-white/90 text-[13px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}