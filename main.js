// Scrivi un programma che stampi i numeri da 1 a 100, 
/*
- per i multipli di 3 stampi “Fizz” al posto del numero
- per i multipli di 5 stampi Buzz. 
- Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

var numbers = [];

for (var i=1; i<=100; i++) {
    // console.log(i);
  numbers.push([i]);
}
    //console.log(numbers);



for (var j=0; j<numbers.length; j++){

    if(numbers[j] % 3 === 0 && numbers[j] % 5 === 0){

        console.log("FizzBuzz");
        document.getElementById("FizzBuzz").innerHTML="FizzBuzz";

    } else if (numbers[j] % 5 === 0) {

        console.log("Buzz");
        document.getElementById("FizzBuzz").innerHTML="Buzz";

    } else if(numbers[j] % 3 === 0){

        console.log("Fizz");
        document.getElementById("FizzBuzz").innerHTML="Fizz";

    } else {

        console.log(numbers[j]);
        document.getElementById("FizzBuzz").innerHTML=numbers[j];

    }

}