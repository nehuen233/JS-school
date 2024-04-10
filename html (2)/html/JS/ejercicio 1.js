-function ejercicio1() {

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "julio", "Agosto", "septiembre", "Octubre", "noviembre", "diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }

}

function ejercicio2(){

    var valores = [true, 5, false, "hola", "adios", 2]; 

    if(valores[3].length< valores[4].length) {
        console.log("Adios es mas grande que hola");
        console.log(valores[0]);
    }
    else{
        console.log("hola es más chico que adios");
        console.log(valores[2]);
    }
    console.log( valores[1]+valores[5]);
    console.log(valores[1]-valores[5]);
    console.log(valores[1]*valores[5]);
    console.log(valores[1]/valores[5]);
}

function ejercicio3(){

    var numero1 = 5;
    var numero2 = 8;

    if(numero1<numero2) {
        console.log("5 no es mayor que 8");
    }

    if(numero2>0){
        console.log("8 es positivo");
    }

    if(numero1!=0){
        console.log("5 es negativo o distinto de cero");
    }

    if(numero1++<numero2){
        console.log("Incrementar en 1 unidad el valor 5 no lo hace mayor o igual que 8");
    }
}

function ejercicio4(){

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

    let dni = document.querySelector("#dni").value;
    let letrauser = document
 
    

    if(dni > 0 && dni < 99999999) {
    let nletra = dni % 23;

    let letra = letras[nletra];

    if(letra == letrauser){
        console.log("Las letras son iguales")
   

        console.log("La letra de tu DNI es:  "+ letra);
   
     }
     else{
        console.log("La letra ingresada es incoreccta");
    }

    console.log("La letra de tu dni es:  "+ letra);
    }
    else{
        console.log("Es incorrecto");
    }
}

function ejercicio5(params){

    let factor = prompt("Ingrese un numero para calcular el factorial");

    let producto = 1;
    for (let i = 1; i <= factor; i++) {
        producto = producto * i;
    }

    console.log("El factorial de  "+ factor + " es:  "+producto);
}

function ejercicio6(){
   
    let par = prompt("Ingrese un numero  para calcular si es par o impar");
    
    let result = paroImp(par);

    console.log(result);

}

function paroImp(num){
    if(num == 0){
        return "El numero es invalido";
    }

    if(num % 2 == 0){
        return "el numero es par";
    }else{
        return "el numero es impar";
    }
    
}

function ejercicio7(){
    
    let palabras = prompt("Ingrese una frase por favor");

    let dato = valores(palabras);

    console.log(dato);
}

function valores(caractecs){
    let may = 0;
    let min = 0;

    for (let i = 0; i < caractecs.length; i++) {
        if (caractecs.charAt(i) === caractecs.charAt(i).toUpperCase()) {
            may++;
        } else if (caractecs.charAt(i) === caractecs.charAt(i).toLowerCase()) {
            min++;
        }
    }
    if (may == 0) {
        return "son todas minusculas";
    } else if (min == 0) {
        return "son todas mayusculas";
    }else {
        return "son mayusculas y minusculas";
    }

}

function ejercicio8(){
  
    let result1 = prompt("Ingrese una cadena de texto");

    let date = palabra1(result1);

    console.log(date);

}

function palabra1(texto){
    
    var textoLimpio = texto.replace(/ /g,  '' ).toLowerCase();
    var textoInvertido = textoLimpio.split('').reverse().join('');

    if(textoLimpio === textoInvertido) {
        return 'Es polindromo';
    } else {
        return 'No es palindromo';
    }
}

function ejercicio10(){
    num_array = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    for (i = 0; i < 36000; i++) {
        
        num1 = Math.floor(Math.random() * 6) + 1;

        num2 = Math.floor(Math.random() * 6) + 1;

        suma = num1 + num2;
        num_array[suma]++;
    }
let acu = 0;
    for (let i = 2; i < num_array.length; i++) {
        console.log("El numero "+ i + " salio "+ num_array[i]+ " veces");
        acu = acu + num_array[i];
    }
    console.log(acu);
}

    


        

   


    