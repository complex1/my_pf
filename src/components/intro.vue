<template>
  <div class="intro n-elm n-ele-in-1" >
    <div class="about ">
      <h2 >Hi,</h2>
      <h3 >I am <span style="color: #006aad;">Shubham Maurya</span>,</h3>
      <h5>Web Developer/Designer</h5>
      <p class="s"> <b>"</b>Design and code beautifully simple things, and I love what I do <b>"</b></p>
    </div>
    <div class="profile n-elm n-ele-in-0">
      <img height="100%" src="../assets/profile.png">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.intro {
  position: relative;
  max-width: 900px;
  margin: 15px auto;
  height: 300px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-top: 3px solid #006aad;
  border-left: 3px solid #006aad;
  .about {
    padding: 30px;
    p {
      width: 75%;
      font-family: fantasy;
      padding: 15px 0px 0px 0px;
    }
  }
  .profile {
    position: absolute;
    height: 200px;
    width: 200px;
    padding: 5px;
    border-radius: 50%;
    right: -100px;
    bottom: -100px;
    transform: rotate(235deg);
    z-index: 10;

    img {
       width: 100%;
      border-radius: 50%;
      transform: rotate(-235deg);
    }

  }
}
.mobile {
  .about {
    padding: 40px 0px 10px 15px;
    p {
      width: 60%;
    }
  }
  .profile {
    height: 150px;
    width: 150px;
    right: 0px;
    bottom: -100px;
  }
}
</style>
