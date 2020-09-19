new Vue({
    el: '#app',
    data() {
        return {
            models: [],
            loading: true,
            errored: false,           
        }
    },
    mounted() {
        this.getModels();
    },
    
    methods: {
        getModels() {
            axios
                .get('')
                .then((response) => {
                    
                })
                .catch(error => {
                    
                })
                .finally(() => this.loading = false)
        },
    }

})