<script lang="ts">
	

  let { workExperience } = $props()

</script>

<section class="default-margin mt-l work-experience">
  <ul class="work-experience-list">
    {#each workExperience as experience}
      <li class='work-list-item'>
        <div>
          <h3 class="primary">{experience.JobTitle}</h3>
          <p class="secondary">{experience.Company}</p>
        </div>
        <div>
          <p class="primary"> {experience.Location}</p>
          <p class="secondary">{experience.StartDate} - {experience.EndDate ? experience.EndDate : "Present"}</p>
        </div>
      </li>
      <div class="line mb-s"></div>
    {/each}
  </ul>
  <h2 class="work-headline">Past Work <br> Experience.</h2>
</section>

<style>
  .work-experience {
    display: flex;
    width: 100%;
  }
  .work-experience-list {
    width: 60%;
  }
  .work-list-item {
    display: flex;
    justify-content: space-between;
    padding-right: 32px;
  }
  .line { 
    width: 95%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.134);
  }
  .work-headline {
    margin-left: 32px;
  }
  .secondary {
    color: gray;
  }
  .primary {
    font-weight: 600;
  }
</style>