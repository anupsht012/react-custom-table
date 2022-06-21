import React, { useEffect, useState } from 'react'
import '../../../assests/scss/toast.scss'

const Toast = (props:any) => {

    const { toastList, position} =props;
    const [list, setList] = useState(toastList)

    useEffect(()=>{
        setList(toastList)
    },[toastList, list])

    return (
        <>
        <div className={`notification-container ${position}`}>
        {
                    list.map((toast:any, i:number) =>     
                        <div 
                            key={i}
                            className={`notification toast ${position}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button>
                                X
                            </button>
                            <div className="notification-image">
                                <img src={toast.icon} alt="" />
                            </div>
                            <div>
                                <p className="notification-title">{toast.title}</p>
                                <p className="notification-message">
                                    {toast.description}
                                </p>
                            </div>
                        </div>
                    )
                }
        </div>
        </>
    )
}
export default Toast;