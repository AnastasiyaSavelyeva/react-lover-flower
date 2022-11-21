// import { dataTwo } from "./data";

function Buttons({anyWord}) {
    return(
        <div>
            <div className="container-catalog-title">
            <div className="main">
                <div className="catalog-title">
                    <h2 className="name-three-title">каталог</h2>
                    <h2 className="name-three">букетов</h2>
                    <p className="catalog-text">В нашем магазине самый большой выбор букетов для любых событий:</p>
                    <div className="catalog-tags">
                        {/* <button className="btn-tag" onClick= {()=>setBouquet(dataTwo)}>Всё (32)</button>  */}
                        <button className="btn-tag" onClick= {()=>anyWord('popular')}>Популярное (5)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('chamomile')}>Букеты из ромашек (4)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('chrysanthemums')}>Букеты из хризантем (4)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('roses')}>Букеты из роз (4)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('dried')}>Букеты из сухоцветов (3)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('mix')}>Смешанные букеты (7)</button>
                        <button className="btn-tag" onClick= {()=>anyWord('indoor')}>Комнатные цветы в горшках (5)</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Buttons;