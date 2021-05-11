<template>
  <figure class="snip0015">
    <figcaption>
      <h2>I don't know <span>which</span> is worse</h2>
      <p>That everyone has his price, or that the price is always so low.</p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
    },
    description: {
      required: false,
      type: String,
    },
    url: {
      required: false,
      type: String,
    },
    alt: {
      required: false,
      type: String,
    },
    footer_product: {
      required: false,
      type: String,
    },
    color_back: {
      required: false,
      type: String,
    },
  },
};
</script>

<style scoped>
figure.snip0015 {
  font-family: 'Raleway', Arial, sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin: 10px;
  /* min-width: 220px; */
  /* max-width: 310px; */
  /* max-height: 220px; */
  background: #c67593;

  height: 370px;
  width: 100%;
  text-align: center;
  z-index:1;
  animation: image 5s linear infinite alternate;
}


 @keyframes image {
  0% {
    background-image: url("https://res.cloudinary.com/dxbxsfubt/image/upload/v1618932890/andreale_web/session/maternidad/Maternidad_3.jpg");
  }
  20% {
    background-image: url("https://res.cloudinary.com/dxbxsfubt/image/upload/v1618932890/andreale_web/session/maternidad/Maternidad_1.jpg");
  }
  100% {
    background-image: url("https://res.cloudinary.com/dxbxsfubt/image/upload/v1618932890/andreale_web/session/maternidad/Maternidad_2.jpg");
  }
}  

figure.snip0015 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
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
  content: '';
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
  transition: opacity 0.35s,-webkit-transform 0.35s,-moz-transform 0.35s,-o-transform 0.35s,transform 0.35s;
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
figure.snip0015 h2 span {
  font-weight: 800;
}
figure.snip0015 p {
  font-weight: 200	;
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

figure.snip0015:hover {
  filter: hue-rotate(-90deg);
  /* opacity: 0.6; */
  color: white;
  /* background: #c67593; */
  z-index:2;
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
