window.onload = function() {
    var inputIds = ['projeto_1_emptec', 'projeto_2_emptec', 'prova_1_emptec', 'prova_2_emptec', 'CI1', 'CI2', 'CI3', 'CI4', 'CI5', ];
    var inputs = inputIds.map(id => document.getElementById(id));
    var resultado_final = document.getElementById("nota-final");
    var span = document.getElementById("span");
  
    inputs.forEach(input => {
        if (localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);
        }
        input.addEventListener("input", calcularResultado);
    });
  
    function calcularResultado() {
        // Notas dos projetos
        var P1 = parseFloat(inputs[0].value) || 0;
        var P2 = parseFloat(inputs[1].value) || 0;
  
        // Notas das provas
        var PA1 = parseFloat(inputs[2].value) || 0;
        var PA2 = parseFloat(inputs[3].value) || 0;
  
        // Notas das contribuições individuais
        var CI_total = 0;
        for (let i = 4; i <= 8; i++) {
            CI_total += parseFloat(inputs[i].value) || 0;
        }
        var CI_media = CI_total / 5;
  
        // Cálculo das notas finais com os pesos definidos
        var notaProjetos = (P1 * 0.25) + (P2 * 0.30);
        var notaProvas = ((PA1 + PA2) / 2) * 0.25;
        var notaCI = CI_media * 0.20;
  
        var notaFinal = notaProjetos + notaProvas + notaCI;
  
        resultado_final.innerHTML = notaFinal.toFixed(2);
  
        // Atualiza a cor com base na nota final
        if (notaFinal < 5) {
            resultado_final.style.color = "red";
        } else if (notaFinal == 5) {
            resultado_final.style.color = "orange";
        } else {
            resultado_final.style.color = "green";
        }
  
        // Salvando valores no localStorage
        inputIds.forEach(id => localStorage.setItem(id, document.getElementById(id).value));
    }
  
    calcularResultado();
  }
  