import jwt from "jsonwebtoken"

function intermedioAutorization (peticion, resposta, seguinte) {
    try {
        const [_, token] = peticion.headers.authorization.split(" ")
        const datosAutorizacion = jwt.verify(token, process.env.JWT_SECRET)
        resposta.locals.autorizacion = datosAutorizacion
        return seguinte()
    } catch (error) {
        resposta.sendStatus(403)
    }
}

export {
    intermedioAutorization
}