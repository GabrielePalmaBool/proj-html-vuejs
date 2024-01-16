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
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.jumbo {
  background-image: url('..\assets/prices-hero-background.jpg');
  height: 300px;
  background-size: cover;
  color: $primary;
  padding-top: 50px;

  h1 {
    font-size: 70px;
    margin-top: 130px;
  }
}
</style>
