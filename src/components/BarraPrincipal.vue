<template>
  <div class="BarraPrincipal">
    <v-app-bar
      color="black"
      dark
      elevate-on-scroll
      :app="true"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        class="shrink mx-3"
        max-height="40"
        max-width="40"
        contain
        src="@/assets/logo-barra.png"
      >
      </v-img>
      <v-toolbar-title class="TituloP" v-if="$vuetify.breakpoint.xsOnly">EL LUSTRA KOMBAT</v-toolbar-title>
      <v-toolbar-title class="Titulo" v-else>EL LUSTRA KOMBAT</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="black" temporary ref="myNavDrawer">
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
        >
          <v-list-item-content>
            <v-list-item-title class="mx-3">
              <v-btn color="white" text @click="goto(link.pos)">{{link.text}}</v-btn>
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "BarraPrincipal",

  components: {},


  data() {
    return {
      drawer: false,
      links: [
        { text: "El Lustra Kombat",  pos: 0,},
        { text: "Sobre el juego", pos: 700 },
        { text: "Videos", pos: 1400 },
        { text: "Galeria", pos: 2500},
        { text: "Realidad aumentada", pos: 3250 },
        { text: "Jugar", pos:  3700},
      ],
    };
  },

  methods: {

    goto(pos){
      this.$vuetify.goTo(pos)
      this.drawer = false
    }
  },
};
</script>

<style scoped>
.Titulo {
  font-family: "Judson", serif;
  letter-spacing: 6px;
  font-size: 30px;
  font-weight: 100;
}

.TituloP {
  font-family: "Judson", serif;
  letter-spacing: 4px;
  font-size: 17px;
  font-weight: 100;
}

.BarraPrincipal {
  text-align: left;
}
</style>
