window.onload = function () {

    var inputIds = [
        'ai_tecweb',
        'af_tecweb',
        'projeto1_tecweb',
        'projeto2_tecweb',
        'projeto3_tecweb',
        'atividade1_tecweb',
        'atividade2_tecweb',
        'atividade3_tecweb',
        'atividade4_tecweb',
        'atividade5_tecweb'
    ];

    var inputs = inputIds.map(id => document.getElementById(id));
    var resultado = document.getElementById("nota-final_tecweb");
    var span = document.getElementById("span_tecweb");

    // Carregar valores salvos do localStorage
    inputs.forEach(input => {
        if (localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);
        }
        input.addEventListener("input", calcularResultado);
    });

    function calcularResultado() {
        // Obter notas das avaliações
        var AI = parseFloat(document.getElementById('ai_tecweb').value) || 0;
        var AF = parseFloat(document.getElementById('af_tecweb').value) || 0;

        // Calcular média das avaliações
        var mediaAvaliacoes = (0.40 * AI) + (0.60 * AF);

        // Obter notas dos projetos
        var projetoScores = [
            parseFloat(document.getElementById('projeto1_tecweb').value) || 0,
            parseFloat(document.getElementById('projeto2_tecweb').value) || 0,
            parseFloat(document.getElementById('projeto3_tecweb').value) || 0
        ];

        // Calcular média dos projetos
        var mediaProjetos = (0.40 * projetoScores[0]) + (0.30 * projetoScores[1]) + (0.30 * projetoScores[2]);

        // Obter notas das atividades
        var atividadeScores = [
            parseFloat(document.getElementById('atividade1_tecweb').value) || 0,
            parseFloat(document.getElementById('atividade2_tecweb').value) || 0,
            parseFloat(document.getElementById('atividade3_tecweb').value) || 0,
            parseFloat(document.getElementById('atividade4_tecweb').value) || 0,
            parseFloat(document.getElementById('atividade5_tecweb').value) || 0
        ];

        // Calcular média das atividades
        var mediaAtividades = atividadeScores.reduce((sum, score) => sum + score, 0) / atividadeScores.length;

        // Calcular a média final
        var mediaFinal = (0.10 * mediaAtividades) + (0.50 * mediaProjetos) + (0.40 * mediaAvaliacoes);

        // Verificar condições de aprovação

        // Exibir o resultado final e a mensagem de aprovação/reprovação
        resultado.innerHTML = mediaFinal.toFixed(2);
        resultado.className = mediaFinal < 5 ? "vermelho" : (mediaFinal == 5 ? "laranja" : "verde-claro");

        // Salvar os valores atuais no localStorage
        inputIds.forEach(id => localStorage.setItem(id, document.getElementById(id).value));
    }

    calcularResultado(); // Calcular ao carregar
}
