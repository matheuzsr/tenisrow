<template>
  <v-card class="ma-3 pa-6" width="313" height="300" outlined>
    <div class="boxProduct">
      <v-list-item three-line>
       <div class="image-preview" v-if="productDetails.uriPhoto.length > 0">
      <img class="preview" :src="productDetails.uriPhoto" />
    </div>
      </v-list-item>
      <p>{{productDetails.name+"-"+productDetails.brand}}</p>
    </div>
    <v-card-actions>
      <h4>R${{productDetails.value}}</h4>

      <v-btn color="success" small dark @click="buy">Comprar</v-btn>
      <v-btn color="success" small dark @click="addBuy">Add cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>


export default {
  name: "boxProduct",
  mounted(){
    //console.log(prop.productDetails.uriPhoto)
  },
  data: () => ({
    myAlert: false,
    orders: [],
    order: {
      id: "",
      qtd: 1,
      name: "",
      brand: "",
      value: 0
    }
  }),
  methods: {
    addBuy() {
      this.$emit('my-event', { myAlert: true}),
      this.order.id = this.productDetails.id;
      this.order.value = this.productDetails.value;
      this.order.name = this.productDetails.name;
      this.order.brand = this.productDetails.brand;

      if (!localStorage.getItem("orders")) {
        this.orders.push(this.order);
        localStorage.setItem("orders", JSON.stringify(this.orders));
      } else {
        this.orders = JSON.parse(localStorage.getItem("orders"));

        this.orders.map(ord => {
          if (ord.id == this.order.id) {
            ord.qtd += 1;
            this.order.id = -1;
          }
        });
        if (this.order.id != -1) {
          this.orders.push(this.order);
        }
        localStorage.setItem("orders", JSON.stringify(this.orders));
      }
    },
    buy() {
      this.addBuy();
      this.$router.push("/cart");
    }
  },
  props: {
    productDetails: Object
  }
};
</script>

<style scoped>
.boxProduct {
  margin-top: -1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img.preview {
  width: 160px;
  height: 160px;  
}
</style>

