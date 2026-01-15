console.log(typeof(2)); // number
console.log(typeof(true)); // boolean
console.log(typeof('Aladár')); // string
console.log(typeof({name:'Béla', age: 42})); // object
console.log(typeof(function f(a, b) {return a + b})); // function
console.log(typeof(nonexisting)); // undefined

let a = 0.1 + 0.2;
console.log(a)
console.log(a.toFixed(2)) // Kerekítrés
console.log(typeof(a.toFixed(2))) // String lesz a típusa

// STRING (Szövegek)
let firstName = 'Kolompár'
let lastName = 'Gusztáv'
console.log('Hello' + ' ' + firstName + ' ' + lastName)
console.log(`Hello ${firstName} ${lastName}`)

let kocka = "kocka"
let has = "has"
let doboz = kocka + has
console.log(doboz)

// BOOLEAN
console.log('BOOLEAN')
console.log(typeof true)
console.log(Boolean(0)) // True
console.log(Boolean(1)) // False
console.log(Boolean("")) // False
console.log(Boolean("a")) // True

// Object
let person = {
    name: "Eminem",
    age: 39,
    isStudent: false
}

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
console.log(person.address); // Undefined: Nincs ilyen adat

let xy;
console.log(xy); //Undefined
console.log(typeof xy); //Undefined