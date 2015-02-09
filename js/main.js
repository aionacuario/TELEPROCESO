


$(document).ready(function() {
	$(".boton").click(function(event) {
		event.preventDefault();

		        $(".cajaanimada").toggleClass("on");
		        $(".segmento1").toggleClass("on");
		        $(".segmento2").toggleClass("on");
		        $(".segmento3").toggleClass("on");
		        $(".numeroSecuencia").toggleClass("on");
		        $(".puertoOrigen").toggleClass("on");
		        $(".puertoDestino").toggleClass("on");
		        $(".ipOrigen").toggleClass("on");
		        $(".ipDestino").toggleClass("on");
		        $(".macOrigen").toggleClass("on");
		        $(".macDestino").toggleClass("on");
		        $(".trailer").toggleClass("on");
		     	$(".numerosBinarios").toggleClass('on');

		     	$(".derecha").toggleClass('on');
				$(".abajo1").toggleClass('on');
				$(".abajo2").toggleClass('on');
				$(".izquierda").toggleClass('on');
				$(".container-fluid").toggleClass('on');

				var texto = $("#textoEntrada").val();
					$( "#textoSalida" ).val("En espera..");
				setTimeout(
				  function() 
				  {
				  	$( "#textoSalida" ).val("");
					$( "#textoSalida" ).val(texto);
				    //do something special
				  },30000);
	});
});
