let input = require('./input.js');

const zeroThree = function(input){
    
    let allMovesDict = {};
    var totalPresents = 1, moreThanOne = 0;
    var numeroValoresVerificarX = 1, numeroValoresVerificarY = 1;
    var lastCoord = "00", lastLastCoord, partOne, partTwo;

    allMovesDict[lastCoord] = 1;

    for(var i = 0; i < input.length; i++){
        //console.log(lastCoord)
        switch(input[i]){
            case '^':
                lastLastCoord = lastCoord;
                
                lastCoord = lastCoord.substring(0,numeroValoresVerificarX) + (parseInt(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY),10) + 1).toString();
                console.log("^ " + lastCoord + "(" + lastCoord.substring(0,numeroValoresVerificarX) + " " + lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY) +")//" + "nX: " + numeroValoresVerificarX + " ,nY: " + numeroValoresVerificarY);

                if(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + 1) === '-'){//If Y coord goes negative
                    if((lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY),10) < -9){//If Y coord passes 10 negatives
                        numeroValoresVerificarY = 3;
                    }
                }else{//if its positive
                    if(lastCoord.length === 2 && lastLastCoord.substring(0, 1) === '-'){//And last had a -
                        numeroValoresVerificarY = 1;
                    }
                    if(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY) > 9){//If Y coord passes 10
                        numeroValoresVerificarY = 2;
                    }
                }

                if(allMovesDict[lastCoord] === undefined){
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
                
            break;
            case '>':
                lastLastCoord = lastCoord;
                /* if(lastLastCoord.substring(0,numeroValoresVerificarX) === '-1'){
                    numeroValoresVerificarX = 1;
                } */

                partOne = (parseInt(lastCoord.substring(0,numeroValoresVerificarX),10) + 1).toString();
                if(partOne == 0){
                    numeroValoresVerificarX = 1;
                }
                partTwo = lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY);
                lastCoord = partOne + partTwo;
                console.log("> " + lastCoord + "(" + lastCoord.substring(0,numeroValoresVerificarX) + " " + lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY) +")//" + "nX: " + numeroValoresVerificarX + " ,nY: " + numeroValoresVerificarY);

                if(lastCoord.substring(0,1) === '-'){//If Y coord goes negative
                    if(lastCoord.substring(0,numeroValoresVerificarX) === '-'){//If X coord < 0
                        numeroValoresVerificarX = 2;
                    }
                }else{//if its positive
                    if(lastCoord.substring(0,numeroValoresVerificarX) > 9){//If Y coord passes 10
                        numeroValoresVerificarX = 2;
                    }
                }

                if(allMovesDict[lastCoord] === undefined){//If this is not verified, the outcome will be NaN(not a number)
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
            break;
            case 'v':
                lastLastCoord = lastCoord;
                lastCoord = lastCoord.substring(0,numeroValoresVerificarX) + (parseInt(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY),10) - 1).toString();
                console.log("v " + lastCoord + "(" + lastCoord.substring(0,numeroValoresVerificarX) + " " +lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY) +")//" + "nX: " + numeroValoresVerificarX + " ,nY: " + numeroValoresVerificarY);

                if(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + 1) === '-'){//If Y coord goes negative
                    if(lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY) < -9){//If Y coord passes 10 negatives
                        numeroValoresVerificarY = 3;
                    }
                }else{//if its positive
                    if((lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY),10) > 9){//If Y coord passes 10
                        numeroValoresVerificarY = 2;
                    }
                }

                if(allMovesDict[lastCoord] === undefined){
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
            break;
            case '<':
                lastLastCoord = lastCoord;
                lastCoord = (parseInt(lastCoord.substring(0,numeroValoresVerificarX),10) - 1).toString() + lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY);
                console.log("< " + lastCoord + "(" + lastCoord.substring(0,numeroValoresVerificarX) + " " +lastCoord.substring(numeroValoresVerificarX,numeroValoresVerificarX + numeroValoresVerificarY) +")//" + "nX: " + numeroValoresVerificarX + " ,nY: " + numeroValoresVerificarY);
                
                if(lastCoord.substring(0,1) === '-'){//If X coord goes negative
                    if(lastCoord.substring(0,numeroValoresVerificarX) === '-'){//If X coord < 0
                        numeroValoresVerificarX = 2;
                    }
                }else{//if its positive

                    if(lastCoord.substring(0,numeroValoresVerificarX) > 9){//If X coord passes 10
                        numeroValoresVerificarX = 2;
                    }
                }

                if(allMovesDict[lastCoord] === undefined){
                    allMovesDict[lastCoord] = 1;
                }else{
                    allMovesDict[lastCoord] += 1;
                }
            break;
        }

        totalPresents++;
    }
    
    //console.log(allMovesDict)
    for(var key in allMovesDict){
        var value = allMovesDict[key];
        if(allMovesDict[key] > 1){
            moreThanOne++;
        }
    }

    console.log("Total of " + totalPresents + " presents.")
    console.log(moreThanOne + " houses received more than 1 present.")
}(input);