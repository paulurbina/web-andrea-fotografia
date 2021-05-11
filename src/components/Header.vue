<template>
  <div>
    <header class="header">
      <nav class="nav-wrapper">
        <div class="logo">
          <a href="#"><img src="@/assets/logo.png" class="logo" /></a>
        </div>

        <ul class="menu">
          <li><router-link to="/">INICIO</router-link></li>
          <li><a href="#">SESIONES</a></li>
          <li><router-link to="/estudio">ESTUDIO</router-link></li>
          <li><router-link to="/contacto">CONTACTO</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data: () => ({}),
};
</script>

<style scoped>
header {
  background-color: transparent;
  position: absolute;
  z-index: 2;
  width: 100%;
}

header .logo img {
  max-width: 190px;
}
.nav-wrapper {
  max-width: 1200px;
  background: transparent;
  margin: 0 auto;
  position: relative;
  padding: 7px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav.nav-wrapper ul li {
  display: inline-block;
  padding: 0 10px;
  margin-bottom: 0;
  position: relative;
  right: 40px;
}

nav.nav-wrapper ul li a {
  font-size: 20px;
  line-height: 22px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding-bottom: 3px;
  transition: 0.3s;
}

nav.nav-wrapper ul li a:hover {
  background-color: #ddabc3;
  padding: 10px 5px 10px 5px;
}
</style>
