// Preguntas del cuestionario (c = número de la opción correcta, empezando en 0)
const preguntas = [
  {p:"¿Qué parte de una página controla el comportamiento?", o:["HTML","CSS","JavaScript"], c:2},
  {p:"¿Qué evento ocurre cuando el usuario hace clic?", o:["click","hover","load"], c:0},
  {p:"¿Con qué símbolo empieza la sintaxis de jQuery?", o:["#","$","@"], c:1},
  {p:"jQuery es una librería de JavaScript.", o:["Verdadero","Falso"], c:0},
  {p:"¿Cuál es un efecto típico de jQuery?", o:["fadeIn","JSON.parse","nslookup"], c:0},
  {p:"En JSON, las claves deben ir entre...", o:["comillas dobles","comillas simples","sin comillas"], c:0},
  {p:"¿Qué tipo de hosting crece según la demanda?", o:["Compartido","VPS","Nube"], c:2},
  {p:"¿Qué es pedidos.dulcearoma.com?", o:["Un TLD","Un subdominio","Una IP"], c:1}
];
const cont = document.getElementById("preguntas");
preguntas.forEach(function(q, i){
  let html = '<div class="preg"><b>' + (i+1) + '. ' + q.p + '</b>';
  q.o.forEach(function(op, j){
    html += '<label><input type="radio" name="p' + i + '" value="' + j + '"> ' + op + '</label>';
  });
  cont.innerHTML += html + '<div id="fb' + i + '"></div></div>';
});
document.getElementById("calificar").onclick = function(){
  let puntos = 0;
  preguntas.forEach(function(q, i){
    const sel = document.querySelector('input[name="p' + i + '"]:checked');
    const fb = document.getElementById("fb" + i);
    if (sel && Number(sel.value) === q.c) { puntos++; fb.innerHTML = '<span class="ok">✔ Correcto</span>'; }
    else { fb.innerHTML = '<span class="mal">✘ Incorrecto. Respuesta: ' + q.o[q.c] + '</span>'; }
  });
  document.getElementById("resultado").textContent = "Tu puntaje: " + puntos + " de " + preguntas.length;
};
