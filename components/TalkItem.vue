<script setup>
   import { postedAt } from '@/utils';

   const props = defineProps(['talk'])
   
   function onTalkClick(talkId) {
      navigateTo('/detail/' + talkId)
   }
</script>

<template>
   <div role="button" tabindex="0" class="talk-item" @click="onTalkClick(talk.id)">
      <div class="talk-item__user-photo">
         <img :src="talk.user.photo" :alt="talk.user.name">
      </div>
      <div class="talk-item__detail">
         <header>
            <div class="talk-item__user-info">
               <p class="talk-item__user-name">
                  {{ talk.user.name }}
               </p>
               <p class="talk-item__user-id">
                  {{ talk.user.id }}
               </p>
            </div>
            <p class="talk-item__created-at">{{ postedAt(talk.createdAt) }}</p>
         </header>
         <article>
            <p class="talk-item__text">
               {{ talk.text }}
            </p>
         </article>
      </div>
   </div>
</template>