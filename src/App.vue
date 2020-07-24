<template>
  <div id="app" class="container">
    <Scrollama @step-enter="stepEnterHandler">
      <div data-step="a">
        <intro class="step1" v-show="true"/>
      </div>
      <p class="edu" :class="index !== 1 ? '' : 'hide'">EDUCATION</p>
      <div data-step="b" style="height: 500px">
        <academic ref="academic" v-if="index === 1" class="step2"/>
      </div>
      <div data-step="b" style="height: 500px">
      </div>
      <div data-step="b" style="height: 500px">
      </div>
      <div data-step="b" style="height: 500px">
      </div>
    </Scrollama>
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
    academic: () => import('./components/academic')
  },
   methods: {
    stepEnterHandler (e) {
      this.index = e.index
    }
   }
}
</script>

<style>
@import './assets/main.css';
.edu {
  font-size: 100px;
  text-align: center;
  font-weight: 600;
  color: #c3c3c3;
  display: block;
  transition: display 1s;
}
.edu.hide {
  display: none;
}
</style>
