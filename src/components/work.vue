<template>
  <div class="container work">
    <h1 class="headers-stick n-text n-text-0"><i class="fa fa-briefcase"></i> WORK</h1>
    <div class="work-col">
      <div>
        <div class="work-card n-elm n-ele-in-0">
          <img src="../assets/asw-ele.png" width="100%" alt="">
          <h3>ASW UI</h3>
          <p>
            Asw UI is a complete UI framework built on top of Vue.js.
            The goal of the project is to provide developers with
            the tools they need to build rich and engaging
            user experiences. It is inspaired from lot of ui framework
            like Bootstarp, vuetify.
            it has huge amount of reusable UI components like form input,
            buttons, loader, grid, table and advanced components like dragable,
            resizable element, editor etc.
          </p>
          <div class="links">
            <a href="https://github.com/complex1/asw-ui">
              <img src="../assets/github.png" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://complex1-asw-ele.netlify.app/">
              <img src="../assets/link.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://www.npmjs.com/package/asw-ele2">
              <img src="../assets/npm.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
          </div>
        </div>
        <div class="work-card n-elm n-ele-in-0">
          <img src="../assets/asw-neu.png" width="100%" alt="">
          <h3>ASW NEUMORPHIC DESIGN</h3>
          <p>
            Its an open source sass based NEUMORPHIC DESIGN
            framework that includes bunch of neumorphic UI elements.
          </p>
          <div class="links">
            <a href="https://github.com/complex1/NEUMORPHIC-DESIGN">
              <img src="../assets/github.png" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://asw-neumorphic-design.netlify.app/">
              <img src="../assets/link.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="#">
              <img src="../assets/npm.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
          </div>
        </div>
      </div>
      <div style="padding-top: 20px">
        <div class="work-card n-elm n-ele-in-0">
          <img src="../assets/asw-form.png" width="100%" alt="">
          <h3>ASW FORM</h3>
          <p>
            Its an open source JSON based form builder library,
            which is written on top of vue.
          </p>
          <div class="links">
            <a href="https://github.com/complex1/asw-form-builder">
              <img src="../assets/github.png" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://asw-form-builder.netlify.app/">
              <img src="../assets/link.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://www.npmjs.com/package/asw-form-builder">
              <img src="../assets/npm.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
          </div>
        </div>
        <div class="work-card n-elm n-ele-in-0">
          <img src="../assets/asw-chart.png" width="100%" alt="">
          <h3>ASW SPARKLINE CHART</h3>
          <p>
            Asw sparkline chart is open source sparkline chart library.
            it has various type of sparkline charts like line chart, bar chart,
            pie chart etc.
            with no third party library dependency.
          </p>
          <div class="links">
            <a href="https://github.com/complex1/asw-sparkline-chart">
              <img src="../assets/github.png" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://complex-asw-sparkline-chart.netlify.app/">
              <img src="../assets/link.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://www.npmjs.com/package/asw-ele2">
              <img src="../assets/npm.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="work-card n-elm n-ele-in-0">
          <img src="../assets/my-app.png" width="100%" alt="">
          <h3>JS Code Editor</h3>
          <p>
            Its an browser based JS code editor.
            its have some very cool feature like saving code in browser
            storage, adding sticky notes, creating TODO's.
          </p>
          <div class="links">
            <a href="https://github.com/complex1/MyApp">
              <img src="../assets/github.png" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
            <a href="https://complex-myapp.netlify.app/">
              <img src="../assets/link.svg" width="30px" height="30px" class="n-elm n-ele-0" alt="">
            </a>
          </div>
        </div>
        <div class="work-card n-elm n-ele-in-0">
          <img src="../assets/npm.png" width="100%" alt="">
          <h3>npm contributor</h3>
          <p>
            I am activly working in open source npm package contribution.
            some of other npm packages are.
            <ul style="margin-top: 10px">
              <li><a href="https://www.npmjs.com/package/asw-vue-colorpicker">asw-vue-colorpicker</a></li>
              <li><a href="https://www.npmjs.com/package/asw-indexdb">asw-indexdb</a></li>
              <li><a href="https://www.npmjs.com/package/asw-logger">asw-logger</a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work'
}
</script>

<style lang="scss" scoped>
.work {
  margin: 30px auto;
  &-col {
    display: flex;
    flex-wrap: wrap;
    & > div {
      width: 33.33%;
    }
  }
  &-card {
    margin: 10px;
    padding: 15px;
    border-radius: 4px;
    letter-spacing: 1px;
    img {
      border-radius: 4px;
    }
    h3 {
      padding: 10px 0px;
      color: #777;
    }
    p {
      margin: 0px;
      letter-spacing: 0px;
      font-size: 13px;
    }
    .links {
      display: flex;
      justify-content: flex-end;
      padding-top: 10px;
      a {
        img {
          padding: 5px;
          margin: 8px;
          border-radius: 50%;
        }
      }
    }
  }
}

.mobile {
  .work {
    &-col {
      & > div {
        width: 100%;
      }
    }
  }
}

</style>
