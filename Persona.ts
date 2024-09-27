export class Persona {
    nombre: string
    private edad: number

    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    public get getEdad(): number{
        return this.edad;
    }

    saludar(): string {
        return (`Persona: Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
}