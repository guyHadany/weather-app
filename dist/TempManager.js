class TempManager {
    constructor(){
        this.cityData = []
    }
  
    async getDataFromDB(){
        let data = await $.get(`/cities`)
        this.cityData = data
    }
        
    
       
    async getCityData(cityName){
            let data = await $.get(`http://localhost:5000/city/${cityName}`)
            this.cityData.push(data)
    }
        

    saveCity(cityName){
        for(let data of this.cityData){
            if(data.name === cityName){
                data.isSaved = true
                $.post('/city', data, function (response) {
                })
            } 
        }
       }

    removeCity(cityName){
        let index = this.cityData.findIndex(a => a.name === cityName)
        console.log(index)
        // for(let data of this.cityData){
        //     if(data.name === cityName){
        //         this.cityData
        //     }
        // }
        $.ajax({
            url: `http://localhost:5000/city/${cityName}`,
            type: 'DELETE',
            success: function(result) {
                // render result
            }
        })
    }
}