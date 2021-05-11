<template>
  <div>
    <b-row class="mt-5 mb-3">
      <b-col cols="12" class="text-center">
        <h2>Realza tu marca con <span>FOTOGRAFÍA PROFESIONAL</span></h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        lg="6"
        md="12"
        sm="12"
        xl="4"
        v-for="(item, k) in imageItems1"
        :key="k"
      >
        <ProductPersImage
          :src="item.src"
          :title_session="item.title"
          :resumen_session="item.description"
          :footer_session="item.footer_product"
          :alt="item.alt"
          color_back="background: #9db1d4;"
          :time="item.time"
          :countImage="item.cntImg"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        cols="12"
        lg="6"
        md="12"
        sm="12"
        xl="6"
        v-for="(item, k) in imageItems2"
        :key="k"
      >
        <ProductPersImage
          :src="item.src"
          :title_session="item.title"
          :resumen_session="item.description"
          :footer_session="item.footer_product"
          :alt="item.alt"
          color_back="background: #9db1d4;"
          :time="item.time"
          :countImage="item.cntImg"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ProductPersImage from "@/components/ProductPersImage.vue";

export default {
  name: "ProductBusiness",
  components: {
    ProductPersImage,
  },
  data: () => ({
    imageItems1: [
      {
        src: [
          require("@/assets/session/paquete1/paquete_1.jpg"),
          require("@/assets/session/paquete1/paquete_2.jpg"),
          require("@/assets/session/paquete1/paquete_3.jpg"),
          require("@/assets/session/paquete1/paquete_4.jpg"),
          require("@/assets/session/paquete1/paquete_5.jpg"),
        ],
        title: "Paquete 1",
        description: `
         Sesión de fotos en estudio <br>
         1 hora de sesión <br>
         50 a 80 fotos sin editar <br>
         s/. 150.00 <br><br><br>
        `,
        alt: "Paquete 1",
        footer_product: `
        Aprox. 10 a 15 outfits por hora <br>
        No incluye pago de modelo
        `,
        time: 5000,
        cntImg: 5
      },
      {
        src: [
          require("@/assets/session/paquete2/paquete_1.jpg"),
          require("@/assets/session/paquete2/paquete_2.jpg"),
          require("@/assets/session/paquete2/paquete_3.jpg"),
        ],
        title: "Paquete 2",
        description: `
          Sesión de fotos en estudio <br>
          1 hora de sesión <br>
          50 a 80 fotos sin editar <br>
          20 fotos retocadas <br>
          s/. 200.00 <br> <br>
        `,
        alt: "Paquete 2",
        footer_product: `
        Aprox. 10 a 15 outfits por hora <br>
        No incluye pago de modelo
        `,
        time: 5000,
        cntImg: 3,
        centrarImage: true
      },
      {
        src: [
          require("@/assets/session/paquete3/paquete_1.jpg"),
          require("@/assets/session/paquete3/paquete_2.jpg"),
          require("@/assets/session/paquete3/paquete_3.jpg"),
          require("@/assets/session/paquete3/paquete_4.jpg"),
        ],
        title: "Paquete 3",
        description: `
          Sesión de fotos en estudio <br>
          2 horas de sesión <br>
          100 a 200 fotos sin editar <br>
          40 fotos retocadas <br>
          s/. 300.00 <br><br>
        `,
        alt: "Paquete 3",
        footer_product: `
        Aprox. 10 a 15 outfits por hora <br>
        No incluye pago de modelo
        `,
        time: 5000,
        cntImg: 4
      },
    ],
    imageItems2: [
      {
        src: [
          require("@/assets/session/fotografia_bodegon1/bodegon_1.jpg"),
          require("@/assets/session/fotografia_bodegon1/bodegon_2.jpg"),
          require("@/assets/session/fotografia_bodegon1/bodegon_3.jpg"),
          require("@/assets/session/fotografia_bodegon1/bodegon_4.jpg"),
          require("@/assets/session/fotografia_bodegon1/bodegon_5.jpg"),
        ],
        title: "Foto de bodegón 1",
        description: `
        Sesión de fotos en estudio <br>
            1 hora de sesión <br>
            40 a 60 fotos sin editar <br>
            10 fotos retocadas <br>
            s/. 150.00 <br><br>
        `,
        footer_product: `Aprox. 8 a 11 outfits por hora`,
        alt: "Fotografía de bodegón 1",
        time: 5000,
        cntImg: 5
      },
      {
        src: [
          require("@/assets/session/fotografia_bodegon2/bodegon_1.jpg"),
          require("@/assets/session/fotografia_bodegon2/bodegon_2.jpg"),
          require("@/assets/session/fotografia_bodegon2/bodegon_3.jpg"),
          require("@/assets/session/fotografia_bodegon2/bodegon_4.jpg"),
          require("@/assets/session/fotografia_bodegon2/bodegon_5.jpg"),
          require("@/assets/session/fotografia_bodegon2/bodegon_6.jpg"),
        ],
        title: "Foto de bodegón 2",
        description: `
         Sesión de fotos en estudio <br>
            2 hora de sesión <br>
            60 a 150 fotos sin editar <br>
            20 fotos retocadas <br>
            s/. 200.00 <br><br>
        `,
        footer_product: `Aprox. 8 a 11 outfits por hora`,
        alt: "Fotografía de bodegón 2",
        time: 5000,
        cntImg: 6
      },
    ],
  }),
};
</script>

<style scoped>
h2 {
  font-family: 'Century-Gothic-Regular';
  color: #9db1d4;
}
h2 span {
  font-family: 'Century-Gothic-Bold';
}
</style>