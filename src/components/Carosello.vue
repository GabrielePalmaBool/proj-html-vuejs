<script>
export default {
  name: 'Carosello',
  data() {
    return {
      activeUser: 0,
      testimonial: [
        {
          name: 'Sophia Jones',
          image: '../assets/testimonial-sophia.png'
        },
        {
          name: 'Harold Green',
          image: '../assets/testimonial-harold.png'
        },
        {
          name: 'Grant Harvey',
          image: '../assets/testimonial-grant.png'
        },
        {
          name: 'Kate Lewis',
          image: '../assets/testimonial-kate.png'
        },
        {
          name: 'Kelly Johnson',
          image: '../assets/testimonial-kelly.png'
        }
      ]
    }
  },
  methods: {}
}
</script>

<template>
  <div class="carosello container-fluid">
    <div class="container text-center">
      <h1 class="text-center">Testimonials</h1>
      <p class="text-center">
        Here’s what our happy drivers had to say about our services:
      </p>
      <img src="../assets/testimonial-kelly.png" alt="" />
      <p>
        <i
          >Avada Driving School really helped build my confidence behind the
          <br />
          wheel and with driving in general, and they got me a first time pass!
          <br />
          Highly recommended.</i
        >
      </p>
      <h3>
        <b>Kelly Johnson</b>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;
.carosello {
  background-image: url('../assets/testimonial-background.jpg');
  height: auto;
  background-size: cover;
  padding: 50px 0;
  img {
    max-width: 150px;
    height: auto;
  }
  h1 {
    font-size: 50px;
  }
  p {
    padding-top: 30px;
    color: #7799ad;
    font-size: 20px;
  }
  h3 {
    font-size: 20px;
    color: #7799ad;
  }
}
</style>
