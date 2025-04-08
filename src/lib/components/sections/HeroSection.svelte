<script>
	import { goto } from "$app/navigation";
  import Button from "../UI/Button.svelte";

  const handleClick = () => {
    goto("/#contact-form")
  }

</script>
<div class="hero-section default-margin">
  <h3>Hello, I'm Chris</h3>
  <div class="underscore mb-b"></div>
  <h1>I am a Lorem Ipsum crafting lorem and ipsum</h1>
  <h1 class="dark-grey mb-m">Web experiences.</h1>
  <Button onclick={handleClick}>Let's Talk</Button>
</div>

<style>
  .hero-section {
    padding-top: 60px;
  }
</style>