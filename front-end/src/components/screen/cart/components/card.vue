<template>
  <div>
    <v-card class="ma-6 pa-10" outlined>
      <div class="boxOrder">
        <p>{{orderDetails.name}} - {{orderDetails.brand}}</p>
        <b>qtd: {{orderDetails.qtd}}</b>
        <b>R$ {{orderDetails.value.toFixed(2)}}</b>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "boxOrder",
   props: {
    orderDetails: Object
  }
};
</script>

<style scoped>
.boxOrder {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

</style>
