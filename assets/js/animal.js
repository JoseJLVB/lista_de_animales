import { Propietario } from "./propietario.js";

export class Animal extends Propietario{
    constructor(Nombre, Direccion, Telefono, Tipo){
        super(Nombre, Direccion, Telefono)
        this.tipo = Tipo
    }
    getTipo(){
        return this.tipo;
    }

}