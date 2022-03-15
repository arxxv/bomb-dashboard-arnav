import React from 'react';
import arrowup from "../images/uparrow.svg";
import "../css/button.css";

function DepositButton(){
    return(
        <>
            <button className="bombfarms__div2__div2__div2__button1"><span>Deposit</span><img src={arrowup}></img></button>
        </>
    )
}

export default DepositButton;