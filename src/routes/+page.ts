import sanityClient from "$utils/sanity";
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const workExpData: WorkExperience[] = await sanityClient.fetch(
    `*[_type == "workExperience"] | order(StartDate desc)` 
  );

  const rawProjects: Project[] = await sanityClient.fetch(
    `*[_type == "project"]`
  )
  console.log(rawProjects)
  return {workExpData};
}
