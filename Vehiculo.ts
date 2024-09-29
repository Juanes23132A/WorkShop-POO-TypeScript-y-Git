abstract class Vehiculo {
    abstract arrancar() : void
}

class Coche extends Vehiculo{
    arrancar(): void {
        console.log('El carro arranca')
    }
}

class Moto extends Vehiculo{
    arrancar(): void {
        console.log('La moto arranca')
    }
}