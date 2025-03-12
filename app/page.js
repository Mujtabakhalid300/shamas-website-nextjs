import MainPageVideo from "./components/MainPageVideo";
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
    <main className="relative scroll-smooth">
      {/* Video Background (Fixed) */}
      <MainPageVideo />

      {/* Hero Section */}
      <section className="px-4 relative w-full h-[calc(100vh-32px)] md:h-[calc(100vh-105px)] flex flex-col items-center justify-center bg-black bg-opacity-40">
        <img className=" w-2/3 md:max-w-xl z-10" src="/navbarLogo.png" />
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
        className="pt-8 md:pt-32 px-4 relative w-full h-screen bg-[url(/new-york-skyline.jpg)] items-center bg-cover bg-center bg-no-repeat flex flex-col"
      >
        <h2
          className={`leading-normal md:leading-tight ${libre_basker.className} tracking-wider my-2 text-white text-center text-2xl sm:text-3xl md:text-5xl  font-[400]`}
        >
          Shaping the
          <br /> Skyline
        </h2>

        <div
          className={`${gothic_A1.className} my-2 md:max-w-xl text-white text-lg font-[400]   text-center max-w-3xl `}
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
        className="pt-8 md:pt-32 px-4  w-full  bg-white flex flex-col  items-center"
      >
        <div
          className={`${playfair_display.className} font-[700] my-10 text-center text-3xl  `}
        >
          COMPANY OVERVIEW{" "}
        </div>
        <div className="flex flex-col md:flex-row my-10 gap-10">
          <div className="flex flex-col items-start justify-center">
            <div className={`${lora.className} text-7xl `}>20M+</div>
            <div
              className={`${gothic_A1.className} font-[400]  text-lg  text-center max-w-3xl mx-auto`}
            >
              Gross Square Feet of Past <br />
              and Future Developments
            </div>
          </div>
          <div className="border-black border-[0.1px]  w-44 md:h-[8rem] md:w-0 opacity-20 text-center mx-auto"></div>

          <div className="flex flex-col items-center">
            <div className={`${lora.className} text-7xl `}>1989</div>
            <div
              className={`${gothic_A1.className} font-[400]  text-lg  text-center max-w-3xl mx-auto`}
            >
              Year Founded
            </div>
          </div>
        </div>
        <div className="my-10">
          <div
            className={`${gothic_A1.className} my-2 font-[400] text-lg  text-center max-w-3xl mx-auto`}
          >
            Shamas is a leading real estate development firm known for its
            technical expertise, innovation, and commitment to regulatory
            compliance. Specializing in full-cycle development, the company
            handles every aspect of a project, including land acquisition,
            zoning, financing, design, construction, and asset management.
          </div>
          <div
            className={`${gothic_A1.className} font-[400] my-2 text-lg  text-center max-w-3xl mx-auto`}
          >
            By focusing on sustainable practices, advanced engineering
            solutions, and cutting-edge technology like Building Information
            Modeling (BIM) and AI-driven project management tools, Shamas
            ensures projects are delivered on time, within budget, and with
            strong ROI. Their deep understanding of market trends and ability to
            navigate complex regulations positions them as a trusted partner in
            the real estate sector.
          </div>
          <div
            className={`${gothic_A1.className} font-[400] my-2 text-lg  text-center max-w-3xl mx-auto`}
          >
            In response to evolving challenges such as rising interest rates,
            inflation, and climate-related regulations, Shamas employs
            strategies like fixed-rate financing, value engineering, and
            sustainable design practices. These methods enhance energy
            efficiency and resilience while optimizing construction timelines
            and reducing waste.
          </div>
          <div
            className={`${gothic_A1.className} font-[400] my-2 text-lg  text-center max-w-3xl mx-auto`}
          >
            The firm’s focus on high-demand asset classes, including mixed-use
            and energy-efficient residential projects, ensures that investors
            and stakeholders achieve exceptional returns. Shamas is also
            committed to building strong, long-term client relationships,
            ensuring transparency, active communication, and personalized
            service throughout every project phase.
          </div>
          <div
            className={`${gothic_A1.className} font-[400] my-2 text-lg  text-center max-w-3xl mx-auto`}
          >
            Looking ahead, Shamas continues to lead the way in real estate
            development by balancing innovation, sustainability, and strategic
            financial planning. With a focus on collaboration, precision, and
            excellence, Shamas delivers transformative, future-ready projects
            that meet the needs of communities and investors alike.
          </div>
          <div
            className={`${gothic_A1.className} font-[400] my-2 text-lg  text-center max-w-3xl mx-auto`}
          >
            Their mission to innovate, build, sustain, empower, and excel drives
            every aspect of their work, making Shamas a trusted partner for
            clients seeking high-quality, impactful real estate solutions.
          </div>
        </div>
      </section>
    </main>
  );
}
