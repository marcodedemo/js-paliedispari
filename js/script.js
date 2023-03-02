
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
let palindromeCheckIndex;

// click action
checkButtonElement.addEventListener("click", isWordPalindrome);













/* -------------------------------------  functions  ------------------------------------- */

// palindrome word function
function isWordPalindrome(){

    
    
    if(!isNaN(inputElement.value) || inputElement.value == "" || inputElement.value == null || inputElement.value.length < 3){

        outputTextElement.innerText = "Inserisci una parola valida che abbia almeno 3 caratteri";
        outputTextElement.style.color = "red" ;

    }else{

        // ciclo di crontrollo lettere
        for (let i = 0; i < inputElement.value.length; i++) {
            
            // se la prima lettera è uguale all'ultima imposto la variabile sentinella a true e procedo con il controllo delle lettere successive
            if(inputElement.value[i] == inputElement.value[inputElement.value.length - 1 - i]){
    
                palindromeCheckIndex = true;
    
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
    
        }
    }
}




