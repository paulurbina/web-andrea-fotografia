<template>
  <div class="study">
    <Navegation />

    <vueper-slides
      :slide-ratio="0.504"
      autoplay
      fade
      :touchable="false"
      fixed-height="100vh"
    >
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :image="slide.image"
        class="banner-filters"
      />
      <template v-slot:loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slides>
    <b-container>
      <b-row class="mt-5 mb-5" align-v="center" align-h="center">
        <b-col md="6">
          <b-img
            rounded
            center
            v-bind="imageProps"
            src="@/assets/estudio/fotografa_1.jpg"
            fluid
            alt="Andrea Espinoza"
          ></b-img>
        </b-col>
        <b-col md="6" class="text-left description-author">
          <h2>Andrea Espinoza</h2>
          <p>
            Soy Licenciada en comunicación audiovisual de la USMP y desde que
            conocí el mundo de la fotografía me dedique a trabajar en ello.
          </p>
          <p>
            Ser parte de la magia de capturar recuerdos es una de mis más
            grandes motivaciones, durante este camino he conocido familias y he
            visto crecer angelitos. La fotografía es un recuerdo que perdurara
            en la eternidad.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Navegation from "@/components/Navegation.vue";
import Footer from "@/components/Footer.vue";
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  name: "Study",
  components: {
    VueperSlides,
    VueperSlide,
    Navegation,
    Footer,
  },
  data: () => ({
    imageProps: {
      width: 400,
    },
    slides: [
      {
        // You can also provide a URL for the image.
        image: require("@/assets/estudio/item1.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/estudio/item2.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/estudio/item3.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/estudio/item4.jpg"),
      },
    ],
  }),
};
</script>


<style scoped>
.banner-filters {
  filter: brightness(0.8);
}

h2 {
  color: #ddabc3;
}
.description-author p {
  font-size: 20px;
  color: #636363;
  width: 90%;
}
</style>
