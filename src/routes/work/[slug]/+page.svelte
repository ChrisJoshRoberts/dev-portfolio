<script lang='ts'>
	import { SquareChevronRight } from 'lucide-svelte';

  const { data } = $props();
  $inspect(data);
  function back() {
    history.back();
  }
</script>

<main class="default-margin">
  <div class="title-container">
    <button onclick={back} class="btn-wrapper">
      <div class="btn-icon">
        <SquareChevronRight />
      </div>
      back
    </button>
    <h1 class="project-name">{data.name}</h1>
  </div>
  <div class="img-container">
    <img src={data.projectImageUrl} alt={data.name} />
  </div>
  <div class="project-info">
    <div class="project-details">
      <p><span class='meta-title'>Date:</span> <br/>{data.dateAccomplished.slice(0, 7)}</p>
      <p><span class='meta-title'>Client:</span> <br/>{data.company}</p>
      <p class="meta-title">Tech Stack</p>
      <ul>
        {#each data.stack as item}
        <li>{item}</li>
        {/each}
      </ul>
    </div>
    <div class="project-content">

    </div>
  </div>

</main>

<style>
  .project-info {
    padding : 16px 0;
    display: flex;
  }
  
  .meta-title {
    font-weight: 700;
  }
  .title-container {
    position: relative;
    display: flex;
    padding: 16px;
    align-items: center;
  }
  .btn-wrapper {
    position: absolute;
    left: -100px;
    top: 32px;
  }
  .img-container {
    width: 100%;
    height: 400px;
    object-fit: cover;
    padding: 0px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .btn-icon {
    padding: 2px;
    transform: rotate(180deg);
  }
  button {
    display: flex;
    align-items: center;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 16px;
    gap: 4px;
    line-height: 0;
    font-size: 16px;
    font-weight: 500;
  }
  h1 {
    margin-left: 32px;
    margin-bottom: 16px;
  }
  .project-name {
    position: relative;
    left: -44px;
  }
  p {
    margin: 8px 0;
  }
</style>