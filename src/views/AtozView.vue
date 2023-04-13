<template>
  <v-card
    class="mx-auto"
    width="auto"
  >
    <v-list>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Aerosols </v-list-item-title>
            </v-list-item-content>
          </template>

          <!-- <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
          > -->
          <p>Tip: use pump sprays instead  </p>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          <!-- </v-list-item> -->
      </v-list-group>
      
      <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Glass jar</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([img, title], i) in cruds"
            :key="i"
            link
          >
           <v-list-item-icon>
             <img :src="img" height="20px" width="20px">
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>
<p>hejk</p>
           
          </v-list-item>
      </v-list-group>
      
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cruds: [
        ["./assets/plastic (1).png",'Bin' ],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }
</script>