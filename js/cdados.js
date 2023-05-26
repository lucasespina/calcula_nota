window.onload = function() {
  var input1 = document.getElementById("quiz1_cdados");
  var input2 = document.getElementById("pi_cdados");
  var input3 = document.getElementById("quiz2_cdados");
  var input4 = document.getElementById("pf_cdados");
  var resultado = document.getElementById("nota-final_cdados");
  
  input1.addEventListener("input", calcularResultado);
  input2.addEventListener("input", calcularResultado);
  input3.addEventListener("input", calcularResultado);
  input4.addEventListener("input", calcularResultado);

  initValues();

  function initValues() {
      if(localStorage.getItem('quiz1_cdados')) {
          input1.value = localStorage.getItem('quiz1_cdados');
      } 
      if(localStorage.getItem('pi_cdados')) {
          input2.value = localStorage.getItem('pi_cdados');
      }
      if(localStorage.getItem('quiz2_cdados')) {
          input3.value = localStorage.getItem('quiz2_cdados');
      }
      if(localStorage.getItem('pf_cdados')) {
          input4.value = localStorage.getItem('pf_cdados');
      }
  }

  
  function calcularResultado() {
      var valor1 = parseFloat(input1.value) || 0;
      var valor2 = parseFloat(input2.value) || 0;
      var valor3 = parseFloat(input3.value) || 0;
      var valor4 = parseFloat(input4.value) || 0;
    
      var resultadoAtualizado = (valor1 * 0.05) + (valor2 * 0.35) + (valor3 * 0.05) + (valor4 * 0.55);
    
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

      localStorage.setItem('quiz1_cdados', input1.value);
      localStorage.setItem('pi_cdados', input2.value);
      localStorage.setItem('quiz2_cdados', input3.value);
      localStorage.setItem('pf_cdados', input4.value);
  }
  
  calcularResultado();
}
