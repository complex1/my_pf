<template>
  <div class="skills">
    <div v-if="i > 0" :style="{background: color[0]}" class="skill-bar skill-bar_left animate__animated animate__bounceInLeft">
      Web Development
    </div>
    <div v-if="i > 1" :style="{background: color[1]}" class="skill-bar skill-bar_right animate__animated animate__bounceInRight">
      UI Design
    </div>
    <div v-if="i > 2" :style="{background: color[2]}" class="skill-bar skill-bar_left animate__animated animate__bounceInLeft">
      Backend Development
    </div>
    <div v-if="i > 3" :style="{background: color[3]}" class="skill-bar skill-bar_right animate__animated animate__bounceInRight">
      Automation
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
.skills {
  width: 400px;
  margin: auto;
}
.skills .skill-bar {
  height: 50px;
  border-radius: 4em;
  text-align: center;
  padding-top: 14px;
  background: red;
  color: #7b7878;
  box-shadow: 0px 0px 5px #bbb7b7;
  --animate-duration: 1s;
  font-weight: bold; 
}
.skills .skill-bar_left {
    margin-right: 25%;
}
.skills .skill-bar_right {
    margin-left: 25%;
}
.skill-bar + .skill-bar {
  margin-top: 10px;
}
</style>