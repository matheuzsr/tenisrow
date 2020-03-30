<template>
  <v-container fluid>
    <v-snackbar v-model="alert" :timeout="1200" top right elevation="2">
      Produto adicionado no carrinho!
      <v-btn color="indigo" text @click="alert = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-row>
      <v-col cols="12">
        <v-row class="grey lighten-5" style="height: 300px;  
          align-items: center;">
          <div v-for="prod in productsList" :key="prod.id">
            <cardProduct :product-details="prod" @my-event="showAlert"></cardProduct>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import api from "../../../../services/api";
import cardProduct from "./components/card";

export default {
  name: "Home",
  components: {
    cardProduct
  },
  data: () => ({
    productsList: [],
    alert: false
  }),

  async mounted() {
    const response = await api.get("products");
    this.productsList = response.data;
  },
  methods: {
    showAlert(payload) {
      this.alert = payload.myAlert;
      console.log(payload.myAlert);
    }
  }
};
</script>

<style>
.productItem {
  display: flex;
}
</style>
