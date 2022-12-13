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

function nicerStrings(input){
    let niceStrings = 0;//To return 

    let char;
    let twiceLetters = 0;//xyabxy
    let hasTwiceSeperate = 0;//afa, or aaa

    for(var i = 0; i < input.length; i++){
        if(input[i] === "\n"){//To another word
            if(hasTwiceSeperate >= 1 && twiceLetters >= 1){
                niceStrings++;
            }

            twiceLetters = 0;
            hasTwiceSeperate = 0;
        }else{
            char = input[i] + input[i+1];

            let j = i;
            while(input[j] !== "\n" || (input[j] + input[j+1] + input[j+2] + input[j+3]) === "wadz"){
                console.log(j, input[j] ,(input[j] + input[j+1] + input[j+2] + input[j+3]), i)
                if(char === (input[j] + input[j + 1])){
                    twiceLetters++;
                }
                j++;
            }

            if(input[i] === input[i + 2]){
                hasTwiceSeperate++;
            }
        }
        
        
    }

    return niceStrings;
}
console.log(nicerStrings(input));