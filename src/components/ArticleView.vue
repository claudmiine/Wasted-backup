<template>
  <v-card class="mx-auto" max-width="344">
    <!-- <v-img :src="`../assets/${imgName}`" height="200px"></v-img> -->
    <img :src="require(`@/assets/${imgName}`)" width="200px" height="200px">
    <v-card-title>
      {{title }}
    </v-card-title>

    <v-card-subtitle>
       {{ category }}
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
          Recycling is an important practice that has gained significant attention in recent years. It involves the
          collection and processing of materials that would otherwise be thrown away as waste, and transforming them
          into new products. The practice of recycling helps to reduce waste, conserve natural resources, and protect
          the environment.

          One of the primary benefits of recycling is that it helps to conserve natural resources. For instance, the
          recycling of paper helps to reduce the number of trees that are cut down to make new paper products. Recycling
          also reduces the need for extracting and processing raw materials such as metal ores, which can have
          significant environmental impacts.

          Another significant benefit of recycling is that it helps to reduce waste. Recycling programs divert
          significant amounts of waste from landfills, which helps to reduce greenhouse gas emissions and reduce the
          amount of space needed for landfills. By reducing waste, recycling also helps to conserve valuable space and
          resources.

          Recycling also has a positive impact on the economy. Recycling programs create jobs in the collection,
          processing, and manufacturing of recycled materials. The recycled materials can also be used to make new
          products, which can be sold in the market, generating revenue and stimulating economic growth.

          Despite the numerous benefits of recycling, many people still do not recycle regularly. This could be due to a
          lack of knowledge about recycling, a lack of convenient recycling options, or simply a lack of motivation.
          However, it is important for individuals to recognize the benefits of recycling and to take action by
          recycling regularly.
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

    }
  }

}



</script>
