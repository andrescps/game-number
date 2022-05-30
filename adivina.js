var intento = 0;
var jugador = prompt("Ingrese su Nombre para empezar");
var numero;
var aleatorio = Math.floor(Math.random() * 5 - 1 + 1) + 1;

while(intento < 3){
    alert("Bienvenido al juego " +jugador);
    numero = parseInt(prompt(jugador+ " Ingrese un numero entre 1 y 5"));
    if(numero >= 1 && numero <= 5){
        
        if(numero != aleatorio){
            alert("Sigue intentando, haz consumido  "+(intento +1) + " Intentos, recuerda que tienes 3");
           
        }else if(numero == aleatorio){
            break;
        }
        }else{
        alert(jugador+ " Debes ingresar un numero entre 1 y 5");
            }
    intento ++;

}

if (numero == aleatorio){
    alert("Ganaste " +jugador+ " ,acertaste el numero en  "+(intento+1)+ " Intentos");
}else{
    alert("Acabaste los intentos " +jugador+ " suerte en la proxima");

}