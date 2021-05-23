<template>
    <div>
        <a class="linkButton" v-bind:class="color" :href="uri" >{{$attrs.text}}</a>
    </div>
</template>
<script>
export default {
    name: "link-button",
    data: function () {
        return {
            color: this.setColor(),
            uri: this.$attrs.uri
        }
    },
    methods: {
        setColor: function (){
            var color_obj =  {
                "orange":   "orange_text",
                "grey":     "grey_text"
            }
            if(color_obj[this.$attrs.color]){
                return color_obj[this.$attrs.color]
            }
            else{
                return color_obj["grey"];
            }
        }
    }
}
</script>

<style>
    .linkButton {
        font-size: 1.2rem;
        text-decoration: none;
        display: inline !important;
        padding-right: 1.2rem !important;
        text-transform: uppercase;
        white-space: nowrap;
        font-weight: 500;
    }
    .orange_text {
        color: #ffb74d !important;
    }
    .grey_text {
        color: rgba(168, 161, 161, 0.308)!important;
    }
</style>