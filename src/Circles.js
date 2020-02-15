import React from 'react'
import './Circles.css'

const Circles = (props) => {
    return (
        <div className="Circles">
            {props.circles.map((circle, idx)=>
            (<div className={circle.circleSelected ? 'selected' : ''}> {idx + 1}</div>)
            )}
        </div>
    )
}

export default Circles
