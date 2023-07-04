import {  useState } from "react"
import './schedule.css'
import { Slot_booking } from "./slot_booking"
import { Faculty } from "./faculty_page"


export const LoginInfo = ()=>{
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState(false)
    const [message1, setMessage1] = useState(false)
    const [message2, setMessage2] = useState(false)

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [slot, setSlot] = useState("");
    const [day, setDay] = useState("");
    const [studentData, setStudentData] = useState([]);

    // const [updatedinput1, setupdatedInput1] = useState("");
    // const [updatedinput2, setupdatedInput2] = useState("");
    // const [updatedinput3, setupdatedInput3] = useState("");
    // const [updateslot, setUpdateslot] = useState("");
    // const [updateday, setUpdateday] = useState("");
    // const [updateStudentData, setUpdataStudentData] = useState([]);
  

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
        if(username === 'sri' && password === "sri"){
            setResult(true)
            setMessage1(true)
        }
        else if(username === 'faculty' && password ==="faculty"){
            setMessage1(true)
            setMessage2(true)



        }
        const studentDataobj ={
            username:username,
            slot:slot,
            day: day,
            input1: input1,
            input2: input2,
            input3: input3};
        setStudentData([...studentData, studentDataobj])
        

        
    }
    let updatedValueHandler =(slot, day, input1, input2, input3, studentData)=>{
        setDay(slot);
        setInput1(input1);
        setInput2(input2);
        setInput3(input3);
        setDay(day);
        setStudentData(studentData);
        console.log("the studentData : "+studentData[1].username);
        



     }
    return (<div id ='login_page_div'>
        {(!message1  )&& (
        <>
        <div>
            <label htmlFor= 'username_id1'>UserName : </label><br/>
            <input type="text" id='username_id1' onChange={userNameHandler}/>
        </div>
        <div>
            <label htmlFor='password_id1'>Password</label><br/>
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
        {result && <Slot_booking 
        slot={slot} day={day} input1={input1} input2={input2} inputt3={input3} studentData={studentData} username= {username}
        updatedValue={updatedValueHandler}
        //  setDay={setDay} setSlot={setSlot} setInput1={setInput1} setInput2={setInput2} setInput3={setInput3} setstudentData={setstudentData}
        />}
        {message2 && <Faculty slot={slot} day={day}/>}
        
    </div>)
}