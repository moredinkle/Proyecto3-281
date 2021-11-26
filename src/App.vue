<template>
  <v-app >
    <BarraPrincipal />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import BarraPrincipal from './components/BarraPrincipal.vue';
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
        BarraPrincipal
    },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&family=Karla&family=VT323&display=swap');
#app {
  font-family: 'Karla', sans-serif;
  text-align: center;
  background-color: var(--v-background-base);
}
</style>
