import { Persona } from "./Persona"
import { Empleado } from "./Empleado"
import { estadoCivil } from "./EstadoCivil"

const Personas: Array<Persona> = []

Personas.push(new Persona("Juan", 19, {"calle":"calle","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.CASADO))
Personas.push(new Persona("Sebastian", 23, {"calle":"carrera","ciudad":"Pereira","pais":"Colombia"}, estadoCivil.DIVORCIADO))
Personas.push(new Persona("Camila", 28, {"calle":"diagonal","ciudad":"Cali","pais":"Colombia"}, estadoCivil.SOLTER))
Personas.push(new Persona("Juana", 17, {"calle":"transversal","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.SOLTER))
Personas.push(new Persona("Daniel", 32, {"calle":"calle","ciudad":"Cartagena","pais":"Colombia"}, estadoCivil.CASADO))
Personas.push(new Persona("Carolina", 22, {"calle":"carrera","ciudad":"Manizales","pais":"Colombia"}, estadoCivil.SOLTER))
Personas.push(new Persona("Sara", 31, {"calle":"calle","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.DIVORCIADO))
Personas.push(new Persona("Carlos", 18, {"calle":"transversal","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.CASADO))
Personas.push(new Persona("Pablo", 43, {"calle":"carrera","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.SOLTER))
Personas.push(new Persona("Julieta", 24, {"calle":"transversal","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.SOLTER))

Personas.forEach((Personas) => {
    console.log(Personas.saludar());
})

Personas.forEach((Personas) =>{
    console.log(Personas.direccion.ciudad);
})


export const Empleados: Array<Empleado> = []

Empleados.push(new Empleado("Juan", 19, 60000, 8, {"calle":"calle","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.CASADO))
Empleados.push(new Empleado("Sebastian", 23, 73000, 7, {"calle":"carrera","ciudad":"Pereira","pais":"Colombia"}, estadoCivil.DIVORCIADO))
Empleados.push(new Empleado("Camila", 28, 64000, 7, {"calle":"diagonal","ciudad":"Cali","pais":"Colombia"}, estadoCivil.SOLTER))
Empleados.push(new Empleado("Juana", 17, 40000, 5, {"calle":"transversal","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.SOLTER))
Empleados.push(new Empleado("Daniel", 32, 62000, 7, {"calle":"calle","ciudad":"Cartagena","pais":"Colombia"}, estadoCivil.CASADO))
Empleados.push(new Empleado("Carolina", 22, 65000, 8, {"calle":"carrera","ciudad":"Manizales","pais":"Colombia"}, estadoCivil.SOLTER))
Empleados.push(new Empleado("Sara", 31, 95000, 7, {"calle":"calle","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.DIVORCIADO))
Empleados.push(new Empleado("Carlos", 18, 58000, 8, {"calle":"transversal","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.CASADO))
Empleados.push(new Empleado("Pablo", 43, 67000, 8, {"calle":"carrera","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.SOLTER))
Empleados.push(new Empleado("Julieta", 24, 72000, 8, {"calle":"transversal","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.SOLTER))

Empleados.forEach((Empleados) => {
    console.log(Empleados.supersaludar());
})

Empleados.forEach((Empleados) =>{
    console.log(Empleados.direccion.ciudad);
})