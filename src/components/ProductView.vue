<template>
    <v-list-group no-action sub-group>
        <template v-slot:activator>
            <v-list-item-content>
                <v-list-item-title>Aerosols </v-list-item-title>
            </v-list-item-content>
        </template>


        <p> Tip </p>
        <p> Bin? Green bin</p>
        <v-list-item-title v-text="title"></v-list-item-title>

        <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
        </v-list-item-icon>
    </v-list-group>
</template>

<script>

export default {
    name: 'ProductView',
    data() {

        return {
            show: false,

        };
    },
    props: {
        imgSrc: {
            type: String,
            required: true,
        }
    }

}



</script>
