

import { useState } from 'react';

export const Slot_booking = () => {
  const [timeslots, setTimeslots] = useState([]);

  const clickHandler1 = (e) => {
    if (e.target.value === 'monday') {
      setTimeslots([10.0, 10.15, 10.30, 10.45, 11.0, 11.15, 11.30, 11.45]);
    } else {
      setTimeslots([]); // Clear timeslots for other days
    }
  };

  return (
    <div>
      <div>
        <select id="weekdays_select" onChange={clickHandler1}>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
        </select>
      </div>
      <div>
        <select id="slot_select">
          {timeslots.map((timeslots, index) => (
            <option key={index}>{timeslots}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
