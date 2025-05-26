import sanityClient, { processProjectEntires } from "$utils/sanity";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({params}) => {
  const { slug } = params;

  const rawProjects: Project[] =  await sanityClient.fetch(`*[_type == "project" && slug == $slug]`, { slug })

  if (rawProjects.length !== 1) {
    throw error(404, `Project with slug "${slug}" not found.`);
  }

  const project = processProjectEntires(rawProjects[0]);
  return project;
}
