<script setup>
import { postedAt } from '@/utils';

   const props = defineProps(['talk']);

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
            <button>
               like
            </button>
            <span>{{ talk?.likes.length }} Likes</span>
         </div>
         <p class="talk-detail_-created-at">
            {{ postedAt(talk?.createdAt) }}
         </p>
      </footer>
   </section>
</template>