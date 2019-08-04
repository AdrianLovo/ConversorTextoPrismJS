var vm = new Vue({

	el:'#app',

	data: {

		texto_HTML: '',
		opcion: '',
		resultado: '',

		lenguajes: [
			{valor: 0, texto: 'Seleccionar Lenguaje'}, 
			{valor: 1, texto: 'SQL (Structured Query Language)'}, 
			{valor: 2, texto: 'HTML'},
			{valor: 3, texto: 'JavaScript'}
		],

		Botones:[
			{estilo: 'btn btn-warning', nombre: 'Function', funcion: ''},
			{estilo: 'btn btn-primary', nombre: 'Keyword', funcion: ''},
			{estilo: 'btn btn-success', nombre: 'String', funcion: ''},
			{estilo: 'btn btn-danger', nombre: 'Tag', funcion: ''},
			{estilo: 'btn btn-danger', nombre: '/Tag', funcion: ''},
		]

	},

	methods:{
		Borrar: function(){
			this.texto_HTML = '';
			this.resultado = '';
		},

		onchange: function() {
			var lenguaje = "";
			var inicio = "";
			var fin = "";

			switch(this.opcion){
				case "0": 
						alert("Selecciona una opcion");
					break;
				case 1:
					lenguaje = "sql";
					break;
				case 2:
					lenguaje = "html";
					break;	
				case 3:
					lenguaje = "js";
					break;		
			}

			if(this.opcion == 0){
				inicio = "";
				fin = "";		
			}else{ 
				inicio = "<pre class='language-"+ lenguaje+"'> \n";
				fin =  "\n</pre>";	
			}

			this.texto_HTML = inicio + this.texto_HTML + fin;
			this.resultado= this.texto_HTML;
  		},

  		actualizar: function(){
  			this.resultado = this.texto_HTML;
  		},

  		ProcesarTexto: function(index){
  			var arrayValores = this.texto_HTML.split("");
  			var longitud = arrayValores.length;
  			var inicio=texto_HTML.selectionStart;
  			var fin  =texto_HTML.selectionEnd;	
  			
  			var textoInicio = '';
  			var textoMedio = '';
  			var textoFin = '';

  			for(var i = inicio; i < fin; i++ ){
  				textoMedio = textoMedio + arrayValores[i];
  			}

  			for(var i = 0; i < inicio; i++){
  				textoInicio = textoInicio + arrayValores[i];	
  			}

  			for(var i = fin; i < longitud; i++ ){
  				textoFin = textoFin + arrayValores[i];	
  			}

  			switch (index){
		  		case 0: 				
		  			textoMedio="<span class='token function'>"+textoMedio+"</span>";
		  			break;
			  	case 1: 				
			  		textoMedio="<span class='token keyword'>"+textoMedio+"</span>";
			  		break;
			  	case 2: 				
			  		textoMedio="<span class='token string'>"+textoMedio+"</span>";
			  		break;
				case 3: 				
			  		textoMedio="<span class='token tag'>"+textoMedio+"</span>";
			  		break;
			  	case 4: 				
			  		textoMedio="<span class='token tag'><span class='token tag'><span class='token punctuation'>&lt;/</span>"+ textoMedio+ "</span>"
			  		break;			  				
		  	}
 
 			this.texto_HTML = textoInicio + textoMedio + textoFin;
 			this.resultado = this.texto_HTML;  			
  		},

  		agregarSaltos: function(){
  			var arrayValores = this.texto_HTML.split("");
  			var textoFinal = '';

  			for(var i = 0; i < arrayValores.length; i++){
  				if(arrayValores[i] === "\n"){
  					textoFinal = textoFinal + "<br>" + "\n";  					
  				}else{
  					textoFinal = textoFinal + arrayValores[i];
  				}
  			}
  			this.texto_HTML = textoFinal;
  		}

	}
})


