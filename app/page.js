import MainPageVideo from "./components/MainPageVideo";
import ScrollButton from "./components/ScrollButton";
import Image from "next/image";
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
    <main className="relative scroll-smooth">
      {/* Video Background (Fixed) */}
      <MainPageVideo />

      {/* Hero Section */}
      <section className="px-4 relative w-full h-[calc(100vh-32px)] md:h-[calc(100vh-105px)] flex flex-col items-center justify-center bg-black bg-opacity-40">
        <Image
          className="w-2/3 md:max-w-xs z-10"
          src="/navbarLogo.png"
          alt="Navbar Logo"
          width={500} // Set appropriate width
          height={300} // Set appropriate height
          priority // Ensures fast loading for important images
        />{" "}
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
        className="pt-16 md:pt-32 px-4 relative w-full h-screen bg-[url(/skyline.jpg)] bg-black/60 bg-cover bg-center bg-no-repeat bg-blend-darken flex flex-col items-center"
      >
        <h2
          className={`leading-normal md:leading-tight ${libre_basker.className} tracking-wider my-2 text-white text-center text-3xl   font-[400]`}
        >
          turning around distressed properties to wonderful homes
        </h2>

        <div
          className={`${gothic_A1.className}  break-words my-2 md:max-w-xl text-white text-base font-[400]   text-center max-w-3xl `}
        >
          Shamas has a proven track record for successful execution of a broad
          range of construction, restoration & renovation projects.
        </div>

        <ScrollButton sectionName={"stats-section"} />
      </section>

      <section
        id="stats-section"
        className="pt-8 md:pt-32 px-4  w-full  bg-white flex flex-col  items-center"
      >
        <div
          className={`${playfair_display.className} font-[700] my-10 text-center text-3xl  `}
        >
          COMPANY OVERVIEW{" "}
        </div>
        <div className="flex flex-col md:flex-row my-8 gap-10">
          <div className="flex flex-col items-start justify-center">
            <div className={`${lora.className} text-7xl `}>18 Years</div>
            <div
              className={`${gothic_A1.className} font-[400]  text-base  text-center max-w-3xl mx-auto`}
            >
              of track record <br />
            </div>
          </div>
          <div className="border-black border-[0.1px]  w-44 md:h-[8rem] md:w-0 opacity-20 text-center mx-auto"></div>

          <div className="flex flex-col items-center">
            <div className={`${lora.className} text-7xl `}>200+</div>
            <div
              className={`${gothic_A1.className} font-[400]  text-base  text-center max-w-3xl mx-auto`}
            >
              buildings
            </div>
          </div>
        </div>
        <div className="my-16 px-6">
          <div
            className={`${gothic_A1.className} text-black text-base text-center leading-relaxed max-w-3xl mx-auto`}
          >
            Our expertise in working with HUD, UHAB, HPD, and other affiliated
            programs has made us a respective leader in the affordable housing
            industry.
          </div>
          <div className="border-t border-gray-600 w-16 mx-auto my-6"></div>{" "}
          {/* Decorative Divider */}
          <div
            className={`${gothic_A1.className} text-black text-base text-center leading-loose max-w-3xl mx-auto`}
          >
            By focusing on sustainable practices, advanced engineering
            solutions, and cutting-edge technology, Shamas ensures projects are
            delivered on time and within budget.
          </div>
          <div className="border-t border-gray-600 w-16 mx-auto my-6"></div>
          <div
            className={`${gothic_A1.className} text-black text-base text-center leading-loose max-w-3xl mx-auto`}
          >
            In response to evolving challenges such as rising interest rates and
            climate regulations, Shamas employs strategies like fixed-rate
            financing, value engineering, and sustainable design.
          </div>
          <div className="border-t border-gray-600 w-16 mx-auto my-6"></div>
          <div
            className={`${gothic_A1.className} text-black text-base text-center leading-loose max-w-3xl mx-auto`}
          >
            The firm’s focus on high-demand asset classes, including mixed-use
            and energy-efficient residential projects, ensures strong returns
            for investors and stakeholders.
          </div>
        </div>

        <a
          href="/SCC Portfolio_R3.pdf"
          download
          className={`bg-originalBlue hover:bg-navbarFocusBlue text-white ${gothic_A1.className} font-bold p-4 transition duration-200 tracking-tighter block text-center`}
        >
          DOWNLOAD THE SHAMAS BROCHURE
        </a>
      </section>
    </main>
  );
}
