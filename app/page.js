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
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          SHAMAS
        </h1>
        <h3 className="text-white text-xl md:text-3xl font-bold text-center">
          Defining the Standards of Real Estate Development
        </h3>

        {/* Scroll Down Button */}
        <ScrollButton/>
      </section>

      {/* Next Section */}
      <section
        id="next-section"
        className="relative w-full h-screen bg-white flex items-center justify-center"
      >
        <h2 className="text-black text-3xl font-bold">Next Section</h2>
      </section>
    </main>
  );
}
