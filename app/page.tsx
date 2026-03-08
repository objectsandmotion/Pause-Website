import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FCF7ED] font-sans">
      {/* Top left squiggle — bleeds off top and left */}
      <div className="fixed left-0 top-0 -translate-x-1/4 -translate-y-1/4">
        <Image
          src="/TLeftSquiggle.png"
          alt=""
          width={320}
          height={320}
          className="h-48 w-48 object-left-top object-contain md:h-64 md:w-64"
        />
      </div>

      {/* Center: Pause + tagline */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
          pause
        </h1>
        <p
          className="text-md text-black md:text-lg"
          style={{ fontFamily: "var(--font-sofia-medium)" }}
        >
          Take control of your impulse.
        </p>
      </div>

      {/* Bottom right squiggle — bleeds off bottom and right */}
      <div className="fixed bottom-0 right-0 translate-x-1/4 translate-y-1/4">
        <Image
          src="/BRightSquiggle.png"
          alt=""
          width={320}
          height={320}
          className="h-48 w-48 object-right-bottom object-contain md:h-64 md:w-64"
        />
      </div>
    </div>
  );
}
