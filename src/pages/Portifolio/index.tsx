import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'

const Portifolio = () =>{
    return(
        <div>
            <header>
                <div>
                    <div>
                        <Link to="#">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <nav>
                        <Link to="#">Projetos</Link>
                        <Link to="#">Sobre</Link>
                        <Link to="#">Skills</Link>
                        <Link to="#">Contato</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Portifolio;