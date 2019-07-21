class Renderer{


    renderData(allCityData){
        $(".display").empty()
        const source = $('#first-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template ({allCityData});
        $('.display').append(newHTML);
    }

}

