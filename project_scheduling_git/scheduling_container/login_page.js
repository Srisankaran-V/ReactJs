import { useEffect, useState } from "react"
import './schedule.css'
import { Slot_booking } from "./slot_booking"
import { Faculty } from "./faculty_page"


export const LoginInfo = ()=>{
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState(false)
    const [message1, setMessage1] = useState(false)
    const [message2, setMessage2] = useState(false)
  

    let clickHandler = (event)=>{
        setMessage1(event.target.value);
    }

    let userNameHandler = (e)=>{
        setUsername(e.target.value)
    }

    let passwordHandler = (e)=>{
        setPassword(e.target.value)
    }

    let resultHandler = (e)=>{
        if(username === 'Sri' && password === "Sri13"){
            setResult(true)
            setMessage1(true)
        }
        else if(username === 'faculty' && password ==="faculty23"){
            setMessage1(true)
            setMessage2(true)



        }
    }
    return (<div id ='login_page_div'>
        {(!message1  )&& (
        <>
        <div>
            <label for= 'username_id1'>UserName : </label><br/>
            <input type="text" id='username_id1' onChange={userNameHandler}/>
        </div>
        <div>
            <label for='password_id1'>Password</label><br/>
            <input type="password" id="password_id1" onChange={passwordHandler}/>
        </div>
        <div>
            <button type="submit" id='submit_btn' style={{color : 'red', marginTop : 10}} onClick={resultHandler}>Submit</button>
        </div>
        <div>
        <p id='error_div'></p>
        </div>
        </>
        )}
        {result && <Slot_booking/>}
        {message2 && <Faculty/>}
        
    </div>)
}