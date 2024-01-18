<script>
import Banner from '../components/Banner.vue'
import Carosello from '../components/Carosello.vue'

export default {
  name: 'AppmainAbout',
  components: {
    Banner,
    Carosello
  }
}
</script>

<template>
  <main>
    <div class="jumbotron">
      <div class="container">
        <h1>About</h1>
      </div>
    </div>
    <div class="container">
      <!-- Sezione Mission -->
      <div class="mission-section">
        <div class="row">
          <!-- Colonna di sinistra -->
          <div class="col-6">
            <div class="left-part">
              <h2>Mission Statement</h2>
              <p class="main-pharagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultrices auctor sapien id cursus. Aliquam maximus turpis in
                vehicula semper.
              </p>
              <p class="sub-pharagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ultrices auctor sapien id cursus.
              </p>
              <div class="box-labels">
                <img src="../assets/labels-800x174.png" alt="" />
              </div>
            </div>
          </div>
          <!-- Colonna di destra -->
          <div class="col-6">
            <div class="right-part">
              <div class="box-mike-img">
                <img
                  src="../assets/about-page-mike-intro-fade.png"
                  alt="Mike-Intro"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sezione Team -->
    <div class="team-section">
      <div class="container">
        <div class="wrapper">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula
            semper.
          </p>
        </div>
        <!-- Card Sezione Team -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="row">
                <div class="col-4">
                  <div class="box-profile">
                    <img
                      src="../assets/mike-hart-about-page.jpg"
                      alt="mike-profile"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-box">
                    <div class="upper-text">
                      <div class="credentials">
                        <div class="name">Mike Hart</div>
                        <div class="profession">Principle Instructor</div>
                      </div>
                      <div class="box-socials">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                      </div>
                    </div>

                    <div class="profile-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ultrices auctor sapien id cursus. Aliquam maximus
                        turpis in vehicula semper. Nunc ultrices auctor sapien
                        id cursus. Aliquam maximus turpis in vehicula semper.
                      </p>
                    </div>

                    <div class="title-locations">LOCATIONS COVERED</div>
                    <ul class="locations">
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>New York
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>South Carolina
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>Washington D.C
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>Florida
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="row">
                <div class="col-4">
                  <div class="box-profile">
                    <img
                      src="../assets/john-smith-about-page.jpg"
                      alt="mike-profile"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-box">
                    <div class="upper-text">
                      <div class="credentials">
                        <div class="name">John Smith</div>
                        <div class="profession">Course Instructor</div>
                      </div>
                      <div class="box-socials">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                      </div>
                    </div>

                    <div class="profile-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ultrices auctor sapien id cursus. Aliquam maximus
                        turpis in vehicula semper. Nunc ultrices auctor sapien
                        id cursus. Aliquam maximus turpis in vehicula semper.
                      </p>
                    </div>

                    <div class="title-locations">LOCATIONS COVERED</div>
                    <ul class="locations">
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>New York
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>South Carolina
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>Washington D.C
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>Florida
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="row">
                <div class="col-4">
                  <div class="box-profile">
                    <img
                      src="../assets/angela-hart-about-page.jpg"
                      alt="mike-profile"
                    />
                  </div>
                </div>
                <div class="col-8">
                  <div class="text-box">
                    <div class="upper-text">
                      <div class="credentials">
                        <div class="name">Angela Hart</div>
                        <div class="profession">Driving Instructor</div>
                      </div>
                      <div class="box-socials">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                      </div>
                    </div>

                    <div class="profile-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ultrices auctor sapien id cursus. Aliquam maximus
                        turpis in vehicula semper. Nunc ultrices auctor sapien
                        id cursus. Aliquam maximus turpis in vehicula semper.
                      </p>
                    </div>

                    <div class="title-locations">LOCATIONS COVERED</div>
                    <ul class="locations">
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>New York
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>South Carolina
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>Washington D.C
                      </li>
                      <li class="city">
                        <i class="fa-regular fa-circle-right"></i>Florida
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione Promise -->
    <div class="promise-section">
      <div class="container">
        <div class="wrapper">
          <h1>Our Promise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula
            semper.
          </p>
        </div>

        <div class="row">
          <div class="col-6">
            <ul class="accordion">
              <li>
                <input type="radio" name="accordian" id="first" />
                <label for="first">High Rate of Success</label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                  </p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordian" id="second" />
                <label for="second">Zero Accident Rate</label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                  </p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordian" id="third" />
                <label for="third">We're Never Late</label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="col-6">
            <ul class="accordion">
              <li>
                <input type="radio" name="accordian" id="fourth" />
                <label for="fourth">Price Promise</label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                  </p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordian" id="fifth" />
                <label for="fifth">True Professionals</label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                  </p>
                </div>
              </li>

              <li>
                <input type="radio" name="accordian" id="sixth" />
                <label for="sixth">We Work Around You</label>
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc ultrices auctor sapien id cursus. Aliquam maximus
                    turpis in vehicula semper.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Banner />
    <Carosello />
  </main>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.jumbotron {
  background-image: url(../assets/default-ptb-retina.jpg);
  background-size: cover;
  background-position: bottom;
  height: 380px;
  color: #ffff;

  h1 {
    font-size: 70px;
    font-weight: bold;
    position: absolute;
    top: 300px;
  }
}

