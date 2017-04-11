function getAndPrintHTML () {
  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var str = '';
  // response is a http.incomingmessage type it listens to message such as 'close', 'data', 'error', etc...
  https.get(requestOptions, function(response){

    response.setEncoding('utf8');
    // data is being passed in , is of type string
    response.on('data',function(data) {
      console.log(data);
      str += data;
    });
  });

  console.log(str);
  /* Add your code here */
}


getAndPrintHTML();