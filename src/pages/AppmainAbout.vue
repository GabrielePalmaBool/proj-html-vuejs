<script>
export default {
  name: 'AppmainAbout'
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
              <div class="box-profile">
                <img
                  src="../assets/instructor-mikehart-600x381.jpg"
                  alt="mike-profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.jumbotron {
  background-image: url(../assets/default-ptb-retina.jpg);
  background-size: cover;
  height: 400px;
  color: #ffff;

  h1 {
    font-size: 70px;
    font-weight: bold;
    position: absolute;
    top: 280px;
  }
}

.mission-section {
  margin: 80px 0;

  .left-part {
    padding: 10px;

    h2 {
      font-size: 40px;
      font-weight: 600;
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
  height: 800px;
  background-image: linear-gradient(#eef5f7, #ffff);
  text-align: center;
  padding: 80px 0;

  .wrapper {
    max-width: 800px;
    margin: 0 auto;

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

  .card {
    padding: 20px;
    border-radius: 10px;
    border: none;

    .box-profile img {
      width: 50%;
    }
  }
}
</style>
