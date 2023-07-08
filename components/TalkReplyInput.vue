<script setup>
   import { ref } from 'vue';
   import { useRouter } from 'vue-router';

   const emit = defineEmits(['reply-talk']);
   const router = useRouter();
   const text = ref('');

   function onReplyTalk() {
      emit('reply-talk', text.value);
      router.push('/');
   }
</script>

<template>
   <div class="talk-reply-input">
      <textarea 
         type="text" 
         placeholder="Talk your reply"
         v-model="text"
      />
      <p class="talk-reply-input__char-left"><strong>{{  text.length }}</strong>/320</p>
      <button type="submit" @click="onReplyTalk">
         Reply Talk
      </button>
   </div>
</template>