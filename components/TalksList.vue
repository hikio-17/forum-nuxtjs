<script setup>
   import TalkItem from '@/components/TalkItem.vue';

   const props = defineProps(['talks']);

</script>

<template>
   <div class="talks-list">
      <TalkItem v-for="talk in talks" :key="talk.id" :talk="talk" />
   </div>
</template>