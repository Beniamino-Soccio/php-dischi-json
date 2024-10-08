const { createApp } = Vue

  createApp({
    data() {
        return {
            
        
        }
        
    },
    methods:{
        getListDischi(){
            axios.get('http://localhost/php-dischi-json/api/')
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created(){
        this.getListDischi();
    }
  }).mount('#app')