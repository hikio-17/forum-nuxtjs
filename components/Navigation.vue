<script setup>
   import { defineProps} from 'vue'

   const props = defineProps(['authUser'])
</script>

<template>
   <div class="navigation">

      <img :src="authUser?.photo" :alt="authUser?.id" :title="authUser?.name" >
      <nav>
         <NuxtLink to="/">Home</NuxtLink>
      </nav>
      <button type="button">Sign Out</button>
   </div>
</template>