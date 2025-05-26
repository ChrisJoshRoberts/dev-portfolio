<script lang='ts'>
	import { SquareChevronRight } from 'lucide-svelte';

  const {data } = $props();
  $inspect(data, 'data');

  function back() {
    history.back();
  }
</script>

<div>
  <button onclick={back}>
    <div class="btn-icon">
      <SquareChevronRight />
    </div>
    back
  </button>
  <h1>{data.name}</h1>
</div>

<style>
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
    margin-left: 52px;
  }
</style>