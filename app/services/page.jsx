import React from "react";

const services = [
  {
    title: "General Contracting",
    description:
      "Full-service construction with complete oversight, quality control, and reliable execution.",
  },
  {
    title: "Construction Management",
    description:
      "Professional planning, supervision, and coordination across all project phases.",
  },
  {
    title: "Project Planning & Optimization",
    description:
      "Strategic planning and workflow optimization to streamline timelines, resources, and project execution.",
  },
  {
    title: "Real Estate Development",
    description:
      "Complete development lifecycle from concept to completion for multi-family and mixed-use projects.",
  },
  {
    title: "Gut Renovations",
    description:
      "Full interior demolition and rebuild, modernizing systems, finishes, and building efficiency.",
  },
  {
    title: "Exterior Renovations",
    description:
      "Façade restoration, masonry, roofing, windows, and structural enhancement.",
  },
  {
    title: "Occupied Renovations",
    description:
      "Specialized in completing complex renovations while tenants remain in place.",
  },
  {
    title: "Equity Partnership",
    description:
      "Collaborative investment opportunities for long-term growth and development.",
  },
  {
    title: "Zoning & Pre-Design",
    description:
      "Site analysis, zoning studies, compliance evaluation, and early-stage design planning.",
  },
];

const page = () => {
  return (
    <main className={`scroll-smooth min-h-screen bg-gray-50 py-16 px-4`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h1>
        </div> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
