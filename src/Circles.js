import React from 'react'
import './Circles.css'

const Circles = (props) => {
    return (
        <div className="Circles">
            {props.circles.map((circle, idx)=>
            (<div className={circle.selectedCircle ? 'div' : ''}> {idx + 1}</div>)
            )}
        </div>
    )
}

export default Circles
