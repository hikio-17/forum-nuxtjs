<script setup>
   import { onMounted } from 'vue';
   import { storeToRefs } from 'pinia';
   import { useTalkDetail } from '@/store/talkDetail';
   import TalkItem from '@/components/TalkItem.vue';
   import TalkDetail from '@/components/TalkDetail.vue';

   const route = useRoute();
   const talkDetailStore = useTalkDetail();

   const talkId = route.params.id;
   const { talkDetail } = storeToRefs(talkDetailStore);

   onMounted(() => {
      talkDetailStore.getTalkById(talkId);
   })

</script>

<template>
   <section class="detail-page">
      <div class="detail-page__parent" v-if="talkDetail?.parent">
         <h3>Replying To</h3>
         <TalkItem :talk="talkDetail.parent" />
      </div>
      <TalkDetail :talk="talkDetail" />
   </section>
</template>