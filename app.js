// JavaScript

console.log('Hello')

const a = 1
const b = 2
console.log(a+b)

const nome = "Ari"
const idade = 69

function greeting(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade}`)
    if (idade > 60){
        console.log('Ta veinha ja')
    } else {
        console.log('Ainda ta novinha')
    }
}

greeting(nome, idade)
greeting("Bruno", 33)