const fs=require('fs');

module.export={
    callBack:(req,res)=>{
fs.readFile('./index.html','utf-8',(err,data)=>{

    if(err){
res.writeHead(200,{"content-type":"text/html"});
res.write(`${err}`);
res.end();
} else{
    res.writeHead({"content-type":"text/html"});
    res.write(data);
    res.end();
}

});
}
}