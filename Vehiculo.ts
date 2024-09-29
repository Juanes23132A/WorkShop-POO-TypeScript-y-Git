export abstract class Vehiculo {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract arrancar(): void
}

export class Coche extends Vehiculo {
    arrancar(): void {
        console.log('El carro arranca')
    }
}

export class Moto extends Vehiculo {
    arrancar(): void {
        console.log('La moto arranca')
    }
}