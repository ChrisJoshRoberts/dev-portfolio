<script>
	import { goto } from "$app/navigation";
  import Button from "../UI/Button.svelte";
  import handleContactClick from "$utils/utils";

</script>
<div class="hero-section default-margin">
  <h3>Hello, I'm Chris</h3>
  <div class="underscore mb-b"></div>
  <h1>I am a User Interface Developer crafting intuitive and performant</h1>
  <h1 class="dark-grey mb-m">Web experiences.</h1>
  <Button onclick={handleContactClick}>Let's Talk</Button>
</div>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>