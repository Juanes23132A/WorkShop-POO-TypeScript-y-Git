import { Persona } from "./Persona"

const crearJson = () => {
    const Json = {
        nombre: "Gabriela",
        edad: 25,
        direccion: {
            calle: "Calle",
            ciudad: "Medellin",
            pais: "Colombia"
        },
    };
    return Json
}

const transformarJson =  (crearJson: any) => {
    const PersonaJson = new Persona(crearJson.nombre, crearJson.edad, crearJson.direccion);
    return  PersonaJson;

}

const persona1 = transformarJson(crearJson())
console.log(persona1.saludar());
