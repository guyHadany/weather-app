const tempManager = new TempManager
const render = new Renderer

const loadPage = async function(){
    await tempManager.getDataFromDB()
    if(!tempManager.cityData.length){ return }
    render.renderData(tempManager.cityData)
}

const handleSearch = async function(){
    let cityName = $("#city-input").val()
    await tempManager.getCityData(cityName)
    render.renderData(tempManager.cityData)
    $("#city-input").val("")
}

$(".input-part").on("click", "#search", function(){
    handleSearch()
})

$(".display").on("click", ".fa-plus-circle", function(){
    let cityName = $(this).closest(".city").find(".name").text()
    tempManager.saveCity(cityName)
})

$(".display").on("click", ".fa-minus-circle", function(){
    let cityName = $(this).closest(".city").find(".name").text()
    tempManager.removeCity(cityName)
    $(this).closest(".city").remove()
})

loadPage()