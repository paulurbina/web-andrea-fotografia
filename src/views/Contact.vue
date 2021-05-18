<template>
  <div class="contact">
    <Navegation />

    <b-container fluid class="back-image">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto" sm="auto" xs="auto">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form
              @submit.stop.prevent="handleSubmit(onSubmit)"
              class="form-container"
            >
              <!-- class="justify-content-center" -->
              <h2 class="text-center mt-2 mb-4 title-text">Contáctame</h2>
              <!-- nombre completo -->
              <validation-provider
                name="Nombre"
                :rules="{ required: true, min: 3, alpha_spaces: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="example-input-group-1"
                  label-for="example-input-1"
                >
                  <b-form-input
                    id="example-input-1"
                    name="example-input-1"
                    placeholder="Nombre y Apellido"
                    v-model="form.name"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <!-- nombre completo -->

              <!-- celular  -->
              <validation-provider
                name="Celular"
                :rules="{
                  required: true,
                  integer: true,
                  min: 9,
                  max: 14,
                  numeric: true,
                }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="example-input-group-1"
                  label-for="example-input-1"
                >
                  <b-form-input
                    id="example-input-1"
                    name="example-input-1"
                    placeholder="Celular"
                    v-model="form.phone"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <!-- celular -->

              <!-- email completo -->
              <validation-provider
                name="Correo"
                :rules="{ required: true, min: 3, max: 50, email: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="example-input-group-1"
                  label-for="example-input-1"
                >
                  <b-form-input
                    id="example-input-1"
                    name="example-input-1"
                    placeholder="Correo Electrónico"
                    v-model="form.email"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-1-live-feedback"
                  ></b-form-input>

                  <b-form-invalid-feedback id="input-1-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <!-- email completo -->

              <!-- tipo de sesion -->
              <validation-provider
                name="Sesión"
                :rules="{ required: true }"
                v-slot="validationContext"
              >
                <b-form-group
                  id="example-input-group-2"
                  label-for="example-input-2"
                >
                  <b-form-select
                    id="example-input-2"
                    name="example-input-2"
                    v-model="form.sesion"
                    :options="sessions"
                    :state="getValidationState(validationContext)"
                    aria-describedby="input-2-live-feedback"
                  ></b-form-select>

                  <b-form-invalid-feedback id="input-2-live-feedback">{{
                    validationContext.errors[0]
                  }}</b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <!-- tipo de sesion -->

              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="loading"
              >
                <span v-if="!loading">Enviar</span>
                <b-icon
                  v-if="loading"
                  icon="arrow-clockwise"
                  animation="spin"
                  font-scale="1"
                ></b-icon>
              </b-button>

              <b-alert
                show
                dismissible
                class="mt-2 notification"
                v-if="notification.show"
                :variant="notification.color"
              >
                {{ notification.text }}
              </b-alert>
            </b-form>
          </validation-observer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import Navegation from "@/components/Navegation.vue";
import Axios from "axios";

export default {
  components: {
    Navegation,
  },
  data: () => ({
    notification: {
      show: false,
      text: null,
      color: null,
    },
    loading: false,
    sessions: [
      { value: null, text: "Tipo de sesión..." },
      { value: "maternidad", text: "Maternidad" },
      { value: "primer_anio", text: "Primer año" },
      { value: "familia", text: "Familia" },
      { value: "producto_1", text: "Producto 1" },
      { value: "producto_2", text: "Producto 2" },
      { value: "producto_3", text: "Producto 3" },
    ],
    form: {
      name: null,
      sesion: null,
      email: null,
      phone: null,
    },
  }),
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    resetForm() {
      this.form = {
        name: null,
        sesion: null,
        email: null,
        phone: null,
      };

      this.$nextTick(() => {
        this.$refs.observer.reset();
      });
    },
    async onSubmit() {
      this.loading = true;

      const response = await Axios({
        method: "post",
        url: "https://api-itm-photos-acc.herokuapp.com/register_user",
        data: this.form,
      });

      const data = response.data;
      this.helpersForm(data);
    },

    helpersForm(data) {
      this.loading = false;
      this.resetForm();

      if (!data.success) {
        return (this.notification.color = "danger");
      }
      this.notification.color = "success";
      this.notification.show = true;
      this.notification.text = data.text;
    },
  },
};
</script>

<style scoped>
.back-image {
  background-image: url("../assets/contact/banner_4.jpg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.form-container {
  background-color: white;
  padding: 30px;
  margin-top: 55%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px;
  width: 370px;
}

.title-text {
  color: #636363;
}

@media (max-width: 411px) {
  .form-container {
    margin-top: 30%;
    width: 370px;
  }

  .title-text {
    font-size: 1.5em;
  }
}

@media (max-width: 360px) {
  .form-container {
    margin-top: 27%;
    width: 330px;
  }
}

@media (max-width: 320px) {
  .form-container {
    margin-top: 27%;
    width: 300px;
  }

  .title-text {
    font-size: 1em;
  }
}
</style>