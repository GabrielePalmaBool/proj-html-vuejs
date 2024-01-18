<script>
// Import componenti
import Carosello from '../components/Carosello.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    Carosello,
    Banner
  },

  name: 'AppmainHome'
}
</script>

<template>
  <main>
    <!-- Classe jumbo -->
    <div class="jumbo">
      <div class="container">
        <h1>Drive with Avada</h1>
        <h4>We offer the finest driving tuition money can buy</h4>
      </div>
    </div>

    <!-- Primo container -->
    <div class="container first">
      <div class="row">
        <div class="col left">
          <h2>Get Behind the Wheel</h2>

          <p class="main-pharagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula
            semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p class="sub-pharagraph">
            Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in
            vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed
            vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam
            maximus turpis in vehicula semper. Fusce et ultrices libero, at
            suscipit lacus. Sed vitae fringilla nibh.
          </p>
        </div>

        <div class="col right">
          <div class="box">
            <h2>First Lesson Free!</h2>

            <p>
              when you make a block booking with us your first lesson is
              included free.
            </p>

            <input
              type="text"
              class="form-control inputT"
              placeholder="Your Name*"
            />
            <input
              type="text"
              class="form-control inputT"
              placeholder="Email*"
            />
            <input
              type="text"
              class="form-control inputT"
              placeholder="Telephone"
            />
            <input
              type="text"
              class="form-control inputT"
              placeholder="Location"
            />
            <button type="button" class="btn btn-primary">
              REQUEST A CALLBACK
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Componente banner-->
    <Banner />

    <!-- Terzo jumbo-->
    <div class="jumbo3">
      <div class="container">
        <div class="row row-cols-2">
          <div class="col col-lg-5 p-5">
            <div class="box">
              <div class="subbox">
                <img
                  src="..\assets/homepage-main-new-corner.jpg"
                  alt="sub box1"
                />
              </div>
              <div class="text">
                <h2>Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ultrices auctor sapien id cursus. Aliquam maximus turpis in
                  vehicula semper.
                </p>
              </div>
              <button type="button" class="btn btn-primary">
                COURSE INFORMATION
              </button>
            </div>
          </div>

          <div class="row row-cols-3">
            <div class="col p-5">
              <div class="img">
                <img
                  src="..\assets/homepage-main-courses-passplus.jpg"
                  alt="immagine auto1"
                />
              </div>

              <h3>Pass Plus</h3>
              <button type="button" class="btn btn-primary">Learn More</button>
            </div>

            <div class="col p-5">
              <div class="img">
                <img
                  src="..\assets/homepage-main-course-intensive.jpg"
                  alt="immagine auto2"
                />
              </div>
              <h3>Intensive Curse</h3>
              <button type="button" class="btn btn-primary">Learn More</button>
            </div>
            <div class="col p-5">
              <div class="img">
                <img
                  src="..\assets/homepage-main-courses-instructor.jpg"
                  alt="immagine auto3"
                />
              </div>
              <h3>Instructors</h3>
              <button type="button" class="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- immagine triangolo -->
    <div class="TrImg">
      <img src="..\assets/homepage-triangle-.png" alt="immagine triangolo" />
    </div>

    <!-- quarto container -->
    <div class="container fourth">
      <div class="row row-cols-3">
        <div class="col p-5">
          <div class="box">
            <i class="fa-solid fa-circle-notch"></i>
            <h2>95%</h2>
            <h4>PASS RATE</h4>
          </div>
        </div>

        <div class="col p-5">
          <div class="box">
            <i class="fa-regular fa-circle"></i>
            <h2>100%</h2>
            <h4>REFERRAL RATE</h4>
          </div>
        </div>

        <div class="col p-5">
          <div class="box">
            <div class="point"></div>
            <i class="fa-regular fa-circle circleZ"></i>
            <h2 class="zero">0%</h2>
            <h4>ACCIDENT RATE</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- quinto container -->
    <div class="container fifth">
      <div class="row">
        <!-- seconda riga (due colonne)  -->
        <div class="col p-5">
          <h2>Your Instructors</h2>
        </div>

        <!-- seconda riga (due colonne)  -->
        <div class="row row-cols-2 secondR">
          <div class="col p-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </p>
          </div>
          <div class="col p-5">
            <button type="button" class="btn btn-primary">
              <router-link :to="{ name: 'about' }">MORE ABOUT US</router-link>
            </button>
          </div>
        </div>

        <!-- terza riga (tre colonne)  -->
        <div class="row row-cols-3 tirdR">
          <div class="col p-5">
            <div class="box">
              <div class="avatar">
                <img
                  src="..\assets/homepage-main-imgavatar1.jpg"
                  alt="immagine avatar1"
                />
                <div class="text">
                  <h4>Mike Hart</h4>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-x-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col p-5">
            <div class="box middle">
              <div class="avatar">
                <img
                  src="..\assets/homepage-main-imgavatar2.jpg"
                  alt="immagine avatar1"
                />
                <div class="text">
                  <h4>John Smith</h4>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-x-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col p-5">
            <div class="box">
              <div class="avatar">
                <img
                  src="..\assets/homepage-main-imgavatar3.jpg"
                  alt="immagine avatar1"
                />
                <div class="text">
                  <h4>Angela Hart</h4>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-x-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Componente Carosello -->
    <Carosello />

    <!-- Quarto jumbo -->
    <div class="jumbo4">
      <div class="container">
        <div class="row">
          <div class="box">
            <!-- Titolo della sezione -->
            <h2>Latest News</h2>

            <!-- Corpo della sezione -->
            <div class="row">
              <div class="col">
                <div class="img">
                  <img
                    src="..\assets/homepage-main-blog-choosecar-700x441.jpg"
                    alt="immagine auto4"
                  />
                </div>
                <h4>What Car to Start With?</h4>
                <p>
                  Categories:<span>General 0 Comments</span> Views:7486 <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
              <div class="col">
                <div class="img">
                  <img
                    src="..\assets/homepage-main-blogpost-10and2-700x441.jpg"
                    alt="immagine auto5"
                  />
                </div>
                <h4>Avada Driving School Expanding</h4>
                <p class="underlined">
                  Categories:<span>General 0 Comments</span> Views:5993 <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
              </div>
            </div>
            <!-- Parte finale della sezione -->
            <button type="button" class="btn btn-primary">
              MORE FROM THE BLOG
            </button>
          </div>
        </div>
        <!-- Immagine traingolo bianco -->
        <div class="imgTr2">
          <img
            src="..\assets/homepage-triangle-white-.png"
            alt="immagine triangolo"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.jumbo {
  background-image: url('..\assets/homepage-main-background.jpg');
  height: 700px;
  background-size: cover;
  color: $primary;
  padding-top: 50px;

  h1 {
    font-size: 70px;
    font-weight: 700;
    margin-top: 280px;
  }
}

