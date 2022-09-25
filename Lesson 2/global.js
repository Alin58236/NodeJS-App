
//console.log(global);


// global.setTimeout(() => {

//     console.log('in the timeout');
    
//     clearInterval(interv); // opreste functia setInterval -> se apeleaza prima (inainte de timeout), pentru ca e limbaj asincron

// }, 3000);


//sau fara "global." in fata, (nu e neaparat), deoarece global object e selectat implicit



setTimeout(() => {
    console.log('in the timeout');
    clearInterval(interv);
}, 3000);

const interv = setInterval(() =>{

    console.log('in the interval'); 

},1000); //trimite un mesaj odata la 1 sec



console.log(__dirname);

console.log(__filename);

// shit -----> console.log(document.querySelector);