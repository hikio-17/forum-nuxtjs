<script setup>
   import { useRouter } from 'vue-router';
   import LoginInput from '@/components/LoginInput.vue'

   const authUserStore = useAuthUser();
   const { setAuthUser } = authUserStore;

   const router = useRouter();

   const handleLogin = ({ id, password }) => {
      setAuthUser({id, password});
      router.push('/');
   }

</script>

<template>
   <section class="login-page">
      <header class="login-page__hero">
         <h1>Icon</h1>
      </header>
      <article class="login-page__main">
         <h2>
            See<strong>The World</strong>,
            <br />
            Through Open Space.
         </h2>

         <LoginInput @on-login="handleLogin"/>
         <p>
            Don&apos;t have an account?
            <NuxtLink to="/register">Register</NuxtLink>
         </p>

      </article>
   </section>
</template>