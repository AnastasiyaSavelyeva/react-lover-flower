import './App.css';
import React from 'react';
import Buttons from './Buttons';
import { useState } from 'react';
import { bouquets } from './data'

function Catalog() {

    const [bouquet, setBouquet] = useState(bouquets)

    // const [showText, setShowText] = useState(false)

    // const showTextClick = (element) => {
    //     element.showMore = !element.showMore
    //     setShowText(!showText)
    // }

    const chosenFlower = (category) => {
        const newFlowers = bouquets.filter (element => 
        element.category === category);
        setBouquet(newFlowers)
    }
    
    return(<div>
        <div className="container-catalog">
            <Buttons filteredFlowers={chosenFlower}/> 
            <div className="main">
                <div className='catalog-position'>
                    {bouquet.map (element => {
                        const {id, name, price, image, description, showMore} = element;
                        return(<div className='catalog-item' key={id}>
                                <img className='catalog-image' src= {image} alt="flower"/>
                                <h1 className='name'>{name}</h1>
                                <h2 className='price'>{price} руб.</h2>
                                {/* <div className="description">
                                    <p className="description-item">{showMore ? description : description.substring(0,15)} 
                                    <button onClick = {()=> showTextClick(element)}>{showMore ? "Подробнее" : "Скрыть"}</button></p>                             
                                </div> */}
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