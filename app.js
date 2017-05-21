/**
 * Created by hoangdv on 0021, May, 21, 2017.
 */
var http = require('http');
var pid = process.pid;
var num = 1;
var PORT = process.argv[2] || process.env.PORT || 8080;
http.createServer(function(req, res) {
    // large task :)
    for (var i = 1e7; i > 0; i--) {
    }
    console.log('Handling request from with updated code 1st time ' + pid);
    console.log('num of request ' + num);
    res.end('Hello from ' + pid + '\n');
    num = num + 1
}).listen(PORT, function() {
    console.log('Started ' + pid);
    console.log('Server listen on %s', PORT);
});
