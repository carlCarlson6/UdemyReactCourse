import React from 'react';
import styles from '../styles/Formulario.module.css'
import useSelectNews from '../hooks/useSelectNews';

const Formulario = () => {
    
    const [newsCategory, SelectNews] = useSelectNews();

    return (
        <div className={`${styles.buscador} row`}>
            <div className ="col s12 m8 offset-m2">
                <form>

                    <h2 className={styles.heading}>
                        Encuentra Noticias por Categoría
                    </h2>

                    <SelectNews />

                    <div className="input-filed col s12">
                        <input
                            type="submit"
                            className={`${styles.btnBlock} btn-large amber darken-2`}
                            value="Buscar"
                        >
                        </input>
                    </div>
                
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;