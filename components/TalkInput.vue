<script setup>
   import { ref } from 'vue';

   const text = ref('')
 
   function addTalk() {
      console.log(text.value)
   }    
       
</script>

<template>
   <div class="talk-input">
      <textarea 
         name="text" 
         typeof="text" 
         placeholder="What are you thinking?"
         v-model="text" 
      />
      <p class="talk-input__char-left">
         <strong>{{ text.length }}</strong>
         /320
      </p>
      <button type="submit" @click="addTalk">Talk</button>
   </div>
</template>