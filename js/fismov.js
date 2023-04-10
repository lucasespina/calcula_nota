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
    var aps7 = document.getElementById("aps7")
    var aps8 = document.getElementById("aps8")
    var aps9 = document.getElementById("aps9")
    var aps10 = document.getElementById("aps10")

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
    aps7.addEventListener("input", calcularResultado);
    aps8.addEventListener("input", calcularResultado);
    aps9.addEventListener("input", calcularResultado);
    aps10.addEventListener("input", calcularResultado);


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
        var aps7_c = parseFloat(aps7.value) || 0;
        var aps8_c = parseFloat(aps8.value) || 0;
        var aps9_c = parseFloat(aps9.value) || 0;
        var aps10_c = parseFloat(aps10.value) || 0;
        
        console.log(quiz1_c)

        var resultadoAtualizado = (((ai*0.15) + (pi*0.3) + (ai2*0.15) + (pf * 0.3)) + ((quiz1_c + quiz2_c + quiz3_c + quiz4_c + quiz5_c + quiz6_c + quiz7_c + quiz8_c + quiz9_c + quiz10_c + quiz11_c + quiz12_c + quiz13_c + quiz14_c + quiz15_c + quiz16_c) * 0.00625) + ((aps1_c + aps2_c + aps3_c + aps4_c + aps5_c + aps6_c + aps7_c + aps8_c + aps9_c + aps10_c) *0.01))
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
    }
}
