import './App.css';
import React from 'react';
import Buttons from './Buttons';
import { useState } from 'react';
import { dataTwo } from './data'

function Catalog() {

    const [bouquet, setBouquet] = useState(dataTwo)

    const [showText, setShowText] = useState(false)

    const chosenFlower = (category) => {
        const newFlowers = bouquet.filter (element => 
        element.category === category);
        setBouquet(newFlowers)
    }

    const showTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }  
    
    return(<div>
        <div className="container-catalog">
            <Buttons anyWord={chosenFlower}/> 
            <div className="main">
                <div className='catalog-position'>
                    {bouquet.map (element => {
                        const {id, name, price, image, description, showMore} = element;
                        return(<div className='catalog-item' key={id}>
                                <img className='catalog-image' src= {image} alt="flower"/>
                                <h1 className='name'>{name}</h1>
                                <h2 className='price'>{price} руб.</h2>
                                <div className='buttons'>
                                    <button className='more' onClick = {()=> showTextClick(element)}>{showMore ? description : description.substring(0,0)} {showMore ? '' : 'Состав'}</button>                         
                                    <button className='cart'>в корзину</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    )
}

export default Catalog;