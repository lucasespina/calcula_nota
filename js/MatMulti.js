window.onload = function() {
  var inputIds = ['ai1_matmulti', 'pi_matmulti', 'ai3_matmulti', 'ai4_matmulti', 'pf_matmulti'];
  var inputs = inputIds.map(id => document.getElementById(id));
  var resultado_matmulti = document.getElementById("nota-final_matmulti");
  var span_matmulti = document.getElementById("span_matmulti");

  inputs.forEach(input => {
      if(localStorage.getItem(input.id)) {
          input.value = localStorage.getItem(input.id);
      }
      input.addEventListener("input", calcularResultado);
  });

  function calcularResultado() {
      var A1 = parseFloat(inputs[0].value) || 0;
      var A2 = parseFloat(inputs[1].value) || 0;
      var A3 = parseFloat(inputs[2].value) || 0;
      var A4 = parseFloat(inputs[3].value) || 0;
      var PF = parseFloat(inputs[4].value) || 0;

      var resultadoAtualizado = (A1 * 0.20) + (A2 * 0.25) + (A3 * 0.25) + (A4 * 0.3);

      if (resultadoAtualizado < 6.5 && PF != 0 ) {
          resultadoAtualizado = (PF * 0.35) + (resultadoAtualizado * 0.65);
      }
      resultado_matmulti.innerHTML = resultadoAtualizado.toFixed(2);
      span_matmulti.innerHTML = resultadoAtualizado >= 6.5 ? "Parabéns! Você foi aprovado!" : "Precisa fazer a prova final!";
      resultado_matmulti.className = resultadoAtualizado < 5 ? "vermelho" : (resultadoAtualizado == 5 ? "laranja" : "verde-claro");
      
      inputIds.forEach(id => localStorage.setItem(id, document.getElementById(id).value));
  }

  calcularResultado();
}
