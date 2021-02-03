class Animal {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.sound = 'au miau kar bul bul '
        

    }

    voice(){
        console.log(`${this.name} says: ${this.sound}`)
    }

    introduce() {
        console.log(`hi I am ${this.name} my ${this.typeOfFur} is ${this.color}`)
    }

}


export {Animal }