import Link from "next/link";
import Header from "@/components/Header";
import { DisclaimerFooter } from "@/components/Sections";

const BROCHURE_URL = "#";
const WHATSAPP_URL =
  "https://wa.me/919311417547?text=Hi%2C%20I%20just%20enquired%20about%20the%20NMIMS%20Online%20MBA%20and%20would%20like%20to%20speak%20to%20an%20advisor";
const COUNSELLOR_PHONE = "+919175006270";
const COUNSELLOR_DISPLAY = "+91 9175006270";

export default function ThankYouPage() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans">
      <Header />
      <main className="flex-1">
        <section
          className="relative text-white text-center px-5 py-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(54,24,62,0.85), rgba(54,24,62,0.75)), url('/images/nmims-campus-building.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-[64px] max-sm:text-4xl font-bold text-[#d1b16f] m-0 leading-tight">
            Thank You!
          </h1>
          <p className="text-[20px] max-sm:text-[17px] leading-8 max-w-[640px] mx-auto mt-4 opacity-95">
            For your enquiry. A senior{" "}
            <strong className="text-[#d1b16f]">programme advisor</strong> will
            reach out to you shortly to discuss your{" "}
            <strong className="text-[#d1b16f]">NMIMS Online MBA</strong>{" "}
            admission.
          </p>
        </section>

        <section className="bg-[#f7f6fa] px-5 py-[70px] text-center">
          <h2 className="text-[32px] text-[#36183e] font-bold m-0">
            What to do next?
            <span className="block h-[3px] w-[60px] bg-[#d02f38] mx-auto mt-3.5" />
          </h2>
          <p className="text-[#555] text-[16px] max-w-[600px] mx-auto mt-3 mb-[50px]">
            While our advisor prepares to call you, here are a few ways you can
            move forward right now.
          </p>

          <div className="grid gap-7 max-w-[1100px] mx-auto md:grid-cols-3 max-w-[480px] md:max-w-[1100px] grid-cols-1">
            <a
              href={BROCHURE_URL}
              className="bg-white rounded-[10px] px-7 py-9 text-center no-underline text-inherit shadow-[0_4px_20px_rgba(54,24,62,0.08)] flex flex-col items-center border-t-4 border-t-[#d02f38] hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-[22px] text-[#36183e] font-bold my-0 mb-2.5">
                Download Brochure
              </h3>
              <p className="text-[#555] text-[14px] leading-[22px] m-0 mb-[22px] grow">
                Get the complete programme details, curriculum, fee structure,
                and specialisations.
              </p>
              <span className="inline-block px-[22px] py-2.5 rounded font-bold text-[14px] bg-[#d02f38] text-white">
                Download PDF
              </span>
            </a>

            <a
              href={`tel:${COUNSELLOR_PHONE}`}
              className="bg-white rounded-[10px] px-7 py-9 text-center no-underline text-inherit shadow-[0_4px_20px_rgba(54,24,62,0.08)] flex flex-col items-center border-t-4 border-t-[#36183e] hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-[22px] text-[#36183e] font-bold my-0 mb-2.5">
                Call Us
              </h3>
              <p className="text-[#555] text-[14px] leading-[22px] m-0 mb-[22px] grow">
                Any queries? Speak with our advisor right now on the number
                below.
              </p>
              <span className="inline-block px-[22px] py-2.5 rounded font-bold text-[14px] bg-[#36183e] text-white">
                {COUNSELLOR_DISPLAY}
              </span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="bg-white rounded-[10px] px-7 py-9 text-center no-underline text-inherit shadow-[0_4px_20px_rgba(54,24,62,0.08)] flex flex-col items-center border-t-4 border-t-[#25D366] hover:-translate-y-1 transition-transform"
            >
              <h3 className="text-[22px] text-[#36183e] font-bold my-0 mb-2.5">
                Chat on WhatsApp
              </h3>
              <p className="text-[#555] text-[14px] leading-[22px] m-0 mb-[22px] grow">
                Have questions? Our advisors will assist you promptly on
                WhatsApp.
              </p>
              <span className="inline-block px-[22px] py-2.5 rounded font-bold text-[14px] bg-[#25D366] text-white">
                Open WhatsApp
              </span>
            </a>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block rounded bg-[#eea727] px-5 py-2.5 text-sm font-medium text-white no-underline hover:opacity-90"
          >
            Back to Home
          </Link>
        </section>
      </main>
      <DisclaimerFooter />
    </div>
  );
}
