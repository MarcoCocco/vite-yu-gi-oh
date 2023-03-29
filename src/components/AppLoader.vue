<script>
export default {
    name: 'AppLoader',
    data() {
        return {

        }
    }
}
</script>

<template>
    <div id="loader">
        <img src="/images/puzzle.png" alt="">
        <p>Loading...</p>
    </div>

</template>

<style lang="scss" scoped>

#loader {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: #242424;

    img {
        width: 200px;
        animation: loading-animation 2s ease 0s infinite normal forwards;
    }

    p {
        font-size: 1.4em;
        font-weight: bold;
    }
}

@keyframes loading-animation {
	0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
}

</style>