import { Persona } from "./Persona";

class Empleado extends Persona{
    salario: number
    horasTrabajadas: number

    constructor(nombre:string, edad: number, salario: number, horasTrabajadas: number){
        super(nombre, edad)
        this.salario= salario
        this.horasTrabajadas= horasTrabajadas
    }

    trabajar(): string{
        return `El empleado ${this.nombre} de ${this.getEdad} años de edad trabaja ${this.horasTrabajadas} horas al dia`
    }
}