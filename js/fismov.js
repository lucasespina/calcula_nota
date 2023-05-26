window.onload = function() {
    var inputs = ['AI', 'PI', 'AI2', 'PF'];
    var quizzes = Array.from({length: 16}, (_, i) => 'quiz' + (i + 1));
    var apss = Array.from({length: 6}, (_, i) => 'aps' + (i + 1));
    var allInputs = inputs.concat(quizzes, apss);
    
    var elements = {};
    allInputs.forEach(id => {
      elements[id] = document.getElementById(id);
      elements[id].addEventListener('input', calcularResultado);
      var value = localStorage.getItem(id);
      if (value) {
        elements[id].value = value;
      }
    });
  
    var resultado = document.getElementById("nota-final");
    
    function calcularResultado() {
      var scores = {
        AI: 0.15,
        PI: 0.3,
        AI2: 0.15,
        PF: 0.3,
        quizzes: 0.1 / 13,
        apss: 0.1 / 6,
      };
  
      var totalScore = 0;
  
      inputs.forEach(id => {
        totalScore += (parseFloat(elements[id].value) || 0) * scores[id];
      });
  
      var quizScores = quizzes.map(id => parseFloat(elements[id].value) || 0);
      quizScores.sort(function(a, b){return a - b});
      var topQuizScores = quizScores.slice(3);
      var totalQuizScore = topQuizScores.reduce(function(a, b){return a + b}, 0);
      totalScore += totalQuizScore * scores.quizzes;
  
      var apsScores = apss.map(id => parseFloat(elements[id].value) || 0);
      var totalApsScore = apsScores.reduce(function(a, b){return a + b}, 0);
      totalScore += totalApsScore * scores.apss;
  
      resultado.innerHTML = totalScore.toFixed(2);
  
      if (totalScore < 5) {
        resultado.className = 'vermelho';
      } else if (totalScore == 5) {
        resultado.className = 'laranja';
      } else {
        resultado.className = 'verde-claro';
      }
  
      allInputs.forEach(id => {
        localStorage.setItem(id, elements[id].value);
      });
    }
  
    calcularResultado();
  }
  