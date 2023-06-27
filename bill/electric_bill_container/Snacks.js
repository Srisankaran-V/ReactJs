import { useState } from "react";

export const Snack1 = (props) => {
    const [count1, setCount] = useState(10);
    const [count2, setCount1] = useState(10);
    const [result, setResult] = useState(0);
  
    let clickHandler = (event) => { 
        if(count2 >=0){
            if(count2 ===0){
                setCount1(count2)
                
            }else if(event.target.id==='buy_btn_id_2' && count2 >0){
                setCount1(count2-1)
                setResult(result+1);
                
            }
        }
    };

    let clickHandler2 = (event) => { 

        if(count1 >=0){
            if(count1 ===0){
                setCount(count1)
                
            }else if(event.target.id==='buy_btn_id_1' && count1 >0){
                setCount(count1-1)
                setResult(result+1)
               
            }
            
            

        }
        

    };

  
    return (
      <div>
        <h1>Salem Cafe</h1>
        <div className='snacks_list_div' id='snacks_list_id'>

          <div id='muffin_div'>
            <label htmlFor='muffins'>muffins</label>
            <p id='muffins' onChange={clickHandler2} />
            <p id="available_muffins">{count1}</p>
            <button className="buy_btn" id="buy_btn_id_1" onClick={clickHandler2}>Buy</button><br /><br/>
          </div>

          <div id='cookies_div'>
          <label htmlFor='cookies'>cookies</label>
          <p id='cookies' onChange={clickHandler} />
          <p id="available_muffins">{count2}</p>
          <button className="buy_btn" id="buy_btn_id_2" onClick={clickHandler} >Buy</button>
        </div>

        </div>

  
        <div className="result_div" id="result_div_id">
          <p id="result_p" >Total stock sold : {result}</p>
        </div>
      </div>
    );
    
  }
  