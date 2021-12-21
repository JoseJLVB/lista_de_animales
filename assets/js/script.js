import { mascota } from "./mascota.js";
import { Propietario } from "./propietario.js";

const owner = document.querySelector("#propietario");
const adress = document.querySelector("#direccion");
const phone = document.querySelector("#telefono");
const petname = document.querySelector("#nombreMascota");
const type = document.querySelector("#tipo");
const illnes = document.querySelector("#enfermedad");

const petowner = new Propietario();

$('form').on('submit', function(ev){
    ev.preventDefault();

    let petselect = new mascota(owner.value, adress.value, phone.value, petname.value, type.value, illnes.value);

    $("#listUl").html(`<li>${petselect.datosPropietario()}</li> <li> ${petselect.tipo}, mientras que el nombre de la mascota es: ${petselect.getNombrepet()} y la enfermedad es: ${petselect.getEnfermedad()}</li>`)

}
)
