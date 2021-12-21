import { Animal } from "./animal.js";

export class mascota extends Animal{
    constructor(Nombre, Direccion, Telefono, Tipo, Nombrepet, Enfermedad){
        super(Nombre, Direccion, Telefono, Tipo);
        this.nombrepet = Nombrepet;
        this.enfermedad = Enfermedad;
    }
    getNombrepet(){
        return this.nombrepet;
    }
    setNombrepet(){
        return this.nombrepet = nombrepet;
    }
    getEnfermedad(){
        return this.enfermedad;
    }
    setEnfermedad(){
        return this.enfermedad = enfermedad;
    }
}