// 1. Class declarations
class Person {
    constructor(name ,age) {
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const noh = new Person('noh', 18);
console.log(noh.name);
console.log(noh.age);
noh.speak();


//2. Getter and Setter
class User {
    constructor(firtsName, lastName, age) {
        this.firtsName = firtsName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        
        this._age = value < 0 ? 0 : value;
    }
}
const user01 = new User('shgur', 'bob', 3);
console.log(user01.age);


