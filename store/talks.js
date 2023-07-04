import { defineStore } from 'pinia';
import api from '@/utils/api'

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
      }
   }
})