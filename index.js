/**
 * Created by hoangdv on 0021, May, 21, 2017.
 */
var cluster = require('cluster');
var os = require('os');
if (cluster.isMaster) {
    var cpus = os.cpus().length;
    //start as many children as the number of CPUs
    for (var i = 0; i < cpus; i++) {
        cluster.fork();
    }

    // If worker dies, fork one more.Resiliency and availability with the cluster module.
    cluster.on('exit', function(worker, code) {
        if (code !== 0 && !worker.suicide) {
            console.log('Worker crashed. Starting a new worker');
            cluster.fork();
        }
    });

} else {
    require('./app'); //worker:start the server
}
