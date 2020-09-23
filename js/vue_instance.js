const API_URL = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
new Vue({
  el: "#app",
  data() {
    return {
      brands: [],
      models: [],
      selectedBrand: null,
      loading: true,
      errored: false,
    };
  },
  mounted() {
    this.getModels();
    this.getBrands();
  },
  methods: {
    async getBrands() {
      await axios
        .get(API_URL)
        .then((response) => {
          this.brands = response.data;
          console.log(response.data);
        })
        .finally(() => (this.loading = false));
    },
    async getModels(brandCode) {
      console.log("Loading brand models for brand code:", brandCode);
      this.models = [];
      const { data } = await axios.get(
        `${API_URL}/${encodeURIComponent(brandCode)}/modelos`
      );
      this.models = data.modelos;
    },
    brandSelected(brand) {
      this.selectedBrand = brand;

      this.getModels(brand.codigo);
    },
  },
});
