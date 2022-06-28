const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let n = parseInt(result.input.split(',')[0])

    let a=parseInt(n/100)
    let b=parseInt(n%10)

    if(a!==b){

        console.log(Math.max(a,b));
    }
    
    else if(a===b){
        console.log("=");
    }
});
