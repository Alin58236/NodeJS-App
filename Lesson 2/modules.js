
//const xyz = require('./people'); //pentru fisierul intreg, dar daca declaram asa v-a trebui sa apelam constantele din celalalt fisier cu xyz.people / xyz.ages

const {people, ages} = require('./people');

//console.log(people);

console.log(people , ages);

const os = require('os'); // os core file --- built in NODE.JS --- shows info about the operating system

console.log(os.platform(), os.homedir());

