$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  $( "#target" ).submit(function( event ) {
    // console.log("Hello World");
    event.preventDefault();
    
    user_input_a = $("#userinput").val(); 
    // console.log(user_input_a);
      $.post('/abuelita', {
        user_input: user_input_a
      }, function(data){
        // console.log(data); 
        //Data es lo mismo que @abuelita 
        $("#html").html("Tu abuelita dice " + data)
        // Reemplaza el p con id "html" por los atributos del .html
      });
  });
});
