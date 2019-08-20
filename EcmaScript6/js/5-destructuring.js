// destructuring, for extract values from object

const learnjJS = {
    version:{
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'Vuejs', 'Angular']
}

// Extraeremos valores de este objeto, eso es un Destructuring

console.log(learnjJS);

// old version
// let version = learnjJS.version.nueva;
// console.log(version);
// let frameworks = learnjJS.frameworks[1];
// console.log(frameworks)
// Si el objeto es muy grande, hay que ir 1 por 1, y no seria muy estable

// Destructuring new form
// values first, and what is object you want acces, in this cas is 
let {version, frameworks} = learnjJS;
console.log(version.nueva);
console.log(frameworks[2]);
// is more easy



