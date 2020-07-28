<template>
  <div class="animate__animated animate__fadeIn skills">
    <div class="skills-cont">
      <div class="web-dev">
        <div class="img"></div>
        <h4>Web Development</h4>
      </div>
      <div class="design">
        <div class="img"></div>
        <h4>Web Design</h4>
      </div>
    </div>
    <div class="skills-cont">
      <div class="backend">
        <div class="img"></div>
        <h4>Backend Development</h4>
      </div>
      <div class="automation">
        <div class="img"></div>
        <h4>Automation</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.skills {
    --animate-duration: 1s;
}
.skills h4 {
  padding-top: 4px;
}
.skills-cont {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  margin: auto;
}
.web-dev, .design, .backend, .automation {
  background: white;
  padding: 10px;
  margin: 10px;
  opacity: 1;
  text-align: center;
  color: #7b7b7b;
  padding-top: 10px;
  box-shadow: 0 0 5px #c0ccf9;
  border-radius: 4px;
} 
.web-dev:hover, .design:hover, .backend:hover, .automation:hover {
    box-shadow: 0 0 15px 2px #c0ccf9;
}
.web-dev .img{
  background: url('../assets/ani_web.gif');
  width: 180px;
  height: 180px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.design .img{
  background: url('../assets/ani-design.gif');
  width: 240px;
  height: 180px;
  background-color: aqua;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}

.backend .img{
  background: url('../assets/ani-backend.gif');
  width: 240px;
  height: 180px;
  background-color: aqua;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.automation .img{
  background: url('../assets/ani-automation.gif');
  width: 180px;
  height: 180px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  background-color: #90e0ef;
}
</style>