const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let a = parseInt(result.input.split(',')[0])
    // let array = result.input.split(',')[1].split(' ')

    let b = parseInt(result.input.split(',')[1])
    let c = parseInt(result.input.split(',')[2])

    console.log(Math.min(a,Math.min(b,c)));
});
