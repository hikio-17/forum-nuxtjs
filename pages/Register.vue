<template>
   <div>
     <h1>Register Page</h1>
 
     <p>name : </p>
     <input type="text" v-model="id">
     <p>username : </p>
     <input type="text" v-model="name">
     <p>Password : </p>
     <input type="text" v-model="password">
     <br>
     <button @click="onRegister">Submit</button>
   </div>
 </template>
 
 <script>
 import { reactive } from 'vue';
 import { useUserStore } from '../store/users';
 
 export default {
   setup() {
     const userStore = useUserStore();
     const { receiveUsers } = userStore;
 
     const state = reactive({
       id: '',
       name: '',
       password: '',
     });
 
     return {
       id: state.id,
       name: state.name,
       password: state.password,
       receiveUsers,
     };
   },

   methods: {
      onRegister() {
         console.log(this.id);
         this.receiveUsers(this.id, this.name, this.password)
      }
   }
 };
 </script>
 