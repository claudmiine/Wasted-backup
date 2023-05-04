<template>
  <div class="logout">
    <h1>Your calendar</h1>

    <v-sheet height="600">

      <v-calendar ref="calendar" v-model="value" :events="events" :event-overlap-threshold="30"
        :event-color="getEventColor" @click:day="showCreateEventDialog"></v-calendar>
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
                <v-select v-model="selectedWaste" :items="wasteType" item-text="text" label="Waste type" return-object
                  single-line></v-select>
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


    <h1> Your next collection</h1>


    <v-alert v-if="nextCollection" shaped dark color="info" style="margin:0 20px;">
      Your next {{ nextCollection.name }} collection is on {{ formattedDate }}
    </v-alert>
    <v-alert v-else shaped dark color="#5CA44B" style="margin: 20px;"> You don’t any have collections soon </v-alert>

<div class="contentArticles">
      <div class="cardArticle" v-for="article in articles" :key="article.id">
      <ArticleView :img-name="article.img_name" :category="article.category"
        :title="article.title" :text="article.content">
      </ArticleView>

      <br>
    </div>

    </div>
  </div>
</template>



<script>

import ArticleView from '@/components/ArticleView.vue';

export default {
  components: {
    ArticleView,
  },
  data: () => ({
    articles:[],
    response: {},
    show: false,
    showDialog: false,
    selectedDay: {},
    selectedWaste: {},
    value: '',
    events: [],
    colors: ['blue', 'green', 'yellow', 'brown', 'red', 'orange',],
    names: ['Glass', 'Recycling', 'Garden Waste', 'Plastic', 'Metal', 'Mixed Waste'],
    wasteType: [
      { text: 'Glass', key: 'glass', color: "blue" },
      { text: 'Recycling', key: 'recycling', color: "green" },
      { text: 'General Waste', key: 'general_waste', color: "red" },
    ],
  }),

  methods: {
    saveEvent() {
      this.events.push({
        name: this.selectedWaste.text,
        start: new Date(this.selectedDay.date),
        end: new Date(this.selectedDay.date),
        color: this.selectedWaste.color,
        timed: false,
      })
      this.showDialog = false
      this.created()
    },
    showCreateEventDialog(day) {
      this.showDialog = true
      this.selectedDay = day
    },

    getEventColor(event) {
      return event.color
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },


  created() {
    // GET request using fetch with error handling
    fetch("http://127.0.0.1:8000/api/")
      .then(async response => {
        const data = await response.json();
        console.log(data)
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.articles = data;
        console.log(data)
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },

  computed: {


    nextCollection() {

      // Assume your array is called "myArray"
      const currentDate = new Date();

      // Filter the array to get only objects with start dates in the future
      const futureObjects = this.events.filter((obj) => obj.start > currentDate);

      // Sort the filtered array by start dates in ascending order
      futureObjects.sort((a, b) => a.start - b.start);

      // If there are no future objects, return null
      if (futureObjects.length === 0) {
        return null;
      }

      // Otherwise, return the object with the soonest start date
      return futureObjects[0];
    },
    formattedDate() {
      if (!this.nextCollection) return null
      const date = new Date(this.nextCollection.start);
      return date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }
  }
}
</script>

<style>
.contentArticles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.cardArticle{
  margin: 50px;
}
@media (max-width: 1024px) {


  h1 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    margin: 10px;
    color: #333333
  }

  h2 {

    font-family: Arial, Helvetica, sans-serif;
    /* text-align: center; */
    margin-bottom: 24px;
    color: #333333;
    margin-top: 50px;
  }

  v-card {
    margin-top: 20px;
  }

  .contentArticles {
    display: flex;
    flex-direction: column;
  }
}
</style>
