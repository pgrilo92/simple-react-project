import React from 'react'
import './CircleSelector.css'

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            {props.circles.map((circle, idx) =>(
                <button onClick={() => props.selectCircle(idx)}>Select Circle {idx + 1}</button>
            ))}
        </div>
        
    )
}

export default CircleSelector
