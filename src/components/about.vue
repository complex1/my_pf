<template>
  <div class="about container">
    <div class=" about-me n-alert n-alert-in n-alert-danger">
      A highly gifted information technology expert with focus on front-end and user
      experience development, currently working with Quinbay as a Web Developer to
      contribute in creating extraordinary experience for company’s technical audience.
      Having {{getExp}} development experience working in team environment writing and
      reviewing code daily.
    </div>
    <h1 class=" headers-stick n-text n-text-0">
      <div><i class="fa fa-user"></i> EXPERIENCE</div>
       <div style="margin: 0px 10px ;">&</div>
      <div> EDUCATION </div>
    </h1>
    <div class="timeline">
      <div class="task">
        <div class="line n-elm n-ele-in-0"></div>
        <div class="year">
          <h5 class=" n-elm n-ele-in-0">2012</h5>
          <div class="n-avt n-avt">
            <i class="fa fa-book"></i>
          </div>
        </div>
        <div class="tl-content n-elm n-ele-in-0">
          <h4>Higher Secondary</h4>
          <small>
            <b><a href="https://www.facebook.com/BALRAMPURCMS/" target="_blank">City Montessori School, Balrampur</a></b>
            <p> July 2012 - March 2013 </p>
          </small>
        </div>
      </div>
      <div class="task">
        <div class="line n-elm n-ele-in-0"></div>
        <div class="year">
          <h5 class=" n-elm n-ele-in-0">2014</h5>
          <div class="n-avt n-avt">
            <i class="fa fa-graduation-cap"></i>
          </div>
        </div>
        <div class="tl-content n-elm n-ele-in-0">
          <h4>Graduation</h4>
          <small>
            <b><a href="http://www.mnnit.ac.in/" target="_blank">
              Motilal Nehru National Institute of Technology(MNNIT), Allahabad
              </a></b>
            <p> July 2014 - May 2018 </p>
          </small>
        </div>
      </div>
      <div class="task">
        <div class="line n-elm n-ele-in-0"></div>
        <div class="year">
          <h5 class=" n-elm n-ele-in-0">2018</h5>
          <div class="n-avt n-avt">
            <i class="fa fa-briefcase"></i>
          </div>
        </div>
        <div class="tl-content n-elm n-ele-in-0">
          <h4>Full Stack Developer</h4>
          <small>
            <b><a href="https://www.microland.com/" target="_blank">
              Microland, Bangalore
            </a></b>
            <p>  July 2018 – Dec 2019 </p>
          </small>
        </div>
      </div>
      <div class="task">
        <div class="year">
          <h5 class=" n-elm n-ele-in-0">2019</h5>
          <div class="n-avt n-avt">
            <i class="fa fa-briefcase"></i>
          </div>
        </div>
        <div class="tl-content n-elm n-ele-in-0">
          <h4>Software Developer</h4>
          <small>
            <b><a href="https://www.quinbay.com/" target="_blank">
              Quinbay, Bangalore
              </a></b>
            <p>  Dec 2019 – Present</p>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    getExp () {
      const baseDate = 1535012723000
      const today = new Date().valueOf()
      const time = today - baseDate
      return `${(time / (365 * 24 * 60 * 60 * 1000)).toFixed(0)} year 
      ${(time % (365 * 24 * 60 * 60 * 1000) / (30 * 24 * 60 * 60 * 1000)).toFixed(0)} months`
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin-top: 100px;
  &-me {
    margin: 30px 0px;
    font-size: 14px;
  }
  h1 {
    text-align: center;
  }
  .timeline {
    margin: 20px;
    .task {
      position: relative;
      display: flex;
      margin-bottom: 20px;
      .line {
        position: absolute;
        width: 10px;
        top: 85px;
        left: 25px;
        bottom: -20px;
        border-radius: 2em;
      }
      .tl-content {
        flex-grow: 1;
        border-radius: 8px;
        margin: 30px;
        margin-top: 15px;
        padding: 15px;
        h4 {
          color: #4d4d4d;
        }
        b {
          color: #006aad;
          padding-bottom: 5px;
          a {
          text-decoration: none;
          }
        }
      }
      .year {
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
          color: #5f5fff;
        }
        h5 {
          padding: 5px 10px;
          margin-bottom: 10px;
          border-radius: 2em;
        }
      }
    }
  }
}
.desktop {
  .about {
    h1 {
      display: flex;
    }
  }
}
.mobile {
  .about-me {
    padding: 10px;
  }
  .timeline {
    margin-left: 0px;
    margin-right: 0px;
  }
  .tl-content {
    margin-right: 0px;
  }
}
</style>
