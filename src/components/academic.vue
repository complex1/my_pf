<template>
  <div class="academic">
    <!-- <h2>Academic</h2> -->
    <div class="ac-card">
      <div class="top-p-card-l puzzle animate__animated animate__fadeInTopLeft" >HIGH SCHOOL</div>
      <div class="top-p-card-r puzzle animate__animated animate__fadeInTopRight"><small>C.M.S Balrampur</small></div>
      <div class="mid-p-card-l puzzle animate__animated animate__fadeInLeft" >Higher Secondary School</div>
      <div class="mid-p-card-r puzzle animate__animated animate__fadeInRight"><small>C.M.S Balrampur</small></div>
      <div class="bottom-p-card-l puzzle animate__animated animate__fadeInBottomLeft" >Graduation</div>
      <div class="bottom-p-card-r puzzle animate__animated animate__fadeInBottomRight"><small>MNNIT Allahabad</small></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeclass () {
      const arr = this.$el.querySelectorAll('.puzzle')
      for (const i in arr) {
        if(arr[i] !== 6) {
          if ('classList' in arr[i]) {
            arr[i].classList.remove('animate__animated')
          }
        }
      }
      this.$el.style.boxShadow = '0 0 10px #6b6b6b'
    }
  },
  mounted () {
    setTimeout(this.removeclass, 1000)
  }
}
</script>

<style>
.school {
  color: white;
}
.academic {
  margin: auto;
  margin-top: 20px;
  width: fit-content;
}
.academic h2{
  font-weight: 700;
  font-size: 200px;
  text-align: center;
  left: 100px;
  position: absolute;
  z-index: 0;
  color: #ffffff7a;
  cursor: default;
}
.ac-card{
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  width: 300px;
    /* box-shadow: 0px 0px 6px 0px #332c2c; */
}
.puzzle {
  height: 150px;
  width: 150px;
  position: relative;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  color: #545454;
  transition: color 0.8s, box-shadow 0.8s;
  /* z-index: 1 !important; */
}
.puzzle:hover {
  color: #ffffff;
  box-shadow: 0px 0px 20px #5d5d5d;
}
.top-p-card-l {
  background: #ade8f4;
}
.top-p-card-r {
  background: #90e0ef;
}
.mid-p-card-l {
  background: #48cae4;
}
.mid-p-card-r {
  background: #00b4d8;
}
.bottom-p-card-l {
  background: #23b2d0;
}
.bottom-p-card-r {
  background: #17a5c1;
}
.top-p-card-l::before {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #ade8f4;
  border-radius: 50%;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2 !important;
}
.top-p-card-r::before {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #90e0ef;
  border-radius: 50%;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2 !important;
}

.mid-p-card-l::before {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #48cae4;
  border-radius: 50%;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2 !important;
}
.mid-p-card-l::after {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #48cae4;
  border-radius: 50% !important;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2 !important;
}
.mid-p-card-r::before {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #00b4d8;
  border-radius: 50%;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2 !important;
}

.bottom-p-card-l::before {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #00b4d8;
  border-radius: 50%;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2 !important;
}
.bottom-p-card-r::before {
  content: '';
  position: absolute;
  height: 30px;
  width: 30px;
  background: #17a5c1;
  border-radius: 50%;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2 !important;
}
</style>