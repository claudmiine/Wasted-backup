<template>
  <div>
    <div class="atozcontent">
    <h1>What to do with…?</h1>
    <h3>Don’t mix the waste again! Use our handy A-Z guide to help you recycle like a master! </h3>
    <img alt="Recycling photo" class="login_pic" src="@/assets/confetti 1.png" width="151" height="151" />
    </div>
    <v-card class="mx-auto" width="auto">
      <v-list>

        <ProductView title="Aluminium cans" tip="Tip: Wash and squash to prevent smells and protect wildlife."
          bin="Bin? Green bin" />
        <ProductView title="Bags" tip="Tip: always keep a shopping or carrier bag with you so you don’t accept more"
          bin=" Bin? black bin for plastic bags. Green bin for paper bags " />
        <ProductView title="Cardboard"
          tip="Tip: can be used as animal bedding, ripped up and added to compost heap, and sheets can be used as mulch to supress weeds."
          bin=" Bin? green bin. Large corrugated cardboard should flattened and taken to recycling centre" />
        <ProductView title="Duvets"
          tip="Tip: donate unwanted good quality bedding to local charities. If in poor condition can be donated to the RSPCA or to the Dogs Trust for animal bedding."
          bin=" Bin? Recycling centre" />
        <ProductView title="Food waste"
          tip="Tip: reduce food waste by planning meals, making smaller portions and freezing leftovers. Some food waste, such as fruit skins, cannot be put into brown bin, as they contain pesticides which would contaminate the collection."
          bin="Bin? black bin" />




      </v-list>
    </v-card>
  </div>
</template>

<script>

import ProductView from '@/components/ProductView.vue';

export default {
  components: {
    ProductView,
  },
  data: () => ({
  }),
}
</script>

<style>

.atozcontent{
display: flex;
flex-direction: column;
align-items: center;
margin: 10vh;

}

@media (max-width: 1024px) {
  h2 h3 {
    font-size: 56px;
    font-family: sans-serif;
    text-align: left;
    color: #333333;

  }

  h1 {
    font-size: 48px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    margin: 10px;
    color: #333333;
  }

  h3 {
    margin: 10px;
  }

  p {
    font-size: large;
    color: #333333;
  }

  .login_pic {
    display: block;
    margin: 0 auto;
  }

  v-list-item-title {
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
  .atozcontent{
display: flex;
align-items: left;
margin: 0vh;

}
}
</style>