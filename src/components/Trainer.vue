<template>
    <div class="trainerInfoContainer">
        <v-card-title>
            <h1>
                {{trainerInfo.serviceCaption}}
            </h1>
        </v-card-title>    
        <v-card-subtitle>
            <h2>
                <v-icon>mdi-map-marker</v-icon>
                {{trainerInfo.contacto.adressLocation}}
            </h2>
        </v-card-subtitle>
        <v-carousel :show-arrows="false" height=250>
            <v-carousel-item v-for="(item,i) in trainerInfo.images" :key="i" :src="item"></v-carousel-item>
        </v-carousel>
        <h3>
            <ul>
                Servicios: 
                <li v-for="(item, i) in trainerInfo.serviceType" :key="i">{{item}}</li>
            </ul>
        </h3>
        <p>{{trainerInfo.serviceText}}</p>
        <contact-tab :contactData=contactData />
    </div>
</template>

<script>
import axios from "axios";
import contactTab from "./uiComponents/contactTab.vue"
export default {
    name: 'Trainer',
    components: {
        contactTab
    },
    data: function () {
        return {
            trainerInfo: null
        }
    },
    props:{
        contactData: Object
    },
    created: function () {
        var paramUrl = this.$route.params.idTrainer
        axios
        .get(`http://localhost:3030/ads/${paramUrl}`)
        .then((result) => {
            this.trainerInfo = result.data;
            this.contactData = this.trainerInfo.contacto
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul li{
        display:inline;
        list-style: none;
        padding-left: 0.5em;
    }
    .trainerInfoContainer {
        padding: 2%;
        text-align: justify;
    }
</style>
