// app/portfolio/page.tsx

import Image from "next/image";
import Link from "next/link";

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

const projects = [
  {
    id: "BRONX",
    title: "BRONX",
    img: "https://res.cloudinary.com/dy4peuqxj/image/upload/v1763573273/DJI_0076_icyr8h.jpg",
  },
  {
    id: "MANHATTAN",
    title: "MANHATTAN",
    img: "https://res.cloudinary.com/dy4peuqxj/image/upload/v1763573512/DJI_0180_dztmsb.jpg",
  },
  {
    id: "QUEENS",
    title: "QUEENS",
    img: "https://res.cloudinary.com/dy4peuqxj/image/upload/v1763573559/DJI_0327_kxsamw.jpg",
  },
  {
    id: "S.I",
    title: "S.I",
    img: "https://res.cloudinary.com/dy4peuqxj/image/upload/v1763573608/DJI_0152_timlbw.jpg",
  },
  {
    id: "BROOKLYN",
    title: "BROOKLYN",
    img: "https://res.cloudinary.com/dy4peuqxj/image/upload/v1763573608/DJI_0152_timlbw.jpg",
  },
];

const Page = () => {
  return (
    <main className="relative scroll-smooth">
      {/* Portfolio Header Section */}
      {/* <section className="  px-4 relative w-full h-[calc(100vh-32px)] md:h-[calc(100vh-105px)] bg-[url(/portfolio-bg.jpg)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h2
          className={`${libre_basker.className} tracking-wider my-2 text-white text-center text-3xl font-[400]`}
        >
          Our Portfolio
        </h2>

        <div
          className={`${gothic_A1.className} break-words my-2 md:max-w-xl text-white text-base font-[400] text-center max-w-3xl`}
        >
          Explore our collection of landmark developments, showcasing
          innovation, design, and excellence in real estate.
        </div>
      </section> */}

      {/* Empty Section Template */}
      <section className="pt-4  px-4 relative w-full flex flex-col items-center bg-white min-h-screen">
        {/* Content will go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full px-4">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.id}`}
              className="group block overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* White overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div
                className={`${gothic_A1.className} text-center mt-2 text-lg font-[400] tracking-wider`}
              >
                {project.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
