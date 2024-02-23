window.onload = function() {
    var input1 = document.getElementById("afp");
    var input2 = document.getElementById("lb2");
    var resultado = document.getElementById("nota-final_des3");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
  
    initValues();
  
    function initValues() {
      
        if(localStorage.getItem('afp')) {
            input1.value = localStorage.getItem('afp');
        } 
        if(localStorage.getItem('lb2')) {
            input2.value = localStorage.getItem('lb2');
        }


  
    }
  
    
    function calcularResultado() {
        var valor1 = parseFloat(input1.value) || 0;
        var valor2 = parseFloat(input2.value) || 0;

        var resultadoAtualizado = (valor1 * 0.6) + (valor2 * 0.4)
      
        resultado.innerHTML = resultadoAtualizado.toFixed(2);
    
        if (resultadoAtualizado < 5) {
            resultado.classList.remove("verde-claro");
            resultado.classList.remove("laranja");
            resultado.classList.add("vermelho");
        } else if (resultadoAtualizado == 5) {
            resultado.classList.remove("verde-claro");
            resultado.classList.remove("vermelho");
            resultado.classList.add("laranja");
        } else {
            resultado.classList.remove("vermelho");
            resultado.classList.remove("laranja");
            resultado.classList.add("verde-claro");
        }
  
        localStorage.setItem('afp', input1.value);
        localStorage.setItem('lb2', input2.value);
    }
    
    calcularResultado();
  }
  