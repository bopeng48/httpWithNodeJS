module.exports = function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');

  var str = '';
  // response is a http.incomingmessage type it listens to message such as 'close', 'data', 'error', etc...
  https.get(options, function(response){

    response.setEncoding('utf8');
    // data is being passed in , is of type string
    response.on('data',function(data) {
      console.log(data);
      str += data;
    });
  });

  callback(str);

};