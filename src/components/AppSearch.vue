<script>
import { store } from '../store';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="search-options">
            <div class="type-search">
                <input id="search-bar" type="text" placeholder="Inserisci parola chiave">
                <select name="type" id="type">
                    <option value="">Seleziona tipo</option>
                    <option value="Normal Monster">Mostro Normale</option>
                    <option value="Effect Monster">Mostro Effetto</option>
                    <option value="Spell Card">Magia</option>
                    <option value="Trap Card">Trappola</option>
                </select>
            </div>
            <div class="search-button">
                <button id="search-btn">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    position: relative;

    .search-options {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: darken($color: #443f83, $amount: 20%);
        border-bottom: 1px solid #443f83;
        box-shadow: 0px 8px 10px -3px rgba(0, 0, 0, 0.84);
       
        .type-search {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;

            #search-bar {
                width: 25%;
                padding: 5px 10px;
                border-radius: 50px;
                border: none;
                outline: none;
                background-color: darken($color: #88bfd8, $amount: 40%);
                border: 1px solid #88bfd8;
            }

            #type {
                padding: 5px 10px;
                border-radius: 50px;
                border: none;
                outline: none;
                background-color: darken($color: #88bfd8, $amount: 40%);
                border: 1px solid #88bfd8;
            }
        }

        #search-btn {
            padding: 5px 10px;
            border-radius: 50px;
            border: none;
            background-color: darken($color: #88bfd8, $amount: 40%);
            border: 1px solid #88bfd8;
            transition: all .1s;

            &:hover {
                cursor: pointer;
                transform: scale(1.1);
                box-shadow: 0px 10px 10px -3px rgba(0, 0, 0, 0.84);
            }
        }
    }
}
</style>