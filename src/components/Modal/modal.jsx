import React, {Fragment} from 'react'

const Modal = () => {
    return (
        <Fragment>
            <div className='modalBackground'>
                <div className='modalContainer'>
                    <button>X</button>
                    <div className='title'></div>
                    <div className='body'></div>
                    <div className='footer'></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Modal
