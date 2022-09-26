let input = require('./input.js');

const zeroThree = function(input){
    
    let allMovesDict = {};
    var totalPresents = 1, moreThanOne = 0;
    var numeroValoresVerificarX = 1, numeroValoresVerificarY = 1;
    var lastCoord = "00";

    allMovesDict[lastCoord] = 1;

    for(var i = 0; i < input.length; i++){
        //console.log(lastCoord)
        switch(input[i]){
            case '^':
                lastCoord = lastCoord.substring(0,numeroValoresVerificarX) + (parseInt(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY),10) + 1).toString();

                if((lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY),10) == 10){
                    numeroValoresVerificarY = 2;
                }

                if(allMovesDict[lastCoord] === undefined){
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
                
            break;
            case '>':
                lastCoord = (parseInt(lastCoord.substring(0,1),10) + 1).toString() + lastCoord.substring(1,2);
                if(allMovesDict[lastCoord] === undefined){//If this is not verified, the outcome will be NaN(not a number)
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
            break;
            case 'v':
                lastCoord = lastCoord.substring(0,1) + (parseInt(lastCoord.substring(1,2),10) - 1).toString();
                if(allMovesDict[lastCoord] === undefined){
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
            break;
            case '<':
                lastCoord = (parseInt(lastCoord.substring(0,1),10) - 1).toString() + lastCoord.substring(1,2);
                if(allMovesDict[lastCoord] === undefined){
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
            break;
        }
        totalPresents++;
    }
    
    console.log(allMovesDict)
    for(var key in allMovesDict){
        var value = allMovesDict[key];
        if(allMovesDict[key] > 1){
            moreThanOne++;
        }
    }

    console.log("Total of " + totalPresents + " presents.")
    console.log(moreThanOne + " houses received more than 1 present.")
}(input);