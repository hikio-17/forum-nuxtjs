<script setup>
import { toRef, defineEmits, computed } from 'vue';
   import { postedAt } from '@/utils';

   const props = defineProps(['talk', 'authUser']);
   const emit = defineEmits(['on-like']);

   const talk = toRef(props, 'talk');
   const authUser = toRef(props, 'authUser');


   const isTalkLiked = computed(() => talk.value?.likes.includes(authUser.value));

   function onLike(talkId) {
      emit('on-like', talkId);
   }
</script>

<template>
   <section class="talk-detail">
      <header>
         <img :src="talk?.user.photo" alt="">
         <div class="talk-detial__user-info">
            <p class="talk-detail__user-name">
               {{ talk?.user.name }}
            </p>
            <p class="talk-detail__user-id">
               @{{ talk?.user.id }}
            </p>
         </div>
      </header>
      <article>
         <p class="talk-detail__text">{{ talk?.text }}</p>
      </article>
      <footer>
         <div class="talk-detail__like">
            <button
                  type="button"
                  aria-label="like"
                  @click="onLike(talk.id)"
               >
               <font-awesome-icon v-if="isTalkLiked" icon="fa-solid fa-heart" style="color: red;"/>
               <font-awesome-icon v-else icon="fa-regular fa-heart" />
               </button>
            <span>{{ talk?.likes.length }} Likes</span>
         </div>
         <p class="talk-detail_-created-at">
            {{ postedAt(talk?.createdAt) }}
         </p>
      </footer>
   </section>
</template>