import React from 'react';
import arrowdown from "../images/downarrow.svg";
import "../css/button.css";

function WithdrawButton(){
    return(
        <>
            <button className="bombfarms__div2__div2__div2__button1"><span>Withdraw</span><img src={arrowdown}></img></button>
        </>
    )
}

export default WithdrawButton;