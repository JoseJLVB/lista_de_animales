import { Propietario } from "./propietario.js";

export class Animal extends Propietario{
    constructor(Nombre, Direccion, Telefono, Tipo){
        super(Nombre, Direccion, Telefono);
        this.tipo = Tipo;
    }
    getTipo(){
        return `El tipo de animal es un: ${this.tipo}`;
    }

}