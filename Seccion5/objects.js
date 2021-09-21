const person = {
    name: "Marluan",
    lastname: "Espiritusanto",
    isStudents: true,
    getFullName() {
        return this.name + " " + this.lastname;
    }
}

console.log(person.getFullName());

class Person {
    constructor(){
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

const person = new Person("Nico");
let name = person.name;
console.log('Name: ', name); 

