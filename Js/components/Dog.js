import {Pet} from './Pet.js'

class Dog extends Pet{
    constructor(name, color){
        super(name, color)
        this.sound = 'au au 🐕‍🦺🐕‍🦺'
        this.typeOfFur = 'fur';
        
    }
    

}

export {Dog}