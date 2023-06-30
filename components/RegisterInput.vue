<script setup>
   import { reactive, defineEmits } from 'vue';

   const state = reactive({
      id: '',
      name: '',
      password: ''
   });

   const emit = defineEmits(['on-register']);

   const onRegister = () => {
      emit('on-register', { ...state });
   }

</script>

<template>
   <form class="register-input">
      <input type="text" v-model="state.name" placeholder="Name">
      <input type="text" v-model="state.id" placeholder="Username">
      <input type="text" v-model="state.password" placeholder="Password">

      <button type="button" @click="onRegister">Register</button>
   </form>
</template>