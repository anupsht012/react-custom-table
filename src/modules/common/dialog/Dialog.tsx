import React, { useState } from 'react'
import {DialogBox} from './DialogBox'

export default function Dialog() {
    const [inputData, setInputData] = useState<string>('tes')
    const [isTrue, setIsTrue] =useState(false)
    
    const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) =>  {
        e.preventDefault()
        setInputData(e.target.value)
    }

    const clickHandler = () => {
      setIsTrue(true) 
    }

  return (
    <div className='Dialog-main'>
        <input name='inputData' type="text" value={inputData} onChange={inputHandler}/>
        <button onClick={clickHandler}>Open Dialog</button>
        {isTrue && <DialogBox close={()=>setIsTrue(false)}>
               <div className="test">
               {inputData}
               </div>
            </DialogBox>}
    </div>
  )
}
