<script setup>
   import { useRouter } from 'vue-router';
   import RegisterInput from '@/components/RegisterInput.vue'

   const userStore = useUserStore();
   const { receiveUsers } = userStore;

   const router = useRouter();

   const handleRegister = ({id, name, password}) => {
      receiveUsers({ id, name, password });
      router.push('/login');
   }

</script>

<template>
   <section class="register-page">
      <header class="register-page__hero">
         <h1>Icon</h1>
      </header>
      <article class="register-page__main">
         <h2>Create your account</h2>
         <RegisterInput @on-register="handleRegister"/>
         <p>
            Already have an account?
            <NuxtLink to="/login">Login</NuxtLink>
         </p>
      </article>
   </section>
 </template>
 