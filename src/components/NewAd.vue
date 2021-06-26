<template>
    <div class="newAdContainer">
        <h1>Nuevo Anuncio</h1>
        <v-form>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                    <v-text-field label="Título" hint="Es importante, te hará destacar de la competencia" outlined></v-text-field>
                    <v-text-field label="Actividad ((Por definir))" hint="Introduce aquí el tipo de actividad o servicio que ofreces" outlined></v-text-field>
                    <v-text-field label="Ubicación ((Por definir))" hint="Donde ofreces este servicio"  outlined></v-text-field>
                    <v-textarea outlined name="input-7-4" label="Descripción" hint="Describe brevemente la actividad" value=""></v-textarea>
                    <h5>Datos de contacto</h5>
                    <v-text-field label="Teléfono" hint="" prepend-inner-icon="mdi-cellphone" outlined></v-text-field>
                    <v-text-field label="Email" hint="" prepend-inner-icon="mdi-at" outlined></v-text-field>
                    <v-text-field label="Web" hint="" prepend-inner-icon="mdi-web" outlined></v-text-field>
                    <v-text-field label="Dirección Completa" hint="" prepend-inner-icon="mdi-map-marker" outlined></v-text-field>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
//import axios from "axios";
export default {
    name: 'NewAd',
    components: {
    },
    data: function () {
        return {
            
        }
    },
   
    created: function () {
        
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .newAdContainer{
        padding-left: 2%;
        padding-right: 2%;
        text-align: center;
        padding-top: 5%;
        padding-bottom: 5%;
    }
    .buttonLogin{
        color: white;
    }
    .registerElements{
        padding-top: 5%;
    }
</style>
