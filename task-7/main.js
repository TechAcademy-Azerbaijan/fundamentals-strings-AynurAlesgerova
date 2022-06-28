const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let str = result.input

    
    let k1=1
    for (let i = 0; i < str.length; i++) {
      if (str[i]==="k") {
        if(str[i]===str[i+1]){
            k1=k1+1
        }
        
      }
    }
    console.log(k1);
      
    
 });
 
