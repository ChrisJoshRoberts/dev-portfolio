<script lang='ts'>
  import HeroSection from "$components/sections/HeroSection.svelte";
  import AboutSection from "$components/sections/AboutSection.svelte";
  import ExperienceSection  from "$components/sections/ExperienceTable.svelte";
	import MyWorkSection from "$components/sections/MyWorkSection.svelte";

  interface AboutMeProps  {
    workExperience: WorkExperience[]
  }

  const { data } = $props()
  $inspect(data)
  const { workExpData: workExperience, projects } = data
</script>

<HeroSection />
<AboutSection />
<ExperienceSection {workExperience}/>
<MyWorkSection {projects} />