const input = require('./input');

/***** PART ONE *****/
function whereIsLastLineTerminator(input, iterator){
    howManyToLastLineTerminator = 0;
    
    for(var d = iterator; d > -20; d--){
        console.log(d + ': "' + input[d] + '"')
    }

    return 2;
}

function caloriesCounter(input){
    var caloriesPerElf = [];
    var values2Add = [];
    let value2Add = 0;
    let iteration = 0;

    for(var i = 0; i < input.length; i++){
        //console.log(i + ': "' + input[i] + '"')
        if((input[i] === "\n")){
            if(input[i+2] === "\n"){//If its the last value of the elf
                for(var j = 0; j < values2Add.length; j++){
                    value2Add += values2Add[i];
                }
                caloriesPerElf.push(value2Add);
                value2Add = 0;
            }
            //If its one of the values to add to a calories of the elf

            value2Add = input[i];
            for(var j = i; j < i - 10; j--){
                console.log(j)
                if(input[j] !== "\n" || iteration === 0){
                    //console.log(input[j])
                    value2Add += `${input[j]}`;
                    iteration++;
                }else{
                    break;
                }
            }
            console.log("Valor para adicionar ->" +value2Add);

            value2Add = 0;
        }
    }

    return 0;
}

function whoHasMoreCalories(input){
    var caloriesPerElf = caloriesCounter(input);

    return caloriesPerElf;
}

console.log(whoHasMoreCalories(input))