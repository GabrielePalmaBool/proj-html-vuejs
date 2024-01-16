<script>
export default {
  name: 'NotFound'
}
</script>

<template>
  <main>
    <h3>Pagina non trovata</h3>
  </main>
</template>

<style lang="scss" scoped>
//Scss relativo alla sola sezione di header
@use '../styles/partials/variables' as *;

h3 {
  color: $secondary;
  text-align: center;
  margin-top: 50px;
}
</style>
