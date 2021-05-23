<template>
    <div class="contactTab">
        <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <a v-if=($attrs.contactData.telf)  :href="`tel:${$attrs.contactData.telf}`" class="click2call">
                <v-timeline-item
                    color="green lighten-1"
                    fill-dot
                    right
                >
                    <v-card>
                    <v-card-title class="green lighten-1">
                        <v-icon
                        class="mr-4"
                        dark
                        size="42"
                        >
                        mdi-phone-in-talk
                        </v-icon>
                        <h2 class="display-1 white--text font-weight-light">
                        Teléfono
                        </h2>
                    </v-card-title>
                    <v-container>
                        <v-row>
                        <v-col>
                            {{$attrs.contactData.telf}}
                        </v-col>
                        </v-row>
                    </v-container>
                    </v-card>
                </v-timeline-item>
            </a>
            <v-timeline-item
                color="amber lighten-1"
                fill-dot
                left
                v-if=($attrs.contactData.completeAdress)
            >
                <v-card>
                <v-card-title class="amber lighten-1 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                    Dirección
                    </h2>
                    <v-icon
                    dark
                    size="42"
                    >
                    mdi-home-outline
                    </v-icon>
                </v-card-title>
                <v-container>
                    <v-row>
                    <v-col
                        cols="12"
                        md="8"
                    >
                        Dirección
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        {{$attrs.contactData.completeAdress}}
                    </v-col>
                    </v-row>
                </v-container>
                </v-card>
            </v-timeline-item>
            <a v-if=($attrs.contactData.mail)  :href="`mailto:${$attrs.contactData.mail}`" class="click2call">
                <v-timeline-item
                color="cyan lighten-1"
                fill-dot
                right
            >
                <v-card>
                <v-card-title class="cyan lighten-1">
                    <v-icon
                    class="mr-4"
                    dark
                    size="42"
                    >
                    mdi-email-outline
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">
                    Mail
                    </h2>
                </v-card-title>
                <v-container>
                    <v-row>
                    <v-col>
                        {{$attrs.contactData.mail}}
                    </v-col>
                    </v-row>
                </v-container>
                </v-card>
                </v-timeline-item>
            </a>
            <a v-if=($attrs.contactData.webpage)  :href="`${$attrs.contactData.webpage}`" class="click2call" target="_blank">
                <v-timeline-item
                color="red lighten-1"
                fill-dot
                left
            >
                <v-card>
                <v-card-title class="red lighten-1 justify-end">
                    <h2 class="display-1 mr-4 white--text font-weight-light">
                    Web
                    </h2>
                    <v-icon
                    dark
                    size="42"
                    >
                    mdi-account-multiple-outline
                    </v-icon>
                </v-card-title>
                <v-container>
                    <v-row>
                    <v-col
                        class="hidden-sm-and-down"
                        md="2"
                    >
                        <v-icon size="64">
                        mdi-web
                        </v-icon>
                    </v-col>
                    <v-col
                        cols="12"
                        md="10"
                    >
                        {{$attrs.contactData.webpage}}
                    </v-col>
                    </v-row>
                </v-container>
                </v-card>
                </v-timeline-item>
            </a>
    </v-timeline>
    </div>
</template>

<script>
export default {
    name: 'contact-tab',
    data: function () {
        return {
            
        }
    },
    created: function () {
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contactTab{
        width: 95%
    }
    .click2call {
        text-decoration: none;
    }
</style>
