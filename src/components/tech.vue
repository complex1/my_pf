<template>
  <div class="techs">
    <div v-if="i > -1" :style="{background: color[1]}" class="tech-bar tech-bar_left animate__animated animate__bounceInLeft">
      HTML5/CSS
      <img class="logo" src="../assets/web.png">
    </div>
    <div v-if="i > 0" :style="{background: color[0]}" class="tech-bar tech-bar_right animate__animated animate__bounceInLeft">
      Java Script
      <img class="logo" src="../assets/js.webp">
    </div>
    <div v-if="i > 1" :style="{background: color[5]}" class="tech-bar tech-bar_left animate__animated animate__bounceInRight">
      Vue JS
      <img class="logo" src="../assets/vue.png">
    </div>
    <div v-if="i > 2" :style="{background: color[2]}" class="tech-bar tech-bar_right animate__animated animate__bounceInLeft">
      Python
      <img class="logo" src="../assets/python.png">
    </div>
    <div v-if="i > 3" :style="{background: color[3]}" class="tech-bar tech-bar_left animate__animated animate__bounceInRight">
      AI/ML
      <img class="logo" src="../assets/ds.png">
    </div>
    <div v-if="i > 4" :style="{background: color[4]}" class="tech-bar tech-bar_right animate__animated animate__bounceInRight">
      Micro Service
      <img class="logo" src="../assets/ms.png">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      i: 0,
      interval: '',
      color: [
        '#f9c6c9',
        '#f2c6de',
        '#dbcdf0',
        '#c6def1',
        '#faedcb',
        '#c9e4de',
      ]
    }
  },
  mounted () {
    const lim = 7
    const self = this
    this.interval = setInterval (() => {if(self.i < lim){self.i++}} , 250)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style>
.techs {
  width: 400px;
  margin: auto;
}
.techs .logo {
  position: absolute;
  top: 5px;
  bottom: 0px;
  height: 80%;
  background: #ffffff7d;
  border-radius: 4em;
}
.techs .tech-bar {
  height: 50px;
  border-radius: 4em;
  text-align: center;
  padding-top: 14px;
  background: red;
  color: #7b7878;
  box-shadow: 0px 0px 5px #bbb7b7;
  --animate-duration: 1s;
  font-weight: bold; 
  position: relative;
}
.techs .tech-bar_left {
    margin-right: 25%;
}
.tech-bar_left .logo{
  right: 5px;
}
.techs .tech-bar_right {
    margin-left: 25%;
}
.tech-bar_right .logo{
  left: 5px;
}
.tech-bar + .tech-bar {
  margin-top: 10px;
}
</style>