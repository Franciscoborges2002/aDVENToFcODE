let input = require('./puzzlesInputs/01')

let puzzleInput = input.puzzleInput

function whichFloor(input){
    var floor = 0;
    for(var i = 0; i < input.length; i++){
        if(input[i] == '('){
            floor++;
        }else if(input[i] == ')'){
            floor--;
        }else{
            console.log('Didn\'t understood the input: ' + input[i])
        }
    }
    return floor
}

console.log(whichFloor(puzzleInput))