<template>
  <div class="project">
    <div >
      <opensource class="project-left animate__animated animate__fadeIn"/>
    </div>
    <div>
      <industrialProject class="project-right animate__animated animate__fadeIn" />
    </div>
    <div>
      <academicProject class="project-left animate__animated animate__fadeIn" />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    opensource: () => import('./projectCard/openSource'),
    industrialProject: () => import('./projectCard/IndustrialProjects'),
    academicProject: () => import('./projectCard/AcademicProject')
  }
}
</script>

<style>
.project .project-card {
  width: 80%;
  background: #ffffff;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  margin-bottom: 15px;
}
.project .project-card .title {
  font-size: 1.5em;
  font-weight: bold;
  color: #a09b9b;
}
.project .project-left {
  margin-right: 20%;
}
.project .project-right {
  margin-left: 20%;
}
.project .project-card .about {
  color: #000000;
  font-size: 14px;
}
</style>