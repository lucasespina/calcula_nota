window.onload = function() {
    var inputIds = ['q1_eletromag', 'pi_eletromag', 'pj_eletromag', 'pf_eletromag']
    var inputs = inputIds.map(id => document.getElementById(id));
    var resultado_eletromag = document.getElementById("nota-final_eletromag");
  
    inputs.forEach(input => {
        if(localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);
        }
        input.addEventListener("input", calcularResultado);
    });
  
    function calcularResultado() {
        var Q1  = parseFloat(inputs[0].value) || 0;
        var PI = parseFloat(inputs[1].value) || 0;
        var PJ = parseFloat(inputs[2].value) || 0;
        var PF = parseFloat(inputs[3].value) || 0;
  
        var resultadoAtualizado = (Q1 * 0.15) + (PI * 0.35) + (PJ * 0.15) + (PF * 0.35);
  

        resultado_eletromag.innerHTML = resultadoAtualizado.toFixed(2);
        resultado_eletromag.className = resultadoAtualizado < 5 ? "vermelho" : (resultadoAtualizado == 5 ? "laranja" : "verde-claro");
        
        inputIds.forEach(id => localStorage.setItem(id, document.getElementById(id).value));
    }
  
    calcularResultado();
  }