<script>
export default {
  name: 'Carosello',
  data() {
    return {
      activeUser: 0,
      timer: 0,

      testimonial: [
        {
          name: 'Sophia Jones',
          image: '/testimonial-sophia.png'
        },
        {
          name: 'Harold Green',
          image: '/testimonial-harold.png'
        },
        {
          name: 'Grant Harvey',
          image: '/testimonial-grant.png'
        },
        {
          name: 'Kate Lewis',
          image: '/testimonial-kate.png'
        },
        {
          name: 'Kelly Johnson',
          image: '/testimonial-kelly.png'
        }
      ]
    }
  },
  methods: {
    changeNexImg() {
      this.activeUser--

      if (this.activeUser < 0) {
        this.activeUser = this.testimonial.length - 1
      }
    },

    changePrevImg() {
      this.activeUser++

      if (this.activeUser > this.testimonial.length - 1) {
        this.activeUser = 0
      }
    },

    // Funzione intervallo
    IntervalImg() {
      this.timer = setInterval(this.changeNexImg, 2000)
    },

    // Funzione stop-intervallo se si va sopra con il mouse
    StopAutoPlay() {
      clearInterval(this.timer)

      this.timer = 0
    }
  },
  mounted() {
    this.IntervalImg()
  }
}
</script>

<template>
  <div class="carosello">
    <div class="container text-center">
      <h1 class="text-center">Testimonials</h1>
      <p class="text-center">
        Here’s what our happy drivers had to say about our services:
      </p>
      <div class="slider-wrapper" tabindex="0" id="app">
        <!-- ciclo for  -->
        <div
          v-for="(item, image) in testimonial"
          :class="image === 0 ? 'active' : 'none'"
        >
          <!-- quando vado sopra l'immagine con il cursore questa si bloccherà -->
          <img
            :src="testimonial[activeUser].image"
            :alt="image"
            @mouseover="StopAutoPlay"
            @mouseout="IntervalImg"
          />
          <p>
            <i
              >Avada Driving School really helped build my confidence behind the
              <br />
              wheel and with driving in general, and they got me a first time
              pass!
              <br />
              Highly recommended.</i
            >
          </p>
          <h3>
            <b>{{ testimonial[activeUser].name }}</b>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;
.carosello {
  background-image: url('/testimonial-background.jpg');
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

  .slider-wrapper {
    .none {
      display: none;
    }
  }
}
</style>
