<template>
  <v-card class="mx-auto" max-width="344">
    <!-- <v-img :src="`../assets/${imgName}`" height="200px"></v-img> -->
    <img :src="require(`@/assets/${imgName}`)" height="344px" width="344px">
    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ articleCategories[category] }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="light-green darken-3" text>
        Read more
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
  name: 'ArticleView',
  data() {

    return {
      show: false,
      articleCategories: {
        '1':'Eco',
        '2':'Sustainability',
      }
    };
  },
  props: {
    imgName: {
      type: String,
      required: true,

    },
    category: {
      type: String,
      required: true,

    },
    title: {
      type: String,
      required: true,

    },
    text: {
      type: String,
      required: true,
    }
  },
  methods: {
    //getArticleCategory(id) {
    //   return 
    // }

  }

}



</script>
