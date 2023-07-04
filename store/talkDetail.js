import { defineStore } from 'pinia';

export const useTalkDetail = defineStore('talkDetail', {
   state: () => ({
      talkDetail: null,
   }),

   actions: {
      async getTalkById(talkId) {
         try {
            this.talkDetail = null;
            const talk = await api.getTalkById(talkId);
            this.talkDetail = talk;
         } catch (e) {
            alert(e.message);
         }
      }
   }
})