<script>
export default {
  name: 'Appfooter'
}
</script>

<template>
  <footer>
    <div class="container-fluid macro-section-subscribe">
      <div class="container section-subscribe">
        <div class="row">
          <div class="col text-center">
            <h1>Sign up to our Newsletter</h1>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder=""
            />
            <button id="button-subscribe">SUBSCRIBE</button>
            <p>
              (We do not share your data with anybody, and only use it for its
              intended purpose)
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid my-footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="..\assets/avada-drivers-logo-1x.png" alt="" />
            <p>
              Avada Driving School is the right choice for experienced drivers
              looking for a refresher course, or the brand new driver wanting to
              pass first time.
            </p>
            <button class="subscribe">
              <router-link :to="{ name: 'about' }">MORE ABOUT US</router-link>
            </button>
          </div>
          <div class="col my-col">
            <h3>Driving Courses</h3>
            <p>
              <a href=""
                ><i
                  class="fa-solid fa-circle-arrow-right"
                  style="color: #7abc64"
                ></i
                ><span>Basic Driving Course</span></a
              >
            </p>
            <p>
              <a href=""
                ><i
                  class="fa-solid fa-circle-arrow-right"
                  style="color: #7abc64"
                ></i
                ><span>Pass Plus Driving Course</span></a
              >
            </p>
            <p>
              <a href=""
                ><i
                  class="fa-solid fa-circle-arrow-right"
                  style="color: #7abc64"
                ></i
                ><span>Intensive Driving Course</span></a
              >
            </p>
            <p>
              <a href=""
                ><i
                  class="fa-solid fa-circle-arrow-right"
                  style="color: #7abc64"
                ></i
                ><span>Instructor Training</span></a
              >
            </p>
          </div>
          <div class="col my-col">
            <h3>Contact Details</h3>
            <p>
              <i class="fa-solid fa-house" style="color: #ffffff"></i>50 North
              Main Street, New York, NY 98765
            </p>
            <p>
              <i class="fa-solid fa-phone" style="color: #ffffff"></i>Toll Free:
              1-800-555-555
            </p>
            <p>
              <i class="fa-regular fa-envelope" style="color: #ffffff"></i
              >info@your-domain.com
            </p>
            <p>
              <i class="fa-solid fa-arrow-turn-up" style="color: #ffffff"></i
              >Mon to Sat: 8 am - 5 pm
            </p>
          </div>
          <div class="col my-col">
            <h3>Book Free Class</h3>
            <img src="../assets/blogpost-ten-400x228.jpg" alt="" />
            <button class="book-button">
              <router-link :to="{ name: 'prices' }">BOOK NOW</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid last-footer">
      <div class="container">
        <div class="row">
          <div class="col my-col-2">
            <p>
              © Copyright 2012 - 2024 | Avada Theme by
              <a class="link-footer" href="">ThemeFusion</a> | All Rights
              Reserved | Powered by <a class="link-footer" href="">WordPress</a>
            </p>
          </div>
          <div class="col social-section">
            <i class="fa-brands fa-facebook-f" style="color: #888888"></i>
            <i class="fa-brands fa-x-twitter" style="color: #888888"></i>
            <i class="fa-brands fa-youtube" style="color: #888888"></i>
            <i class="fa-brands fa-instagram" style="color: #888888"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

.my-footer {
  background-image: url('../assets/footer-background-color.jpg');
  height: auto;
  padding: 50px 0 50px 0;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
  color: #7799ad;
}

#button-subscribe {
  width: 100%;
  color: white;
  background-color: #7abc64;
  border: none;
}

#button-subscribe:hover {
  background-color: #64a64e;
  transition: all 0.2s;
}

.subscribe:hover {
  color: #7abc64;
  border-color: #7abc64;
  transition: all 0.2s;
}

.book-button:hover {
  background-color: #64a64e;
  transition: all 0.2s;
}

.my-col {
  padding-left: 20px;
}

span:hover {
  color: #7abc64;
  transition: all 0.2s;
}

button .section-subscribe {
  background-color: #7abc64;
  color: white;
}

input {
  margin: 30px 0 10px 0;
  padding: 15px;
}

.macro-section-subscribe {
  background-image: url('../assets/newsletter_background.jpg');
  background-size: cover;
  padding-top: 30px;
}

p {
  color: #7799ad;
  padding-top: 10px;
}

.link-footer {
  color: #7abc64;
}

img {
  width: 80%;
}

.book-button {
  margin-top: 30px;
  padding: 11px 23px;
  border-radius: 25px;
  background-color: #7abc64;
  border: none;
  color: white;
}

button {
  margin-top: 30px;
  padding: 11px 23px;
  border-radius: 25px;
  border: 3px solid #929aa3;
  background-color: transparent;
  color: #929aa3;
}

h3 {
  color: white;
  font-size: 25px;
}

.section-subscribe {
  width: 50%;
  padding-bottom: 30px;
}

.my-col-2 {
  font-size: 12px;
  padding-top: 25px;
}

.last-footer {
  background-color: #333333;
  height: 80px;
}

.social-section {
  text-align: end;
  padding-top: 30px;
}

i {
  padding-right: 20px;
}

i:hover {
  cursor: pointer;
}
</style>
