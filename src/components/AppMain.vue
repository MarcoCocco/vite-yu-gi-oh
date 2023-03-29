<script>
import axios from 'axios';
import { store } from '../store.js';
import AppLoader from './AppLoader.vue';
import AppSearch from './AppSearch.vue';
import CardItem from './CardItem.vue';

export default {
    name: 'AppMain',
    data() {
        return {

            store,
        }
    },

    components: { CardItem, AppSearch, AppLoader },

    created() {

        axios.get(this.store.APIcall).then((res) => {

            this.store.cards = res.data.data;

        });
    },

    methods: {

        scrollPageUp() {

            window.scrollTo(0, 0);

        },

        search() {

            let apiNewString = this.store.APIcall

            if (this.store.cardName != "" || this.store.cardType != "") {
                apiNewString += "&";

                if (this.store.cardName != "") {

                    apiNewString += `fname=${this.store.cardName}`;

                    if (this.store.cardType != "") {
                        apiNewString += "&";
                    }
                }

                if (this.store.cardType != "") {
                    apiNewString += `type=${this.store.cardType}`;
                }
            }

            axios.get(apiNewString).then((res) => {

                this.store.cards = res.data.data;

            });

        }
    },

}
</script>

<template>
    <AppSearch @searchCard="search()"></AppSearch>
    <div class="card-list-container">
        <AppLoader v-if="!store.cards.length > 0"></AppLoader>

        <div class="card-list">
            <CardItem v-for="card in store.cards" :card="card"></CardItem>
        </div>

        <button id="scroll-top-button" @click="scrollPageUp()">Torna all'inizio</button>
    </div>
</template>

<style lang="scss" scoped>
.card-list-container {
    position: relative;
    margin-top: 115px;
    width: 100%;
    height: calc(100vh - 115px);
    overflow: auto;

    .card-list {
        padding: 20px 50px;
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
}
</style>
