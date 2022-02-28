import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './RemovedItem.module.css'

const RemovedItem = (props) => {

    const {name , qty} = props.data
    const {t} = useTranslation()


  return (
    <div className={classes.removed_piece}>
        <p>{t(name)}</p>
        <p>{qty > 1 && `x${qty}`}</p>
    </div>
  )
}

export default RemovedItem