import lover from './images/lover.png';
import flower from './images/flower.png';
import loverFlower from './images/lf.png';
import './App.css';
import { Link } from "react-router-dom"
import Carusel from './Carusel';

function Main() {

    return(<div>
        <div className='cont'>
            <div className="main">
                <div className='lover-flower'>
                    <img className='lover-image' src={lover} alt="lover"/>
                    <img className='lover-image'src={flower} alt="flower"/>
                </div>
                <p className='text'>Создаём для тех, кто ценит свежесть и изящество цветка</p>
                <div className='position'>
                <Link className='view' to="/catalog">смотреть каталог</Link>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="main">
                <div className="grid">
                    <h2>каталог</h2>
                    <p className="describtion">У нас самый большой выбор цветов, букетов, открыток и подарков.
                    Мы всегда поможем вам подобрать букет для вашего события,
                    наш менеджер вас проконсультирует и поможет определиться с выбором</p>
                    <p className="describtion-two">Ознакомьтесь с нашими разделами каталога</p>
                    <div className="bouquets dry">
                        <h3>готовые букеты из сухоцветов</h3>
                        <ul>
                            <li className="item">букеты</li>
                            <li className="item">для интерьера</li>
                            <li className="item">композиции</li>
                        </ul>
                    </div>
                    <div className="bouquets fresh">
                        <h3>Цветы</h3>
                        <ul>
                            <li className="item">Сборные букеты</li>
                            <li className="item">Монобукеты</li>
                            <li className="item">Композиции из цветов</li>
                            <li className="item">розы</li>
                            <li className="item">свадебные</li>
                        </ul>
                    </div>
                    <div className="bouquets extra">
                        <h3>дополнительно</h3>
                        <ul>
                            <li className="item">шары</li>
                            <li className="item">игрушки</li>
                            <li className="item">открытки</li>
                            <li className="item">упаковка</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>    
        <div className='container-two'>
            <div className="fon">
                    </div>
            <div className='main'>
                <div className="grid">
                    <div className='popular'>
                        <h2>Популярные</h2>
                        <h2 className="name-two">букеты</h2>
                        <p className="describtion-three">Самые любимые композиции наших клиентов</p>
                    </div>
                    <Carusel />
                </div>
            </div>
        </div>
        <div className='container-three'>
            <div className="fon2">
            </div>
            <div className='main'>
                <div className='grid'>
                    <h2 className='how-to-do-order'>Как сделать заказ</h2>
                    <div className='steps contain'>
                        <div className='step-item'>
                            <h5 className='step'>шаг 1</h5>
                            <p className='step-description'>Выберите какие цветы или подарки вы хотите купить</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>шаг 2</h5>
                            <p className='step-description'>Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>шаг 3</h5>
                            <p className='step-description'>Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>шаг 4</h5>
                            <p className='step-description'>Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен</p>
                        </div>
                        <div className='step-item'>
                            <h5 className='step'>шаг 5</h5>
                            <p className='step-description'>Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга</p>
                        </div>
                    </div>
                    <div>
                        <img className='lf' src={loverFlower} alt="lf"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main;