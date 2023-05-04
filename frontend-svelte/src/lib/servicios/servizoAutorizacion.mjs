import { writable } from 'svelte/store';

const paseAutorizacion = writable(false);

function pecharSesion() {
    paseAutorizacion.set(false)
}

function gardarPaseAutorizacion(pase) {
    paseAutorizacion.set(pase)
}

export {
    paseAutorizacion,
    gardarPaseAutorizacion,
    pecharSesion
}