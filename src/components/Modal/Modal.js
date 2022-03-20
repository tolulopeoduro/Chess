import React from 'react'
import classes from './Modal.module.css'

const WithModal = (WrappedComponent) => {
    return class extends React.Component{
        render() {
            return (
                <div className={classes.modal}><WrappedComponent {...this.props}/></div>
            )
        }
    }
}


export default WithModal