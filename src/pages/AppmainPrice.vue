<script>
import Carosello from '../components/Carosello.vue'
import Banner from '../components/Banner.vue'
export default {
  components: {
    Carosello,
    Banner
  },
  name: 'AppmainPrice'
}
</script>

<template>
  <main>
    <div class="jumbo">
      <div class="container">
        <h1>Prices</h1>
      </div>
    </div>
    <div class="container-fluid price-container">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <h1>Hourly Tuition Prices</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </p>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <button>
              <router-link :to="{ name: 'about' }"
                >MEET YOUR INSTRUCTORS</router-link
              >
            </button>
          </div>
        </div>
        <div id="tabella-grande" class="row tabella-price">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-3">
            <h2>Standard</h2>
            <h2>$<span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col col-12 col-sm-12 col-md-12 col-lg-3">
            <h2>Night</h2>
            <h2>$<span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col col-12 col-sm-12 col-md-12 col-lg-3">
            <h2>Auto</h2>
            <h2>$<span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col col-12 col-sm-12 col-md-12 col-lg-3">
            <h2>Cab</h2>
            <h2>$<span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
    <Banner />
    <div class="container-fluid section-to-about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <h1>Course Tuition Prices</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </p>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            <button>COURSE INFORMATION</button>
          </div>
        </div>
        <div id="tabella-grande" class="row tabella-price">
          <div class="col col-12 col-md-12 col-lg-4">
            <h2>Pass Plus</h2>
            <h2>$<span>270</span></h2>
            <p>Fully Insured</p>
            <p>99% Pass Rate</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col col-12 col-md-12 col-lg-4">
            <h2>Intensive</h2>
            <h2>$<span>1200</span></h2>
            <p>Fully Insured</p>
            <p>99% Pass Rate</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col col-12 col-md-12 col-lg-4">
            <h2>Instructor</h2>
            <h2>$<span>1800</span></h2>
            <p>Fully Insured</p>
            <p>99% Pass Rate</p>
            <button id="book-button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid section-box">
      <div class="container">
        <div class="row text-center">
          <h1>All Tuition Will Cover</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula
            semper.
          </h5>
        </div>
        <div class="row">
          <div id="section-portfolio" class="row">
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="icon-portfolio">
                <i class="fa-solid fa-car" style="color: #ffffff"></i>
              </div>
              <h6>Basic Vehicle Knowledge</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus vulputate quam. Etiam dignissim mauris a lectus
                consectetur mollis. Integer ipsum ante, pretium mattis accumsan
                in, mattis eget sapien. Quisque non mollis ex.
              </p>
            </div>
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="icon-portfolio">
                <i class="fa-solid fa-signs-post" style="color: #ffffff"></i>
              </div>
              <h6>Highway Code</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus vulputate quam. Etiam dignissim mauris a lectus
                consectetur mollis. Integer ipsum ante, pretium mattis accumsan
                in, mattis eget sapien. Quisque non mollis ex.
              </p>
            </div>
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="icon-portfolio">
                <i class="fa-solid fa-arrow-turn-up" style="color: #ffffff"></i>
              </div>
              <h6>Driving Manouvers</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus vulputate quam. Etiam dignissim mauris a lectus
                consectetur mollis. Integer ipsum ante, pretium mattis accumsan
                in, mattis eget sapien. Quisque non mollis ex.
              </p>
            </div>
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="icon-portfolio">
                <i
                  class="fa-solid fa-triangle-exclamation"
                  style="color: #ffffff"
                ></i>
              </div>
              <h6>Road Safety</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus vulputate quam. Etiam dignissim mauris a lectus
                consectetur mollis. Integer ipsum ante, pretium mattis accumsan
                in, mattis eget sapien. Quisque non mollis ex.
              </p>
            </div>
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="icon-portfolio">
                <i class="fa-solid fa-book" style="color: #ffffff"></i>
              </div>
              <h6>Drivers Theory Examination</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus vulputate quam. Etiam dignissim mauris a lectus
                consectetur mollis. Integer ipsum ante, pretium mattis accumsan
                in, mattis eget sapien. Quisque non mollis ex.
              </p>
            </div>
            <div class="text-center col-12 col-sm-12 col-md-12 col-lg-4">
              <div class="icon-portfolio">
                <i class="fa-solid fa-file-lines" style="color: #ffffff"></i>
              </div>
              <h6>Driving Test Certification</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tempus vulputate quam. Etiam dignissim mauris a lectus
                consectetur mollis. Integer ipsum ante, pretium mattis accumsan
                in, mattis eget sapien. Quisque non mollis ex.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Carosello />
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.jumbo {
  background-image: url('..\assets/prices-hero-background.jpg');
  height: 350px;
  background-size: cover;
  color: $primary;
  padding-top: 50px;

  h1 {
    font-size: 70px;
    margin-top: 130px;
  }
}

