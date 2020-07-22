let fs = require('fs');

function cat(input) {
  fs.readFile(input,'utf8',(err,content) => { //utf8 turns bytes into content
    if (err) {
      throw err;
    }
    else {
      console.log(content)
    }
  })
}

module.exports = cat
