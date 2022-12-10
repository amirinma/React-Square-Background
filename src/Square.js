import React from "react"

export default function Square(props){
    const style = {
        background: props.on ? "#222222" : "transparent"
    }
    return(
        <div 
        style={style} 
        onClick={()=>props.toggle(props.id)}
        className="sqr-div">SQUARE</div>
    )
}