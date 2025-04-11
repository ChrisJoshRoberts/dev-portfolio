<script lang="ts">
	import SectionHeadline from "$components/UI/SectionHeadline.svelte";

  interface MyWorkSectionProps {
    projects: ProcessedProject[]
  }
  let { projects } = $props()
  const mainProject = projects[0]
</script>

<section class="mt-l">
  <SectionHeadline sectionName="my-work">
    My Work
  </SectionHeadline>
  <div class="default-margin projects-container mt-m">
    <article class="main-project mb-m">
      <a href={`/work/${mainProject.slug}`}>
        <img src={mainProject.projectImageUrl} alt="main image">
      </a>
    </article>
  </div>
</section>