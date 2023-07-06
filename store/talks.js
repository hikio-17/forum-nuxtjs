import { defineStore } from 'pinia';
import api from '@/utils/api';
import { useAuthUser } from '@/store/authUser';

export const useTalksStore = defineStore('talks', {
   state: () => ({
      talks: [],
   }),

   actions: {
      async receiveTalks() {
         try {
            this.talks = await api.getAllTalks();
         } catch (e) {
            alert(e.message)
         }
      },

      async addTalk({ text, replyTo = '' }) {
         try {
            const talk = await api.createTalk({ text, replyTo });

            this.talks = [talk, ...this.talks]
         } catch (e) {
            alert(e.message)
         }
      },

      toggleLikeTalkState({ talkId, userId}) {
         this.talks = this.talks.map((talk) => {
            if (talk.id === talkId) {
               return {
                  ...talk,
                  likes: talk.likes.includes(userId) ? talk.likes.filter((id) => id !== userId) : talk.likes.concat(userId)
               }
            }
            return talk
         })
      },

      async toggleLikeTalk(talkId) {
         const authUserStore = useAuthUser();
         const { id: userId } = authUserStore.authUser;
         this.toggleLikeTalkState({ talkId, userId });
         try {
            await api.toggleLikeTalk(talkId);
         } catch (e) {
            alert(e.message);
            this.toggleLikeTalkState({ talkId, userId });
         }
      }
   }
})