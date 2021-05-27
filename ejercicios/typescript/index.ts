function sum(num1: number, num2: number){
    return num1 + num2
}
const result = sum(5,6)
console.log(result)

// Boolean
let muted: boolean = true
muted = false

// Números
let age = 6
let numerador: number = 42
let denominador: number = age
let resultado = numerador / denominador

// String
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']

let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push('Ricardo')
peopleAndNumbers.push(9001)

// Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}
let colorFavorito: Color = Color.Rojo

// Any
let comodin: any = 'Joker'
comodin = {type: 'Wildcard'}

// Object
let someObject: object = {type: 'Wildcard'}