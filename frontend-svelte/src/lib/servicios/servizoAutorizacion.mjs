import { readable, writable } from 'svelte/store';

const claveStorage = "paseAutorizacion"
const storage = localStorage

const paseAutorizacion = writable(storage.getItem(claveStorage) ?? false);
const autorizado = writable(!! storage.getItem(claveStorage))


paseAutorizacion.subscribe(value => {
    autorizado.set(!!value)
});

function pecharSesion() {
    paseAutorizacion.set(false)
    storage.removeItem(claveStorage)
}

function gardarPaseAutorizacion(pase) {
    paseAutorizacion.set(pase)
    storage.setItem(claveStorage,pase)
}

export {
    autorizado,
    paseAutorizacion,
    pecharSesion,
    gardarPaseAutorizacion,
}