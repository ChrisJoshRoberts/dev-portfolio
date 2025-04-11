<script lang="ts">
	import SectionHeadline from "$components/UI/SectionHeadline.svelte";
  import { SquareChevronRight } from 'lucide-svelte';

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
        <img src={mainProject.projectImageUrl} alt={mainProject.name} class="main-project-image" />
      </a>
      <div class="project-info mt-s">
        <div class="title-and-company">
          <div>
            <h3>{mainProject.name}</h3>
            <p class='company dark-grey'>{mainProject.company}</p>
          </div>
          <a href={`/work/${mainProject.slug}`} class="project-link">
            <span class="link-text">View Project</span>
            <SquareChevronRight class="link-icon" />
          </a>
        </div>
      </div>
    </article>
  </div>
</section>

<style>
  .main-project {
    width: 100%;
  }
  .main-project-image {
    width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 8px;
  }
  .title-and-company {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-primary);
    text-decoration: none;
  }
</style>