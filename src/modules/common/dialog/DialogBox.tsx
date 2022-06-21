import React from 'react'
import '../../../assests/scss/Dialog.scss'
export const DialogBox=(props:any)=> {
  return (
    <section className='dialog'>
    <div className="backdrop" onClick={props.close}/>
    <div className='dialog-box'>
        {props.children}
        </div>  
</section>
  )
}
