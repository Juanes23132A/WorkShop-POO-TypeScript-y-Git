import { Persona } from "./Persona";

export class Empleado extends Persona{
    salario: number
    horasTrabajadas: number

    constructor(nombre:string, edad: number, salario: number, horasTrabajadas: number){
        super(nombre, edad)
        this.salario= salario
        this.horasTrabajadas= horasTrabajadas
    }

    trabajar(): string{
        return `El empleado ${this.nombre} trabaja ${this.horasTrabajadas} horas al dia`
    }
    
    supersaludar(): string {
        return `Empleado: Hola ${this.nombre} tu edad es ${this.getEdad} y el salario es de ${this.salario}`
    }
}