.first {
  .row {
    .left {
      display: flex;
      flex-direction: column;
      margin-top: 70px;
      h2 {
        color: $terziary;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 40px;
      }

      .main-pharagraph {
        font-size: 25px;
        color: #7099a5;
        line-height: 40px;
      }

      .sub-pharagraph {
        color: #7099a5;
        font-size: 17px;
        line-height: 30px;
        margin-bottom: 25px;
      }
    }
    .right {
      margin-top: -40px;
      display: flex;
      flex-direction: column;
      .box {
        border-radius: 10px;
        width: 475px;
        height: 540px;
        text-align: center;
        padding: 20px;
        background-color: $primary;
        box-shadow: 0px 25px 20px 0px #c7c7c7;
        margin-bottom: 70px;

        h2 {
          margin-top: 20px;
          color: $quaternary;
        }

        .inputT {
          margin: 20px;
          background-color: rgb(247, 247, 247);
          width: 380px;
          height: 50px;
          border: 1px solid rgb(247, 247, 247);
        }

        .btn-primary {
          color: $primary;
          background-color: $quaternary;
          border-radius: 20px;
          font-weight: bold;
        }
      }
    }
  }
}

.jumbo3 {
  background-image: url('..\assets/homepage-main3-background.jpg');
  height: 500px;
  background-size: cover;
  background-position: center bottom;

  .row {
    .box {
      background-color: $primary;
      width: 400px;
      height: 400px;
      border-radius: 10px;
      margin-top: -100px;
      position: relative;
      box-shadow: 0px 25px 20px 0px #c7c7c7;

      .subbox {
        position: absolute;
        top: 0;
        width: 80px;

        img {
          border-top-left-radius: 10px;
        }
      }
      .text {
        text-align: center;
        width: 300px;
        position: absolute;
        top: 20%;
        right: 15%;
        h2 {
          margin-bottom: 40px;
        }

        p {
          color: $quintenary;
        }
      }

      .btn-primary {
        position: absolute;
        top: 75%;
        right: 27%;
        color: $primary;
        background-color: $quaternary;
        border-radius: 20px;
        font-weight: bold;
      }
    }
    .row {
      .col {
        text-align: center;

        .img {
          width: 180px;

          // effetto ritaglio da sistemare
          // overflow: clip; /* required */
          // overflow-clip-margin: content-box;
        }

        .img:hover {
          transition: opacity 1s, transform 1s;
          transform: scale(1.1);
        }

        h3 {
          margin: 10px -80px 10px 0px;
          font-size: 25px;
          color: $quintenary;
        }

        .btn-primary {
          color: rgb(119, 153, 173);
          border-radius: 20px;
          font-weight: bold;
          background-color: rgb(231, 235, 238);
          border: 2px solid rgb(119, 153, 173);
          width: 155px;
          margin-left: 15px;
        }
      }
    }
  }
}

