<template>
  <div class="Principal mb-3">
    <v-container>
      <v-row>
        <v-img
          :src="require('../assets/LogoLustraKombat.png')"
          max-height="400"
          max-width="auto"
        ></v-img>
      </v-row>
      <v-row justify="center" class="mb-10 pb-16">
        <h1 class="white--text disp">YA DISPONIBLE</h1>
      </v-row>

      <!-- Sobre el juego -->
      <div class="SobreElJuego my-16 py-16">
        <h1 class="white--text disp">SOBRE EL JUEGO</h1>
        <v-card color="transparent" dark flat>
          <v-card-title>
            El Lustra Kombat es un juego de peleas en 2D desarrollado en Scratch
          </v-card-title>
          <v-card-text class="text-left text-body-1">
            <div class="text-subtitle-1 white--text mb-3">Historia</div>
            En El Lustra Kombat, el Lustra se inscribe a un torneo de peleas que
            puede llevarle al torneo principal, el torneo
            <div class="mk white--text">MORTAL KOMBAT</div>
            <v-img
              class="shrink logomk"
              max-height="20"
              max-width="20"
              contain
              :src="require('../assets/logo-barra.png')"
            >
            </v-img>
            <v-divider class="my-5"></v-divider>
            <div class="text-subtitle-1 white--text mb-3">Mecánicas</div>
            El combate del Lustra Kombat es similar a Tekken, un botón para cada
            brazo y cada pierna, los ataques con brazos y piernas traseros hacen
            más daño pero tardan más en ejecutarse.
            <v-divider class="my-5"></v-divider>
            <div class="text-subtitle-1 white--text mb-3">Multijugador</div>
            El Lustra Kombat incluye un modo multijugador para dos jugadores,
            donde s puede elegir a cualquiera de los personajes y escenarios del
            juego.
          </v-card-text>
        </v-card>
      </div>

      <!-- Videos-->
      <div class="Videos my-10 py-16">
        <v-row justify="center">
          <h1 class="white--text disp">VIDEOS</h1>
        </v-row>

        <v-row justify="center" class="my-5">
          <v-col cols="12">
            <h2 class="white--text">Trailer</h2>
          </v-col>
          <v-col cols="12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6Xr7itHoF6g"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>

        <v-row justify="center" class="my-5">
          <v-col cols="12">
            <h2 class="white--text">Corto</h2>
          </v-col>
          <v-col cols="12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gteeIAJnHy8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
      </div>

      <!-- Galeria-->
      <div class="Galeria py-5">
        <v-row justify="center">
          <h1 class="white--text disp my-10">GALERIA</h1>
        </v-row>
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-row justify="center">
              <v-carousel>
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                  contain
                  position="50% 100%"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                >
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#212121">
                      <v-card>
                        <v-card-title>
                          {{ item.subtitulo }}
                        </v-card-title>
                        <v-card-text>
                          <h3 class="text-left">{{ item.nombre }}</h3>
                          <v-divider class="my-3"></v-divider>
                          {{ item.info }}
                        </v-card-text>
                      </v-card>
                    </v-overlay>
                  </v-fade-transition>
                </v-carousel-item>
              </v-carousel>
            </v-row>
          </template>
        </v-hover>
      </div>
      <!-- Realidad Aumentada-->
      <div class="AR my-10 py-16">
        <v-row justify="center">
          <h1 class="white--text disp my-10">REALIDAD AUMENTADA</h1>
          <v-col cols="12">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/viDHOje4AmA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-col>
        </v-row>
      </div>
      <!-- Jugar-->
      <div class="Jugar my-10 py-16">
        <v-row justify="center">
          <h1 class="white--text disp my-10">JUGAR</h1>
        </v-row>
        <p class="text-body-1 white--text">El Lustra Kombat se puede jugar en Scratch</p>
        <v-btn
          color="white"
          dark
          x-large
          outlined
          target="_blank"
          href="https://scratch.mit.edu/projects/607616514"
          >Jugar</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Principal",
  data() {
    return {
      items: [
        {
          subtitulo: "Personajes",
          src: require("../assets/Lustra.png"),
          nombre: "Lustra",
          info: "El Lustra es el protagonista de la historieta y del juego.",
        },
        {
          subtitulo: "Personajes",
          src: require("../assets/Chato.png"),
          nombre: "Chatoberto",
          info: "Uno de los mejores amigos del Lustra.",
        },
        {
          subtitulo: "Personajes",
          src: require("../assets/Canilla.png"),
          nombre: "Canilla",
          info: "Gran amigo del Lustra.",
        },
        {
          subtitulo: "Personajes",
          src: require("../assets/shark.png"),
          nombre: "King Shark",
          info: "Criatura mistica. Jefe final del juego.",
        },
        {
          subtitulo: "Arte conceptual",
          src: require("../assets/Lustra(Concept).png"),
          nombre: "Lustra",
          info: "Arte conceptual del personaje.",
        },
        {
          subtitulo: "Arte conceptual",
          src: require("../assets/Chato(Concept).png"),
          nombre: "Chatoberto",
          info: "Arte conceptual del personaje.",
        },
        {
          subtitulo: "Arte conceptual",
          src: require("../assets/Canilla(Concept).png"),
          nombre: "Canilla",
          info: "Arte conceptual del personaje.",
        },
        {
          subtitulo: "Arte conceptual",
          src: require("../assets/shark(Concept).png"),
          nombre: "King Shark",
          info: "Arte conceptual del personaje.",
        },
        {
          subtitulo: "Escenarios",
          src: require("../assets/CiudadNoche.png"),
          nombre: "Ciudad",
          info: "Lugar del encuentro entre el Lustra y Chatoberto.",
        },
        {
          subtitulo: "Escenarios",
          src: require("../assets/Bosque.png"),
          nombre: "Bosque",
          info: "Lugar del encuentro entre el Lustra y Canilla.",
        },
        {
          subtitulo: "Escenarios",
          src: require("../assets/Grasslands.png"),
          nombre: "Area final",
          info: "Area final del juego.",
        },
      ],
    };
  },
};
</script>

<style>
.disp {
  font-family: "Judson", serif;
  letter-spacing: 6px;
  font-size: 50px;
}

.mk {
  font-family: "Judson", serif;
  letter-spacing: 6px;
  font-size: 20px;
  display: inline-block;
}

.logomk {
  display: inline-block;
}
</style>
