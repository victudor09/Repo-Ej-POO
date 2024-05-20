//Crear clase Person

class Person{
    constructor(name, age, genre){
        this.name = name
        this.age = age
        this.genre = genre
    }

    obtDetails = () => {
        console.log(`${this.name}, ${this.age}, ${this.genre}`);
    }
}

const person1 = new Person('Carlos', 20, 'masculino')
person1.obtDetails()


//Crear clase Student que hereda de Person, e incluye las
// propiedades course y group y el método register(), que muestre
// por pantalla el resultado.

class Student extends Person {
    constructor(name, age, genre, course, group){
        super(name, age, genre)
        this.course = course
        this.group = group
    }
    register = () => {
        console.log(`${this.name}, ${this.age}, ${this.genre}, ${this.course}, ${this.group}`);
    }
}

const student1 = new Student('Jose', 20, 'masculino', '4to curso', 'grupo A')
student1.register()


// Clase Teacher que hereda de Person, e incluye las propiedades
// asignatura y level y el método assign(), que muestre en pantalla
//el resultado.

class Teacher extends Person {
    constructor(name, age, genre, asignatura, level){
        super(name, age, genre)
        this.asignatura = asignatura
        this.level = level
    }
    assign = () => {
        console.log(`${this.name}, ${this.age}, ${this.genre}, ${this.asignatura}, ${this.level}`)
    }
}

const teacher1 = new Teacher('Alicia', 58, 'femenino', 'ingles', 'advanced')
teacher1.assign()