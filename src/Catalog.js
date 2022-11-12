import './App.css';

function Catalog({newCatalog}) {

    return(<div>

        <div className="container-catalog">
            <div className="main">
                <div className='catalog-position'>
                    {newCatalog.map (element => {
                        const {name, price, image} = element;
                        return(<div className='catalog-item'>
                                <img className='catalog-image' src= {image} alt="flower"/>
                                <h1 className='name'>{name}</h1>
                                <h2 className='price'>{price} руб.</h2>
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