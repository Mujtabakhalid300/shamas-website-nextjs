"use client";
import { useEffect, useState } from "react";
import { getProjects } from "@/sanity/lib/queries";

const page = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.location}</p>
            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.title} />
            )}
          </div>
        ))
      ) : (
        <p>No projects found...</p>
      )}
    </div>
  );
};

export default page;
