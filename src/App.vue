<template>
  <div id="app" class="light container-fluid" :class="getSize">
    <navbar :open="open" @click="shift"/>

    <div class="content" ref="scroll-track">
      <intro class="scroll-ele" scroll-tag="home"/>
      <about class="scroll-ele" scroll-tag="about"/>
      <skill class="scroll-ele" :on-screen="open === 'skill'" scroll-tag="skill"/>
      <work class="scroll-ele" scroll-tag="work"/>
      <contact class="scroll-ele" scroll-tag="contact" />
    </div>
  </div>
</template>

<script>
import About from './components/about.vue'
import Contact from './components/contact.vue'
import Intro from './components/intro.vue'
import Navbar from './components/navbar.vue'
import Skill from './components/skill.vue'
import Work from './components/work.vue'

export default {
  name: 'App',
  components: {
    Intro,
    Navbar,
    About,
    Skill,
    Work,
    Contact
  },
  data () {
    return {
      open: null
    }
  },
  computed: {
    getSize () {
      return window.innerWidth > 900 ? 'desktop' : 'mobile'
    }
  },
  methods: {
    shift (e) {
      var y = 0
      var targetList = this.$refs['scroll-track'].querySelectorAll('.scroll-ele')
      for (let i = 0; i < targetList.length; i++) {
        if (targetList[i].getAttribute('scroll-tag') !== e) {
          y += targetList[i].getBoundingClientRect().height
        } else {
          window.scrollTo(0, y)
          return
        }
      }
    },
    scroll () {
      var offset = window.pageYOffset + 50
      var targetList = this.$refs['scroll-track'].querySelectorAll('.scroll-ele')
      for (let i = 0; i < targetList.length; i++) {
        offset = offset - targetList[i].getBoundingClientRect().height
        if (offset < 0) {
          this.open = targetList[i].getAttribute('scroll-tag')
          return
        }
      }
      this.open = targetList[0].getAttribute('scroll-tag')
    }
  },
  mounted () {
    document.addEventListener('scroll', this.scroll, true)
    this.scroll()
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss">
#app {
  overflow: scroll;
  padding-bottom: 100px;
}
.content {
  padding-top: 80px;
}
.headers-stick {
  position: -webkit-sticky;
  position: sticky;
  top: 300px;
  z-index: 100;
}
</style>
