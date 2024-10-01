import { Empleados } from "."
import { Empleado } from "./Empleado"
import { estadoCivil } from "./EstadoCivil"

class Proyecto{
    nombre: string
    colaboradores: Array<Empleado>

    constructor (nombre: string, colaboradores: Empleado){
        this.nombre = nombre
        this.colaboradores = []
    }

    AgregarColaborador(empleado: Empleado){
        this.colaboradores.push(empleado)
    }

    EliminarColaborador(empleado: Empleado){
        const posicion = this.colaboradores.findIndex(Empleado => Empleado === empleado)
        this.colaboradores.splice(posicion, 1)
    }
}

const empleado1 =new Empleado("Juan", 19, 60000, 8, {"calle":"calle","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.CASADO)
const empleado2 =new Empleado("Sebastian", 23, 73000, 7, {"calle":"carrera","ciudad":"Pereira","pais":"Colombia"}, estadoCivil.DIVORCIADO)
const empleado3 =new Empleado("Camila", 28, 64000, 7, {"calle":"diagonal","ciudad":"Cali","pais":"Colombia"}, estadoCivil.SOLTER)
const empleado4 =new Empleado("Juana", 17, 40000, 5, {"calle":"transversal","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.SOLTER)
const empleado5 =new Empleado("Daniel", 32, 62000, 7, {"calle":"calle","ciudad":"Cartagena","pais":"Colombia"}, estadoCivil.CASADO)
const empleado6 =new Empleado("Carolina", 22, 65000, 8, {"calle":"carrera","ciudad":"Manizales","pais":"Colombia"}, estadoCivil.SOLTER)
const empleado7 =new Empleado("Sara", 31, 95000, 7, {"calle":"calle","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.DIVORCIADO)
const empleado8 =new Empleado("Carlos", 18, 58000, 8, {"calle":"transversal","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.CASADO)
const empleado9 =new Empleado("Pablo", 43, 67000, 8, {"calle":"carrera","ciudad":"Bogota","pais":"Colombia"}, estadoCivil.SOLTER)
const empleado10 =new Empleado("Julieta", 24, 72000, 8, {"calle":"transversal","ciudad":"Medellin","pais":"Colombia"}, estadoCivil.SOLTER)

const Proyecto1 = new Proyecto ("Gestion estudiantes", empleado1)
const Proyecto2 = new Proyecto ("Gestion biblioteca", empleado3)
const Proyecto3 = new  Proyecto ("Gestion supermercado", empleado1)

Proyecto1.AgregarColaborador(empleado2)
Proyecto1.AgregarColaborador(empleado3)
Proyecto1.AgregarColaborador(empleado4)
Proyecto2.AgregarColaborador(empleado4)
Proyecto2.AgregarColaborador(empleado5) 
Proyecto2.AgregarColaborador(empleado6) 
Proyecto2.AgregarColaborador(empleado7)
Proyecto3.AgregarColaborador(empleado6) 
Proyecto3.AgregarColaborador(empleado7) 
Proyecto3.AgregarColaborador(empleado8) 
Proyecto3.AgregarColaborador(empleado9) 
Proyecto3.AgregarColaborador(empleado10)

console.log("Proyecto 1",Proyecto1.colaboradores);
console.log("Proyecto 2", Proyecto2.colaboradores);
console.log("Proyecto 3", Proyecto3.colaboradores);

Proyecto1.EliminarColaborador(empleado1)
Proyecto1.EliminarColaborador(empleado2)
Proyecto2.EliminarColaborador(empleado3)
Proyecto2.EliminarColaborador(empleado4)
Proyecto3.EliminarColaborador(empleado10)
Proyecto3.EliminarColaborador(empleado9)
console.log("\nCambios aplicados \n");


console.log("Proyecto 1",Proyecto1.colaboradores);
console.log("Proyecto 2", Proyecto2.colaboradores);
console.log("Proyecto 3", Proyecto3.colaboradores);