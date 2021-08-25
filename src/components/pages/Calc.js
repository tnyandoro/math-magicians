import React from 'react';
import Calculator from '../Calculator';
import '../../App.css';

function Calc() {
  return (
    <div className="calc">
      <div className="calcontent">
        <h2 className="head-content"> Lets do some calculations</h2>
        <p className="content">
          Just type and your answer comes up live.This is a simple basic
          calculator with memory functions similar to a small handheld
          calculator. Use this basic calculator for math with addition,
          subtraction, division and multiplication. Memory and clear functions
          for this standard calculator are listed below.
        </p>
        <p className="content">
          Numbers are important. Whether costs, revenues, performance, targets –
          most people agree that numbers are important. Interpretation of these
          numbers is key; the numbers can influence decisions related to
          performance, investments and effectiveness among other thing
        </p>
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default Calc;
