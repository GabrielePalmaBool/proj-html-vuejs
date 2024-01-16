<script >

//importo componenti figli
import Appheader from './components/Appheader.vue'
import Appmain from './components/Appmain.vue'
import Appfooter from './components/Appfooter.vue'


export default {

components: {
  Appheader,
  Appmain,
  Appfooter
}
}
</script>

<template>
    <Appheader/>
    <Appmain/>
    <Appfooter/>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
