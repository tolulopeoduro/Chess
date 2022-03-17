import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './RemovedItem.module.css'

const RemovedItem = (props) => {

    const {name , qty} = props.data
    const {t} = useTranslation()


  return (
    <div className={classes.removed_piece}>
        <img src={require(`../../assets/images/board/${name}.PNG`)} height ='50px'/>
        <p style={{fontSize : '20px'}}>{qty > 1 && `x${qty}`}</p>
    </div>
  )
}

export default RemovedItem