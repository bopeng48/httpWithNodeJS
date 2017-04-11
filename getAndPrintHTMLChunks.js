var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks () {
  https.get(requestOptions, function(event) {
    // event is of type http.incomingMessage
    event.on("data",function (data){
      console.log(data);
    });
  });

}

getAndPrintHTMLChunks();