import { app } from "./inicioExpress.mjs"
import "./apiUsuarios.mjs"
import "./apiAuthorization.mjs"

app.listen(process.env.PORT, ()=>console.log("Express traballando..."))
