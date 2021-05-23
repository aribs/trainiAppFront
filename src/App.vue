
<template>
  <v-app :theme="light">  
  <div class="containerApp">
    <menuBar></menuBar>
    <router-view></router-view>
  </div>
 </v-app>
</template>

<script>
import menuBar from "./components/uiComponents/menuBar"
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    menuBar
  }
};
</script>

