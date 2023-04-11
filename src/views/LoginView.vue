<template>
  <div class="login">
    <h1>Sign in</h1>
    
     <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
           <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        </v-row>
           </v-container>
        </v-form>
          
       <v-form>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : ''"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

            <v-btn 
        depressed
        elevation="2"
        rounded
        text
        @click="login">
        Login </v-btn>
  
        <p> Don't have an account? You can <router-link to="/register">create one.</router-link></p>

        </v-col>
        </v-row>
        </v-container>
        </v-form>

  </div>
</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
name: 'LoginView',
data() {
    return{
    email:'',
    // password:'',
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: '',
    rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        }
    };
},
    methods: {
    login: function(){
    const auth = getAuth();
signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
     console.log('Successfully logged in:', userCredential.user);
     this.$router.replace('dashboard')
  })
  .catch((error) => {
        // Error occurred during registration
        this.error = error.message;
        console.error('Login error:', error);
  });
    }
}

}



</script>



<style>
@media (max-width: 1024px) {
  /* .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
  .login{
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }

}
</style>
