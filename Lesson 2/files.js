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


if(fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt", (err) => {
        if(err)
        {
            console.log(err);
        }
        console.log('file deleted');
    })
}