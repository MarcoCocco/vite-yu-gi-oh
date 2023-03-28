<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
    data() {
        return {

            store,
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
    <div id="card">

    </div>
</template>

<style scoped></style>
