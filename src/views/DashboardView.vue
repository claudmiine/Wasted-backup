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

<v-sheet
      tile
      height="54"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
      ></v-calendar>
    </v-sheet>

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

  </div>
</template>



<script>
import { getAuth, signOut } from "firebase/auth";

  export default {
    data: () => ({
    show: false,
      type: 'month',
      types: ['month', 'week', 'day', '4day'],
      mode: 'stack',
      modes: ['stack', 'column'],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
      ],
      value: '',
      events: [],
      colors: ['blue', 'green', 'yellow', 'brown', 'red', 'orange', ],
      names: ['Glass', 'Recycling', 'Garden Waste', 'Plastic', 'Metal', 'Mixed Waste'],
    }),
    methods: {
      getEvents ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
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
});
    }
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
}
</style>
