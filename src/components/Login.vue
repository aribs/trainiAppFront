<template>
    <div class="loginContainer">
        <h1>Bienvenido a Traini</h1>
        <h4>Escribe tus datos abajo</h4>
        <v-form>
            <v-row>
                <v-col cols="12" sm="6" md="3">
                     <v-text-field label="Email" outlined></v-text-field>
                     <v-text-field label="Contraseña" outlined type="password"></v-text-field>
                     <v-btn large class="ma-2 buttonLogin" :loading="loading" :disabled="loading" color="orange" @click="login">Iniciar Sesión</v-btn>
                </v-col>
            </v-row>
        </v-form>
        <h4 class="registerElements">Si todavía no tienes cuenta, puedes registrarte</h4>
        <v-btn large class="ma-2 buttonLogin" :loading="loading" :disabled="loading" color="green" @click="login">Regístrate</v-btn>
    </div>
</template>

<script>
//import axios from "axios";
export default {
    name: 'Login',
    components: {
    },
    data: function () {
        return {
            
        }
    },
   
    created: function () {
        
    },
    methods:{
        login: function (){
            alert("init login")
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .loginContainer{
        padding-left: 2%;
        padding-right: 2%;
        text-align: center;
        padding-top: 20%;
        padding-bottom: 20%;
    }
    .buttonLogin{
        color: white;
    }
    .registerElements{
        padding-top: 5%;
    }
</style>
