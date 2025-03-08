import ScrollButton from "./components/ScrollButton";
import {
  Gothic_A1,
  Libre_Baskerville,
  Lora,
  Playfair_Display,
} from "next/font/google";

const gothic_A1 = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "700", "200"],
});

const libre_basker = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="relative">
      {/* Video Background (Fixed) */}
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/overview.webm" type="video/webm" />
        </video>
      </div>

      {/* Hero Section */}
      <section className="px-4 relative w-full h-[95vh] md:h-[90vh] flex flex-col items-center justify-center bg-black bg-opacity-40">
        <img className=" w-2/3 md:w-1/2 z-10" src="/navbarLogo.png" />
        <h3
          className={`my-2 ${gothic_A1.className} font-[400] tracking-wide text-white text-xl md:text-3xl  text-center`}
        >
          Defining the Standards of Real Estate Development
        </h3>

        {/* Scroll Down Button */}
        <ScrollButton sectionName={"img-section"} />
      </section>

      {/* Next Section */}
      <section
        id="img-section"
        className="pt-20 md:pt-32 px-4 relative w-full h-screen bg-[url(/new-york-skyline.jpg)] items-center bg-cover bg-center bg-no-repeat flex flex-col"
      >
        <h2
          className={`leading-normal md:leading-tight ${libre_basker.className} tracking-wider my-2 text-white text-center text-2xl sm:text-3xl md:text-5xl  font-[400]`}
        >
          Shaping the
          <br /> Skyline
        </h2>

        <div
          className={`${gothic_A1.className} my-2 md:max-w-xl text-white text-base font-[400] sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl `}
        >
          Shamasco has redefined the New York City skyline with an impressive
          portfolio of residential, office, hospitality, and mixed-use
          properties. These iconic properties have raised the benchmark and
          continue to set the standards of real estate development.
        </div>

        <ScrollButton sectionName={"stats-section"} />
      </section>

      <section
        id="stats-section"
        className="pt-20 md:pt-32 px-4  w-full  bg-white flex flex-col  items-center"
      >
        <div
          className={`${playfair_display.className} font-[700] my-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl `}
        >
          COMPANY OVERVIEW{" "}
        </div>
        <div className="flex flex-col md:flex-row my-10 gap-10">
          <div className="flex flex-col items-center">
            <div className={`${lora.className} text-7xl md:text-9xl`}>20M+</div>
            <div
              className={`${gothic_A1.className} font-[400] text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto`}
            >
              Gross Square Feet of Past <br />
              and Future Developments
            </div>
          </div>
          <div className="border-black border-[0.1px]  w-44 md:h-44 md:w-0 opacity-20 text-center mx-auto"></div>

          <div className="flex flex-col items-center">
            <div className={`${lora.className} text-7xl md:text-9xl`}>1989</div>
            <div
              className={`${gothic_A1.className} font-[400] text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto`}
            >
              Year Founded
            </div>
          </div>
        </div>
        <div className="my-10">
          <div
            className={`${gothic_A1.className} my-2 font-[400] text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto`}
          >
            Extell is a full-service development company driven by an internal
            team of talented real estate professionals whose combined breadth of
            experience includes all areas of real estate development. Clear
            communication and proficient execution enable us to successfully
            acquire, finance, develop, market, and manage the most sophisticated
            development projects.
          </div>
          <div
            className={`${gothic_A1.className} font-[400] my-2 text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto`}
          >
            The Extell success story includes developing some of the world’s
            most elevated residences and redefining luxury development
            throughout New York City. Our portfolio continues to expand
            throughout New York and other premier markets across the nation.
          </div>
        </div>
      </section>
    </main>
  );
}
