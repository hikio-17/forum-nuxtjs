<template>
   <h1>Login Page</h1>

   <input type="text" v-model="id">
   <input type="text" v-model="password">
</template>

<script>
   export default {
      data() {
         return {
            id: '',
            password: ''
         }
      }
   }
</script>