<template>
  <main>
  <div class="container">
   
    <h1>Wasted</h1>
    <h2> Join us and let’s change the world together!</h2>
      <p>Wasted helps you to make your waste management easier.</p>
    <img alt="Recycling photo" class="recycling" src="@/assets/recycling.png" width="300" height="300" />
    
  
    <v-btn
      rounded
      outlined
      color="light-green darken-2"
      dark
      @click="tologin"
    >Login</v-btn>
    
    <v-btn
      rounded
      color="light-green darken-2"
      dark
      @click="toregister"
    >Sign up</v-btn>

      <h2> Personal experience just for you</h2>
      <p>Create personalised calendar for your collection day and more!</p>
      <br>
       <img alt="Calendar photo" class="calendar" src="@/assets/Calendar.png" width="300" height="250" />

      <h2>Accessible knowledge at your’s fingertips</h2>
      <p>Our information and resources are readily available to you.</p>
      <br>
       <img alt="Phone photo" class="phone" src="@/assets/Phone.png" width="300" height="300" />
  
  </div>
  </main>
</template>

<script>

export default {
  methods: {
    tologin() {
      this.$router.push('/login')
    },
    toregister(){
    this.$router.push('/register')
    }
  }
}
</script>  

<style>
@media (max-width: 1024px){
/* .container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
} */
h4 {
font-size: 20px;
margin-left: 10px;
font-family: Arial, Helvetica, sans-serif;
}
h1 {
  font-size: 56px;
  font-family: Helvetica;
  text-align: left;
  /* margin-bottom: 24px; */
  color:#333333
}
h2 {
margin-left: 10px;
/* margin-bottom: 0px; */
 }

p h2 h3 h4 {
font-family: Arial, Helvetica, sans-serif;
 color: #333333;

}
img {
  margin-top: 24px;

}
p{
font-weight: 400;
margin-left: 10px;
margin-top: 0px
}
/* v-btn button{
margin-right: 10px;
} */
}

  </style>