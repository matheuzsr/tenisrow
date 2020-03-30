<template>
  <div>
    <h1>{{infoCart}}</h1>
    <div v-for="ord in orders" :key="ord.id">
      <cardOrder :order-details="ord"></cardOrder>
    </div>
    <div class="vTotal">
      <v-btn color="orange" small dark @click="clearLocalStorage">Clear</v-btn>
      <h2>Total: R${{vTotal.toFixed(2)}}</h2>
    </div>
  </div>
</template>

<script>
import cardOrder from "./components/card";
export default {
  name: "Cart",
  components: {
    cardOrder
  },
  data: () => ({
    vTotal: 0,
    infoCart: "",
    orders: []
  }),
  mounted() {
    this.valorTotal();
  },
  methods: {
    valorTotal() {
      if (!localStorage.getItem("orders")) {
        this.infoCart = "Carrinho vazio!";
      } else {
        this.orders = JSON.parse(localStorage.getItem("orders"));
      }
      this.orders.map(ord => {
        this.vTotal += ord.value * ord.qtd;
      });
    },
    clearLocalStorage() {
      this.infoCart = "Carrinho vazio!";
      this.orders=[];
      this.vTotal= 0;
      localStorage.removeItem("orders");
    }
  }
};
</script>

<style>
.vTotal {
  display: flex;
  justify-content: space-between;
  padding-left: 6vw;
  padding-right: 6vw;
}
</style>