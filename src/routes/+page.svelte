<script lang='ts'>
  import HeroSection from "$components/sections/HeroSection.svelte";
  import AboutSection from "$components/sections/AboutSection.svelte";
  import ExperienceSection  from "$components/sections/ExperienceTable.svelte";

  interface AboutMeProps  {
    workExperience: WorkExperience[]
  }

  const { data } = $props()
  $inspect(data)
  const { workExpData: workExperience } = data
</script>

<HeroSection />
<AboutSection />
<ExperienceSection {workExperience}/>