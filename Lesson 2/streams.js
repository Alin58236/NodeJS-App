const fs = require('fs'); // import fs
//readStream
const readStream = fs.createReadStream("./'Lesson 2'/docs/blog3.txt", {encoding: 'utf8'});

//writeStream
const writeStream = fs.createWriteStream("./'Lesson 2'/docs/blog4.txt");


//read from text3 and write to text4 explicit way

/*


readStream.on('data', (chunk)=> {      // .on is an eventListener, 'data' is the type of the event

    console.log('--------NEW CHUNK-------');
    console.log(chunk);
    writeStream.write('\n\n\n\n--------NEW CHUNK-------\n\n\n\n');
    writeStream.write(chunk);
})


*/


//piping - easier way
readStream.pipe(writeStream); //piping the readStream to the writeStream


