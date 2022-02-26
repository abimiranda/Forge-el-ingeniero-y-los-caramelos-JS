/*
1- hay que repartir ciertos pasos hasta que se finalicpe la ultima condicion
2- bucle -> Partida -> km=0
3- bucle -> Detenerse cuando -> km=10
4- sabra parar cuando km llegue a 10
5- el incremento es de 3
6- la variable para contar km y los caramelos*/ 

/*var caramelo = 0; // comienza sin dar caramelos

for(var km=0; km<=10; km=km+3){
    if (km <=6){
        caramelo = caramelo+1
    }
}
console.log(caramelo);*/

//STRETCH 1

var caramelo = 0; // comienza sin dar caramelos
var desplazamiento = 10; //variable establecida en 10 para que si se muestre por pantalla los 3 caramelos que dará-

for(var km=0; km<=10; km=km+3){
    if (km <=6 && desplazamiento>9){
        caramelo = caramelo+1;
    }
}
console.log(caramelo);
