import { Link } from "react-router-dom/dist/umd/react-router-dom.development"
export const Header = () => {
    
    return (
        <>
            <header>
                <ul>
                    <Link to={'/hackaton/Inicio'}>Inicio</Link>
                    <Link>Nosotros</Link>
                    <Link>Vigilancia Rutinaria</Link>
                </ul>
            </header>
        </>
    )
}

