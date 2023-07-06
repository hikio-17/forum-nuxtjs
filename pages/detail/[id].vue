<script setup>
   import { onMounted, computed } from 'vue';
   import { storeToRefs } from 'pinia';
   import { useTalkDetail } from '@/store/talkDetail';
   import { useAuthUser } from '@/store/authUser';
   import { useTalksStore} from '@/store/talks';

   import TalkItem from '@/components/TalkItem.vue';
   import TalkDetail from '@/components/TalkDetail.vue';
   import TalkReplyInput from '@/components/TalkReplyInput.vue';
   

   const route = useRoute();
   const talkDetailStore = useTalkDetail();
   const authUserStore = useAuthUser();
   const talksStore = useTalksStore();

   const { talkDetail } = storeToRefs(talkDetailStore);
   const { authUser } = storeToRefs(authUserStore);

   const talkId = route.params.id;

   onMounted(() => {
      talkDetailStore.getTalkById(talkId);
   });

   function onLike(id) {
    talksStore.toggleLikeTalk(id);
   }

   function onReplyTalk(text) {
      talksStore.addTalk({ text, replyTo: talkId });
   }

</script>

<template>
   <section class="detail-page">
      <div class="detail-page__parent" v-if="talkDetail?.parent">
         <h3>Replying To</h3>
         <TalkItem 
            :talk="talkDetail?.parent"
            :authUser="authUser?.id"
            @on-like="onLike"
         />
      </div>
      <TalkDetail 
         :talk="talkDetail"
         :authUser="authUser?.id"
         @on-like="onLike"
      />
      <TalkReplyInput @reply-talk="onReplyTalk"/>
   </section>
</template>