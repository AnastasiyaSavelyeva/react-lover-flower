import { useState } from "react";
import { dataTwo } from "./data";

function Slides(props) {

    const [objectCard]=useState(props.number-1)
    const [arrayPhoto,setArrayPhoto]=useState(0)
    const {image}=dataTwo[objectCard]
    const imageSet =image[arrayPhoto]

    const previous=()=>{
        setArrayPhoto((arrayPhoto=>{
            arrayPhoto--;
          if (arrayPhoto<0){
            arrayPhoto=image.length-1
          }
          return arrayPhoto
        }))
      }
    
      const next=()=>{
        setArrayPhoto((arrayPhoto=>{
            arrayPhoto++;
          if (arrayPhoto>image.length-1){
            arrayPhoto=0
          }
          return arrayPhoto
        }))
      }
    
      return (
          <div className="catalog-image">
            <button onClick={previous} className="catalog-btn btn-prev"><img src="./images/arrow_prev.png" alt="prev"/></button>
            <img src={imageSet} width="220px" height="280px" alt='img'/>
            <button onClick={next} className=" catalog-btn btn-next"><img src="./images/arrow_next.png" width="50px" alt="next"/></button>
          </div>
      );
    }


export default Slides;