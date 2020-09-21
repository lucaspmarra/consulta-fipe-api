const API_URL = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
// api link const for global request
new Vue({
  el: "#app",
  data() {
    return {
      models: [],
      brands: [],
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.getModels();
    this.getBrand();
  },

  methods: {
    async getModels() {
      await axios
        .get(API_URL)
        .then((response) => {
          this.models = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
    getBrand() {
      axios
        .get("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos")
        .then((response) => {
          this.brands = response.data.modelos;
          console.log(response.data.modelos);
        });
    },
  },
});
