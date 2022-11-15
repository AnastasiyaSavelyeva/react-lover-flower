import image from "./images/logo.png";
import insta from "./images/insta.png";
import whatsapp from "./images/whatsapp.png";
import phone from "./images/phone.png";
import { Link } from "react-router-dom";

function Footer() {
    return(<footer>
        <div className='column'>
            <img className='logo-footer' src={image} alt="logo"/>
            <p className='requisites'>ООО «Ловефлове» 220035, Республика Беларусь, 
            г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с BY55MTBK30120001093300096372
            ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого</p>
        </div>
        <div className='column list'>
            <Link className='link-footer' to="/">Главная</Link>
            <Link className='link-footer' to='/catalog'>Каталог</Link>
            <Link className='link-footer' to='/delivery'>Доставка и оплата</Link>
            <Link className='link-footer' to='/about'>О нас</Link>
            <Link className='link-footer' to='/contacts'>Контакты</Link>
        </div>
        <div className='column'>
            <div>
                <p className='address'>zakaz@loverflower.by</p>
                <p className='address-text'>Доставка 24/7 по договоренности с оператором</p>
            </div>
            <div>
                <p className='address'>ул. Тимирязева 67</p>
                <p className='address-text'>10:00 до 21:00 без выходных</p>
            </div>
            <div>
                <p className='address'>+375 (29) 113-69-69</p>
                <p className='address-text'>прием звонков круглосуточно</p>
            </div>
            <div>
                <img className='social-image' src={insta} alt="insta"/>
                <img className='social-image' src={whatsapp} alt="whatsapp"/>
                <img className='social-image' src={phone} alt="phone"/>
            </div>
        </div>
    </footer>
    )
}

export default Footer;