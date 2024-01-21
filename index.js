const fs = require('fs');

// 5.1
try{
    const index = fs.readFileSync('txt/start.txt', 'utf-8');
    console.log("**Below is the content of start.txt**", '\n', index);
} catch (err){
    console.error(err);
}
// 5.1 **