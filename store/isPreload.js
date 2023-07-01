import { defineStore } from 'pinia';
import api from '@/utils/api';

export const useIsPreload = defineStore('isPreload', {
   state: () => ({
      isPreload: true
   }),

   actions: {
      async preloadProcess() {
         const authUserStore = useAuthUser();
         try {
            const authUser = await api.getOwnProfile();
            authUserStore.setAuthUser(authUser);
         } catch (e) {
            alert(e.message);
         } finally {
            this.isPreload = false;
         }
      }
   }
})