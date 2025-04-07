<script>
  import SectionHeadline from "$components/UI/SectionHeadline.svelte";
</script>


<div class="mt-l">
  <SectionHeadline sectionName="about">
    About Me
  </SectionHeadline>
  <div class="about-content-wrapper default-margin mt-m"> 
    <div>Test</div>
    <div>Test</div>
  </div>

</div>


<style>
  .about-content-wrapper {
    display: flex;
    gap: 24px;
    justify-content: space-between;
  }
</style>