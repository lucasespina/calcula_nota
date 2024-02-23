window.onload = function() {
    var input1 = document.getElementById("desai");
    var input2 = document.getElementById("deslb1");
    var input3 = document.getElementById("desat1");
    var resultado = document.getElementById("nota-final_des1");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
  
    initValues();
  
    function initValues() {
      
        if(localStorage.getItem('desai')) {
            input1.value = localStorage.getItem('desai');
        } 
        if(localStorage.getItem('deslb1')) {
            input2.value = localStorage.getItem('deslb1');
        }
        if(localStorage.getItem('desat1')) {
          input3.value = localStorage.getItem('desat1');
        }
  

  
    }
  
    
    function calcularResultado() {
        var valor1 = parseFloat(input1.value) || 0;
        var valor2 = parseFloat(input2.value) || 0;
        var valor3 = parseFloat(input3.value) || 0;

        var resultadoAtualizado_o1 = (valor1 * 0.6) + (valor2 * 0.32) + (valor3 * 0.08);
      
        resultado.innerHTML = resultadoAtualizado_o1.toFixed(2);

        localStorage.setItem('resultado_des', JSON.stringify(resultadoAtualizado_o1))
    
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
  
        localStorage.setItem('desai', input1.value);
        localStorage.setItem('deslb1', input2.value);
        localStorage.setItem('desat1', input3.value);
        
    }
    
    calcularResultado();
  }
  