window.onload = function() {
    var input1 = document.getElementById("OA1");
    var input2 = document.getElementById("OA2");
    var input3 = document.getElementById("OA3");
    var input4 = document.getElementById("OA4");
    var resultado = document.getElementById("nota-final_desMF");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
    input4.addEventListener("input", calcularResultado)
  
    initValues();
  
    function initValues() {
      
        if(localStorage.getItem('OA1')) {
            input1.value = localStorage.getItem('OA1');
        } 
        if(localStorage.getItem('OA2')) {
            input2.value = localStorage.getItem('OA2');
        }
        if(localStorage.getItem('OA3')) {
          input3.value = localStorage.getItem('OA3');
        }
        if(localStorage.getItem('OA4')) {
          input4.value = localStorage.getItem('OA4');
        }
  

  
    }
  
    
    function calcularResultado() {
        var valor1 = parseFloat(input1.value) || 0;
        var valor2 = parseFloat(input2.value) || 0;
        var valor3 = parseFloat(input3.value) || 0;
        var valor4 = parseFloat(input4.value) || 0;

        var resultadoAtualizado_o1 = (valor1 * 0.3) + (valor2 * 0.2) + (valor3 * 0.2) + (valor4 * 0.3);
      
        resultado.innerHTML = resultadoAtualizado_o1.toFixed(2);
    
        if (resultadoAtualizado_o1 < 5) {
            resultado.classList.remove("verde-claro");
            resultado.classList.remove("laranja");
            resultado.classList.add("vermelho");
        } else if (resultadoAtualizado_o1 == 5) {
            resultado.classList.remove("verde-claro");
            resultado.classList.remove("vermelho");
            resultado.classList.add("laranja");
        } else {
            resultado.classList.remove("vermelho");
            resultado.classList.remove("laranja");
            resultado.classList.add("verde-claro");
        }
  
        localStorage.setItem('OA1', input1.value);
        localStorage.setItem('OA2', input2.value);
        localStorage.setItem('OA3', input3.value);
        localStorage.setItem('OA4', input3.value);
        
    }
    
    calcularResultado();
  }
  