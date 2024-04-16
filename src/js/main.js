//Declaration de strings

let comillaSimple = 'hola mundo'
let comillasDobles = "hola 'mundo'"
let fullName = "Herbin Esteban Restrepo"
const cantidadDeCaracteres = fullName.length
/*

console.info(comillaSimple)
console.info(comillasDobles)
console.info("la cantidad de caracteres =",cantidadDeCaracteres)

//Extraccion de caracteres//////////////////////////////////////////////////////////////////////////

let extraccionDelaletraE= fullName[7] //si el numero esta fuera del rango marca undifine
let extraccionDelaletraE2= fullName.charAt(10)
console.info(extraccionDelaletraE)
console.info(extraccionDelaletraE2)


console.info(fullName[0])
console.info(fullName[1])
console.info(fullName[2])
console.info(fullName[3])
console.info(fullName[4])
console.info(fullName[5])

console.info(fullName.charAt(0))
console.info(fullName.charAt(1))
console.info(fullName.charAt(2))
console.info(fullName.charAt(3))
console.info(fullName.charAt(4))
console.info(fullName.charAt(5))
*/

let namePrincipal = "javier"
let nameL = "combita"
const email = "terreneitor@gmail.com"
let address = "calle siempre # viva-56"
let callNumber = "546254165165"
const age = "58"


//console.info("Hola mundo mi nombre es " + namePrincipal + " " + nameL + " " + email)
//console.info("Hola mundo mi nombre es", namePrincipal, nameL, email)
//console.info(`Hola mundo mi nombre es ${namePrincipal} ${nameL} ${email}`)

const header = `
<header>
        <h1>Hello word</h1>
        <p> Hola mundo, mi nombre es ${namePrincipal} ${nameL}, mi correo es <strong> ${email} </strong> y me encuentras en  ${address}. Si no puedes acercarte me puesdes contactar ${ callNumber} y por ultimo tengo ${ age}</p>
</header>
`


/*

const header = `
<header>
        <h1>Hello word</h1>
        <p> Hola mundo, mi nombre es namePrincipal nameL, mi correo es email y me encuentras en  address. Si no puedes acercarte me puesdes contactar callNumbery por ultimo tengo  age</p>
</header>
`

document.write(header)


const mensaje = "hola mundo"
const mensaje2 = "hola mundos"

document.write(mensaje)
document.write(mensaje2)


//Trasformacion//////////////////////////////////////////////////////
const mensaje = "HOLA MUNDO"
const mensaje2 = "today is a new day"
//console.info(mensaje.toUpperCase())
//console.info(mensaje.toLowerCase())

document.write(mensaje)
document.write(mensaje2)

console.info(mensaje2.toUpperCase())
console.info(mensaje.toLowerCase())

document.write(mensaje)

console.info(mensaje.concat(mensaje2))// unir variables
console.info(mensaje+mensaje2)

*/
// check informacion////////////////////////////////////////////////////////////////////////////
//const mensaje ="hola mundo" 
/*
console.log(mensaje.startsWiths("familia"))//false
console.log(mensaje.startsWith("hola"))
console.log(mensaje.includes("mundo"))
console.log(mensaje.includes("soy"))
console.log(mensaje.endsWith(""))
console.log(mensaje.endsWith(""))
*/

// const mensaje ="javier combita" 
// document.write(mensaje)

// console.log(mensaje.startsWith("a"))
// console.log(mensaje.includes("he"))
// console.log(mensaje.endsWith("a"))

/// limpieza de informacion
const mensaje = "             hola mundo               "
console.info(mensaje)
mensaje.trimStart()
console.info(mensaje.trimStart())
console.info(mensaje.trimEnd())
console.info(mensaje.trim())
