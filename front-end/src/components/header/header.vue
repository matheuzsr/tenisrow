<template>
  <div >
    <v-app-bar  app large color="indigo"  dark>
      <v-toolbar-title  @click="toHome" style="cursor: pointer;">
        <v-icon>mdi-shoe-print</v-icon>
        Tenisrow
        </v-toolbar-title> 

      <v-btn to="/login" class="ma-2" small outlined color="pink accent-2">
      Add Tênis 
      </v-btn>

      <v-btn to="/cart" dark color="indigo"  bottom large right fab position: absolute class="btnCart" >
        <v-icon large>mdi-cart</v-icon>
      </v-btn>


    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods:{
    toHome(){
      this.$router.push("/home");
    }
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style scoped>

</style>