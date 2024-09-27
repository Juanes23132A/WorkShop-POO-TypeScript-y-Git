import { Empleado } from "./Empleado"
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

Personas.forEach((Personas) => {
    console.log(Personas.getEdad);
})



const Empleados: Array<Empleado> = []

Empleados.push(new Empleado("Juan", 19, 60000, 8))
Empleados.push(new Empleado("Sebastian", 23, 73000, 7))
Empleados.push(new Empleado("Camila", 28, 64000, 7))
Empleados.push(new Empleado("Juana", 17, 40000, 5))
Empleados.push(new Empleado("Daniel", 32, 62000, 7))
Empleados.push(new Empleado("Carolina", 22, 65000, 8))
Empleados.push(new Empleado("Sara", 31, 95000, 7))
Empleados.push(new Empleado("Carlos", 18, 58000, 8))
Empleados.push(new Empleado("Pablo", 43, 67000, 8))
Empleados.push(new Empleado("Julieta", 24, 72000, 8))

Empleados.forEach((Empleados) => {
    console.log(Empleados.supersaludar());
})