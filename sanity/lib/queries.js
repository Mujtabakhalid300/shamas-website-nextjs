import { client } from "./client";

export async function getProjects() {
  const query = `*[_type == "project"]{ 
    title, 
    location, 
    "imageUrl": images[0].asset->url  // Fetch first image URL
  }`;

  return await client.fetch(query);
}
