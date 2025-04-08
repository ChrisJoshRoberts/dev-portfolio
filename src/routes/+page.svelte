<script>
  import HeroSection from "$components/sections/HeroSection.svelte";
  import AboutSection from "$components/sections/AboutSection.svelte";
  import ExperienceSection  from "$components/sections/ExperienceTable.svelte";

  const data = $props();
  $inspect(data)
</script>

<HeroSection />
<AboutSection />
<ExperienceSection />