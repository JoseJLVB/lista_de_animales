import { mascota } from "./mascota.js";

const owner = document.querySelector("#propietario");
const adress = document.querySelector("#direccion");
const phone = document.querySelector("#telefono");
const petname = document.querySelector("#nombreMascota");
const type = document.querySelector("#tipo");
const illnes = document.querySelector("#enfermedad");

$('form').on('submit', function(ev) {
    ev.preventDefault();

    let petselect = new mascota(owner.value, adress.value, phone.value, type.value, petname.value,  illnes.value);
    
    $("#lista").html(`<li>${petselect.datosPropietario()}</li> 
    <li> El tipo de animal es un: ${petselect.tipo}, mientras que el nombre de la mascota es: ${petselect.getNombrepet()} y la enfermedad es: ${petselect.getEnfermedad()}</li>`);
    
    }
);
