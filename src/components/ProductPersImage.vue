<template>
  <figure class="snip0015" :style="color_back">
    <img :src="srcItem" :alt="alt" />
    <figcaption id="center_content">
      <h2 v-html="title_session"></h2>
      <p v-html="resumen_session"></p>
      <span v-html="footer_session"></span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "ProductPersImage",
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
      required: true,
      type: Array,
    },
    time: {
      required: true,
      type: Number,
    },
    countImage: {
      required: false,
      type: Number,
    },
    centrarImage: {
      required: false,
      type: Boolean,
    },
  },
  data: () => ({
    counter: 0,
    srcItem: "",
    imagesC: null,
    ctrImg: false,
    withDoc: null,
  }),
  created() {
    // this.withDoc = window.innerWidth;
    //   // this.ctrImg = this.centrarImage;
    // console.log(this.centrarImage);

    // if (this.withDoc < 600 && this.ctrImg) {
    //   ("tursa");
    //   // document.getElementById("center_content").style.marginTop = "40"
    // }

    this.imagesC = this.src;
    this.srcItem = this.imagesC[0];
    setInterval(() => {
      this.counter++;
      if (this.counter === this.countImage) this.counter = 0;
      this.srcItem = this.imagesC[this.counter];
    }, this.time);
  },
};
</script>

<style scoped>
figure.snip0015 {
  font-family: "Book-Antiqua-regular", Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-top: 7px;
  min-width: 220px;
  max-width: 730px;
  max-height: 370px;
  width: 100%;
  /* background: #c67593; */
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
figure.snip0015 p,
figure.snip0015 span {
  margin: 0 0 5px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, -webkit-transform 0.35s, -moz-transform 0.35s,
    -o-transform 0.35s, transform 0.35s;
}
figure.snip0015 h2 {
  font-family: "Myriad-Pro-Bold";
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
  opacity: 1;
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

figure.snip0015:hover figcaption span {
  opacity: 1;
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

@media screen and (max-width: 600px) {
  figure.snip0015 p,
  figure.snip0015 span,
  figure.snip0015 h2 {
    font-size: 15px;
    margin-top: 1px;
    padding-top: 1px;
  }

  figure.snip0015 figcaption {
    padding: 10px 0;
  }

  figure.snip0015 figcaption::before {
    border-top: 0;
    border-bottom: 0;
  }
}
</style>