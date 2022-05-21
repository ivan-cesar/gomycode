const fs = require('fs');
fs.readFile(process.argv[2], (err, data) => {
    if (err) {
      return console.log(err);
    }
    var dat = data.toString().split('\n').length -1;
    console.log(dat);
  });
