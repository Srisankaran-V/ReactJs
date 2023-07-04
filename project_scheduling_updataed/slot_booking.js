

import { useState } from 'react';
import { LoginInfo } from './login_page';

export const Slot_booking = ({day, slot, input1, input2, input3, studentData, username,updatedValue}) => {
  const [timeslots, setTimeslots] = useState([]);
  const [hide, setHide] = useState(false);
  const [bookClicked, setBookClicked] = useState(false);
  const [goHomeHide, setGoHomeHide] = useState(false);
  const [goHomeshow , setGoHomeShow] = useState(false);

  const students =[];

  
  const clickHandler1 = (e) => {
    if (e.target.value === 'monday') {
      setTimeslots([10.0, 10.15, 10.30, 10.45, 11.0, 11.15, 11.30, 11.45]);
    } 
    else if(e.target.value ==="tuesday"){
      setTimeslots([1.00,1.15,1.30,1.45,2.00,2.15,2.30,2.45])
    }
    else if(e.target.value === 'wednesday'){
      setTimeslots([3.00,3.15,3.30,3.45,4.00,4.15,4.30,4.45])
    }
    else if(e.target.value ==="thursday"){
      setTimeslots([9.00,9.15,9.30,9.45,10.00])
    }
    
    else {
      setTimeslots(["no slot available"]); // Clear timeslots for other days
    }
  };

  let studenntValueClicker = (e)=>{
    if(document.getElementById("book_btn")){
      let a = document.getElementById("weekdays_select").value
      let b = document.getElementById("slot_select").value
      let c = document.getElementById("1st_name").value
      let d = document.getElementById("2nd_name").value
      let e =document.getElementById("3rd_name").value

      if(document.getElementById("weekdays_select").value){
        day=document.getElementById("weekdays_select").value
        console.log(day)
      }
  
      if(document.getElementById("slot_select").value){
        slot = document.getElementById("slot_select").value
        console.log(slot)
      }
  
      if(document.getElementById("1st_name").value){
        input1 = document.getElementById("1st_name").value
        console.log(input1);
      }
      if(document.getElementById("2nd_name").value){
        input2 = document.getElementById("2nd_name").value
        console.log(input2)
      }
      if(document.getElementById("3rd_name").value){
        input3 = document.getElementById("3rd_name").value
        console.log(input3)
      }
      console.log(username)
      const studentDataObj = {username:{slot, day, input1, input2, input3}};
  
      studentData.push(studentDataObj);
      console.log(studentData)
      if(a && b && c && d &&e){
        setBookClicked(true)
        updatedValue(slot, day, input1, input2, input3, studentData)
      }
      console.log(updatedValue)
  
    }

  }

  let goHomeClicker = ()=>{
    setGoHomeHide(true);
    setGoHomeShow(false);
  }



  // let radioButtonClicker = (e)=>{
  //   if(e.target.id ==="single_radio"){
  //     setHide(true);

  //   }
  //   else if(e.target.id === 'team_radio'){
  //     setHide(false)
  //   }
  // }

  return (
    <div>
      {!goHomeshow && <div>
      {!goHomeHide && <div>
      <div>
        <label htmlFor='weekdays_select'>weekdays :</label>
        <select id="weekdays_select" onChange={clickHandler1}>
          <option value="" selected disabled>--|--</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
        </select>
      </div><br/>
      <div>
        <label htmlFor='slot_select'>slots</label>
        <select id="slot_select">
          {timeslots.map((timeslots, index) => (
            
            <option key={index}>{timeslots}</option>
          ))}
        </select>
      </div><br/>

      {/* <div id="radio_btn_div">
        <input type="radio" id="single_radio" name='radio_input' onClick={radioButtonClicker}/>
        <label htmlFor='single_radio'>Single</label>
        <input type="radio" id="team_radio" name='radio_input'onClick={radioButtonClicker}/>
        <label htmlFor='team_radio'>team</label>
        
      </div><br/> */}
      
      <div id="student_details_div1">
            <label htmlFor='1st_name'>student 1</label>
            <input type="text" id="1st_name" placeholder='enter the name' /><br/><br/>
      </div>

      {!hide && <div id="student_details_div2">
            <label htmlFor='2nd_name'>student 2</label>
            <input type="text" id="2nd_name" className='team_class'placeholder='enter the name' /><br/><br/>
            <label htmlFor='3rd_name'>student 3</label>
            <input type="text" id="3rd_name" className="team_class" placeholder='enter the name'/><br/><br/>
      </div>}

      <div>
        <button id="book_btn" onClick={studenntValueClicker} disabled={bookClicked}>book</button>
      </div>
      <div>
        <button id='go_home_btn' onClick={goHomeClicker} >go home</button>
      </div>
      </div>}
      <LoginInfo/></div>}
    </div>
  );
};
