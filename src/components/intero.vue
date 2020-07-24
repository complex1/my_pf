<template>
  <div class="intro">
    <div class="background-text animate__animated animate__backInLeft">ABOUT</div>
    <div v-if="userImg" class="my_image image animate__animated animate__backInRight" @click="userImg = !userImg">
      <span> If you don't like my face click me. </span>
    </div>
     <div v-if="!userImg" class="panda_image image animate__animated animate__backInRight" @click="userImg = !userImg">
    </div>
    <div class="about_me animate__animated animate__flipInX">
      <h1>Hi,</h1>
      <h3>i'm shubham maurya,</h3>
      <h4>Web Developer </h4>
      <p>
        <small>
          design and code beautifully simple things, and I love what I do.
        </small>
      </p>
    </div>
    <div class="clip">
      <small>If you think math is hard, try web design.</small>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userImg: true
    }
  },
  methods: {
    clicked() {
      console.log(this.$el.children[1].classList[0])
      this.$el.children[1].className += ' my_panda_class'
    }
  }
}
</script>

<style>
.intro {
  height: 450px;
  box-shadow: 0px 0px 6px 0px #989898;
  border-radius: 10px;
  background: #f5f5f5;
  position: relative;
}
.background-text {
    font-weight: 700;
    font-size: 200px;
    text-align: center;
    left: 100px;
    position: absolute;
    z-index: 0;
    color: #ffffff7a;
    cursor: default;
}
.image {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my_image {
  background: url('../assets/profile.png');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.panda_image {
  background: url('../assets/panda.png');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
.my_image:hover {
  background: #e8e8e8;
}
.my_image span {
  display: none
}
.my_image:hover span{
  display: block;
  width: 150px;
}
.about_me {
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 20%;
  cursor: default;
}
.intro .clip {
  height: 0px;
  width: 0px;
  position: absolute;
  clip-path: circle(50% at 0% 0%);
  background: pink;
  opacity: 0.3;
  transition: height 0.8s, width 0.8s;
  font-size: 20px;
  font-family: monospace;
  display: flex;
}
.intro:hover .clip {
  height: 100%;
  width: 100%;
}
.clip small {
  width: 150px;
  margin: 100px;
}
</style>