import React from 'react'
import './character.css'

const Character = props => {
    const condition = props.main_condition;
    
    return (
        <div className="condition-wrapper">
             {condition && <div className={condition}></div>}
        </div>
    )
} 

export default Character

        