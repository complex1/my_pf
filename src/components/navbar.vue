<template>
  <div class="navbar n-elm n-ele-0">
    <button class=" n-btn n-btn-pill" :class="open === 'home' ? 'n-btn-in' : null" @click="$emit('click', 'home')">
      <i class="fa fa-home"></i>
      <span class="text">HOME</span>
    </button>
    <button class="n-btn n-btn-pill" :class="open === 'about' ? 'n-btn-in' : null" @click="$emit('click', 'about')">
      <i class="fa fa-user"></i>
      <span class="text">ABOUT</span>
    </button>
    <button class="n-btn n-btn-pill" :class="open === 'skill' ? 'n-btn-in' : null" @click="$emit('click', 'skill')">
      <i class="fa fa-cog"></i>
      <span class="text">SKILL</span>
    </button>
    <button class="n-btn n-btn-pill" :class="open === 'work' ? 'n-btn-in' : null" @click="$emit('click', 'work')">
      <i class="fa fa-briefcase"></i>
      <span class="text">WORK</span>
    </button>
    <button class="n-btn n-btn-pill" :class="open === 'contact' ? 'n-btn-in' : null" @click="$emit('click', 'contact')">
      <i class="fa fa-envelope"></i>
      <span class="text">CONTACT</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    open: String
  }
}
</script>

<style lang="scss">
.navbar {
  padding-left: 30px;
  height: 80px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-size: 12px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  button {
    margin: 0px 15px;
    color: rgb(95, 95, 255);
    font-weight: bold;
  }
  .text {
    margin-left: 3px;
  }
}
.mobile {
  .navbar {
    padding-left: 0px;
    justify-content: space-evenly;
  }
  button {
    height: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5em;
    padding: 0px;
    padding-left: 2px;
  }
  .text {
    display: none;
  }
}
</style>
