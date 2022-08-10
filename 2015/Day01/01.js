const input = require('./input');

/***** PART ONE *****/
function whichFloor1(input){
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

console.log(whichFloor1(input))

/***** PART TWO *****/
function whichFloor2(input){
    var floor = 0;
    var position = 0;
    var timesInBasement = []
    for(var i = 0; i < input.length; i++){
        position++;
        if(input[i] == '('){
            floor++;
        }else if(input[i] == ')'){
            floor--;
        }else{
            console.log('Didn\'t understood the input: ' + input[i])
        }

        if(floor == -1){
            return position;
        }
    }

    console.log(timesInBasement)
    return position;
}

console.log(whichFloor2(input))