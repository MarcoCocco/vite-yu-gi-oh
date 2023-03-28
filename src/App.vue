<script>
import AppHero from './components/AppHero.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';

export default {
    data() {
        return {

            store,
        }
    },
    components: { AppHero, AppMain, },


}
</script>

<template>
    <AppHero></AppHero>
    <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
