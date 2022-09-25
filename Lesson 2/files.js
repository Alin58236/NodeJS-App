const fs = require('fs'); // file sistem module/library

// reading files

/*

fs.readFile('./docs/blog1.txt', (err,data) => { //dam ca parametrii ce o sa folosim in functia de callback
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

*/

// writing files

/*

fs.writeFile('./docs/blog1.txt','hello', ()=>{
    console.log("FILE WRITTEN");
});

fs.writeFile('./docs/blog2.txt','servus', ()=>{
    console.log("FILE WRITTEN");
});

*/

// directories

/*
const dirname = 'assets'

if(!fs.existsSync('./assets')){

    fs.mkdir('./assets',(err)=>{

        if(err){
            console.log(err);
        }
        console.log('folder created');
    
    });
}
else{

    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("Already exists but it's been removed");
        console.log("It can be created again if you call this function --> 'node files'");
    })

}
*/


// deleting files


<<<<<<< HEAD
if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt", (err) => {
=======
if(fs.existsSync("./'Lesson 2'/docs/deleteme.txt")){
    fs.unlink("./'Lesson 2'/docs/deleteme.txt", (err) => {
>>>>>>> db35e3d71c70715345973166c26b0ed7048a5e07
        if(err)
        {
            console.log(err);
        }
        console.log('file deleted');
    })
}