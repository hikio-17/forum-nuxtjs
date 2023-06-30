<script setup>
import { onMounted, ref } from 'vue'; 

const talksStore = useTalksStore();
const talks = ref([]);

onMounted(() => {
   talksStore.receiveTalks();
   talks.value = talksStore.talks;

});
   
</script>

<template>
   <section class="home-page">
      <h1>Home Page</h1>
      <p>{{  talks }}</p>
   </section>
</template>