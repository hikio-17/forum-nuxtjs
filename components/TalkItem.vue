<script setup>
import { toRef, defineEmits, computed } from 'vue';
   import { postedAt } from '@/utils';

   const props = defineProps(['talk', 'authUser']);
   const emit = defineEmits(['on-like']);

   const talk = toRef(props, 'talk');
   const authUser = toRef(props, 'authUser');

   const isTalkLiked = computed(() => talk.value.likes.includes(authUser.value));

   function onTalkClick(talkId) {
      navigateTo('/detail/' + talkId)
   }

   function onLike(talkId) {
      emit('on-like', talkId);
   }

</script>

<template>
   <div role="button" tabindex="0" class="talk-item">
      <div class="talk-item__user-photo">
         <img :src="talk.user?.photo" :alt="talk.user.name">
      </div>

      <div class="talk-item__detail">
         <header>
            <div class="talk-item__user-info">
               <p class="talk-item__user-name" @click="onTalkClick(talk.id)">
                  {{ talk.user.name }}
               </p>
               <p class="talk-item__user-id">
                  @{{ talk.user.id }}
               </p>
            </div>
            <p class="talk-item__created-at">{{ postedAt(talk.createdAt) }}</p>
         </header>
         <article>
            <p class="talk-item__text">
               {{ talk.text }}
            </p>
         </article>
         <div class="talk-item__likes">
            <p>
               <button
                  type="button"
                  aria-label="like"
                  @click="onLike(talk.id)"
               >
               <font-awesome-icon v-if="isTalkLiked" icon="fa-solid fa-heart" style="color: red;"/>
               <font-awesome-icon v-else icon="fa-regular fa-heart"/>
               </button>
               {{ talk.likes.length }}
            </p>
         </div>
      </div>
   </div>
</template>