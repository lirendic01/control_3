// crear funcion ready
$(document).ready(function(){
  //Crear invocación de la API donde se obtienen los datos: 
  $.get('http://fakestoreapi.com/products', function(data){

      //Usar .each para recorrer la lista 
      $.each(data, function(i, item){
          //Crear el codigo HTML dinamico para agregar los productos al contenedor
          //Usar comillar invertidas alt gr + }

              html = `<div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
              <div class="card" style="width: 22rem;">
                  <img src="${item.image}" class="card-img" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${item.title}</h5>
                      <h6 class="card-title">${item.category}</h6>
                      <p class="card-text green" >${item.price}</p> 
                      <p class="card-text">${item.description}</p> 
                      <a href="#" class="btn btn-primary"> Buscar en Amazon</a>
                  </div>
              </div>
          </div>
              `;

          $('#cuadro-ropa').append(html);

      });
      

  });

});