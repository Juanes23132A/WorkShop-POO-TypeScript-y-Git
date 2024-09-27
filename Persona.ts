import { Direccion } from "./Direccion"

export class Persona {
    nombre: string
    private edad: number
    direccion: Direccion

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre
        this.edad = edad
        this.direccion= direccion
    }

    public get getEdad(): number{
        return this.edad;
    }

    saludar(): string {
        return (`Persona: Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
}