import { projects } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-4 max-w-3xl mx-auto">
      {projects.map((project) => (
        <Link key={project.id} href={`projects/${project.id}`}>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 object-cover hover:opacity-50 transition-all duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.titleShort}</h3>
              <p className="text-sm text-gray-600">
                {project.projectSalients.location}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
