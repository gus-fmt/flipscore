<script setup>
  import { onMounted, ref, watch } from 'vue';
  import { usePartyStore } from '@/stores/partyStore.js'; // Importer le store Pinia
  
  const partyStore = usePartyStore();
  


</script>

<template>
    <main>
        <h1>Flipscore</h1>
        
        <p>Veuillez entrer le nombre de tours</p>
        <p>{{ partyStore.nbTours }} tours</p>
        <input type="range" name="tour" min="1" max="10" v-model="partyStore.nbTours" @input="partyStore.nbTours = $event.target.value">

        <p>Veuillez entrer les noms des joueurs et leurs scores initiaux</p>
       
        <div class="players-start">
          <div v-for="(player, i) in partyStore.players" :key="i">
            <p>Joueur {{ i + 1 }}</p>
            <span>Nom du joueur</span>
            <input type="text" v-model="partyStore.players[i].name" :placeholder="`Nom du joueur ${i + 1}`" />
            <span>Score initial : {{ partyStore.players[i].score.toLocaleString(fr-FR) }}</span>
            <input type="number" v-model="partyStore.players[i].score" placeholder="Score initial" min="0" max="999999" step="10" @blur="partyStore.players[i].score = Math.max(1, Math.floor(Number(partyStore.players[i].score)))"/>
            <button class="bg-red" @click="partyStore.removePlayer(i)">Supprimer</button>
          </div>
        </div>

        <button v-if="partyStore.players.length < 4" @click="partyStore.addPlayer">Ajouter un joueur</button>
    </main>
</template>

<style scoped>
    
</style>
