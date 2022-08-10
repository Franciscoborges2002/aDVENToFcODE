let input = require('./input.js')

//console.log(input)

function maths(input){
    var total= 0;
    var l =0, w = 0, h = 0, count = 0;
    var lastUsed = ''
    var first = true;
    for(var i = 0; i < input.length; i++){
        if((input[i] === 'x' && !first) || (input[i] === '\r' && !first) || (input[i-j-1] === '\n' && !first)){//If we are getting an x
            if(lastUsed === 'h'){//If the last was h
                for(var j = 1; j < i; j++){
                    if(input[i-j-1] === 'x' || input[i-j-1] === '\n'){
                        l = input[i-j] + l;
                        break;
                    }else{
                        if(l === 0){
                            l = input[i-j];
                        }else{
                            l = input[i-j] + l;
                        }
                    }
                }
    
                lastUsed = 'l';
            }else if(lastUsed === 'l'){//If the last was l
                for(var j = 1; j < i; j++){
                    if(input[i-j-1] === 'x' || input[i-j-1] === '\n'){
                        w = input[i-j] + w;
                        break;
                    }else{
                        if(w === 0){
                            w = input[i-j];
                        }else{
                            w = input[i-j] + w;
                        }
                    }
                }
    
                lastUsed = 'w';
            }else if(lastUsed === 'w'){//If the last was w
                for(var j = 1; j < i; j++){
                    if(input[i-j-1] === 'x' || input[i-j-1] === '\n'){
                        h = input[i-j] + h;
                        break;
                    }else{
                        if(h === 0){
                            h = input[i-j];
                        }else{
                            h = input[i-j] + h;
                        }
                    }
                }
    
                lastUsed = 'h';
            }
            
        }    

        if(input[i] === 'x' && first){//If is the first number get from the index 0 to the first x
            for(var j = 0; j < i; j++){
                l = input[j];
                lastUsed = 'l'
            }
            first = false;
        }
        
        
        if(input[i] === '\n'){
            count = (2*l*w) + (2*w*h) + (2*h*l);
            console.log(count + ' = ' +(2*l*w)  + ' + ' + (2*w*h) + ' + ' + (2*h*l) + '||' + 'l:' + l + 'w:' + w + 'h:' + h);
            l = 0;
            w = 0;
            h = 0;
            total = total + count;
            count = 0;
        }
    }

    return total;
}

console.log(maths(input))