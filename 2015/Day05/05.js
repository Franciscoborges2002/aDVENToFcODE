let input = require('./input.js');

let vowels = ["a", "e", "i", "o", "u"];

let naughtyWords = ["ab", "cd", "pq", "xy"]

function getNiceStrings(input){
    let niceStrings = 0;//To return 

    let numberOfVowels = 0;//Get the number of vowels on the word
    let hasSameLetterInRow = 0;//0 -> doesnt have, 1 -> have
    let naughtyWord = 0;//0 -> not bad, 1 -> bad


    for(var i = 0; i < input.length; i++){
        if(input[i] === "\n"){//To another word
            if(naughtyWord !== 1){//If it is a good word
                if(numberOfVowels >= 3 && hasSameLetterInRow >= 1){//If has more than 3 vowels and 1 pair of one letter (aa), (gg)
                    niceStrings++;
                }
            }

            //reset all values
            naughtyWord = 0;
            numberOfVowels = 0;
            hasSameLetterInRow = 0;

        }else{//If it is another word
            if(naughtyWords.indexOf((input[i] + input[i+1])) !== -1){//The value exists
                naughtyWord = 1;//It passes to a bad word
            }else{
                if(vowels.indexOf(input[i]) !== -1){//The value exists
                    numberOfVowels++;
                }

                if(input[i] === input[i+1]){
                    hasSameLetterInRow++;
                }

            }
        }
    }

    return niceStrings;
}

console.log(getNiceStrings(input));