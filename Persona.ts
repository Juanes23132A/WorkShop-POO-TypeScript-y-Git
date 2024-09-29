import { Direccion } from "./Direccion"
import { Coche, Moto, Vehiculo } from "./Vehiculo"

export class Persona {
    nombre: string
    private edad: number
    direccion: Direccion
    vehiculos: Array<Vehiculo>

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
        this.vehiculos = []
    }

    public get getEdad(): number {
        return this.edad;
    }

    AgregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo)
    }

    Vehiculos() {
        console.log(this.vehiculos);
    }

    saludar(): string {
        return (`Persona: Tú nombre es ${this.nombre} y tienes ${this.edad} años`);
    }
}
const moto1 = new Coche("SuperDuke 1290 R")
const moto2 = new Moto("Husqvarna 701 Supermotard")
const carro1 = new Moto("Camaro ZL1")


const Persona1 = new Persona("Juan", 19, { "calle": "calle", "ciudad": "Medellin", "pais": "Colombia" })

Persona1.AgregarVehiculo(moto1);
Persona1.AgregarVehiculo(moto2);
Persona1.AgregarVehiculo(carro1);

console.log(Persona1);
Persona1.Vehiculos();