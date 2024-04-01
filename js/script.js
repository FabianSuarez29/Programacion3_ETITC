// Usar fecha actualizada
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth();
var anio = hoy.getFullYear();
var el = document.getElementById('fecha');
el.innerHTML = dia + '/' + (mes+1) + '/' + anio; 

/*DOM Evento al dar clic en botón URL */
function url() {
    let urlActual = window.location.href;
    alert(`Esta es la URL: ${urlActual}`);
}

//Suma de 0 a n
function sumar() {
    const numero = parseInt(document.getElementById("numero").value);
    let suma = 0;
    for (let i = 0; i <= numero; i++) {
      suma += i;
    }
    document.getElementById("resultado").textContent = `La suma de 0 hasta ${numero} es: ${suma}`;
}