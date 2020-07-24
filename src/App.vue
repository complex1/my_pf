<template>
  <div id="app" class="container">
    <intro/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    intro: () => import('./components/intero')
  }
}
</script>

<style>
@import './assets/main.css';
</style>
