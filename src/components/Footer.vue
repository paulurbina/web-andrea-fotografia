<template>
  <b-row>
    <b-col class="footer">
      <div class="social-links">
        <a
          class="social-btn"
          :href="item.ref"
          target="_blank"
          v-for="(item, i) in item_icons"
          :key="i"
        >
          <b-icon :icon="item.icon" class="icon-component"></b-icon>
        </a>
      </div>
      <p class="text-center">
        <a href="#"> Política de privacidad</a> Copyright © 2021.
        <a href="#">Paul Urbina</a>
      </p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    item_icons: [
      {
        ref: "https://www.instagram.com/andreale_foto/",
        icon: "instagram",
      },
      {
        ref: "https://www.facebook.com/andrealefoto",
        icon: "facebook",
      },
      {
        ref: "https://wa.link/wfcs9m",
        icon: "telephone-inbound-fill",
      },
    ],
  }),
};
</script>

<style scoped>
.footer {
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
}

.footer .social-links a {
  color: white;
  margin: 10px;
}

.footer .social-links {
  text-align: center;
  margin: 20px 0px;
}

.footer .social-btn {
  line-height: 50px;
  font-size: 22px;
  transition: 0.2s linear;
  font-size: 30px;
}
.footer .social-btn:hover .icon-component {
  transform: scale(1.3);
  color: #ddabc3;
  transition: transform 0.6s;
}
p a {
  color: #ddabc3;
}

/* medias queries */
@media (max-width: 600px) {
  .footer p {
    font-size: 14px;
  }
}
</style>