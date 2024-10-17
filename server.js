const http=require('http');
http.createServer(function(req,res){
    res.write("alexander zona 17");
    res.end();

}).listen(3001);