<script lang="ts">

  interface WorkExperience {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
  }
  const workExperience = [
    {
      jobTitle: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      startDate: "2020-01",
      endDate: "2023-12",
    },
    {
      jobTitle: "Web Developer",
      company: "Creative Agency",
      location: "Los Angeles, CA",
      startDate: "2018-06",
      endDate: "2019-12",
    },
    {
      jobTitle: "Intern",
      company: "Startup Co.",
      location: "San Francisco, CA",
      startDate: "2017-01",
      endDate: "2017-12",
    },
    {
      jobTitle: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      startDate: "2016-01",
      endDate: "2017-01",
    },
    {
      jobTitle: "Junior Developer",
      company: "Local Business",
      location: "Chicago, IL",
      startDate: "2015-06",
      endDate: "2016-01",
    }

  ]
</script>

<section class="default-margin mt-l work-experience">
  <ul class="work-experience-list">
    {#each workExperience as experience}
      <li class='work-list-item'>
        <div>
          <h3>{experience.jobTitle}</h3>
          <p>{experience.company}</p>
        </div>
        <div>
          <p>{experience.location}</p>
          <p>{experience.startDate} - {experience.endDate}</p>
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
</style>