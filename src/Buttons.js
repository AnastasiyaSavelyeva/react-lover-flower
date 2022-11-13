function Buttons({filteredFlower}) {
    return(
        <div>
            <div className="container-catalog-title">
            <div className="main">
                <div className="catalog-title">
                    <h2>каталог</h2>
                    <h2 className="name-three">букетов</h2>
                    <p className="catalog-text">В нашем магазине самый большой выбор букетов для любых событий:</p>
                    <div className="catalog-tags">
                        <button className="btn-tag" onClick= {()=>filteredFlower('popular')}>Популярное</button>
                        <button className="btn-tag" onClick= {()=>filteredFlower('chamomile')}>Букеты из ромашек</button>
                        <button className="btn-tag" onClick= {()=>filteredFlower('chrysanthemums')}>Букеты из хризантем</button>
                        <button className="btn-tag" onClick= {()=>filteredFlower('roses')}>Букеты из роз</button>
                        <button className="btn-tag" onClick= {()=>filteredFlower('dried')}>Букеты из сухоцветов</button>
                        <button className="btn-tag" onClick= {()=>filteredFlower('mix')}>Смешанные букеты</button>
                        <button className="btn-tag" onClick= {()=>filteredFlower('indoor')}>Комнатные цветы в горшках</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Buttons;