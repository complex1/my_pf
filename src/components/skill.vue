<template>
  <div class="container skill">
    <h1 class="headers-stick n-text n-text-0"><i class="fa fa-cog"></i> SKILLS</h1>
    <div class="skill-cont">
      <div class=" skill-set n-elm n-ele-in-0">
        <h3>DOMAIN KNOWLADGE</h3>
        <div class="chart">
          <div class="bar n-elm n-ele-in-0" style="width: 85%; background: #ffadad80" >
            <img src="../assets/ux.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">UI</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 65%; background: #9bf6ff80" >
            <img src="../assets/ui.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">UX</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 75%; background: #bdb2ff80" >
            <img src="../assets/iot.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">IOT</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 70%; background: #ffffff80" >
            <img src="../assets/AI.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">AI/ML</div>
          </div>
        </div>
      </div>
      <div class=" skill-set n-elm n-ele-in-0">
        <h3>WEB DEVELOPMENT</h3>
        <div class="chart">
          <div class="bar n-elm n-ele-in-0" style="width: 80%; background: #a0c4ff80" >
            <img src="../assets/html.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">HTML/HTML5</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 70%; background: #ffd6a580" >
            <img src="../assets/css.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">CSS/SCSS</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 90%; background: #ffadad80" >
            <img src="../assets/js.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">JAVA SCRIPT</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 95%; background: #bdb2ff80" >
            <img src="../assets/vue.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">VUE</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 50%; background: #fdffb680" >
            <img src="../assets/node.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">NODE</div>
          </div>
        </div>
      </div>
      <div class=" skill-set n-elm n-ele-in-0">
        <h3>TOOLS</h3>
        <div class="chart">
          <div class="bar n-elm n-ele-in-0" style="width: 85%; background: #ffadad80" >
            <img src="../assets/git.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">GIT</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 75%; background: #bdb2ff80" >
            <img src="../assets/thingworx.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">THINGWORX</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 50%; background: #9bf6ff80" >
            <img src="../assets/figma.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">FIGMA</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 75%; background: #f3c4fb80" >
            <img src="../assets/grafana.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">GRAFANA</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 65%; background: #fdffb680" >
            <img src="../assets/jasper.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">JASPERSOFT</div>
          </div>
        </div>
      </div>
      <div class=" skill-set n-elm n-ele-in-0">
        <h3>AUTOMATION & SCRIPTING</h3>
        <div class="chart">
          <div class="bar n-elm n-ele-in-0" style="width: 85%; background: #ffadad80" >
            <img src="../assets/python.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">PYTHON</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 60%; background: #bdb2ff80" >
            <img src="../assets/linux.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">LINUX</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 75%; background: #9bf6ff80" >
            <img src="../assets/aws.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">AWS</div>
          </div>
          <div class="bar n-elm n-ele-in-0" style="width: 50%; background: #fdffb680" >
            <img src="../assets/devops.png"  class="n-elm n-ele-in-0" height="30px" width="30px" alt="">
            <div class="value">DEVOPS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    onScreen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.skill {
  &-cont {
    // display: flex;
    // flex-wrap: wrap;
  }
  &-set {
    display: inline-block;
    padding: 15px;
    margin: 15px;
    padding-right: 5px;
    border-radius: 8px;
    &:nth-child(n) {
      width: calc(60% - 30px);
    }
    &:nth-child(2n) {
      width: calc(40% - 30px);
    }
    &:nth-child(3n) {
      width: calc(40% - 30px);
    }
    &:nth-child(4n) {
      width: calc(60% - 30px);
    }
    & > h3 {
      color: rgb(95, 95, 255);
    }
  }
  .chart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .bar {
      position: relative;
      padding: 8px;
      border-radius: 2em;
      margin: 5px 0px;
      img {
        padding: 5px;
        border-radius: 50%;
      }
      .value {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        font-weight: bold;
        font-size: 12px;
        color: rgb(141, 141, 141);
      }
    }
  }
}
.mobile {
  .skill-set {
    width: 100%;
    margin: 10px 0px;
  }
}
</style>
