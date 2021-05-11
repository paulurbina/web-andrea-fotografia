<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" lg="6" md="12" sm="12" xl="6" v-for="(item, k) in imagePerson1" :key="k">
          <Testing
            :src="item.src"
            :title_session="item.title"
            :resumen_session="item.description"
            :alt="item.alt"
            color_back="background-color: #C67593;"
            :time="item.time"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Testing from "@/components/Testing.vue";

export default {
  components: {
    Testing,
  },
  data: () => ({
    imagePerson1: [
      {
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
        src: [
          require("@/assets/session/maternidad/Maternidad_1.jpg"),
          require("@/assets/session/maternidad/Maternidad_2.jpg"),
          require("@/assets/session/maternidad/Maternidad_3.jpg"),
        ],
        alt: "Maternidad",
        time: 5000,
      },
      {
        title: "Primer Año",
        description: `
          Sesión de fotos en estudio <br>
          1 hora de sesión <br>
          3 cambios de ropa <br>
          Decoración: Piñata, <br>
          arco de globos o flores <br>
          Se entregan 13 fotos <br>
          editadas (en digital) <br>
          <br>
          s/. 250.00
        `,
        src: [
          require("@/assets/session/primer_anio/primer_anio_1.jpg"),
          require("@/assets/session/primer_anio/primer_anio_2.jpg"),
          require("@/assets/session/primer_anio/primer_anio_3.jpg"),
        ],
        alt: "Primer Año",
        time: 5000,
      },
    ],
  }),
};
</script>