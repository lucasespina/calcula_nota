window.onload = function () {
    var inputIds = [
        'PI_modcom',
        'PF_modcom',
        'aps1_modcom',
        'aps2_modcom',
        'aps3_modcom',
        'aps4_modcom',
        'aps5_modcom',
        'aps6_modcom',
        'aps7_modcom',
        'aps8_modcom',
        'lab1_modcom',
        'lab2_modcom',
        'lab3_modcom',
        'lab4_modcom'
    ];

    var inputs = inputIds.map(id => document.getElementById(id));
    var resultado = document.getElementById("nota-final_modcom");
    var span = document.getElementById("span_modcom");

    // Carregar valores salvos do localStorage
    inputs.forEach(input => {
        if (localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);
        }
        input.addEventListener("input", calcularResultado);
    });

    function calcularResultado() {
        var PI = parseFloat(document.getElementById('PI_modcom').value) || 0;
        var PF = parseFloat(document.getElementById('PF_modcom').value) || 0;

        // Obter notas de APS e Labs
        var apsScores = [
            parseFloat(document.getElementById('aps1_modcom').value) || 0,
            parseFloat(document.getElementById('aps2_modcom').value) || 0,
            parseFloat(document.getElementById('aps3_modcom').value) || 0,
            parseFloat(document.getElementById('aps4_modcom').value) || 0,
            parseFloat(document.getElementById('aps5_modcom').value) || 0,
            parseFloat(document.getElementById('aps6_modcom').value) || 0,
            parseFloat(document.getElementById('aps7_modcom').value) || 0,
            parseFloat(document.getElementById('aps8_modcom').value) || 0
        ];

        var labScores = [
            parseFloat(document.getElementById('lab1_modcom').value) || 0,
            parseFloat(document.getElementById('lab2_modcom').value) || 0,
            parseFloat(document.getElementById('lab3_modcom').value) || 0,
            parseFloat(document.getElementById('lab4_modcom').value) || 0
        ];

        // Juntar todas as notas de APS e Labs
        var allScores = apsScores.concat(labScores);

        // Ordenar as notas do maior para o menor
        allScores.sort((a, b) => b - a);

        // Selecionar as 8 maiores notas
        var top8Scores = allScores.slice(0, 8);

        // Calcular a média das 8 maiores notas
        var averageTop8 = top8Scores.reduce((sum, score) => sum + score, 0) / top8Scores.length;

        // Calcular a pontuação ponderada de APS e Labs (10% da nota final)
        var apsLabScore = averageTop8 * 0.10;

        // Calcular as pontuações ponderadas de AI e AF
        var PIWeighted = PI * 0.45;
        var PFWeighted = PF * 0.45;

        // Calcular o resultado final atualizado
        var resultadoAtualizado = PIWeighted + PFWeighted + apsLabScore;

        // Exibir o resultado final e a mensagem de aprovação/reprovação
        resultado.innerHTML = resultadoAtualizado.toFixed(2);
        resultado.className = resultadoAtualizado < 5 ? "vermelho" : (resultadoAtualizado == 5 ? "laranja" : "verde-claro");

        // Salvar os valores atuais no localStorage
        inputIds.forEach(id => localStorage.setItem(id, document.getElementById(id).value));
    }

    calcularResultado();
}
