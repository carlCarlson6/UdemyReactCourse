const logg = console.log;

// variables con var, ambito global
var aprendiendo = true;
aprendiendo = false;
console.log(aprendiendo);
aprendiendo = 20
console.log(aprendiendo);
aprendiendo = 'juan';
console.log(aprendiendo);
var aprendiendo2;
console.log(aprendiendo2);

// variables con const, ambito local, const -> constante, se les debe dar un valor al iniciar, no se puede alterar ese valor
//const constante;
//constante = 2;
const constante = 2;
console.log(constante);

// valirables con let, similar a var pero de ambito local
let letvariable;
console.log(letvariable);
letvariable = 2;
console.log(letvariable);

// scope de variables
// scope con var
var musica = 'rock';
if(musica) {
    var musica = 'grunge';
    console.log('dentro del if: ', musica);
}
console.log('fuera del if: ', musica);
// el valor de la variable var se reescribre

// scope con let
let musica1 = 'rock';
if(musica1) {
    let musica1 = 'grunge';
    console.log('dentro del if: ', musica1); // grunge
}
console.log('fuera del if: ', musica1); // // rock 
// si cambiamos el let por const tendremos el mismo efecto
let musica2 = 'rock';
if(musica2) {
    let musica2 = 'grunge';
    console.log('dentro del if: ', musica2); // grunge
}
console.log('fuera del if: ', musica2); // // rock 

// otro ejemplo scope
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a);  // 4
  console.log(b);  // 1
} 

console.log(a); // 5
console.log(b); // 1

// template string
const templateconst = `asd`;
const nombre = "carlos";
const trabajo = "currando";
// concatenar cadenas en js
console.log('nombre: ' + nombre + ', trabajo: ' + trabajo); 
console.log(`nombre: ${nombre}, trabajo: ${trabajo}`); 
console.log(`
    nombre: ${nombre}, 
    trabajo: ${trabajo}`
);// las templte string te permiten hacer salto de lineas de forma mas facil

// funciones en js
// function declaration
saludar('carl'); // no da error si se llama a la funcion antes de declararla
function saludar(name) {
    console.log(`hola: ${name}`);
}
saludar('carl');
// function expression
//hiClient('carl'); // de esta forma hay error, is not defined
const hiClient = function(clientName) {
    console.log(`nombre del client: ${clientName}`);
}
hiClient('carl');
// arrow function
//arrowfunc(); // generara el mismo error porque las funciones flecha de definen como una function expression
const arrowfunc = () => {console.log('soy un funcion flecha');}
arrowfunc();

// parametros default
function actividad(name=String, activity='programando') {
    console.log(`la persona ${name} esta ${activity}`);
}
actividad('carlos', 'programando');
actividad();
actividad('jose');

// Object literal
const persona = {
    nombre: 'carl',
    profesion: 'programador',
    edad: 30
}
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona['edad']);

// Object Constructor
function Tarea(name, urgency) {
    this.nombre = name;
    this.urgencia = urgency;
}
const tarea1 = new Tarea('aprender js', 'urgente');
console.log(tarea1);
console.log(tarea1.nombre, tarea1.urgencia);

// objet prototype -> <nombre_objeto>.prototype.<nombre_metodo> = <definicion de la funcion>
Tarea.prototype.mostrar = function() {
    return `la tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`
}
console.log(tarea1);
logg(tarea1.mostrar());

// object destructing -> extraer valores de un objeto
const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks: ['react', 'vue', 'angular']
}
logg(aprendiendoJS);
// antiguamente
let version1 = aprendiendoJS.version.nueva;
let framework1 = aprendiendoJS.frameworks[1];
logg(version1, framework1);
// forma nueva, destructuring
let {version, frameworks} = aprendiendoJS;
logg(version, frameworks);
let {nueva} = aprendiendoJS.version;
logg(nueva);

// object literal enhacenment -> contrario de object destructing
const banda = 'metallica';
const genero = 'thrash';
const canciones = ['master of pupts', 'seek & and destriy', 'enter sandman']
// forma anterior
const metallica = {banda: banda, genero:genero, canciones:canciones}
logg(metallica);
// forma nueva
const metallica1 = {banda, genero, canciones}
logg(metallica1);

// funciones (o metodos) en un objeto
const person = {
    nombre: 'carl',
    profesion: 'programador',
    edad: 30,
    mostarInfor: function() {
        console.log(`${this.nombre}`);
    },
    mostrarInformacion() {
        console.log(`${this.nombre}`);
    }
}
logg(person);
person.mostarInfor();
person.mostrarInformacion();