.TrImg {
  margin-top: -1px;
}

.fourth {
  .row {
    justify-content: center;
    padding: 10px;
    margin-top: -250px;
    .box {
      width: 420px;
      height: 400px;
      background-color: $primary;
      border-radius: 10px;

      position: relative;
      box-shadow: 0px 15px 20px 0px #c7c7c7, 0 -5px 0px 0px green;

      .fa-circle-notch {
        font-size: 240px;
        color: $quaternary;
        position: absolute;
        top: 17%;
        left: 23%;
      }
      .fa-circle {
        font-size: 240px;
        color: $quaternary;
        position: absolute;
        top: 18%;
        left: 26%;
      }

      .point {
        background-color: $quaternary;
        width: 20px;
        height: 20px;
        border-radius: 30px;
        position: absolute;
        top: 18%;
        left: 52%;
        z-index: 1;
      }

      .circleZ {
        color: rgb(246, 246, 246);
      }

      .zero {
        left: 45%;
      }

      h2 {
        position: absolute;
        top: 38%;
        left: 38%;
        font-size: 65px;
        color: $quintenary;
      }

      h4 {
        position: absolute;
        top: 85%;
        left: 34%;
        font-size: 25px;
        color: $quintenary;
      }
    }
  }
}

.fifth {
  .row {
    justify-content: center;
    flex-wrap: wrap;
    .secondR {
      .col {
        p {
          font-size: 20px;
          color: $quintenary;
        }
        .btn-primary {
          color: $primary;
          border-radius: 20px;
          font-weight: bold;
          background-color: $quaternary;
          width: 350px;
          padding: 10px;

          a {
            text-decoration: none;
          }
        }
      }
    }
    .tirdR {
      padding: 10px;

      .col {
        .box {
          width: 420px;
          height: 400px;
          background-color: $primary;
          border-radius: 10px;
          position: relative;
          box-shadow: 0px 15px 20px 0px #c7c7c7, 0 -5px 0px 0px green;

          .avatar {
            position: absolute;
            width: 320px;
            top: 8%;
            left: 12%;
          }

          .text {
            text-align: center;

            .fa-brands {
              font-size: 20px;
              margin-left: 10px;
              color: $quintenary;
            }
          }
        }

        .middle {
          height: 420px;
        }
      }
    }
  }
}

.jumbo4 {
  background-image: url('..\assets/homepage-main4-background.jpg');
  height: 620px;
  background-size: cover;
  background-position: center bottom;
  .container {
    .row {
      justify-content: center;
      .box {
        margin-top: -40px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 1100px;
        height: 500px;
        text-align: center;
        padding: 20px;
        background-color: $primary;
        box-shadow: 0px 0px 20px 0px #c7c7c7, 0 -5px 0px 0px rgb(88, 88, 88);
        .img {
          mask-image: url('..\assets/homepage-maskimg-.svg');
          mask-size: 100%;
          mask-position: 25% 25%;
          width: 475px;
        }
        .img:hover {
          transition: opacity 1s, transform 1s;
          transform: scale(1.1);
        }

        h4 {
          color: $quaternary;
        }

        p {
          font-size: 12px;
          color: $quintenary;
          span {
            color: $quaternary;
            border-bottom-style: solid;
            border-bottom-width: thin;
          }
        }

        .btn-primary {
          color: $primary;
          border-radius: 20px;
          font-weight: bold;
          background-color: $quaternary;
          width: 200px;
          padding: 10px;
          font-size: 15px;
        }
      }
    }
    .imgTr2 {
      width: 1100px;
      margin-left: 100px;
    }
  }
}
</style>
