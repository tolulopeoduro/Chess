import React from 'react'
import classes from './Option.module.css'

const Option = (props) => {
    const {side , piece , handleSelect} = props
    return (
        <div className={classes.option} onClick={handleSelect}>
            <img src={require(`../../assets/images/board/${piece}_${side}.svg`)}/>
            <p>{piece}</p>
        </div>
    )
}

export default Option