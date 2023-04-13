<template>
  <v-app>
   
    <v-app-bar
      class="navbar"
      color="light-green darken-2"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      left
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="light-green lighten-3 text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn text @click="atoz">
      A-Z List
    </v-btn>
          </v-list-item>

          <v-list-item>
            <v-btn text @click="logout">
      Log out
    </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
    <router-view />
    <!-- <v-main>
      <HelloWorld/>
    </v-main> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import { getAuth, signOut } from "firebase/auth";

export default {
  name: 'App',

  // components: {
  //   HelloWorld,
  // },
data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods: {
    atoz() {
      this.$router.push('/atoz')
    },
    logout: function (){
      const auth = getAuth();
    signOut(auth).then(() => {

   this.$router.replace('/');
    
    })
      .catch((error) => {
  // An error happened.
      this.error = error.message;
      console.error('Logout error:', error);
})},
   
}}
</script>


<style>
@media (max-width: 1024px) {
.navbar {
  max-width: 800px; /* Set the maximum width as needed */
  height: 24px 
}}
</style>
