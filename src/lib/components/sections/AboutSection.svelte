<script>
	import { goto } from "$app/navigation";
	import Button from "$components/UI/Button.svelte";
  import SectionHeadline from "$components/UI/SectionHeadline.svelte";
  import aboutImage from "$lib/assets/chris_Image.jpg"

  const handleClick = () => {
    goto("/#contact-form");
  }
</script>


<div class="mt-l">
  <SectionHeadline sectionName="about">
    About Me
  </SectionHeadline>
  <div class="about-content-wrapper default-margin mt-m"> 
      <img src={aboutImage} alt="Chris Roberts" class="about-image">

    <div class="about-text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione deleniti asperiores a exercitationem repellat temporibus voluptatem minima cupiditate. Ipsum officiis alias earum. Laboriosam, aspernatur. Sed soluta animi assumenda quo.
        <br><br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ratione deleniti asperiores a exercitationem repellat temporibus voluptatem minima cupiditate. Ipsum officiis alias earum. Laboriosam, aspernatur. Sed soluta animi assumenda quo.
      </p>
      <Button onclick={handleClick} className='small mt-m'>Tell me about your project</Button>
    </div>
    
  </div>

</div>


<style>
  .about-content-wrapper {
    display: flex;
    gap: 24px;
    justify-content: space-between;
  }
  .about-image {
    border-radius: 8px;
    width:300%;
    height: 400px;
    object-fit: cover;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
      transition: all 0.3s ease-in-out;
    }
  }
  
</style>