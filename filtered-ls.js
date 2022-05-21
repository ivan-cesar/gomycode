var fs = require("fs");
var path = require('path');
fs.readdir(process.argv[2],(err,list)=>{
    if (err) {
       return console.log(err);
    }else{
        list.forEach(lis =>{

            if (path.extname(lis)=== `.${process.argv[3]}`) {
                    console.log(lis);
            }
        });
    }
});

