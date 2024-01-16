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
    }
  }
}
</script>

<template>
  <header>
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
  </header>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

header {
  background: #000000dd;
  width: 100%;
  box-shadow: 0 4px 5px -4px gray;

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
            color: #64a64e;
          }

          &.active {
            border-bottom: 3px solid #64a64e;
          }
        }
      }
    }
  }
}
</style>
