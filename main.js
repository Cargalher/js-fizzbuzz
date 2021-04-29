
var numbers = [];
// Scrivi un programma che stampi i numeri da 1 a 100, 
for (var i=1; i<=100; i++) { 
    // console.log(i);
  numbers.push(i);
}
    //console.log(numbers);



for (var j=0; j<numbers.length; j++){
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    // i % 15 == 0
    if(numbers[j] % 3 === 0 && numbers[j] % 5 === 0){

        console.log("FizzBuzz");
        

    } else if (numbers[j] % 5 === 0) {
        // per i multipli di 5 stampi Buzz. 
        console.log("Buzz");
        

    } else if(numbers[j] % 3 === 0){
        // per i multipli di 3 stampi “Fizz” al posto del numero
        console.log("Fizz");
       

    } else {

        console.log(numbers[j]);
       
    }

}