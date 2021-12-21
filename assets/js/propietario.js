export class Propietario {
    constructor(Nombre, Direccion, Telefono) {
        this.nombre = Nombre
        this.direccion = Direccion
        this.telefono = Telefono
    }
    datosPropietario(){
        return (`El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto es: ${this.telefono}.`);
    }
    

}