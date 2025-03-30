<script setup>
  import { defineStore } from 'pinia'; 
  import { onMounted, ref, watch } from 'vue';
  import partyInit from '@/components/partyInit.vue';
  import party from '@/components/party.vue';
  import { usePartyStore } from '@/stores/partyStore.js'; // Importer le store Pinia
  const partyStore = usePartyStore();


</script>

<template>
  <button class="start-btn" v-if="partyStore.partyOn===false && partyStore.players.length!==0" type="button" @click="partyStore.partyOn = true">Lancer la partie</button>
  
  <partyInit v-if="partyStore.partyOn===false"></partyInit>
  
  <party v-if="partyStore.partyOn===true"></party>
</template>

<style scoped>
</style>
