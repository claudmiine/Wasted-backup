<template>
  <div class="register">
      <img alt="Recycling photo" class="login_pic" src="@/assets/login_pic.png" width="216.78" height="162.86" />

    <h1>Sign up</h1>
    
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
         <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
          
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
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

    <v-btn 
  elevation="2"
  color="light-green darken-2"
  rounded
  dark
  @click="register">
Sign up! </v-btn>
  <div v-if="registrationSuccess">
  <br>
  <p>{{ registrationMessage }}</p>
  </div>
    <span> Go back to <router-link to="/login">login.</router-link></span>

        </v-col>
        </v-row>
        </v-container>
        </v-form>

  
 </div>
</template>

<script>

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default{
name: 'RegisterView',
data() {
return {
  email: '',
  registrationSuccess: false,
  registrationMessage: '',
    // password:"",
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
register(){

const auth = getAuth();
createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    // const user = userCredential.user;
    this.registrationSuccess = true;
    this.registrationMessage = "You have successfully registered! Go back to login";
    console.log('Successfully registered!!!!!!!!!!!!:', userCredential.user);
  })
      .catch((error) => {
        // Error occurred during registration
        this.error = error.message;
        console.error('Registration error:', error);
  });

      }
    }
    
}
</script>

<style scoped>
.register {
margin-top: 40px;
}
input{
margin: 10px 0;
padding: 15px;
}
button {
margin-top: 10px;
cursor: pointer;
}
span{
display: block;
margin-top: 20px;
font-size: 14px;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
}
img{
align-items: center;
}
p{
color:darkgreen
}
.login_pic {
  display: block;
  margin: 0 auto;
}
</style>