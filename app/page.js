import ScrollButton from "./components/ScrollButton";

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
      <section className="px-4 relative w-full h-screen flex flex-col items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          SHAMAS
        </h1>
        <h3 className="text-white text-xl md:text-3xl font-bold text-center">
          Defining the Standards of Real Estate Development
        </h3>

        {/* Scroll Down Button */}
        {/* <ScrollButton sectionName={"img-section"}/> */}
      </section>

      {/* Next Section */}
      <section
        id="img-section"
        className="pt-20 px-4 relative w-full h-screen bg-[url(/new-york-skyline.jpg)] items-center bg-cover bg-center bg-no-repeat flex flex-col"
      >
        <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Shaping the skyline
        </h2>

        <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-center max-w-3xl mx-auto">
          Shamasco has redefined the New York City skyline with an impressive
          portfolio of residential, office, hospitality, and mixed-use
          properties. These iconic properties have raised the benchmark and
          continue to set the standards of real estate development.
        </div>

        {/* <ScrollButton sectionName={"stats-section"}/> */}
      </section>

      <section
        id="stats-section"
        className="pt-10 px-4  w-full  bg-white flex flex-col  items-center"
      >
        <div className="my-10 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Company Overview
        </div>
        <div className="flex flex-col md:flex-row my-10 gap-10">
          <div className="flex flex-col items-center">
            <div className="text-9xl">20M+</div>
            <div className=" text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto">
              Veniam et id ea tempor enim<br></br> laborum magna esse.
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-9xl">1989</div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto">
              Irure deserunt ad dolor duis aliqua<br></br> id tempor fugiat
              voluptate in ea ea eu elit.
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="my-2 text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto">
            Extell is a full-service development company driven by an internal
            team of talented real estate professionals whose combined breadth of
            experience includes all areas of real estate development. Clear
            communication and proficient execution enable us to successfully
            acquire, finance, develop, market, and manage the most sophisticated
            development projects.
          </div>
          <div className="my-2 text-base sm:text-lg md:text-xl lg:text-2xl  text-center max-w-3xl mx-auto">
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
