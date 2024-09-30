import { Empleado } from "./Empleado"
import { Direccion } from "./Direccion";

const EmpleadosJson = [
    {
        "nombre": "Juan",
        "edad": 19,
        "salario": 60000,
        "horasTrabajadas": 8,
        "direccion": {
            "calle": "calle",
            "ciudad": "Medellin",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Sebastian",
        "edad": 23,
        "salario": 73000,
        "horasTrabajadas": 7,
        "direccion": {
            "calle": "carrera",
            "ciudad": "Pereira",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Camila",
        "edad": 28,
        "salario": 64000,
        "horasTrabajadas": 7,
        "direccion": {
            "calle": "diagonal",
            "ciudad": "Cali",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Juana",
        "edad": 17,
        "salario": 40000,
        "horasTrabajadas": 5,
        "direccion": {
            "calle": "transversal",
            "ciudad": "Bogota",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Daniel",
        "edad": 32,
        "salario": 62000,
        "horasTrabajadas": 7,
        "direccion": {
            "calle": "calle",
            "ciudad": "Cartagena",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Carolina",
        "edad": 22,
        "salario": 65000,
        "horasTrabajadas": 8,
        "direccion": {
            "calle": "carrera",
            "ciudad": "Manizales",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Sara",
        "edad": 31,
        "salario": 95000,
        "horasTrabajadas": 7,
        "direccion": {
            "calle": "calle",
            "ciudad": "Medellin",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Carlos",
        "edad": 18,
        "salario": 58000,
        "horasTrabajadas": 8,
        "direccion": {
            "calle": "transversal",
            "ciudad": "Bogota",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Pablo",
        "edad": 43,
        "salario": 67000,
        "horasTrabajadas": 8,
        "direccion": {
            "calle": "carrera",
            "ciudad": "Bogota",
            "pais": "Colombia"
        }
    },
    {
        "nombre": "Julieta",
        "edad": 24,
        "salario": 72000,
        "horasTrabajadas": 8,
        "direccion": {
            "calle": "transversal",
            "ciudad": "Medellin",
            "pais": "Colombia"
        }
    }
]

const empleados: Empleado[] = EmpleadosJson.map((empleadoJson: any) => {
    const direccion = empleadoJson.direccion;
    return new Empleado(
      empleadoJson.nombre,
      empleadoJson.edad,
      empleadoJson.salario,
      empleadoJson.horasTrabajadas,
      { calle: direccion.calle, ciudad: direccion.ciudad, pais: direccion.pais }, empleadoJson.EstadoCivil
    );
  });
  
  console.log(empleados);

const serializacion = () => {
    const JsonString = JSON.stringify(empleados)
    return JsonString
}
console.log(serializacion());