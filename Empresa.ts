import { Empleado } from "./Empleado";
import { Empleados } from ".";
import { estadoCivil } from "./EstadoCivil";

class Empresa {
    private empleados: Array<Empleado>;
  
    constructor() {
      this.empleados = Empleados;
    }
  
    AgregarEmpleado(empleado: Empleado): void {
      this.empleados.push(empleado);
    }
  
    EliminarEmpleado(nombre: string): void {
      const posicion = this.empleados.findIndex((empleado)=>empleado.nombre === nombre);
        this.empleados.splice(posicion, 1);
    }
  
    CalcularTotalSalarios(): number {
      let total = 0;
      this.empleados.forEach((empleado) => {
        total = total + empleado.salario
      });
      return total;
    }
  }

const empresa = new Empresa();

const empleado1 = new Empleado("Carolina", 22, 65000, 8, {"calle":"carrera","ciudad":"Manizales","pais":"Colombia"}, estadoCivil.SOLTER)
const empleado2 = new Empleado("Maria", 25, 40000, 8,  {"calle":"transversal","ciudad":"Medellin","pais":"Colombia"},estadoCivil.DIVORCIADO);


empresa.AgregarEmpleado(empleado1);
empresa.AgregarEmpleado(empleado2);

console.log(empresa.CalcularTotalSalarios()); // imprime 90000

empresa.EliminarEmpleado("Juan");

console.log(empresa.CalcularTotalSalarios()); // imprime 40000

console.log(Empleados);
