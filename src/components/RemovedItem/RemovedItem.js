import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './RemovedItem.module.css'
import cx from 'classnames'
import * as $ from 'jquery'

const RemovedItem = (props) => {

    const {isLargeScreen} = props
    const {name , qty} = props.data
    const {t} = useTranslation()
    const [added , setAdded] = useState(false)

    useEffect(() => {
      setAdded(true)
      setTimeout(() => setAdded(false) , 800)
    } , [qty])

  return (
    <div className={cx({[classes.removed_piece] : !isLargeScreen} , {[classes.large] : isLargeScreen} )}>
        <img className={cx({[classes.added] : added })} src={require(`../../assets/images/board/${name}.PNG`)}/>
        <p style={{visibility : qty < 2 && 'hidden'}}>{qty > 1 && `${qty}`}</p>
    </div>
  )
}

export default RemovedItem