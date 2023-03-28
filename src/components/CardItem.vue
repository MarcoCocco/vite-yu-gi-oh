<script>
import { store } from '../store.js'

export default {
    name: 'CardItem',
    data() {
        return {

            store,
        }
    },

    props: {

        card: Object,
    }
}
</script>

<template>
    <div id="card">
        <div class="card-image">
            <img :src="card.card_images[0].image_url" alt="">
        </div>
        <div class="title-card">
            <p><strong>{{ card.name }}</strong></p>
        </div>
        <div class="card-type">
            <p>{{ card.type }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#card {
    width: calc(100% / 5 - 30px);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .card-image {
        margin-bottom: 15px;
        box-shadow: 0px 10px 15px 0px #000000d7;

        img {
            display: block;
            width: 100%;
        }
    }

    .title-card, .card-type{
        text-align: center;
    }

    .card-type {
        font-size: .8em;
        color: gray;
    }
}
</style>