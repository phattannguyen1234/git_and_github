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
// 5.2 **

// 5.3
async function readandwrite2(){
    try{
        console.log("**Reading append.txt**");
        const index3 = fs.readFileSync('txt/append.txt', 'utf-8');
        console.log("**Writing append.txt to start.txt**");
        fs.appendFileSync('txt/start.txt', '\n' + index3, 'utf-8');
    } catch(err){
        console.log(err);
    }
}
// 5.3 **

// 5.4 - 5.5
async function rename(){
    try{
        console.log('Renaming start.txt to final2.txt');
        fs.renameSync('txt/start.txt', 'txt/final2.txt');
        const index4 = await fs.readFileSync('txt/final2.txt', 'utf-8');
    console.log("**Below is the content of final2.txt**", '\n', index4);
    }catch(err){
        console.log(err);
    }
}
// 5.4 - 5.5 **

async function main(){
    await readandwrite();
    await readandwrite2();
    await rename();
}
main();

