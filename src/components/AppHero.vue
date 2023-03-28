<script>
export default {
    data() {
        return {

        }
    },

    methods: {
        scrollPageDown() {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }
}
</script>

<template>
    <div class="bg-hero">
        <div class="gradient-color">
            <div class="bg-image">
                <button id="scroll-bottom-button" @click="scrollPageDown()">Vai al Catalogo</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bg-hero {

    .gradient-color {
        background-size: cover;
        background-position: center;
        border-bottom-right-radius: 30%;
        border-top-left-radius: 30%;
        background-image: linear-gradient(90deg, rgba(68, 63, 131, 1) 0%, rgba(136, 191, 216, 1) 100%);

        .bg-image {
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-position: center;
            border-bottom: 25px solid #443f83;
            border-top: 25px solid #88bfd8;
            border-bottom-right-radius: 30%;
            border-top-left-radius: 30%;
            background-image: url('/images/jumbo.png');

            #scroll-bottom-button {
                position: fixed;
                top: 20px;
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
    }

}
</style>