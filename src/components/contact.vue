<template>
  <div class="container contact">
    <h1 class="headers-stick n-text n-text-0"><i class="fa fa-envelope"></i> CONTACT</h1>
    <div style="display: flex; padding-top: 30px;">
      <div class="n-avt">
        <i class="fa fa-user"></i>
      </div>
      <h3 style="margin-left: 15px">Shubham Maurya</h3>
    </div>
    <div style="align-items: center;">
      <div class="n-avt">
        <i class="fa fa-envelope"></i>
      </div>
      <p class="nm" style="margin-left: 15px">mauryas367@gmail.com</p>
    </div>
    <div style="align-items: center;">
      <div class="n-avt">
        <i class="fa fa-map-marker"></i>
      </div>
      <p class="nm" style="margin-left: 15px">Bengaluru, Karnataka India</p>
    </div>
    <p class="nm" style="padding-top: 30px"> Social Lineks <i class="fa fa-link"></i></p>
    <div >
      <a class="n-avt" href="https://www.facebook.com/profile.php?id=100010141570034">
        <i class="fa fa-facebook"></i>
      </a>
      <a class="n-avt" href="https://www.linkedin.com/in/shubham-maurya-565978bb/">
        <i class="fa fa-linkedin"></i>
      </a>
      <a class="n-avt" href="https://github.com/complex1">
        <i class="fa fa-github"></i>
      </a>
      <a class="n-avt" href="https://www.npmjs.com/settings/complex1/packages">
        <b style="font-size: 16px;">n</b>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style lang="scss" scoped>
.contact {
  margin: 30px auto;
  font-size: 14px;
  color: #777777;
  padding-bottom: 150px;
  & > div {
    display: flex;
    padding-top: 20px;
    p {
      font-weight: bold;
    }
    & > a {
      margin: 0px 20px;
    }
    i, b {
      color: #5f5fff;
    }
  }
}
</style>
