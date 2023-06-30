import { defineStore } from 'pinia';
import api from '../utils/api';

export const useUserStore = defineStore('users', {
   state: () => ({
      users: [],
   }),
   actions: {
      async receiveUsers({ id, name, password }) {
         try {
            await api.register({ id, name, password });
         } catch (e) {
            alert(e.message);
         }
      }
   }
})