const App = {
    data() {
        return {
            cep: null,
            data: null,
            messageCep: null
        }

    },
    methods: {
        searchCep() {
            console.log(this.cep.length)
            if (this.cep.length == 8) {
                fetch(`https://viacep.com.br/ws/${ this.cep }/json/`)
                    .then(response => response.json())
                    .then(data => this.data = data)
                    .catch(error => console.log(error))
            }
        }
    }
}
Vue.createApp(App).mount('#app');