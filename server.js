import http from 'http'
http.createServer(
    function(req, res){
        res.end('<h1>Hello Node!!!!</h1>\n')
    }
    ).listen(3000)