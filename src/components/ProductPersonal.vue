<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        lg="6"
        md="12"
        sm="12"
        xl="6"
        v-for="(item, k) in imagePerson1"
        :key="k"
      >
        <ProductPersImage
          :src="item.src"
          :title_session="item.title"
          :resumen_session="item.description"
          :alt="item.alt"
          color_back="background: #C67593;"
          :time="item.time"
          :countImage="item.cntImg"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" xl="8" sm="12" md="12" lg="7">
        <ProductPersImage
          :src="imagePerson2[0].src"
          :title_session="imagePerson2[0].title"
          :resumen_session="imagePerson2[0].description"
          :alt="imagePerson2[0].alt"
          color_back="background: #C67593;"
          :time="imagePerson2[0].time"
          :countImage="imagePerson2[1].cntImg"
        />
      </b-col>
      <b-col cols="12" xl="4" sm="12" md="12" lg="5">
        <ProductPersImage
          :src="imagePerson2[1].src"
          :title_session="imagePerson2[1].title"
          :resumen_session="imagePerson2[1].description"
          :alt="imagePerson2[1].alt"
          color_back="background: #C67593;"
          :time="imagePerson2[1].time"
          :countImage="imagePerson2[1].cntImg"
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
        v-for="(item, k) in imagePerson3"
        :key="k"
      >
        <ProductPersImage
          :src="item.src"
          :title_session="item.title"
          :resumen_session="item.description"
          :alt="item.alt"
          color_back="background-color: #C67593;"
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
  name: "ProductPersonal",
  components: {
    ProductPersImage,
  },
  data: () => ({
    imagePerson1: [
      {
        src: [
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1618932890/andreale_web/session/maternidad/Maternidad_1.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1618932890/andreale_web/session/maternidad/Maternidad_2.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1618932890/andreale_web/session/maternidad/Maternidad_3.jpg"
        ],
        title: "Maternidad",
        description: `
          Sesión de fotos en estudio <br>
          1 hora de sesión <br>
          3 cambios de ropa <br>
          Se entregan 10 fotos <br>
          editadas (en digital) <br>
          <br>
          s/. 200.00
        `,
        alt: "Maternidad",
        time: 5000,
        cntImg: 3
      },
      {
        src: [
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350578/andreale_web/session/primer_anio/primer_anio_1.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350578/andreale_web/session/primer_anio/primer_anio_2.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350578/andreale_web/session/primer_anio/primer_anio_3.jpg",
        ],
        title: "Primer Año",
        description: `
          Sesión de fotos en estudio <br>
          1 hora de sesión <br>
          3 cambios de ropa <br>
          Decoración: Piñata, <br>
          arco de globos o flores <br>
          Se entregan 13 fotos <br>
          editadas (en digital) <br>
          s/. 250.00
        `,
        alt: "Primer Año",
        time: 5000,
        cntImg: 3
      },
    ],
    imagePerson2: [
      {
        src: [
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350669/andreale_web/session/smash_cake/smash_cake_1.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350669/andreale_web/session/smash_cake/smash_cake_2.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350670/andreale_web/session/smash_cake/smash_cake_3.jpg",
        ],
        title: "Smash Cake",
        description: `
          1 hora de sesión <br>
          3 cambios de ropa <br>
          Decoración: Piñata, arco de globos o flores<br>
          Pastel Decorado 18cm <br>
          Se entregan 15 fotos <br>
          editadas (en digital) <br>
          s/. 330.00
        `,
        alt: "Smash Cake",
        time: 5000,
        cntImg: 3
      },
      {
        src: [
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350728/andreale_web/session/familia/familia_1.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350728/andreale_web/session/familia/familia_2.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350728/andreale_web/session/familia/familia_3.jpg",
        ],
        title: "Familia",
        description: `
          Sesión de fotos en estudio <br>
          1 hora de sesión <br>
          2 cambios de ropa <br>
          4 personas por sesión <br>
          Se entregan 10 fotos <br>
          editadas (en digital) <br>
          <br>
          s/. 210.00
        `,
        alt: "Familia",
        time: 5000,
        cntImg: 3,
        centrarImage: true
      },
    ],
    imagePerson3: [
      {
        src: [
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350797/andreale_web/session/portafolio/portafolio_1.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350797/andreale_web/session/portafolio/portafolio_2.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350797/andreale_web/session/portafolio/portafolio_3.jpg",
        ],
        title: "Portafolio",
        description: `
        Sesión de fotos en estudio <br>
        1 hora de sesión <br>
        3 cambios de ropa <br>
        1 persona por sesión <br>
        Se entregan 5 fotos <br>
        editadas (en digital) <br>
        <br>
        s/. 60.00
        `,
        alt: "Portafolio",
        time: 5000,
        cntImg: 3
      },
      {
        src: [
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350851/andreale_web/session/eventos_exterior/eventos_exterior_1.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350851/andreale_web/session/eventos_exterior/eventos_exterior_2.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350851/andreale_web/session/eventos_exterior/eventos_exterior_3.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350852/andreale_web/session/eventos_exterior/eventos_exterior_4.jpg",
          "https://res.cloudinary.com/dxbxsfubt/image/upload/v1621350852/andreale_web/session/eventos_exterior/eventos_exterior_5.jpg",
        ],
        title: "Eventos exterior",
        description: `
          1 hora de fotos s/. 130.00 <br>
          (40 a 60 fotos) <br>
          2 hora de fotos s/. 240.00 <br>
          (60 a 90 fotos) <br>
          <br>
          Se entregan las fotos en digital <br>
          3 días despues del evento
        `,
        alt: "Eventos exterior",
        time: 5000,
        cntImg: 5
      },
    ],
  }),
};
</script>