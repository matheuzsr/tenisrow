<template>
  <v-app id="app">
      <Header/>
      <router-view class="body"/>
  </v-app>
</template>

<script>
import Header from './components/header/header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style >
.body{
  margin-top: 9vh;
}
</style>