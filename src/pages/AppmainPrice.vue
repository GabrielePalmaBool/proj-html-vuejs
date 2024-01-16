<script>
export default {
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
          <div class="col">
            <h1>Hourly Tuition Prices</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ultrices auctor sapien id cursus. Aliquam maximus turpis in
              vehicula semper.
            </p>
          </div>
          <div class="col">
            <button>MEET YOUR INSTRUCTORS</button>
          </div>
        </div>
        <div class="row tabella-price">
          <div class="col">
            <h2>Standard</h2>
            <h2>$ <span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col">
            <h2>Night</h2>
            <h2>$ <span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col">
            <h2>Auto</h2>
            <h2>$ <span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
          <div class="col">
            <h2>Cab</h2>
            <h2>$ <span>45</span><i>hourly</i></h2>
            <p>Fully Insured</p>
            <p>First lesson free</p>
            <p>Basics</p>
            <button id="book-button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
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
  text-align: center;
  border: 1px solid #7799ad;
  margin: 50px 0 50px 0;

  .col {
    border: 1px solid #7799ad;
    padding: 20px;
  }

  // p:hover {
  //   background-color: #7799ad;
  // }
}
.price-container {
  padding: 100px 0 100px 0;
  p {
    color: #7799ad;
    font-size: 20px;
  }
  h1 {
    font-size: 50px;
  }
  button {
    padding: 11px 23px;
    border-radius: 25px;
    margin-top: 75px;
    width: 100%;
    color: white;
    background-color: #7abc64;
    border: none;
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
    color: #7799ad;
  }
}

#book-button {
  margin: 0;
  padding: 11px 23px;
  border-radius: 25px;
  background-color: #7abc64;
  border: none;
  color: white;
  width: 50%;
}

#book-button:hover {
  background-color: #64a64e;
  transition: all 0.2s;
}

.container-fluid {
  background-color: #e5f2fa;
}
</style>
