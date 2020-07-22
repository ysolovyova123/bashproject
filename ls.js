let fs = require('fs');

function lsFunc () {
    fs.readdir('./', 'utf8', (err, files) => { // the './' means curr. directory
      if (err) {
        throw err;
      }
      else {
        process.stdout.write(files.join('\n'))
        process.stdout.write("\nprompt > ");
      }
    })
}

module.exports = lsFunc;
