<script lang='ts'>
	import { SquareChevronRight } from 'lucide-svelte';

  const { data } = $props();
  $inspect(data, 'data');

  function back() {
    history.back();
  }
</script>

<main class="default-margin">
  <button onclick={back}>
    <div class="btn-icon">
      <SquareChevronRight />
    </div>
    back
  </button>
  <h1>{data.name}</h1>
  <div class="img-container">
    <img src={data.projectImageUrl} alt={data.name} />
  </div>
  <p>Date: {data.dateAccomplished}</p>
  <p>Client: {data.company}</p>
</main>

<style>
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
  div {
    gap: 16px;
    padding: 16px;
  }
  h1 {
    margin-left: 32px;
    margin-bottom: 16px;
  }
</style>