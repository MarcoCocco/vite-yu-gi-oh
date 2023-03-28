<script>
import axios from 'axios';
import { store } from '../store.js';
import CardItem from './CardItem.vue';

export default {
    name: 'AppMain',
    data() {
        return {

            store,
        }

        hidden: false;
    },

    components: { CardItem },

    methods: {

        scrollPageUp() {

            window.scrollTo(0, 0);

        }
    },

    created() {

        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {

            this.store.cards = res.data.data;

        });
    }
}
</script>

<template>
    <div class="card-list">
        <CardItem v-for="card in store.cards" :card="card"></CardItem>
    </div>

    <button id="scroll-top-button" @click="scrollPageUp()">Torna all'inizio</button>
</template>

<style lang="scss" scoped>
.card-list {
    width: 100%;
    height: 100vh;
    padding: 20px 50px;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

#scroll-top-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: darken($color: red, $amount: 40%);
    color: #fff;
    border: none;
    border: 1px solid red;
    border-radius: 50px;
    cursor: pointer;
    opacity: .5;
    transition: all .6s;

    &:hover {
        opacity: 1;
    }
}
</style>
