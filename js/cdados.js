window.onload = function() {
    var input1 = document.getElementById("pi");
    var input2 = document.getElementById("pf");
    var input3 = document.getElementById("lista1");
    var input4 = document.getElementById("lista2");
    var resultado = document.getElementById("nota-final");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
    input4.addEventListener("input", calcularResultado);

    
    function calcularResultado() {
      var valor1 = parseFloat(input1.value) || 0;
      var valor2 = parseFloat(input2.value) || 0;
      var valor3 = parseFloat(input3.value) || 0;
      var valor4 = parseFloat(input4.value) || 0;
      
      var resultadoAtualizado = (valor1 * 0.05) + (valor2 * 0.35) + (valor3 *0.05) + (valor4 * 0.55)
      
      resultado.innerHTML = resultadoAtualizado.toFixed(2);
    
      if (resultadoAtualizado < 5) {
        resultado.classList.remove("verde-claro");
        resultado.classList.remove("laranja");
        resultado.classList.add("vermelho");

      }
      else 
        {
        if (resultadoAtualizado == 5) {
            resultado.classList.remove("verde-claro");
            resultado.classList.remove("vermelho");
            resultado.classList.add("laranja");}
            
        

        else {
        resultado.classList.remove("vermelho");
        resultado.classList.remove("laranja");
        resultado.classList.add("verde-claro");


      }

    }}}
