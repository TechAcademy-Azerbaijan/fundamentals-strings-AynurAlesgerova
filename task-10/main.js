const prompt = require('prompt');
prompt.start();
prompt.get('input', function (err, result) {
  let str=result.input
  let index=0
  let min=50
  let max=0
  let array=[]

  for (let i = 0; i < str.length; i++) {
    
    if(str[i]==" "){
        index=i
        array.push(index)
      } 
              
  }
 
  if(array.length>1){
    console.log(Math.min(...array));
    console.log(Math.max(...array));


}
});
