import styles from "./Dialogo.module.css"

function Dialogo({estado, children}) {

    const [ abierto, setActivo ] = estado

    function cerrar() {
        setActivo(false)
    }

    return(
        <>
        { abierto && 
        <div className={styles.envoltorio}>
            <div className={styles.contenedor + " " + styles.sombra}>
                <button className={styles.cerrar + " " + styles.sombra} onClick={cerrar}>
                    x
                </button>
                {children}
            </div>
        </div>
        }
        </>
    )
}

export default Dialogo