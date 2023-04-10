window.onload = function() {
    var input1 = document.getElementById("pi");
    var input2 = document.getElementById("pf");
    var input3 = document.getElementById("lista1");
    var input4 = document.getElementById("lista2");
    var input6 = document.getElementById("lista4");
    var resultado = document.getElementById("nota-final");
    var p = document.getElementById("nota-final");
    var span = document.getElementById("span");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
    input4.addEventListener("input", calcularResultado);
    input6.addEventListener("input", calcularResultado);
    
    function calcularResultado() {


      input1.addEventListener("input", calcularResultado);
      input2.addEventListener("input", calcularResultado);
      input3.addEventListener("input", calcularResultado);
      input4.addEventListener("input", calcularResultado);
      input6.addEventListener("input", calcularResultado);

      var A1 = parseFloat(input1.value) || 0;
      var A2 = parseFloat(input2.value) || 0;
      var A3 = parseFloat(input3.value) || 0;
      var A4 = parseFloat(input4.value) || 0;
      var PF = parseFloat(input6.value) || 0;

      var resultadoAtualizado = (A1 * 0.15) + (A2 * 0.30) + (A3 * 0.25) + (A4 * 0.3);
      
      resultado.innerHTML = resultadoAtualizado.toFixed(2);
    
      if (resultadoAtualizado >= 6.5) {
        span.inertHTML = ""
        span.innerHTML = "Parabéns! Você foi aprovado!";
        resultado.classList.remove("verde-claro");
        resultado.classList.remove("laranja");
        resultado.classList.add("verde-claro");
        p.innerHTML = resultadoAtualizado.toFixed(2);

      }
      else {
        span.inertHTML = ""
        span.innerHTML = "Precisa fazer a prova final!";
        calcularResultado2(resultadoAtualizado);
        resultadoAtualizado = (PF * 0.35) + (resultadoAtualizado * 0.65);
      }

      if (resultadoAtualizado < 5 ) {
        resultado.classList.remove("verde-claro");
        resultado.classList.remove("laranja");
        resultado.classList.add("vermelho");
      }
      else if (resultadoAtualizado == 5) {
        resultado.classList.remove("verde-claro");
        resultado.classList.remove("vermelho");
        resultado.classList.add("laranja");
      }
      else {
        resultado.classList.remove("vermelho");
        resultado.classList.remove("laranja");
        resultado.classList.add("verde-claro");

    }

    }

    function calcularResultado2(resultadoAtualizado) {

    var PF = parseFloat(input6.value) || 0;

    if (resultadoAtualizado <= 6.5 && PF != 0 ) {
      var resultadoAtualizado2 = (PF * 0.35) + (resultadoAtualizado * 0.65);
      resultado.innerHTML = resultadoAtualizado2.toFixed(2);
      p.inertHTML = resultadoAtualizado2.toFixed(2);
    }


  }

  }







    




