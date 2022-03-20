import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './RemovedItem.module.css'
import cx from 'classnames'

const RemovedItem = (props) => {

    const {isLargeScreen} = props
    const {name , qty} = props.data
    const {t} = useTranslation()

    useEffect(() => {
      console.log(isLargeScreen)
    },[isLargeScreen])


  return (
    <div className={cx({[classes.removed_piece] : !isLargeScreen} , {[classes.large] : isLargeScreen} )}>
        <img src={require(`../../assets/images/board/${name}.PNG`)}/>
        <p style={{visibility : qty < 2 && 'hidden'}}>{qty > 1 && `${qty}`}</p>
    </div>
  )
}

export default RemovedItem