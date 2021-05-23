<template>
    <div>
        <v-card class="mx-auto my-12" max-width="374" elevation="2">
            <v-img height="250" v-bind:src="adInfo.images[0]"></v-img>
            <v-card-title>
                {{adInfo.serviceCaption}}
            </v-card-title>
             <v-card-subtitle>
                 <v-icon>mdi-map-marker</v-icon>
                 {{adInfo.contacto.adressLocation}}
            </v-card-subtitle>
            <v-card-actions class="text-end">
                <link-button :uri="urlAd" color="orange" text="Ver Anuncio"/>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </div>

</template>
<script>
import linkButton from'./linkButton.vue'
export default {
    name: "productCard",
    components: {
        linkButton
    },
    data: function () {
        return {
            adInfo: this.$attrs.ad
        }
    },
    props: {
        urlAd: String
    },
    created: function () {
        this.urlAd = this.getAdUrl();
    },
    methods: {
        getAdUrl: function () {
            return `/entrenador/${this.adInfo.id}`
        }
    }
}
</script>

<style>
    .btnVerAnuncio {
        float:right;
    }
    .v-card__actions{
        display: block !important;
    }
</style>