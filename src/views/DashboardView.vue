<template>
  <div class="logout">
    <h1>Your calendar</h1>
   
    <v-sheet height="600">
    
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @click:day="showCreateEventDialog"
      ></v-calendar>
    </v-sheet>
<v-dialog v-model="showDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add event</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-select
                  v-model="selectedWaste"
                  :items="wasteType"
                  item-text="text"
                  label="Waste type"
                  return-object
                  single-line
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="saveEvent">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <h2> Your next collection</h2>
    
<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="@/assets/plastic.jpg"
      height="200px"

    ></v-img>

    <v-card-title>
      The Importance of Recycling: Reducing Waste and Protecting the Environment
    </v-card-title>

    <v-card-subtitle>
      Recycling
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Read more
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        Recycling is an important practice that has gained significant attention in recent years. It involves the collection and processing of materials that would otherwise be thrown away as waste, and transforming them into new products. The practice of recycling helps to reduce waste, conserve natural resources, and protect the environment.

One of the primary benefits of recycling is that it helps to conserve natural resources. For instance, the recycling of paper helps to reduce the number of trees that are cut down to make new paper products. Recycling also reduces the need for extracting and processing raw materials such as metal ores, which can have significant environmental impacts.

Another significant benefit of recycling is that it helps to reduce waste. Recycling programs divert significant amounts of waste from landfills, which helps to reduce greenhouse gas emissions and reduce the amount of space needed for landfills. By reducing waste, recycling also helps to conserve valuable space and resources.

Recycling also has a positive impact on the economy. Recycling programs create jobs in the collection, processing, and manufacturing of recycled materials. The recycled materials can also be used to make new products, which can be sold in the market, generating revenue and stimulating economic growth.

Despite the numerous benefits of recycling, many people still do not recycle regularly. This could be due to a lack of knowledge about recycling, a lack of convenient recycling options, or simply a lack of motivation. However, it is important for individuals to recognize the benefits of recycling and to take action by recycling regularly.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
  
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="@/assets/earth.jpg"
      height="200px"

    ></v-img>

    <v-card-title>
    The Earth's Enemy: How Single-Use Plastic Bags are Harming Our Planet    
    </v-card-title>

    <v-card-subtitle>
      Sustainability | Nature
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Read more
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        Plastic bags are ubiquitous in our daily lives. They are cheap, convenient, and readily available. However, the convenience of single-use plastic bags comes at a high cost to the environment. These bags are one of the major sources of pollution on our planet, with devastating consequences for wildlife, ecosystems, and human health.

The production and disposal of plastic bags have significant environmental impacts. Plastic bags are made from non-renewable resources such as petroleum, and the production process requires significant amounts of energy and water. After they are used, plastic bags are often disposed of improperly, and they can take hundreds of years to decompose, if at all. Many plastic bags end up in landfills or littering our natural environment, where they can cause harm for years to come.

One of the most significant impacts of plastic bags on the environment is their effect on wildlife. Plastic bags can be mistaken for food by marine animals and birds, leading to ingestion and entanglement. This can cause serious harm, including suffocation, strangulation, and digestive problems. Plastic bags can also have a negative impact on ecosystems, as they can clog waterways, harm aquatic plants, and alter the natural balance of ecosystems.

In addition to harming wildlife and ecosystems, plastic bags can also have negative impacts on human health. Toxic chemicals from plastic bags can leach into soil and water, potentially contaminating food sources and drinking water. Plastic bags can also contribute to air pollution, as they release harmful greenhouse gases when they are produced and disposed of.

To address the environmental impact of plastic bags, many governments and organizations have implemented policies and programs to reduce their use. Some countries have banned or taxed single-use plastic bags, while others have encouraged the use of reusable bags or implemented recycling programs.

In conclusion, plastic bags are a major source of pollution on our planet

        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


  </div>
</template>



<script>
// import { getAuth, signOut } from "firebase/auth";
import firebase from 'firebase/app';

  export default {
    data: () => ({
    show: false,
    showDialog: false,
      selectedDay: {},
      selectedWaste:{},
      value: '',
      events: [],
      colors: ['blue', 'green', 'yellow', 'brown', 'red', 'orange', ],
      names: ['Glass', 'Recycling', 'Garden Waste', 'Plastic', 'Metal', 'Mixed Waste'],
      wasteType: [
          { text: 'Glass', key: 'glass', color:"blue" },
          { text: 'Recycling', key: 'recycling', color:"green" },
          { text: 'General Waste', key: 'general_waste', color:"red" },
        ],
    }),
    created() {
    const db = firebase.firestore();
    db.collection('events').get().then((querySnapshot) => {
      const events = [];
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        events.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.events = events;
    });
  },
    methods: {
      saveEvent(){
        this.events.push({
            name:  `${this.selectedWaste.text} collection`,
            start: new Date(this.selectedDay.date),
            end: new Date(this.selectedDay.date),
            color: this.selectedWaste.color,
            timed: false,
          })
    this.showDialog=false
      },
      showCreateEventDialog(day){
      this.showDialog = true
        this.selectedDay=day
      },
       
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
//       logout: function (){
//       const auth = getAuth();
//     signOut(auth).then(() => {

//    this.$router.replace('/');
    
//     })
//     .catch((error) => {
//   // An error happened.
//       this.error = error.message;
//       console.error('Logout error:', error);
// });
//     }
    },
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  div {
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 

  }
  h1 {
  font-size: 56px;
  font-family: sans-serif;
  text-align: left;
  margin-bottom: 24px;
  color:#333333
}
h2 {
  font-size: 56px;
  font-family: sans-serif;
  text-align: center;
  margin-bottom: 24px;
  color:#333333;
  margin: 50px;
}
.logout{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
}
</style>
