import { useState } from "react"

export const Calsi = ()=>{
    
    const [result, setResult] = useState(0);
    const [month, setMonth] = useState(0);
    const [saving, setSaving] = useState(0);
    const [dream, setDream] = useState(0);

    let clickHandler1 = (event)=>{
      let a = document.getElementById("input_saving").value
      if(event.target.id==="input_annual"){
        setMonth(event.target.value/12);
        console.log(month)
      }
      else if(event.target.id==="input_saving" && a>0 && a<=1){
        let x =event.target.value
        setSaving(month*(x))
        console.log(saving)
      }
      else if(event.target.id === "input_dreamhouse"){
        let y=event.target.value
        setDream(y/4)
        console.log(dream)
      }
            
    }

    let calculate_result = (event) =>{
      let a = saving
    
      setResult(dream/a)
      console.log(result)

    }

    



    return (<div><br/>
        <div id='annual_div'>
            <label htmlFor='input_annual' >Annual Salary</label><br/>
            <input type="number" id='input_annual' placeholder="enter annual salary" onChange={clickHandler1}/>
            <p>Month Salary : {month}</p>
            
        </div><br/>
        <div id='saving_div'>
            <label htmlFor = 'input_saving' >Saving amount in %(10% is 0.1)</label><br />
            <input type='number' id='input_saving' placeholder='enter the saving percentage' onChange={clickHandler1}/>
            <p>Saving Amount : {saving}</p>
        </div><br/>
        <div id='dreamhouse_div'>
            <label htmlFor='input_dreamhouse' >Dream House</label><br/>
            <input type="number" id='input_dreamhouse' placeholder="enter annual salary" onChange={clickHandler1}/>
            <p>Dream house 25% downpayment : {dream}</p>
            
        </div><br/>
        <div id='calculate_div'>
            <button id='calculate_btn' onClick={calculate_result}>Calculate</button>
        </div>
        <div id='result_div'>
            <p id='result_month' onChange={setResult}>Total month is : {result}</p>
        </div>
    </div>)
}

/*

import React, { useState } from 'react';

export const Calsi = () => {
  const [annualSalary, setAnnualSalary] = useState('');
  const [portionSaved, setPortionSaved] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [months, setMonths] = useState(null);

  const calculateMonthsToSave = () => {
    const monthlySalary = annualSalary / 12;
    const monthlySaving = monthlySalary * portionSaved;
    const downPayment = totalCost * 0.25;
    const monthsToSave = Math.ceil(downPayment / monthlySaving);
    setMonths(monthsToSave);
  };

  return (
    <div>
      <h2>Savings Calculator</h2>
      <div>
        <label htmlFor="annualSalary">Annual Salary:</label>
        <input
          type="number"
          id="annualSalary"
          value={annualSalary}
          onChange={(e) => setAnnualSalary(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="portionSaved">Portion Saved:</label>
        <input
          type="number"
          id="portionSaved"
          value={portionSaved}
          onChange={(e) => setPortionSaved(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="totalCost">Total Cost:</label>
        <input
          type="number"
          id="totalCost"
          value={totalCost}
          onChange={(e) => setTotalCost(parseFloat(e.target.value))}
        />
      </div>
      <button onClick={calculateMonthsToSave}>Calculate</button>
      {months && (
        <p>
          Number of months to save for down payment: {months}
        </p>
      )}
    </div>
  );
};
*/

// import React, { useState } from 'react';

// const EnergyCalculator = () => {
//   const [consumedUnits, setConsumedUnits] = useState('');
//   const [subsidyAmount, setSubsidyAmount] = useState(250);
//   const [totalCharges, setTotalCharges] = useState(null);

//   const calculateCharges = () => {
//     let totalCurrentCharges = 0;

//     if (consumedUnits <= 100) {
//       totalCurrentCharges = consumedUnits * 0;
//     } else if (consumedUnits <= 200) {
//       const excessUnits = consumedUnits - 100;
//       totalCurrentCharges = 100 + excessUnits * 3.75;
//     } else if (consumedUnits <= 400) {
//       const excessUnits = consumedUnits - 200;
//       totalCurrentCharges = 250 + excessUnits * 4;
//     } else if (consumedUnits <= 600) {
//       const excessUnits = consumedUnits - 400;
//       totalCurrentCharges = 300 + excessUnits * 4.25;
//     } else {
//       const excessUnits = consumedUnits - 600;
//       totalCurrentCharges = 400 + excessUnits * 5;
//     }

//     const fixedCost = 50;
//     const subsidyFixedCost = 0;
//     const newSubsidy = subsidyAmount;
//     const netAmount = totalCurrentCharges + fixedCost - subsidyFixedCost - newSubsidy;

//     setTotalCharges({
//       totalCurrentCharges,
//       fixedCost,
//       subsidyFixedCost,
//       newSubsidy,
//       netAmount,
//     });
//   };

//   return (
//     <div>
//       <h2>Energy Calculator</h2>
//       <div>
//         <label htmlFor="consumedUnits">Consumed Units:</label>
//         <input
//           type="number"
//           id="consumedUnits"
//           value={consumedUnits}
//           onChange={(e) => setConsumedUnits(parseFloat(e.target.value))}
//         />
//       </div>
//       <button onClick={calculateCharges}>Calculate</button>
//       {totalCharges && (
//         <div>
//           <p>Consumed Units: {consumedUnits}</p>
//           <p>Total Current Charges Rs. {totalCharges.totalCurrentCharges}</p>
//           <p>Current Charges Rs. {totalCharges.totalCurrentCharges}</p>
//           <p>Fixed Cost Rs.(+) {totalCharges.fixedCost}</p>
//           <p>Subsidy Fixed Cost Rs.(-) {totalCharges.subsidyFixedCost}</p>
//           <p>New Subsidy Rs.(-) {totalCharges.newSubsidy}</p>
//           <p>Net Amount Rs. {totalCharges.netAmount}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EnergyCalculator;

