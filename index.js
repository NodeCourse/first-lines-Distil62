const fs = require("fs");
const file = fs.createWriteStream('./file.txt', {'flags' : 'a'});

setInterval(()=>{
    file.write(new Date().getTime() + "\n", );
}, 1000);