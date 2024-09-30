import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { estadoCivil } from "./EstadoCivil";

export class Empleado extends Persona{
    salario: number
    horasTrabajadas: number
    

    constructor(nombre:string, edad: number, salario: number, horasTrabajadas: number, direccion: Direccion, EstadoCivil: estadoCivil){
        super(nombre, edad, direccion, EstadoCivil)
        this.salario= salario
        this.horasTrabajadas= horasTrabajadas
        this.EstadoCivil= EstadoCivil
    }

    trabajar(): string{
        return `El empleado ${this.nombre} trabaja ${this.horasTrabajadas} horas al dia`
    }
    
    supersaludar(): string {
        return `Empleado: Hola ${this.nombre} tu edad es ${this.getEdad} y el salario es de ${this.salario}`
    }
}