import SectionHeadline from "$components/UI/SectionHeadline.svelte";
<script lang="ts">
  import { SquareChevronRight } from 'lucide-svelte';
  import SectionHeadline from "$components/UI/SectionHeadline.svelte";

  interface MyWorkSectionProps {
    projects: ProcessedProject[]
  }
  let { projects } = $props()
  const mainProject = projects[0]
  const otherProjects = projects.slice(1)
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

  <div class="default-margin all-projects-container">
    {#each otherProjects as project}
      <article class="article-card">
        <a href={`/work/${project.slug}`}>
          <div class="article-img-container">
            <img src={project.projectImageUrl} alt="" class="article-img">
          </div>
        </a>
        <div class="project-info-all mt-s">
          <div>
            <h3>{project.name}</h3>
            <p class="dark-grey">{project.company}</p>
          </div>
          <div>
            <a href={`/work/${project.slug}`} class="project-link">
              <span>View Project</span>
              <SquareChevronRight class="link-icon" />
            </a>
          </div>
        </div>
      </article>
    {/each}
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
  .all-projects-container {
    display: flex;
    gap: 16px;
  }
  .article-card {
    width: 100%;

  }
  .article-img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }
  .project-info-all {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>