.mission-section {
  margin: 80px 0;

  .left-part {
    padding: 10px;

    h2 {
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

  .right-part {
    .box-mike-img img {
      width: 80%;
      margin-top: -22%;
      margin-left: 70px;
    }
  }
}

.team-section {
  background-image: linear-gradient(#eef5f7, #ffff);
  padding: 80px 0 120px 0;

  .wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    p {
      font-size: 25px;
      color: #7099a5;
      line-height: 40px;
    }
  }

  .card {
    padding: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 20px 15px 0px #eaeaea;
    border-top: 7px solid #7abc64;
    margin-top: 50px;

    .box-profile {
      width: 100%;
      img {
        width: 100%;
        transition: 0.5s;
      }

      img:hover {
        transform: scale(1.1);
        box-shadow: 3px 8px 5px 3px #d6d6d6;
        z-index: 2;
      }
    }

    .text-box {
      padding-left: 30px;
      padding-top: 20px;

      .upper-text {
        display: flex;
        justify-content: space-between;
        .credentials {
          margin-bottom: 30px;

          .name {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 3px;
          }

          .profession {
            color: #7099a5;
          }
        }

        .box-socials {
          margin-top: -25px;

          a {
            font-size: 20px;
            margin-left: 20px;
            color: #7099a5;
          }
        }
      }

      .profile-description p {
        color: #7099a5;
        font-size: 18px;
        line-height: 37px;
        margin-bottom: 30px;
      }

      .title-locations {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 40px;
      }

      .locations {
        list-style: none;
        padding: 0;

        .city {
          margin-bottom: 15px;
          color: #7099a5;
          font-size: 17px;

          i {
            color: #7abc64;
            margin-right: 20px;
          }
        }
      }
    }
  }
}

.promise-section {
  background-image: url(../assets/about-promise-background.jpg);
  background-size: cover;
  background-position: bottom;
  padding: 80px 0;

  .wrapper {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    h1 {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 40px;
    }

    p {
      font-size: 25px;
      color: #7099a5;
      line-height: 40px;
    }
  }

  .accordion {
    width: 100%;

    li {
      list-style: none;
      width: 100%;
      margin: 20px;
      padding: 10px;
      border: 2px solid gray;
      background: #ffff;
      box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
        -6px -6px 10px -1px rgba(255, 255, 255, 0.7);

      input[type='radio'] {
        display: none;
      }

      input[type='radio']:checked + label + .content {
        max-height: 400px;
        padding: 10px 10px 20px;
      }

      input[type='radio']:checked + label::before {
        content: '-';
      }

      label {
        display: flex;
        align-items: center;
        color: #7abc64;
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
      }

      label::before {
        content: '+';
        margin-right: 15px;
        font-size: 24px;
        font-weight: 700;
        color: gray;
      }

      .content {
        color: #7099a5;
        padding: 0 10px;
        line-height: 26px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s, padding 0.4s;
      }
    }
  }
}
</style>
