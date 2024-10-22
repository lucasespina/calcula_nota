window.onload = function () {

    var inputIds = [
        'af_camadas',
        'projeto1_camadas',
        'projeto2_camadas',
        'projeto3_camadas',
        'projeto4_camadas',
        'projeto5_camadas',
        'projeto6_camadas',
        'projeto7_camadas',
        'projeto8_camadas',
        'projeto9_camadas',
        'quiz1_camadas',
        'quiz2_camadas',
        'quiz3_camadas',
        'quiz4_camadas',
        'quiz5_camadas',
        'quiz6_camadas',
        'quiz7_camadas'
    ];

    var inputs = inputIds.map(id => document.getElementById(id)).filter(input => input !== null);
    var resultado = document.getElementById("nota-final_camadas");
    var span = document.getElementById("span_camadas");

    // Carregar valores salvos do localStorage
    inputs.forEach(input => {
        if (localStorage.getItem(input.id)) {
            input.value = localStorage.getItem(input.id);
        }
        input.addEventListener("input", calcularResultado);
    });

    function calcularResultado() {
        // Obter notas das avaliações
        var AF = parseFloat(document.getElementById('af_camadas').value) || 0;

        // Calcular média das avaliações
        var mediaAvaliacoes = AF;

        // Obter notas dos projetos
        var projetoScores = [
            parseFloat(document.getElementById('projeto1_camadas').value) || 0,
            parseFloat(document.getElementById('projeto2_camadas').value) || 0,
            parseFloat(document.getElementById('projeto3_camadas').value) || 0,
            parseFloat(document.getElementById('projeto4_camadas').value) || 0,
            parseFloat(document.getElementById('projeto5_camadas').value) || 0,
            parseFloat(document.getElementById('projeto6_camadas').value) || 0,
            parseFloat(document.getElementById('projeto7_camadas').value) || 0,
            parseFloat(document.getElementById('projeto8_camadas').value) || 0,
            parseFloat(document.getElementById('projeto9_camadas').value) || 0
        ];

        // Calcular média dos projetos
        var mediaProjetos = (0.1*projetoScores[0]) + (0.1*projetoScores[1]) + (0.15*projetoScores[2]) + (0.05*projetoScores[3]) + (0.15*projetoScores[4]) + (0.1*projetoScores[5]) + (0.1*projetoScores[6]) + (0.1*projetoScores[7] + 0.15*projetoScores[8]);

        // Obter notas dos quizzes
        var quizScores = [
            parseFloat(document.getElementById('quiz1_camadas').value) || 0,
            parseFloat(document.getElementById('quiz2_camadas').value) || 0,
            parseFloat(document.getElementById('quiz3_camadas').value) || 0,
            parseFloat(document.getElementById('quiz4_camadas').value) || 0,
            parseFloat(document.getElementById('quiz5_camadas').value) || 0,
            parseFloat(document.getElementById('quiz6_camadas').value) || 0,
            parseFloat(document.getElementById('quiz7_camadas').value) || 0
        ];

        // Calcular média dos quizzes
        var mediaquizs = quizScores.reduce((sum, score) => sum + score, 0) / quizScores.length || 0;

        // Calcular a média final
        var mediaFinal = (0.30 * mediaquizs) + (0.40 * mediaProjetos) + (0.30 * mediaAvaliacoes);

        // Verificar condições de aprovação e exibir resultado
        resultado.innerHTML = mediaFinal.toFixed(2);
        resultado.className = mediaFinal < 5 ? "vermelho" : (mediaFinal == 5 ? "laranja" : "verde-claro");

        // Salvar os valores atuais no localStorage
        inputs.forEach(input => localStorage.setItem(input.id, input.value));
    }

    calcularResultado(); // Calcular ao carregar
}
