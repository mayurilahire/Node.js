var fs = require('fs');

// Get process.stdin as the standard input object.
var user_input = process.stdin;

// Set input character encoding.
user_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
user_input.on('data', function (data) {

        fs.exists(`${data}.txt`, function(exists) {
            if (exists) {
                console.log('already created');
                process.exit();
            }else {
                fs.writeFile( `${data}.txt`, `Hello ${data} welcome to web!`, function (err) {
                    if(err) throw err;
                });
                console.log('File Created!');
                process.exit();
            }
        });
   
});

