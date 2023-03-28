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
    </div>
</template>

<style lang="scss" scoped>
#card {
    width: calc(100% / 5 - 30px);

    img {
        width: 100%;
    }
}

</style>