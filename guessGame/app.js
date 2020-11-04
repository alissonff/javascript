//Generate a random number
//Give the user the ability to guess
//if it is wrong, ask again (Give hint!)
//if it is right, say that they won

function guessingGame(){
    let randomNumber = Math.floor(Math.random() *11);
    console.log(randomNumber);

    let guess;

    do{
        guess = prompt("Guess a number between 0-10");
        console.log(randomNumber, guess);

        if (guess < randomNumber){
            alert("you guessed too low");
        } else if (guess > randomNumber) {
            alert(" You guessed too high");
        } else{
            alert("Congratz! :)")
        }
    } while(randomNumber != guess
        
        )
}

guessingGame(); 