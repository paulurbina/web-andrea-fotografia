<template>
  <figure class="snip0015">
    <img :src="srcItem" :alt="alt" />
    <figcaption>
      <h2 v-html="title_session"></h2>
      <p v-html="resumen_session"></p>
      <span v-html="footer_session"></span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "Testing",
  props: {
    title_session: {
      required: true,
      type: String,
    },
    resumen_session: {
      required: true,
      type: String,
    },
    footer_session: {
      required: false,
      type: String,
    },
    alt: {
      required: true,
      type: String,
    },
    color_back: {
      required: true,
      type: String,
    },
    src: {
      required: false,
      type: Array,
    },
    time: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    counter: 0,
    srcItem: "",
    imagesC: null
  }),
  created() {
    this.imagesC = this.src
    console.log(this.imagesC)
    this.srcItem = this.imagesC[0];
    setInterval(() => {
      this.counter++;
      if (this.counter === 3) this.counter = 0;
      this.srcItem = this.imagesC[this.counter];
    }, this.time);
  },
  watch: {
      srcItem(val) {
        console.log(val);
      }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,200,300,800);
figure.snip0015 {
  font-family: "Raleway", Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 510px;
  max-height: 420px;
  width: 100%;
  background: #c67593;
  text-align: center;
}
figure.snip0015 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
figure.snip0015 img {
  opacity: 1;
  width: 100%;
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}
figure.snip0015 figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3em 3em;
  width: 100%;
  height: 100%;
}
figure.snip0015 figcaption::before {
  position: absolute;
  top: 50%;
  right: 30px;
  bottom: 50%;
  left: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  content: "";
  opacity: 0;
  background-color: #ffffff;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
figure.snip0015 h2,
figure.snip0015 p {
  margin: 0 0 5px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, -webkit-transform 0.35s, -moz-transform 0.35s,
    -o-transform 0.35s, transform 0.35s;
}
figure.snip0015 h2 {
  word-spacing: -0.15em;
  font-weight: 300;
  text-transform: uppercase;
  -webkit-transform: translate3d(0%, 50%, 0);
  transform: translate3d(0%, 50%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

figure.snip0015 p {
  font-weight: 200;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

figure.snip0015:hover img {
  opacity: 0.35;
}
figure.snip0015:hover figcaption h2 {
  opacity: 1;
  -webkit-transform: translate3d(0%, 0%, 0);
  transform: translate3d(0%, 0%, 0);
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
figure.snip0015:hover figcaption p {
  opacity: 0.9;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}
figure.snip0015:hover figcaption::before {
  background: rgba(255, 255, 255, 0);
  top: 30px;
  bottom: 30px;
  opacity: 1;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}
</style>