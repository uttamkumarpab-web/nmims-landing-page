import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white w-full sticky top-0 left-0 z-[1000] border-b border-[#e8e8ec]">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-6 py-2 gap-5 max-md:px-4">
        <span className="block leading-none flex-none">
          <Image
            src="/images/logo-nmims-cdoe.png"
            alt="SVKM's NMIMS — Centre for Distance and Online Education"
            width={300}
            height={80}
            priority
            className="block h-[80px] w-auto max-md:h-16 max-sm:h-12"
          />
        </span>
        <span className="block leading-none flex-none">
          <Image
            src="/images/logo-nmims-online.png"
            alt="NMIMS Online"
            width={200}
            height={56}
            priority
            className="block h-[56px] w-auto max-md:h-11 max-sm:h-[34px]"
          />
        </span>
      </div>
    </header>
  );
}
