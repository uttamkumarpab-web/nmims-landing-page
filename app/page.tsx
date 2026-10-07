import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import {
  AboutAndCampus,
  DisclaimerFooter,
  Excellence,
  FutureReady,
  LeadFuture,
  ProgrammeDetails,
  Specialisations,
} from "@/components/Sections";
import {
  FloatingCtas,
  UncontrolledFormPopup,
  WhatsAppFloat,
} from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans">
      <Header />
      <main className="flex w-full flex-1 flex-col">
        <HeroSection />
        <FutureReady />
        <LeadFuture />
        <Specialisations />
        <ProgrammeDetails />
        <Excellence />
        <AboutAndCampus />
        <DisclaimerFooter />
      </main>
      <FloatingCtas />
      <WhatsAppFloat />
      <UncontrolledFormPopup />
    </div>
  );
}
