function aDataURL(fichero) {
    return new Promise((resolve, reject)=>{
        try {
            const reader = new FileReader();
            reader.addEventListener("load", ()=> resolve(reader.result), false);
            reader.readAsDataURL(fichero);
        } catch (excepcion) {
            reject(excepcion)
        }

    })
}

export {
    aDataURL
}