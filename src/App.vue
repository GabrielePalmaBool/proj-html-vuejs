<script >

//importo componenti figli
import Appheader from './components/Appheader.vue'
import Appmain from './components/Appmain.vue'
import Appfooter from './components/Appfooter.vue'
import { RouterView } from 'vue-router';


export default {

    components: {
        Appheader,
        Appmain,
        Appfooter,
        RouterView
    }
}
</script>

<template>
    <Appheader />
    <router-view></router-view>
    <Appfooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
