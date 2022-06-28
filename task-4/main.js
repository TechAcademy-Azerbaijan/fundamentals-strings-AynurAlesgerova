const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let str = result.input

    let k=0

    for (let i = 0; i < str.length; i++) {
        
        if(str[i]==="!" || str[i]==="."){
            k=k+1
        }
        
    }
    console.log(k);
 
 

});
