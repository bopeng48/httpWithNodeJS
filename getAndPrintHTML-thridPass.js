function getHTML (options, callback) {

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

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);