const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let str = result.input

   
    let k=0
    let p=0
 
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i])==2) {
            k=k+1
        }
        else if(parseInt(str[i])==5){
            p=p+1
        }   
    }
    
    
    if (k>p) {

        console.log("2");
    }
    else{
        console.log("5");
    }



});
