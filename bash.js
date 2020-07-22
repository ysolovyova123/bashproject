//let fs = require('fs');

process.stdout.write('prompt >'); // output of 'prompt >'

process.stdin.on('data', (data) => { // input of something (here called data)
  const cmd = data.toString().trim(); // convert that data to string and store in cmd

  if (cmd === 'pwd') { // if input (cmd) was pwd
    console.log(process.cwd()) // print current working directory
  }

  process.stdout.write('You typed: ' + cmd); // output 'you typed' + inputted data
  process.stdout.write('\nprompt > '); // create new line and write 'prompt >' again
});
