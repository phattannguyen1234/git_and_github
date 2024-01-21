const fs = require('fs');
const fsp = require('fs/promises');

// 5.1
try{
    const index = fs.readFileSync('txt/start.txt', 'utf-8');
    console.log("**Below is the content of start.txt**", '\n', index);
} catch (err){
    console.error(err);
}
// 5.1 **

// 5.2
async function readandwrite(){
    try{
        const index2 = await fsp.readFile('txt/read-this.txt', 'utf-8');
        console.log("**Below is the content of read-this.txt**", '\n', index2);
        console.log("**Writing read-this.txt to start.txt**");
        await fsp.writeFile('txt/start.txt', index2, 'utf-8');
        console.log("File written successfully");
    } catch (err){
        console.error(err);
    }
}
readandwrite();
// 5.2 **