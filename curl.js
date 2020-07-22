let rq = require('request')

function curl (input) {
  rq(input, (err,response,body) => {
    if (err) {
      throw err;
    }
    else {
      console.log(body)
    }
  })
}

module.exports = curl;
