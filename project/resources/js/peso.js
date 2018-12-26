var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var peso = prompt("cual es tu peso?");
var planeta = prompt("en que planeta\n 1 para marte  2 para jupiter ");
var nombre;
var peso_total

if(planeta == 1)
{
    nombre = "marte";
    peso_total = peso * g_marte / g_tierra;
}
else if (planeta == 2)
{
   nombre = "jupiter";
   peso_total = peso * g_jupiter / g_tierra;
}
else
{
  alert('Solo la opcion 1 y 2 es valida');
  nombre = "ningun lugar";
  peso_total = 0;
}


document.write("Tu peso en " + nombre + " es " + peso_total.toFixed(2));
