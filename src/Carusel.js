import arrowLeft from './images/Arrow-left.png';
import arrowRight from './images/Arrow-right.png';
import { data } from './data';
import { useState } from 'react';

function Carusel() {

    const [plant, setPlant] = useState(0);
    const {name, price, image} = data[plant];
    
    const previousPlant = () => {
        setPlant(
            plant => {
            plant--;
            if(plant < 0) {
                plant = data.length - 1
            }
            return plant
            }
            )
        }
    
        const nextPlant = () => {
        setPlant(
            plant => {
            plant++;
            if(plant > data.length - 1) {
                plant = 0
            };
            return plant;
            }
            )
        }

    return( <div>
        <div className='carusel'>
            <img className='carusel-image' src = {image} width = '350px' alt = 'plant'/>
        </div>
        <div className='carusel'>
            <h1 className='name'>{name}</h1>
        </div>
        <div className='carusel'>
            <h2 className='price'>{price} руб.</h2>
        </div>
        <div className='btn'>
            <button className='btn left' onClick = {previousPlant}><img src={arrowLeft} alt="arrow"/></button>
            <button className='btn right' onClick = {nextPlant}><img src={arrowRight} alt="arrow"/></button>
        </div>
        <div className='carusel'>
            <button className="cart">В корзину</button>
        </div>
    </div>
    )
}

export default Carusel;
