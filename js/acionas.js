window.onload = function() {
  const inputs = document.querySelectorAll("input");
  const resultado = document.getElementById("nota-final_acionas");

  inputs.forEach(input => {
    input.addEventListener("input", calcularResultado);
    input.value = localStorage.getItem(input.id) || "";
  });

  function calcularResultado() {
    const valores = Array.from(inputs).map(input => parseFloat(input.value) || 0);
    const resultadoAtualizado = (valores[0] * 0.475) + (valores[1] * 0.475) + ((((valores[2]) + (valores[3]) + (valores[4]) + (valores[5]))/4)*0.05) + (valores[6] * 0.05);

    // Limita o valor máximo do resultado em 10
    const resultadoFinal = Math.min(resultadoAtualizado, 10);
    
    resultado.innerHTML = resultadoFinal.toFixed(2);

    resultado.classList.remove("verde-claro", "laranja", "vermelho");
    if (resultadoFinal < 5) {
      resultado.classList.add("vermelho");
    } else if (resultadoFinal == 5) {
      resultado.classList.add("laranja");
    } else {
      resultado.classList.add("verde-claro");
    }

    inputs.forEach(input => {
      localStorage.setItem(input.id, input.value);
    });
  }

  calcularResultado();
}
