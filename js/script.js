// Usar fecha actualizada
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth();
var anio = hoy.getFullYear();
var el = document.getElementById('fecha');
el.innerHTML = dia + '/' + (mes+1) + '/' + anio;

