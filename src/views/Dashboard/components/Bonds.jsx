import React from 'react';
import "../css/bondssection.css";
import bondsBomb from "../images/bondsBomb.svg";
import bondsBombSmall from "../images/bondsBombSmall.svg";
import cart from "../images/cart.svg";
import arrowdown from "../images/downarrow.svg";
import useBombFinance from '../../../hooks/useBombFinance';
import {getDisplayBalance} from '../../../utils/formatBalance';
import useTokenBalance from '../../../hooks/useTokenBalance';


function BondsSection(){
    
  const bombFinance = useBombFinance();
  const bondBalance = useTokenBalance(bombFinance?.BBOND)

    return(
        <>
            <div className="bondssection">
                <div className="bondssection__div1">
                    <img src={bondsBomb}></img>
                    <div className="bondssection__div1__div1">
                        <p className="bondssection__div1__div1__h1">Bonds</p>
                        <p className="bondssection__div1__div1__p">BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
                    </div>
                </div>
                <div className="bondssection__div2">
                    <div className="bondssection__div2__div1">
                        <div className="bondssection__div2__div1__div1">
                            <p className="bondssection__div2__div1__div1__p">Current Price: (Bomb)^2</p>
                            <p className="bondssection__div2__div1__div1__h1">BBond = 6.2872 BTCB</p>
                        </div>
                        <div className="bondssection__div2__div1__div2">
                            <p className="bondssection__div2__div1__div2__p">Available to redeem: </p>
                            <p className="bondssection__div2__div1__div2__h1"><img className="bondssection__div2__div1__div2__img" src={bondsBombSmall}></img><span>{getDisplayBalance(bondBalance)}</span></p>
                        </div>
                    </div>
                    <div className="bondssection__div2__div2">
                        <div className="bondssection__div2__div2__div1">
                            <div className="bondssection__div2__div2__div1__div1">
                                <p className="bondssection__div2__div2__div1__div1__p1">Purchase BBond</p>
                                <p className="bondssection__div2__div2__div1__div1__p2">Bomb is over peg</p>
                            </div>
                            <div className="bondssection__div2__div2__div1__div2">
                                <button className="bondssection__div2__div2__div1__button"><span>Purchase</span><img src={cart}></img></button>
                            </div>
                        </div>
                        <div className="bondssection__div2__div2__line"></div>
                        <div className="bondssection__div2__div2__div3">
                            <p className="bondssection__div2__div2__div3__p">Redeem Bomb</p>
                            <div className="bondssection__div2__div2__div3__div1">
                                <button className="bondssection__div2__div2__div3__button"><span>Redeem</span><img src={arrowdown}></img></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BondsSection;