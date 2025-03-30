import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePartyStore = defineStore('party', () => {
    const partyOn = ref(false);
    const nbTours = ref(1);
    const players = ref([{score: 0, name: ''}]);

    const addPlayer = () => {
        players.value.push({score: 0, name: "Joueur " + (players.value.length + 1)});
    };

    const removePlayer = (index) => {
        players.value.splice(index, 1);
    };

    return { partyOn, nbTours, players, addPlayer, removePlayer };
});