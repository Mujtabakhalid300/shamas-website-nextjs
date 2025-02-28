import ScrollButton from "./components/ScrollButton";


export default function Home() {
 

  return (
    <main className="relative">
      {/* Video Background (Fixed) */}
      <div className="fixed top-[30] left-0 w-full h-screen overflow-hidden -z-10">
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
        <ScrollButton sectionName={"img-section"}/>
      </section>

      {/* Next Section */}
      <section
        id="img-section"
        className="pt-20 px-4 relative w-full h-screen bg-[url(/new-york-skyline.jpg)] items-center bg-cover bg-center bg-no-repeat flex flex-col "
      >
        <h2 className="text-white text-center text-3xl font-bold ">Shaping the <br></br>skyline</h2>
        <h3 className="text-white text-xl md:text-3xl font-bold text-center">Shamasco has redefined the New York City skyline with an impressive portfolio of residential, office, hospitality, and mixed-use properties. These iconic properties have raised the benchmark and continue to set the standards of real estate development.</h3>
        <ScrollButton sectionName={"stats-section"}/>
      </section>
      <section id="stats-section" className="pt-20 px-4 relative w-full h-screen bg-white flex flex-col">
        HELLO
      </section>
    </main>
  );
}
