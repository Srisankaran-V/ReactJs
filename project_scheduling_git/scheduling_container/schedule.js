import './schedule.css'
import { LoginInfo } from './login_page'
import { useState } from 'react'




export const Schedule1 = ()=>{
    const [login, setLogin] = useState(false);
    const [hide, setHide] = useState(false)

    let clickHandler = ()=>{
        setLogin(true) 
        setHide(true)

    }
    
   
    return (<div >
        <div >
        {!hide &&(
        <>
        <button style ={{ color : 'green'}} onClick={clickHandler}>Student</button>
        <button style ={{ color : 'green'}} onClick={clickHandler}>Faculty</button>
        </>
        )}
       
        </div>
        {login && <LoginInfo/>}
    </div>)
}