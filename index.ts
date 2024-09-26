import { Persona } from "./Persona"

const Personas: Array<Persona> = []

Personas.push(new Persona("Juan", 19))
Personas.push(new Persona("Sebastian", 23))
Personas.push(new Persona("Camila", 28))
Personas.push(new Persona("Juana", 17))
Personas.push(new Persona("Daniel", 32))
Personas.push(new Persona("Carolina", 22))
Personas.push(new Persona("Sara", 31))
Personas.push(new Persona("Carlos", 18))
Personas.push(new Persona("Pablo", 43))
Personas.push(new Persona("Julieta", 24))

Personas.forEach((Personas) => {
    console.log(Personas.saludar());
})