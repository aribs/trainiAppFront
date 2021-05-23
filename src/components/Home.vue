<template>
    <div class="homeContainer">
        <ul>
            <li v-for="ad in listdAds.data" v-bind:key="ad.id">
                <product-card :ad="ad"/>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import productCard from "./uiComponents/productCard.vue";
export default {
    name: 'Home',
    components: {
        productCard
        },
    data: function () {
        this.listdAds = []
        return {
        }
    },
    props: {
        listdAds: Object
    },
    created: function () {
        axios
        .get("http://localhost:3030/ads")
        .then((result) => {
            this.listdAds = result
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
