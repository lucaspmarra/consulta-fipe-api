new Vue({
  el: "#app",
  data() {
    return {
      models: [],
      loading: true,
      errored: false,
      
    };
  },
  mounted() {
    this.getModels();
  },

  methods: {
    getModels() {
      axios
        .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
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
  },
  computed: {
    filteredModels: function () {
      return this.models.filter((nome) => {
        return nome.nome.match(this.search);
      });
    },
  },
});
