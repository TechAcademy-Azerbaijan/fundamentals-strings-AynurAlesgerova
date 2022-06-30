const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let str=result.input
    let strArray=str.split(" ")
    let count=0
    
    for (let i = 0; i < strArray.length; i++){
        if(strArray[i]!= "")(
            count++
        )
    }
    
    
    console.log(count);
});
