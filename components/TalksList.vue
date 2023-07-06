<script setup>
   import { defineEmits } from 'vue';
   import TalkItem from '@/components/TalkItem.vue';

   const props = defineProps(['talks', 'authUser']);
   const emit = defineEmits(['on-like']);

   function emitOnLike(talkId) {
      emit('on-like', talkId)
   }
</script>

<template>
   <div class="talks-list">
      <TalkItem v-for="talk in talks" 
         :key="talk.id" 
         :talk="talk" 
         :authUser="authUser"
         @on-like="emitOnLike"/>
   </div>
</template>