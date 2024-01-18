<script>
export default {
  name: 'Appheader',
  data() {
    return {
      activeMenu: 1,

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
          item: 'COURSES'
        },
        {
          item: 'LOCATIONS'
        },
        {
          item: 'BLOG'
        },
        {
          item: 'BOOK NOW'
        }
      ]
    }
  },
  methods: {
    activeLink(i) {
      this.activeMenu = i
      let pippo = window.location.href

      console.log(i)
    }
  }
}
</script>

<template>
  <header>
    <div class="spam-bar">
      <div class="container">
        <div class="left-spam">We have a 95% Succesful Pass Rate!</div>

        <div class="right-spam">
          <i class="fa-solid fa-phone"></i> Give us a call to book your tuition!
          1-800-555-555
        </div>
      </div>
    </div>
    <div class="topbar">
      <div class="container">
        <div class="logo-box">
          <a href="#">
            <img src="../assets/avada-drivers-logo-1x.png" alt="logo Avada" />
          </a>
        </div>
        <nav class="navbar">
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
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

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

.topbar {
  background: #00000058;
  width: 100%;
  box-shadow: 0 4px 5px -4px gray;
  position: absolute;
  top: 39px;
  left: 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 30px 0;

    .logo-box {
      width: 280px;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;

      li {
        padding-left: 65px;

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
    }
  }
}
</style>
