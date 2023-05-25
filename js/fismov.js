window.onload = function() {
    
    var input1 = document.getElementById("AI");
    var input2 = document.getElementById("PI");
    var input3 = document.getElementById("AI2");
    var input4 = document.getElementById("PF");

    // quizes

    var quiz1 = document.getElementById("quiz1")
    var quiz2 = document.getElementById("quiz2")
    var quiz3 = document.getElementById("quiz3")
    var quiz4 = document.getElementById("quiz4")
    var quiz5 = document.getElementById("quiz5")
    var quiz6 = document.getElementById("quiz6")
    var quiz7 = document.getElementById("quiz7")
    var quiz8 = document.getElementById("quiz8")
    var quiz9 = document.getElementById("quiz9")
    var quiz10 = document.getElementById("quiz10")
    var quiz11 = document.getElementById("quiz11")
    var quiz12 = document.getElementById("quiz12")
    var quiz13 = document.getElementById("quiz13")
    var quiz14 = document.getElementById("quiz14")
    var quiz15 = document.getElementById("quiz15")
    var quiz16 = document.getElementById("quiz16")

    // APS

    var aps1 = document.getElementById("aps1")
    var aps2 = document.getElementById("aps2")
    var aps3 = document.getElementById("aps3")
    var aps4 = document.getElementById("aps4")
    var aps5 = document.getElementById("aps5")
    var aps6 = document.getElementById("aps6")

    var resultado = document.getElementById("nota-final")
    
    input1.addEventListener("input", calcularResultado);
    input2.addEventListener("input", calcularResultado);
    input3.addEventListener("input", calcularResultado);
    input4.addEventListener("input", calcularResultado);

    quiz1.addEventListener("input", calcularResultado);
    quiz2.addEventListener("input", calcularResultado);
    quiz3.addEventListener("input", calcularResultado);
    quiz4.addEventListener("input", calcularResultado);
    quiz5.addEventListener("input", calcularResultado);
    quiz6.addEventListener("input", calcularResultado);
    quiz7.addEventListener("input", calcularResultado);
    quiz8.addEventListener("input", calcularResultado);
    quiz9.addEventListener("input", calcularResultado);
    quiz10.addEventListener("input", calcularResultado);
    quiz11.addEventListener("input", calcularResultado);
    quiz12.addEventListener("input", calcularResultado);
    quiz13.addEventListener("input", calcularResultado);
    quiz14.addEventListener("input", calcularResultado);
    quiz15.addEventListener("input", calcularResultado);
    quiz16.addEventListener("input", calcularResultado);

    aps1.addEventListener("input", calcularResultado);
    aps2.addEventListener("input", calcularResultado);
    aps3.addEventListener("input", calcularResultado);
    aps4.addEventListener("input", calcularResultado);
    aps5.addEventListener("input", calcularResultado);
    aps6.addEventListener("input", calcularResultado);


    initValues();

    function initValues() {
        if(localStorage.getItem('AI')) {
            input1.value = localStorage.getItem('AI');
        }
        if(localStorage.getItem('PI')) {
            input2.value = localStorage.getItem('PI');
        }
        if(localStorage.getItem('AI2')) {
            input3.value = localStorage.getItem('AI2');
        }
        if(localStorage.getItem('PF')) {
            input4.value = localStorage.getItem('PF');
        }

        if(localStorage.getItem('quiz1')) {
            quiz1.value = localStorage.getItem('quiz1');
        }
        if(localStorage.getItem('quiz2')) { 
            quiz2.value = localStorage.getItem('quiz2');
        } 
        if(localStorage.getItem('quiz3')) {
            quiz3.value = localStorage.getItem('quiz3');
        }
        if(localStorage.getItem('quiz4')) {
            quiz4.value = localStorage.getItem('quiz4');
        }
        if(localStorage.getItem('quiz5')) {
            quiz5.value = localStorage.getItem('quiz5');
        }
        if(localStorage.getItem('quiz6')) {
            quiz6.value = localStorage.getItem('quiz6');
        }
        if(localStorage.getItem('quiz7')) {
            quiz7.value = localStorage.getItem('quiz7');
        }
        if(localStorage.getItem('quiz8')) {
            quiz8.value = localStorage.getItem('quiz8');
        }
        if(localStorage.getItem('quiz9')) {
            quiz9.value = localStorage.getItem('quiz9');
        }
        if(localStorage.getItem('quiz10')) {
            quiz10.value = localStorage.getItem('quiz10');
        }
        if(localStorage.getItem('quiz11')) {
            quiz11.value = localStorage.getItem('quiz11');
        }
        if(localStorage.getItem('quiz12')) {
            quiz12.value = localStorage.getItem('quiz12');
        }
        if(localStorage.getItem('quiz13')) {
            quiz13.value = localStorage.getItem('quiz13');
        }
        if(localStorage.getItem('quiz14')) {
            quiz14.value = localStorage.getItem('quiz14');
        }
        if(localStorage.getItem('quiz15')) {
            quiz15.value = localStorage.getItem('quiz15');
        }
        if(localStorage.getItem('quiz16')) {
            quiz16.value = localStorage.getItem('quiz16');
        }

        if(localStorage.getItem('aps1')) {
            aps1.value = localStorage.getItem('aps1');
        }
        if(localStorage.getItem('aps2')) {  
            aps2.value = localStorage.getItem('aps2');
        }
        if(localStorage.getItem('aps3')) {
            aps3.value = localStorage.getItem('aps3');
        }
        if(localStorage.getItem('aps4')) {
            aps4.value = localStorage.getItem('aps4');
        }
        if(localStorage.getItem('aps5')) {
            aps5.value = localStorage.getItem('aps5');
        }
        if(localStorage.getItem('aps6')) {
            aps6.value = localStorage.getItem('aps6');
        }
    }



    function calcularResultado() {

      quiz1.addEventListener("input", calcularResultado);

        var ai = parseFloat(input1.value) || 0;
        var pi = parseFloat(input2.value) || 0;
        var ai2 = parseFloat(input3.value) || 0;
        var pf = parseFloat(input4.value) || 0;
    
        var quiz1_c = parseFloat(quiz1.value) || 0;
        var quiz2_c = parseFloat(quiz2.value) || 0;
        var quiz3_c = parseFloat(quiz3.value) || 0;
        var quiz4_c = parseFloat(quiz4.value) || 0;
        var quiz5_c = parseFloat(quiz5.value) || 0;
        var quiz6_c = parseFloat(quiz6.value) || 0;
        var quiz7_c = parseFloat(quiz7.value) || 0;
        var quiz8_c = parseFloat(quiz8.value) || 0;
        var quiz9_c = parseFloat(quiz9.value) || 0;
        var quiz10_c = parseFloat(quiz10.value) || 0;
        var quiz11_c = parseFloat(quiz11.value) || 0;
        var quiz12_c = parseFloat(quiz12.value) || 0;
        var quiz13_c = parseFloat(quiz13.value) || 0;
        var quiz14_c = parseFloat(quiz14.value) || 0;
        var quiz15_c = parseFloat(quiz15.value) || 0;
        var quiz16_c = parseFloat(quiz16.value) || 0;
    
        var aps1_c = parseFloat(aps1.value) || 0;
        var aps2_c = parseFloat(aps2.value) || 0;
        var aps3_c = parseFloat(aps3.value) || 0;
        var aps4_c = parseFloat(aps4.value) || 0;
        var aps5_c = parseFloat(aps5.value) || 0;
        var aps6_c = parseFloat(aps6.value) || 0;
  
        
        console.log(quiz1_c)

        var resultadoAtualizado = (((ai*0.15) + (pi*0.3) + (ai2*0.15) + (pf * 0.3)) + ((quiz1_c + quiz2_c + quiz3_c + quiz4_c + quiz5_c + quiz6_c + quiz7_c + quiz8_c + quiz9_c + quiz10_c + quiz11_c + quiz12_c + quiz13_c + quiz14_c + quiz15_c + quiz16_c) * 0.00625) + ((aps1_c + aps2_c + aps3_c + aps4_c + aps5_c + aps6_c ) *0.01))
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
      localStorage.setItem('AI', input1.value);
      localStorage.setItem('PI', input2.value);
      localStorage.setItem('AI2', input3.value);
      localStorage.setItem('PF', input4.value);
      localStorage.setItem('quiz1', quiz1.value);
      localStorage.setItem('quiz2', quiz2.value);
      localStorage.setItem('quiz3', quiz3.value);
      localStorage.setItem('quiz4', quiz4.value);
      localStorage.setItem('quiz5', quiz5.value);
      localStorage.setItem('quiz6', quiz6.value);
      localStorage.setItem('quiz7', quiz7.value);
      localStorage.setItem('quiz8', quiz8.value);
      localStorage.setItem('quiz9', quiz9.value);
      localStorage.setItem('quiz10', quiz10.value);
      localStorage.setItem('quiz11', quiz11.value);
      localStorage.setItem('quiz12', quiz12.value);
      localStorage.setItem('quiz13', quiz13.value);
      localStorage.setItem('quiz14', quiz14.value);
      localStorage.setItem('quiz15', quiz15.value);
      localStorage.setItem('quiz16', quiz16.value);
      localStorage.setItem('aps1', aps1.value);
      localStorage.setItem('aps2', aps2.value);
      localStorage.setItem('aps3', aps3.value);
      localStorage.setItem('aps4', aps4.value);
      localStorage.setItem('aps5', aps5.value);
      localStorage.setItem('aps6', aps6.value);
      
    }
}
