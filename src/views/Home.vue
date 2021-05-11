<template>
  <div class="home">
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
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <h2 class="description-title text-center">¡BIENVENIDOS!</h2>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <p class="text-description text-center">
            <span>La fotografía es magia</span> en un click, no puede detener el
            tiempo, pero <span>guarda nuestros más lindos recuerdos.</span>
          </p>
          <p class="text-description text-center">
            <span>Vive tu sesión de fotos de una manera única</span>, comparte
            junto a tu familia, amigos o hasta promociona tu marca mediante la
            fotografía.
          </p>
          <p class="text-invitation text-center">
            Te invitamos a conocer <span>NUESTRAS SESIONES</span>
          </p>
        </b-col>
      </b-row>
      <ProductPersonal />
      <ProductBusiness />
    </b-container>
    <b-container fluid>
      <Trademarks />
      <Footer />
    </b-container>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import ProductPersonal from "@/components/ProductPersonal.vue";
import Navegation from "@/components/Navegation.vue";
import ProductBusiness from "@/components/ProductBusiness.vue";
import Trademarks from "@/components/Trademarks.vue";
import Footer from "@/components/Footer.vue";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Home",
  components: {
    VueperSlides,
    VueperSlide,
    ProductPersonal,
    ProductBusiness,
    Trademarks,
    Footer,
    Navegation,
  },
  data: () => ({
    slides: [
      {
        // You can also provide a URL for the image.
        image: require("@/assets/banner/item1.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/banner/item2.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/banner/item3.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/banner/item4.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/banner/item5.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/banner/item6.jpg"),
      },
      // Other slides.
    ],
    carrusels: [
      {
        // You can also provide a URL for the image.
        image: require("@/assets/carrusels/product1.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/carrusels/product2.jpg"),
      },
      {
        // You can also provide a URL for the image.
        image: require("@/assets/carrusels/product3.jpg"),
      },
    ],
    breakpoints: {
      1200: {
        slideRatio: 1 / 5,
      },
      900: {
        slideRatio: 1 / 3,
      },
      600: {
        slideRatio: 1 / 2,
        arrows: false,
        bulletsOutside: true,
        lazy: 1,
      },
      // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
      1100: {
        slideRatio: 1 / 4,
      },
    },
  }),
};
</script>

<style scoped>
.text-description span {
  font-family: 'Century-Gothic-Bold';
}

.description-title {
  font-family: 'Myriad-Pro-Bold';
  font-size: 4rem;
  background-color: #ddabc3;
  color: white;
  font-weight: bold;
  margin-top: 50px;
  padding-bottom: 10px;
}

.text-invitation {
  font-size: 40px;
  color: #ddabc3;
}
.text-invitation span {
  font-family: 'Century-Gothic-Bold';
}

.banner-filters {
  filter: brightness(0.8);
}

.content-products {
  max-width: 100%;
  background: black;
}
.content-products content {
  font-size: 20px;
}

.text-description {
  font-size: 35px;
  color: #636363;
  margin-bottom: 50px;
  font-family: 'Century-Gothic-Regular';
}

.section-description {
  padding-top: 90px;
  min-height: 400px;
}
.section-product {
  min-height: 500px;
}

/* medias queries */

@media (max-width: 530px) {
  .description-title {
    font-size: 2em;
  }
}

@media (max-width: 600px) {
  .text-description {
    font-size: 20px;
  }
}
</style>