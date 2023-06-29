import { defineStore } from 'pinia';
import api from '@/utils/api';

export const useAuthUser = defineStore('authUser', {
   state: () => ({
      authUser: null,
   }),
   actions: {
      async setAuthUser(id, password) {
         try {
            const token = await api.login(id, password);
            // Set token to local storage
            api.putAccessToken(token);

            const user = await api.getOwnProfile();
            this.authUser = user;
         } catch (e) {
            alert(e.message);
         }
      },

      unsetAuthUser() {
         this.authUser = null;
         api.putAccessToken('');
      }
   }
})