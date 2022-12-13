const { Console } = require('console');
const fs = require('fs');
const readline = require('readline');
const input = require('./input');

/***** PART ONE *****/
/*
    A,X -> ROCK -> 1
    B,Y -> PAPER -> 2
    C,Z -> SCISSORS -> 3
    Points:
    LOSS -> 0
    DRAW -> 3
    WIN  -> 6
*/
async function getGameScore(input){
    var scorePlay = 0, scorePlayed = 0;
    const fileStream = fs.createReadStream(input);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const plays = line.split(" ");//Separate the user 1 to user 2 play

        switch(plays[1]){//rock
            case 'X':
                scorePlayed += 1;

                if(plays[0] == "A"){//rock
                    scorePlay += 3;
                }else if(plays[0] == "B"){//paper
                    scorePlay += 0;
                }else if(plays[0] == "C"){//scissors
                    scorePlay += 6;
                }
            break;
            case 'Y'://paper
                scorePlayed += 2;

                if(plays[0] == "A"){//rock
                    scorePlay += 6;
                }else if(plays[0] == "B"){//paper
                    scorePlay += 3;
                }else if(plays[0] == "C"){//scissors
                    scorePlay += 0;
                }
            break;
            case 'Z'://scissors
                scorePlayed += 3;

                if(plays[0] == "A"){//rock
                    scorePlay += 0;
                }else if(plays[0] == "B"){//paper
                    scorePlay += 6;
                }else if(plays[0] == "C"){//scissors
                    scorePlay += 3;
                }
            break;
        }
      }
      score = scorePlayed + scorePlay;

    return score;
}

result = getGameScore('./2022/Day02/puzzleInput.txt').then(function (result) {
    console.log(result);
})

async function getGameScore2(input){
    var score = 0;
    const fileStream = fs.createReadStream(input);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const plays = line.split(" ");//Separate the user 1 to user 2 play

        switch(plays[1]){
            case 'X'://NEED TO LOSE
                if(plays[0] === "A"){//if it is rock
                    //use scissors
                    score += 3;
                }else if(plays[0] === "B"){//if it is paper
                    //use rock
                    score += 1;
                }else{//if it is scissors
                    //use paper
                    score += 2;
                }
            break;
            case 'Y'://NEED TO DRAW
                if(plays[0] === "A"){//if it is  rock
                    //use rock
                    score += 1;
                }else if(plays[0] === "B"){//if it is paper
                    //use paper
                    score += 2;
                }else{//if it is scissors
                    //use scissors
                    score += 3;
                }

                score += 3;
            break;
            case 'Z'://NEED TO WIN
                if(plays[0] === "A"){//if it is  rock
                    //use paper
                    score += 2;
                }else if(plays[0] === "B"){//if it is paper
                    //use scissors
                    score += 3;
                }else{//if it is scissors
                    //use rock
                    score += 1;
                }

                score += 6;
            break;
        }
    }

    return score;
}

result = getGameScore2('./2022/Day02/puzzleInput.txt').then(function (result) {
    console.log(result);
})