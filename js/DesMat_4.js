window.onload = function() {
    var input1 = document.getElementById("quiz1_desmat");
    var input2 = document.getElementById("quiz2_desmat");
    var input3 = document.getElementById("quiz3_desmat");
    var input4 = document.getElementById("at3_desmat");
    var input5 = document.getElementById("at4_desmat");
    var resultado = document.getElementById("nota-final_des4");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
    input4.addEventListener("input", calcularResultado);
    input5.addEventListener("input", calcularResultado);
  
    initValues();
  
    function initValues() {
      
        if(localStorage.getItem('quiz_desmat')) {
            input1.value = localStorage.getItem('quiz_desmat');
        } 
        if(localStorage.getItem('quiz2_desmat')) {
            input2.value = localStorage.getItem('quiz2_desmat');
        }
        if(localStorage.getItem('quiz3_desmat')) {
          input3.value = localStorage.getItem('quiz3_desmat');
        }
  
        if(localStorage.getItem('at3_desmat')) {
          input4.value = localStorage.getItem('at3_desmat');
        }
  
        if(localStorage.getItem('at4_desmat')) {
            input5.value = localStorage.getItem('at4_desmat');
        }
  
    }
  
    
    function calcularResultado() {
        var valor1 = parseFloat(input1.value) || 0;
        var valor2 = parseFloat(input2.value) || 0;
        var valor3 = parseFloat(input3.value) || 0;
        var valor4 = parseFloat(input4.value) || 0;
        var valor5 = parseFloat(input5.value) || 0;
      
        var resultadoAtualizado = ((((valor1) + (valor2) + (valor3))/3) * 0.25) + (valor4 * 0.3) + (valor5 * 0.45);
      
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
  
        localStorage.setItem('quiz_desmat', input1.value);
        localStorage.setItem('quiz2_desmat', input2.value);
        localStorage.setItem('quiz3_desmat', input3.value);
        localStorage.setItem('at3_desmat', input4.value);
        localStorage.setItem('at4_desmat', input5.value);
    }
    
    calcularResultado();
  }
  