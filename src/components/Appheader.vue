<script>
export default {
    name: "Appheader"
}
</script>

<template>
    <header>
        <div class="container">
            <a href="#" class="logo">
                <img src="" alt="">
            </a>
            <nav class="navbar">
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }">
                            HOME
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'about' }">
                            ABOUT
                        </router-link>
                    </li>

                    <li>
                        <router-link :to="{ name: 'prices' }">
                            PRICES
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

    <!-- Collegamnto ai vari files Main del progetto
<nav>
  <ul>
    <li>
      <router-link :to="{ name:'home' }">
      HOME
      </router-link>
    </li>
    <li>
      <router-link :to="{ name:'about' }">
      ABOUT
      </router-link>
    </li>
    <li>
      <router-link :to="{ name:'prices' }">
      PRICES
      </router-link>
    </li>
  </ul>
</nav>

-->

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

header {
    background: #000;
    height: 100px;
    width: 100%;

}
</style>
