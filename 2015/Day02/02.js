let input = require('./input.js')

function maths(input){
    var total= 0;
    var l =0, w = 0, h = 0, count = 0, wrappingPaper = 0;
    var lastUsed = '';
    var first = true, last = false, hasChanged = false;

    for(var i = 0; i < input.length + 20; i++){
        if(input[i] === 'x' && (input[i+1] == undefined || input[i+2] == undefined || input[i+3] == undefined)){
            last = true;
        }

        if(input[i] === 'x' && first){//If is the first number get from the index 0 to the first x
            for(var j = 0; j < i; j++){
                l = input[j];
                lastUsed = 'l'
            }
            first = false;
        }

        if(last){//If it is the last line
            if(input[i] === 'x'){//
                for(var j = 0; j < i; j++){
                    if(input[i+j] != undefined){
                        l = input[i+j]
                    }
                }
            }
        }

        if((input[i] === 'x' && !first) || (input[i] === '\r' && !first) ){//If we are getting an x
            if(lastUsed === 'h'){//If the last was h
                for(var j = 1; j < i; j++){//
                    if(input[i-j-1] === 'x' || input[i-j-1] === '\n'){//If we have the x or \n, get the number before
                        if(hasChanged){//If the number has changed
                            l = input[i-j] + l;
                        }else{//If the number hasnt changed
                            l = input[i-j];
                            hasChanged = true;
                        }
                        
                        break;
                    }else{
                        if(l === 0){//If the number has changed
                            l = input[i-j];
                            hasChanged = true;
                        }else{//If the number hasnt changed
                            l = input[i-j] + l;
                            hasChanged = true;
                        }
                    }
                }
    
                lastUsed = 'l';//Change the last used
                hasChanged = false;//change the hasChanged var
            }else if(lastUsed === 'l'){//If the last was l
                for(var j = 1; j < i; j++){
                    if(input[i-j-1] === 'x' || input[i-j-1] === '\n'){
                        if(hasChanged){
                            w = input[i-j] + w;
                        }else{
                            w = input[i-j];
                            hasChanged = true;
                        }

                        break;
                    }else{
                        if(w === 0){
                            w = input[i-j];
                            hasChanged = true;
                        }else{
                            w = input[i-j] + w;
                            hasChanged = true;
                        }
                    }
                }
    
                lastUsed = 'w';
                hasChanged = false;
            }else if(lastUsed === 'w'){//If the last was w
                for(var j = 1; j < i; j++){
                    if(input[i-j-1] === 'x' || input[i-j-1] === '\n'){
                        if(hasChanged){
                            h = input[i-j] + h;
                        }else{
                            h = input[i-j];
                            hasChanged = true;
                        }
                         
                        break;
                    }else{
                        if(h === 0){
                            h = input[i-j];
                            hasChanged = true;
                        }else{
                            h = input[i-j] + h;
                            hasChanged = true;
                        }
                    }
                }
    
                lastUsed = 'h';
                hasChanged = false;
            }
            
        }
        
        
        if(input[i] === '\n' || input[i-1] === undefined){
            count = (2*l*w) + (2*w*h) + (2*h*l);
            
            /***** Verify the smallest side *****/
            if(input[i-1] === undefined && last){
                if(l > w && h < w){
                    wrappingPaper = l * h;
                    console.log('wrappingPaper: ' + wrappingPaper + " || l:" + l + " h:" + h)
                }else if(w < l && h < l){  
                    wrappingPaper = h * w;
                    console.log('wrappingPaper: ' + wrappingPaper + " || h:" + h + " w:" + w)
                }else{
                    wrappingPaper = l * w;
                    console.log('wrappingPaper: ' + wrappingPaper + " || l:" + l + " w:" + w)
                }
            }else{
            if(l < w && h < w){
                wrappingPaper = l * h;
            console.log('wrappingPaper: ' + wrappingPaper + " || l:" + l + " h:" + h)
            }else if(w < l && h < l){  
                wrappingPaper = w * h;
            console.log('wrappingPaper: ' + wrappingPaper + " || h:" + h + " w:" + w)
            }else{
                wrappingPaper = l * w;
            console.log('wrappingPaper: ' + wrappingPaper + " || l:" + l + " h:" + h)
            }
            }

            

            console.log(count + ' = ' +(2*l*w)  + ' + ' + (2*w*h) + ' + ' + (2*h*l) + '||'  + 'w:' + w + 'h:' + h + 'l:' + l + 'wrappingPaper:' + wrappingPaper);
            total = total + count + wrappingPaper;
            count = 0;
            l = 0;
            w = 0;
            h = 0;
        }
    }

    return total;
}

console.log(maths(input))