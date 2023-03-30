import { reactive } from 'vue';

export const store = reactive({

    cards: [],
    isLoading: true,
    APIcall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=1000&offset=0',
    cardName: '',
    cardType: '',


});
