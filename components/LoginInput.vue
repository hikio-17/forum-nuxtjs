<script setup>
   import { reactive, defineEmits } from 'vue';

   const state = reactive({
      id: '',
      password: ''
   });

   const emit = defineEmits(['on-login'])

   const onLogin = () => {
      emit('on-login', { ...state });
   }
</script>

<template>
   <form class="login-input">
      <input type="text" v-model="state.id" placeholder="Username">
      <input type="password" v-model="state.password" placeholder="Password">
      <button type="button" @click="onLogin">Login</button>
   </form>
</template>