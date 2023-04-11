<template>
  <div class="logout">
    <h1>This is a Landing page!!</h1>
    <v-btn
    class="logoutBtn"
  elevation="2"
  rounded
  small
  @click="logout"
>Log out</v-btn>


  </div>
</template>


<script>
import { getAuth, signOut } from "firebase/auth";


export default {
name: 'DashboardView',
data() {
    return{
  
    };
},
    methods: {
    logout: function (){
      const auth = getAuth();
    signOut(auth).then(() => {

   this.$router.replace('/');
    
    })
    .catch((error) => {
  // An error happened.
      this.error = error.message;
      console.error('Logout error:', error);
});
    }
    
    }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
