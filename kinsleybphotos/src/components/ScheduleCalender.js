import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



function Scheduler() {
    const [value, onChange] = useState(new Date());


    renderBookingForm = () => {
      console.log("booking form render")
    }
  
    return (
      <Container style={{width: '500px'}}>
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={this.renderBookingForm}
        />
      </Container>
    );
  }

  export default Scheduler