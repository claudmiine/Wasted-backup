<template>
  <div>
    <h1>What to do with…?</h1>
    <h3>Don’t mix the waste again! Use our handy A-Z guide to help you recycle like a master! </h3>

    <v-card class="mx-auto" width="auto">
      <v-list>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Aerosols </v-list-item-title>
            </v-list-item-content>
          </template>


          <p>Tip: Use pump sprays instead. </p>
          <p> Bin? Green bin</p>
          <img alt="Recycling photo" class="recycling" src="@/assets/plastic (1).png" width="35" height="35" />
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Aluminium cans </v-list-item-title>
            </v-list-item-content>
          </template>


          <p>Tip: Wash and squash to prevent smells and protect wildlife. </p>
          <p> Bin? Green bin</p>
          <img alt="Recycling photo" class="recycling" src="@/assets/plastic (1).png" width="35" height="35" />
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>

        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Aluminium foil </v-list-item-title>
            </v-list-item-content>
          </template>


          <p>Tip: Foil containers are reusable (freezing leftovers, seed trays) </p>
          <p> Bin? Green bin</p>
          <img alt="Recycling photo" class="recycling" src="@/assets/plastic (1).png" width="35" height="35" />
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>

        </v-list-group>

      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
}
</script>
<style>
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

  v-list-item-title {
    color: #333333;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
}
</style>