<template>
  <div id="app" class="container">
    <Scrollama class="noMobile" @step-enter="stepEnterHandler" :offset='0.35' >
      <div data-step="a">
        <intro v-show="true"/>
      </div>
      <div data-step="b" >
        <p class="edu" >EDUCATION</p>
        <academic v-if="index > 0" />
      </div>
      <div data-step="b" >
        <p class="edu">SKILLS</p>
        <skills v-if="index > 1" />
      </div>
      <div data-step="b" >
        <p class="edu">TECHNOLOGY</p>
        <tech v-if="index > 2" />
      </div>
      <div data-step="b" >
        <p class="edu">PROJECTS</p>
        <projects v-if="index > 3" />
      </div>
      <div data-step="b" >
        <p class="edu">HOBBY</p>
        <moonwalk v-if="index > 4" />
      </div>
    </Scrollama>
    <div style="height: 80vh"></div>
    <div class="mobile">
      <intro />
      <p class="edu" >EDUCATION</p>
      <academic  />
      <p class="edu">SKILLS</p>
      <skills />
      <p class="edu">TECHNOLOGY</p>
      <tech />
      <p class="edu">PROJECTS</p>
      <projects />
      <p class="edu">HOBBY</p>
      <moonwalk />
    </div>
  </div>
</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scrollama from 'vue-scrollama'
export default {
  name: 'App',
  data () {
    return {
      index: 0,
      showAc: false,
    }
  },
  components: {
    Scrollama,
    intro: () => import('./components/intero'),
    academic: () => import('./components/academic'),
    skills: () => import('./components/skills'),
    tech: () => import('./components/tech'),
    projects: () => import('./components/projects'),
    moonwalk: () => import('./components/moonwalk')
  },
   methods: {
    stepEnterHandler (e) {
      this.index = e.index
    }
   },
   mounted () {
     setTimeout(() => {this.index = 0}, 100)
     setTimeout(() => window.scroll(0,0), 1000)
   }
}
</script>

<style>
@import './assets/main.css';
*{
  box-sizing: border-box !important; 
}
.local {
  font-size: 20px;
  position: fixed;
  top: 50px;
  left: 50px;
  z-index: 1000;
}
.edu {
  font-size: 100px;
  text-align: center;
  font-weight: 600;
  color: #c3c3c3;
  display: block;
  transition: display 1s;
  margin-top: 20px;
}
.edu.hide {
  display: none;
}
</style>
