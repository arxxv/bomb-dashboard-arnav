import React from 'react';

import claimbomb from "../images/claimBomb.svg";
import "../css/button.css";

function DepositButton(){
    return(
        <>
            <button className="bombfarms__div2__div2__div2__button2"><span>Claim Rewards</span><img src={claimbomb}></img></button>
        </>
    )
}

export default DepositButton;