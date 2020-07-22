//let fs = require('fs');
let pwdFunc = require('./pwd') // The ./ stands for current directory
let lsFunc = require('./ls');
let cat = require('./cat');
let curl = require('./curl');

process.stdout.write('prompt >'); // output of 'prompt >'

process.stdin.on('data', (data) => { // input of something (here called data)
  const cmd = data.toString().trim(); // convert that data to string and store in cmd

  if (cmd.slice(0,3) === 'pwd') {
    pwdFunc();
  }

  if (cmd.slice(0,3) === 'ls') {
    lsFunc();
  }

  if (cmd.slice(0,3) === 'cat') {
    let input = cmd.split(' ')[1]
    cat(input);
  }

  if (cmd.slice(0,4) === 'cur') {
    let input = cmd.split(' ')[1]
    curl(input);
  }

  process.stdout.write('You typed: ' + cmd); // output 'you typed' + inputted data
  process.stdout.write('\nprompt > '); // create new line and write 'prompt >' again
});
