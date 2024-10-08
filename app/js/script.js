const { createApp } = Vue

  createApp({
    data() {
        return {
            dischiList : [],
        
        }
        
    },
    methods:{
        getListDischi(){
            axios.get('http://localhost/php-dischi-json/api/')
                .then((response) => {
                    // handle success
                    console.log(response);
                    this.dischiList = response.data;
                    console.log(this.dischiList);
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