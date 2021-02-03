import {Dog} from "./components/Dog.js"
import {Nemo} from './components/Nemo.js'

const rexas = new Dog('Rexas', 'bown')
const nemo = new Nemo('Nemo', 'clowncolor')

console.log(rexas)
console.log(nemo)

rexas.voice();
nemo.voice();

rexas.introduce();
nemo.introduce();