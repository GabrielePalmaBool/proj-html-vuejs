<script>
export default {
  name: 'Appheader',
  data() {
    return {
      activeMenu: 0,

      links: [
        {
          item: 'HOME',
          name: 'home'
        },
        {
          item: 'ABOUT',
          name: 'about'
        },
        {
          item: 'PRICES',
          name: 'prices'
        },
        {
          item: 'COURSES',
          name: 'courses'
        },
        {
          item: 'LOCATIONS',
          name: 'locations'
        },
        {
          item: 'BLOG',
          name: 'blog'
        },
        {
          item: 'BOOK NOW',
          name: 'book'
        }
      ]
    }
  },
  methods: {
    activeLink(i) {
      this.activeMenu = i
      this.$router.currentRoute
      console.log(this.$router.currentRoute._value)
    }
  },

  mounted() {
    console.log(this.$router.currentRoute._value.path)
  }
}
</script>

<template>
  <header>
    <!-- Barra Pubblicitaria -->
    <div class="spam-bar">
      <div class="container">
        <div class="left-spam">We have a 95% Succesful Pass Rate!</div>

        <div class="right-spam">
          <i class="fa-solid fa-phone"></i> Give us a call to book your tuition!
          1-800-555-555
        </div>
      </div>
    </div>
    <!-- Barra di Navigazione -->
    <div class="topbar">
      <div class="topbar-container">
        <div class="logo-box">
          <a href="#">
            <router-link :to="{ name: 'home' }">
              <img src="../assets/avada-drivers-logo-1x.png" alt="logo Avada" />
            </router-link>
          </a>
        </div>
        <nav class="my-navbar">
          <ul>
            <li v-for="(link, i) in links" :key="i">
              <router-link
                :to="{ name: link.name }"
                :class="activeMenu === i ? 'active' : ''"
                @click="activeLink(i)"
              >
                {{ link.item }}
              </router-link>
            </li>
            <!-- Hamburger Menu -->
            <label for="check" class="checkbtn">
              <i class="fa-solid fa-bars"></i>
            </label>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

// Style Barra Pubblicitaria
.spam-bar {
  background: #333333;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px 0;
  }

  .left-spam,
  .right-spam {
    color: #7799ad;
    font-size: 13px;

    i {
      margin-right: 10px;
    }
  }
}

// Style Barra di Navigazione
.topbar {
  background: #00000058;
  width: 100%;
  height: 120px;
  box-shadow: 0 4px 5px -4px gray;
  position: absolute;

  .topbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1320px;
    margin: 0 auto;
    height: 100%;
    padding: 30px 0;

    .logo-box {
      min-width: 200px;
      margin-left: 30px;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      padding: 0;

      li {
        display: inline-block;
        margin: 0 15px;

        a {
          text-decoration: none;
          font-weight: bold;
          padding: 8px 0;
          color: #ffff;

          &.active,
          &:hover {
            color: #7abc64;
          }

          &.active {
            border-bottom: 3px solid #7abc64;
          }
        }
      }
      // Style Haburger Menu
      .checkbtn {
        font-size: 40px;
        color: #ffff;
        cursor: pointer;
        display: none;
        margin-right: 30px;
      }
      // Media Query Tablet/Smartphone
      @media all and (max-width: 1000px) {
        li {
          display: none;
        }

        .checkbtn {
          display: block;
        }
      }
    }
  }
}
</style>
