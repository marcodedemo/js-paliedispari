
// chiedo all'utente di inserire una parola
// tramite una funzione creo un ciclo di controllo 
// creo una variabile sentinella

// SE la prima e l'ultima lettera sono uguali
//     continua il ciclo e controlla la seconda e la penultima lettera 
//     (cosi' fino ad esaurimento lettere )

//     imposto l'indice di controllo = true

 

    
// SE l'indice di controllo = true
//     ° stampo "la parola è palindroma"
// ALTRIMENTI 
//     ° stampo "la parola non è palindroma"


// dichiarazione variabili per controllo del DOM
let inputElement = document.getElementById("word-input");
let checkButtonElement = document.getElementById("check-btn");
let outputTextElement = document.getElementById("output-text");

// variabile sentinella
let palindromeCheckIndex = true;

// click action
checkButtonElement.addEventListener("click", isWordPalindrome);



/* -------------------------------------  function  ------------------------------------- */

// palindrome word function
function isWordPalindrome(){

    palindromeCheckIndex = true;
    
    if(!isNaN(inputElement.value) || inputElement.value == "" || inputElement.value == null || inputElement.value.length < 3){

        outputTextElement.innerText = "Inserisci una parola valida che abbia almeno 3 caratteri";
        outputTextElement.style.color = "red" ;

    }else{

        // ciclo di crontrollo lettere
        for (let i = 0; i < (inputElement.value.length); i++) {
            
            // se la prima lettera è uguale all'ultima imposto la variabile sentinella a true e procedo con il controllo delle lettere successive
            if(inputElement.value[i] == inputElement.value[inputElement.value.length - 1 - i]){
    
    
            // altrimenti imposto la variabile sentinella a falso
            }else{
    
                palindromeCheckIndex = false;
            }
        }
    
    
        // se la variabile sentinella è vera 
        if(palindromeCheckIndex){
    
            // stampo "la parola che hai inserito è palindroma"
            outputTextElement.innerText = "La parola che hai inserito è palindroma";
            outputTextElement.style.color = "green"
    
        // altrimenti
        }else{
    
            // stampo "la parola che hai inserito non è palindroma"
            outputTextElement.innerText = "La parola che hai inserito non è palindroma";
            outputTextElement.style.color = "red" ;

    
        }
    }
}






// chiedo all'utente di scegliere tra pari e dispari e di inserire un numero da 1 a 5
// genero un numero randomico da 1 a 5 per il computer
// sommo i due numeri
// stabilisco se la somma dei due numeri è pari o dispari e decreto il vincitore 


let evenButtonElement = document.getElementById("even-btn");
let oddButtonElement = document.getElementById("odd-btn");
let userNumberElement = document.getElementById("user-number");
let outputElement = document.getElementById("even-odd-output")




evenButtonElement.addEventListener("click", isEven);

oddButtonElement.addEventListener("click", isOdd);




// computer random number generator
function generateRandom(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// even check function
function isEven(){

    if(userNumberElement.value > 0 && userNumberElement.value < 6){

        let randomComputerNumber = generateRandom(1,5);
        
        if((parseInt(userNumberElement.value) + randomComputerNumber) % 2 == 0){

            outputElement.innerText = ("hai scelto pari e il numero " + userNumberElement.value + ", il numero generato dal computer è " + randomComputerNumber + ", il risultato è pari quindi hai vinto");

            outputElement.style.color = "green";

        }else{

            outputElement.innerText = ("hai scelto pari e il numero " + userNumberElement.value + ", il numero generato dal computer è " + randomComputerNumber + ", il risultato è dispari quindi hai perso");

            outputElement.style.color = "red";

        }

    }else{

        outputElement.innerText = ("inserisci un valore compreso tra 1 e 5");
        outputElement.style.color = "black";
    }
}

// odd check function
function isOdd(){

    if(userNumberElement.value >= 1 && userNumberElement.value <= 5){

        let randomComputerNumber = generateRandom(1,5);
        
        if((parseInt(userNumberElement.value) + randomComputerNumber) % 2 !== 0){

            outputElement.innerText = ("hai scelto dispari e il numero " + userNumberElement.value + ", il numero generato dal computer è " + randomComputerNumber + ", il risultato è dispari quindi hai vinto");

            outputElement.style.color = "green";

        }else{

            outputElement.innerText = ("hai scelto dispari e il numero " + userNumberElement.value + ", il numero generato dal computer è " + randomComputerNumber + ", il risultato è pari quindi hai perso");

            outputElement.style.color = "red";

        }

    }else{

        outputElement.innerText = ("inserisci un valore compreso tra 1 e 5");
        outputElement.style.color = "black";
    }
}