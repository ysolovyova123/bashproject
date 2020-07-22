//let fs = require('fs');
let pwdFunc = require('./pwd') // The ./ stands for current directory
let lsFunc = require('./ls');

process.stdout.write('prompt >'); // output of 'prompt >'

process.stdin.on('data', (data) => { // input of something (here called data)
  const cmd = data.toString().trim(); // convert that data to string and store in cmd

  if (cmd === 'pwd') {
    pwdFunc();
  }

  if (cmd === 'ls') {
    lsFunc();
  }

  process.stdout.write('You typed: ' + cmd); // output 'you typed' + inputted data
  process.stdout.write('\nprompt > '); // create new line and write 'prompt >' again
});
