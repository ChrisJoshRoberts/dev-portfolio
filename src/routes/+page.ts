import sanityClient from "$utils/sanity";
import type { PageLoad } from "./$types";
import type { WorkExperience } from "$lib/types/sanity";

export const load: PageLoad = async () => {
  const workExpData: WorkExperience[] = await sanityClient.fetch(
    `*[_type == "workExperience"] | order(StartDate desc)` 
  );
  return {workExpData};
}