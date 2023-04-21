<template>
    <v-list-group no-action sub-group>
        <template v-slot:activator>
            <v-list-item-content>
                <v-list-item-title>{{title}} </v-list-item-title>
            </v-list-item-content>
        </template>


        <p> {{tip}} </p>
        <p> {{bin}}</p>
        

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
        tip: {
            type: String,
            required: true,
        },
        bin: {
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
