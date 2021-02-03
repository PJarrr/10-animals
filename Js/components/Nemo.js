import {Animal} from './Animal.js'

class Nemo extends Animal{
    constructor(name, color){
        super(name, color)
        
        this.typeOfFur = 'scales';
        
    }
    
}




export {Nemo}