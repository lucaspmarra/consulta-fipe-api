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
    async getBrands () {
      this.loading = true
      this.errored = false
      try {
        const { data } = await axios.get(API_URL)
        this.brands = data
      } catch (err) {
        console.error(err)
        this.errored = true
      }
      this.loading = false
    },
    async getModels (brandCode) {
      this.models = []
      const { data } = await axios.get(`${API_URL}/${encodeURIComponent(brandCode)}/modelos`)
      this.models = data.modelos
    },
    brandSelected (brand) {
      // store the selected brand
      this.selectedBrand = brand

      // load the brand's models
      this.getModels(brand.codigo)
    }
  }
})