.tabella-price {
  background-color: $primary;
  text-align: center;
  border: 1px solid $septenary;
  margin: 50px 0 50px 0;

  .col {
    border: 1px solid $septenary;
    padding: 20px;
  }

  // p:hover {
  //   background-color: #7799ad;
  // }
}
.price-container {
  background-color: #e5f2fa;
  padding: 100px 0 100px 0;
  p {
    color: $septenary;
    font-size: 20px;
    padding: 10px;
  }
  h1 {
    font-size: 50px;
  }
  button {
    padding: 11px 23px;
    border-radius: 25px;
    margin-top: 75px;
    width: 80%;
    color: $primary;
    background-color: #7abc64;
    border: none;
    text-decoration: none;
  }

  button:hover {
    background-color: #64a64e;
    transition: all 0.2s;
  }

  span {
    color: #7abc64;
    font-size: 50px;
  }

  i {
    font-size: 15px;
    color: $septenary;
  }
}

.section-to-about {
  background-color: #f6f6f6;
  padding: 100px 0 100px 0;
  p {
    color: $septenary;
    font-size: 20px;
    padding: 5px;
  }
  h1 {
    font-size: 50px;
  }
  button {
    padding: 11px 23px;
    border-radius: 25px;
    margin-top: 75px;
    width: 80%;
    color: $primary;
    background-color: #7abc64;
    border: none;
    text-decoration: none;
  }

  button:hover {
    background-color: #64a64e;
    transition: all 0.2s;
  }

  span {
    color: #7abc64;
    font-size: 50px;
  }

  i {
    font-size: 15px;
    color: $septenary;
  }
}

#book-button {
  margin: 0;
  padding: 11px 23px;
  border-radius: 25px;
  background-color: #7abc64;
  border: none;
  color: $primary;
  width: 50%;
}

#book-button:hover {
  background-color: #64a64e;
  transition: all 0.2s;
}

.section-telephone {
  background-image: url('..\assets/prices-hero-background.jpg');
  color: white;
  height: auto;
  background-size: cover;
  padding-top: 70px;
  padding-bottom: 70px;
  h2 {
    padding-top: 40px;
    text-align: end;
    padding-right: 30px;
  }
}

.section-box {
  padding-top: 30px;
  h1 {
    margin-top: 30px;
  }
  h5 {
    color: $septenary;
    font-size: 25px;
    padding-top: 15px;
  }
}
.icon-portfolio {
  background-color: #7abc64;
  border-radius: 45px;
  margin-left: 38%;
  width: 95px;
  font-size: 40px;
  height: 85px;
  padding: 10px;
}

.icon-portfolio:hover {
  transition: opacity 1s, transform 1s;
  transform: scale(1.1);
}

#section-portfolio {
  margin: 50px 0 50px 0;

  h6 {
    margin: 30px 0;
    font-size: 25px;
  }

  p {
    font-size: 18px;
    color: $sextenary;
    margin-bottom: 4rem;
  }
}

a {
  text-decoration: none;
}
</style>
