import image from "./images/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (<nav>
        <img className='logo' src={image} alt="logo"/>
        <Link className='link' to="/">Главная</Link>
        <Link className='link' to="/catalog">Каталог</Link>
        <Link className='link' to="/about">О нас</Link>
        <Link className='link' to="/contacts">Контакты</Link>
        </nav>
    )
}

export default Header;