<template>
  <div>
    <!-- <b-row class="mt-5">
    </b-row> -->
    <b-row class="mt-5">
      <b-col class="text-center trademarks pt-5 pb-5">
      <h2>MARCAS CON LAS QUE TRABAJAMOS</h2>
        <b-img
          src="@/assets/marcas/item1.png"
          class="image-trademarks"
          fluid
          alt="Kids Store"
        ></b-img>
        <b-img
          src="@/assets/marcas/item2.png"
          class="image-trademarks"
          fluid
          alt="Cococó"
        ></b-img>
        <b-img
          src="@/assets/marcas/item3.png"
          class="image-trademarks"
          fluid
          alt="Milena Leiva"
        ></b-img>
        <b-img
          src="@/assets/marcas/item4.png"
          class="image-trademarks"
          fluid
          alt="Varma"
        ></b-img>
        <b-img
          src="@/assets/marcas/item5.png"
          class="image-trademarks"
          fluid
          alt="Garbo"
        ></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Trademarks",
  components: {},
  data: () => ({}),
};
</script>

<style scoped>

h2 {
  color: #ffffff;
  font-family: 'Myriad-Pro-Bold';
  font-size: 2.8rem;
}

.trademarks {
  background-color: #9b9b9b;
}

.image-trademarks {
  margin: 20px;
}

.image-trademarks:hover {
  transform: scale(1.3);
  transition: transform 0.6s;
}

</style>