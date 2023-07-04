<script>
   import { storeToRefs } from 'pinia';
   import { useAuthUser } from '@/store/authUser';
   import Navigation from '@/components/Navigation.vue';

   export default {
      setup() {
         const authUserStore = useAuthUser();
         const { authUser } = storeToRefs(authUserStore);

         return {
            authUser
         }
      }
   }
</script>

<template>
   <div class="app-container">
      <header>
         <Navigation :authUser="authUser"/>
      </header>

      <main>
         <slot />
      </main>
   </div>
</template>