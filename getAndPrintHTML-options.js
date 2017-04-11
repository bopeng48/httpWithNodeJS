function getAndPrintHTML (options) {
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

  console.log(str);
  /* Add your code here */
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

var request = {
  host: process.argv[2],
  path: process.argv[3]
};

if (request.host === undefined){
  getAndPrintHTML(requestOptions);
  console.log("you didn't enter an address");
  // return;
}

getAndPrintHTML(request);