import LightRays from "@/components/LightRays";
import homeScreenBg from "../assets/images/homescreenbg.png";
import TargetCursor from "@/components/TargetCursor";

const HomeScreen = () => {
  return (
    <div className="relative h-dvh w-full bg-black text-white overflow-hidden flex flex-col">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${homeScreenBg})` }}
      />

      {/* Light Rays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <LightRays
          raysOrigin="left"
          raysColor="#ffffff"
          raysSpeed={3}
          lightSpread={2}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          className="custom-rays"
        />
      </div>

      <section className="relative z-20 flex-1 flex flex-col justify-between px-4 py-8 sm:px-6 h-full">
        <div className="flex-none h-16" />

        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto -mt-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-linear-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 text-xs tracking-[0.25em] font-light whitespace-nowrap">
              EST. 2024
            </span>
            <div className="h-px w-8 bg-linear-to-l from-transparent to-cyan-400" />
          </div>

          <div className="text-center space-y-2">
            <h1 className="cursor-target text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              BRAINSTORM
            </h1>
            <h1 className="cursor-target text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tighter bg-linear-to-b from-white via-gray-200 to-gray-600 bg-clip-text text-transparent">
              CREATORS
            </h1>
          </div>

          <p className="text-gray-400 text-sm sm:text-base max-w-[85%] sm:max-w-2xl mx-auto leading-relaxed text-center mt-6">
            Precision multimedia services for the digital age. We bring your
            vision into focus.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 animate-bounce pb-4">
          <span className="text-cyan-400 text-[10px] tracking-widest uppercase opacity-80">
            Scroll to Focus
          </span>
          <div className="w-px h-12 bg-linear-to-b from-cyan-400 to-transparent" />
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
