import { Empleado } from "./Empleado";
import { estadoCivil } from "./EstadoCivil";

class Departamento {
    nombre: string
    empleados: Array<Empleado>

    constructor(nombre: string, empleados: Empleado) {
        this.nombre = nombre
        this.empleados = []

    }

    añadirEmpleado(empleado: Empleado) {
        this.empleados.push(empleado)
    }

    EliminarEmpleado(empleado: Empleado) {
        const Posicion = this.empleados.findIndex(Empleado => Empleado === empleado)
        this.empleados.splice(Posicion, 1)
    }

    listarEmpleados(): void {
        console.log(`Empleados de el departamento: ${this.nombre}`);
        const EmpleadosDepartamento = this.empleados.forEach((empleado) => {
            console.log(empleado);
        });
        return EmpleadosDepartamento
    }

}

const empleado1 = new Empleado("Juan", 19, 60000, 8, { "calle": "calle", "ciudad": "Medellin", "pais": "Colombia" }, estadoCivil.CASADO)
const empleado2 = new Empleado("Sebastian", 23, 73000, 7, { "calle": "carrera", "ciudad": "Pereira", "pais": "Colombia" }, estadoCivil.DIVORCIADO)
const empleado3 = new Empleado("Camila", 28, 64000, 7, { "calle": "diagonal", "ciudad": "Cali", "pais": "Colombia" }, estadoCivil.SOLTER)
const empleado4 = new Empleado("Juana", 17, 40000, 5, { "calle": "transversal", "ciudad": "Bogota", "pais": "Colombia" }, estadoCivil.SOLTER)
const empleado5 = new Empleado("Daniel", 32, 62000, 7, { "calle": "calle", "ciudad": "Cartagena", "pais": "Colombia" }, estadoCivil.CASADO)
const empleado6 = new Empleado("Carolina", 22, 65000, 8, { "calle": "carrera", "ciudad": "Manizales", "pais": "Colombia" }, estadoCivil.SOLTER)
const empleado7 = new Empleado("Sara", 31, 95000, 7, { "calle": "calle", "ciudad": "Medellin", "pais": "Colombia" }, estadoCivil.DIVORCIADO)
const empleado8 = new Empleado("Carlos", 18, 58000, 8, { "calle": "transversal", "ciudad": "Bogota", "pais": "Colombia" }, estadoCivil.CASADO)
const empleado9 = new Empleado("Pablo", 43, 67000, 8, { "calle": "carrera", "ciudad": "Bogota", "pais": "Colombia" }, estadoCivil.SOLTER)
const empleado10 = new Empleado("Julieta", 24, 72000, 8, { "calle": "transversal", "ciudad": "Medellin", "pais": "Colombia" }, estadoCivil.SOLTER)

const DepartamentoBackend = new Departamento("BackEnd", empleado1)
const DepartamentoFrontend = new Departamento("Frontend", empleado2)
const DepartamentoQA = new Departamento("QA", empleado3)
const DepartamentoProjectManager = new Departamento("Project Manager", empleado4)

DepartamentoBackend.añadirEmpleado(empleado1)
DepartamentoBackend.añadirEmpleado(empleado2)
DepartamentoBackend.añadirEmpleado(empleado3)
DepartamentoFrontend.añadirEmpleado(empleado4)
DepartamentoFrontend.añadirEmpleado(empleado5)
DepartamentoQA.añadirEmpleado(empleado6)
DepartamentoQA.añadirEmpleado(empleado7)
DepartamentoQA.añadirEmpleado(empleado8)
DepartamentoProjectManager.añadirEmpleado(empleado9)
DepartamentoProjectManager.añadirEmpleado(empleado10)

DepartamentoBackend.listarEmpleados()
DepartamentoFrontend.listarEmpleados()
DepartamentoQA.listarEmpleados()
DepartamentoProjectManager.listarEmpleados()

console.log("\n Cambios realizados\n");


DepartamentoBackend.EliminarEmpleado(empleado6)
DepartamentoFrontend.EliminarEmpleado(empleado7)
DepartamentoQA.EliminarEmpleado(empleado9)
DepartamentoProjectManager.EliminarEmpleado(empleado4)


DepartamentoBackend.listarEmpleados()
DepartamentoFrontend.listarEmpleados()
DepartamentoQA.listarEmpleados()
DepartamentoProjectManager.listarEmpleados()