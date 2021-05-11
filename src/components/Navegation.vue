<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="header">
      <b-container>
        <b-navbar-brand>
          <router-link to="/">
            <img src="@/assets/logo1.png" width="100%" alt="Kitten" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" v-b-toggle.sidebar-backdrop>
          <b-icon icon="list" color="white" class="icon-component"></b-icon>
        </b-navbar-toggle>

        <b-sidebar
          id="sidebar-backdrop"
          backdrop
          shadow
          bg-variant="dark"
          text-variant="light"
        >
          <div class="px-3 py-2 text-center">
            <b-img
              src="@/assets/logo1.png"
              fluid
              alt="Responsive image"
            ></b-img>
            <nav class="mt-5">
              <b-nav vertical>
                <b-nav-item active>
                  <router-link class="item-menu-router" to="/"
                    >Inicio</router-link
                  >
                </b-nav-item>

                <b-nav-item>
                  <router-link class="item-menu-router" to="/"
                    >Sesiones</router-link
                  >
                </b-nav-item>
                <b-nav-item>
                  <router-link class="item-menu-router" to="/estudio"
                    >Estudio</router-link
                  >
                </b-nav-item>
                <b-nav-item>
                  <router-link class="item-menu-router" to="/contacto"
                    >Contacto</router-link
                  >
                </b-nav-item>
              </b-nav>
            </nav>
            <div class="social-links-navigation">
              <p class="mt-5">Siguenos en</p>
              <a
                class="social-btn"
                href="https://www.facebook.com/andrealefoto"
                target="_blank"
              >
                <b-icon icon="facebook" class="icon-component"></b-icon>
              </a>
              <a
                class="social-btn"
                href="https://www.instagram.com/andreale_foto"
                target="_blank"
              >
                <b-icon icon="instagram" class="icon-component"></b-icon>
              </a>
            </div>
          </div>
        </b-sidebar>

        <b-collapse is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link class="item-menu-router" to="/">INICIO</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/" class="item-menu-special">
                <a @click="scrollBottom">SESIONES</a>
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="item-menu-router" to="/estudio"
                >ESTUDIO</router-link
              >
            </b-nav-item>
            <b-nav-item>
              <router-link class="item-menu-router" to="/contacto"
                >CONTACTO</router-link
              >
            </b-nav-item>
            <b-nav-item
              href="https://www.instagram.com/andreale_foto/"
              target="_blank"
              class="icon-menu text-center"
            >
              <b-icon
                icon="instagram"
                class="icon-component"
                variant="light"
              ></b-icon>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navegation",
  data: () => ({}),
  methods: {
    scrollBottom() {
      if (this.$route.fullPath != "/") this.$router.push({ path: "/" });

      if (this.$route.fullPath === "/") {
        window.scroll({
          top: 1000,
          behavior: "smooth", // 👈
        });
      }
    },
  },
};
</script>

<style scoped>
.item-menu-special {
  font-family: 'Myriad-Pro-Regular';
  text-decoration: none;
  padding: 10px 10px;
  color: white;
  font-size: 1.2em;
}

.item-menu-special:hover {
  background-color: #ddabc3;
  border-radius: 5px;
  transition: background-color 0.4s;
}

.icon-menu {
  font-size: 20px;
  background-color: #ddabc3;
  width: 45px;
  border-radius: 50%;
}

.social-btn {
  /* line-height: 50px; */
  transition: 0.2s linear;
  font-size: 30px;
  margin: 6px;
  color: white;
}

.social-btn:hover .icon-component {
  transform: scale(1.3);
  color: #ddabc3;
}

.item-menu-router {
  font-family: 'Myriad-Pro-Regular';
  color: white;
  padding: 10px 10px;
  text-decoration: none;
  font-size: 1.2em;
}

.item-menu-router:hover {
  background-color: #ddabc3;
  border-radius: 5px;
  transition: background-color 0.4s;
}

.social-links-navigation p {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: white;
}

.header {
  background-color: transparent;
  position: absolute;
  z-index: 2;
  width: 100%;
}

/* medias queries */
@media (max-width: 995px) {
  .header {
    background-color: #ddabc3;
  }
}
</style>