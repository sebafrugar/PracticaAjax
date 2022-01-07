
// ejercicio 1 ajax
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url:"https://mindicador.cl/api",
        success: function(data){
            $("#valorUf").text(JSON.stringify(data.uf.valor))
        },
        dataType: "json",
    });
});

    

// ejercicio 2 ajax

$(document).ready(function(){
    $("#ej2").on('click',function(){
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users",
            dataType: "json",
            success: function(datosApi){
                datosApi.data.forEach(element => {
                    $('.resultado')
                    .append(`<p>${element.id}-${element.email}-
                    ${element.first_name}-${element.last_name}-
                    ${element.avatar}</p>`);
                    })                    
            },
            error: function(error){

            },
        });
    });     
});

// ejercicio 3 ajax 

$(document).ready(function(){
    $("#ej3").on("click", function(){
        $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: "json",
            success: function(datos){
                datos.forEach(elemento => {
                    $("#ejercicio3").append(`<p>${elemento.id} - ${elemento.name} - ${elemento.username} - ${elemento.email} - ${elemento.address.street} - ${elemento.address.suite}</p>`)
                })
            }
        });
    });
});