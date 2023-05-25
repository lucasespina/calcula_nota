window.onload = function() {
    var input1 = document.getElementById("pi_acionas"); 
    var input2 = document.getElementById("pf_acionas");
    var input3 = document.getElementById("lista1_acionas");
    var input4 = document.getElementById("lista2_acionas");
    var input5 = document.getElementById("lista3_acionas");
    var input6 = document.getElementById("lista4_acionas");
    var input7 = document.getElementById("participacao_acionas");
    var resultado = document.getElementById("nota-final_acionas");
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
    input4.addEventListener("input", calcularResultado);
    input5.addEventListener("input", calcularResultado);
    input6.addEventListener("input", calcularResultado);
    input7.addEventListener("input", calcularResultado);
    

    initValues();

    function initValues() {
        if(localStorage.getItem('pi_acionas')) {
            input1.value = localStorage.getItem('pi_acionas');
        }
        if(localStorage.getItem('pf_acionas')) {
            input2.value = localStorage.getItem('pf_acionas');
        }
        if(localStorage.getItem('lista1_acionas')) {
            input3.value = localStorage.getItem('lista1_acionas');
        }
        if(localStorage.getItem('lista2_acionas')) {
            input4.value = localStorage.getItem('lista2_acionas');
        }
        if(localStorage.getItem('lista3_acionas')) {
            input5.value = localStorage.getItem('lista3_acionas');
        }
        if(localStorage.getItem('lista4_acionas')) {
            input6.value = localStorage.getItem('lista4_acionas');
        }
        if(localStorage.getItem('participacao_acionas')) {
            input7.value = localStorage.getItem('participacao_acionas');
        }
      }

    function calcularResultado() {
      var valor1 = parseFloat(input1.value) || 0;
      var valor2 = parseFloat(input2.value) || 0;
      var valor3 = parseFloat(input3.value) || 0;
      var valor4 = parseFloat(input4.value) || 0;
      var valor5 = parseFloat(input5.value) || 0;
      var valor6 = parseFloat(input6.value) || 0;
      var valor7 = parseFloat(input7.value) || 0;
      
      var resultadoAtualizado = (valor1 * 0.475) + (valor2 * 0.475) + ((((valor3) + (valor4 ) + (valor5 ) + (valor6 ))/4)*0.05) + (valor7 * 0.05);
      
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

    }
    localStorage.setItem('pi_acionas', input1.value);
    localStorage.setItem('pf_acionas', input2.value);
    localStorage.setItem('lista1_acionas', input3.value);
    localStorage.setItem('lista2_acionas', input4.value);
    localStorage.setItem('lista3_acionas', input5.value);
    localStorage.setItem('lista4_acionas', input6.value);
    localStorage.setItem('participacao_acionas', input7.value);

  }
  calcularResultado();
}
