import React, { useMemo, useState } from 'react';
import '../css/boardroom.css';
import RightArrow from '../images/rightarrow.svg';
import Docs from '../images/docs-logo.svg';
import Discord from '../images/discord-logo.svg';
import Bomb from '../images/bomb.svg';
import Bshares from '../images/bshares.svg';
import HeadBomb from '../images/sec2_bshares.svg';
import arrowdown from '../images/arrow-down-circle.svg';
import arrowup from '../images/arrow-up-circle.svg';
import Bshares2 from '../images/bshares2.svg';

import { getDisplayBalance } from '../../../utils/formatBalance';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useBombStats from '../../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useBombFinance from '../../../hooks/useBombFinance';
import useTotalStakedOnBoardroom from '../../../hooks/useTotalStakedOnBoardroom';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';
import useFetchBoardroomAPR from '../../../hooks/useFetchBoardroomAPR' 
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import useClaimRewardCheck from '../../../hooks/boardroom/useClaimRewardCheck';
import WithdrawModal from '../../Boardroom/components/WithdrawModal';
import DepositModal from '../../Boardroom/components/DepositModal';
import useHarvestFromBoardroom from '../../../hooks/useHarvestFromBoardroom';

function Boardroom() {
    const totalStaked = useTotalStakedOnBoardroom();
    const TVL = Number(useTotalValueLocked()).toFixed(0)
    const canWithdraw = useWithdrawCheck();

    const bombStats = useBombStats();
    const earnings = useEarningsOnBoardroom();
    const bombTokenPriceInDollars = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
      );
    const earnedInDollars = (Number(bombTokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);
    
    const bombFinance = useBombFinance();
    const stakedBalance = useStakedBalanceOnBoardroom();       
    const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
    const stakeTokenPriceInDollars = useMemo(
        () =>
          stakedTokenPriceInDollars
            ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
            : null,
        [stakedTokenPriceInDollars, stakedBalance],
      );
    
        const dailyAPR = Number(useFetchBoardroomAPR() / 365).toFixed(2)
    const claimRewardCheck = useClaimRewardCheck();
    const harvestFromBoardroom = useHarvestFromBoardroom();


    return (
        <div className="boardroom">
            <div className="boardroom__grid1">
                <p className="boardroom__grid1__h1">Read Investment Strategy<img src={RightArrow} className="boardroom__grid1__h1__icon" /></p>
                <div className="boardroom__grid1__but1">Invest Now</div>
                <div className="boardroom__grid1__butbox">
                    <div className="boardroom__grid1__but2" onClick={event =>  window.location.href="https://discord.bomb.money/%27%7D"}>
                        
                        <div className="boardroom__grid1--whitecircle">
                            <img src={Discord} className="boardroom__grid1__but2__icon" />
                        </div>
                        Chat on Discord
                    </div>
                    <div className="boardroom__grid1__but2" onClick={event =>  window.location.href="https://docs.bomb.money/%27%7D"}>
                        <div className="boardroom__grid1--whitecircle">
                            <img src={Docs} className="boardroom__grid1__but2__icon" />
                        </div>
                        Read Docs
                    </div>
                </div>
                <div className="boardroom__grid1__box">
                    <div className="boardroom__grid1__box__top">
                        <img src={HeadBomb}></img>
                        <div className="boardroom__grid1__box__top__infobox">
                            <div className="boardroom__grid1__box__top__infobox__info">
                                <div className="boardroom__grid1__box__top__infobox__info__left" >
                                    <div className="boardroom__grid1__box__top__infobox__info__left___head">
                                        <p className="boardroom__grid1__box__top__infobox__info__left___head__h1">Boardroom</p>
                                        <span className="boardroom__grid1__box__top__infobox__info__left___head__span">Recommended</span>
                                    </div>
                                    <p className="boardroom__grid1__box__top__infobox__info__left__p">Stake BSHARE and earn BOMB every epoch</p>
                                </div>
                                <div className="boardroom__grid1__box__top__infobox__right">TVL: <span className="boardroom__grid1__box__top__infobox__right__span"> ${TVL}</span></div>
                            </div>
                            <div className="boardroom__grid1__box__top__hr"></div>
                        </div>
                    </div>
                    <p className="boardroom__grid1__box__p">
                        Total Staked:
                        <img src={Bshares} className="boardroom__grid1__box__p__icon" />
                        <span className="boardroom__grid1__box__p__span">{getDisplayBalance(totalStaked)}</span>
                    </p>
                    <div className="boardroom__grid1__box__bottom">
                        <div className="boardroom__grid1__box__bottom__left">
                            <div className="boardroom__grid1__box__bottom__left__div1">
                                <p>Daily Returns:</p>
                                <p className="boardroom__grid1__box__bottom__left__div1__p2">{dailyAPR}%</p>
                            </div>
                            <div className="boardroom__grid1__box__bottom__left__div1">
                                <p>Your Stake:</p>
                                <p className="boardroom__grid1__box__bottom__left__div1--bold"><img src={Bshares}></img>{getDisplayBalance(stakedBalance)}</p>
                                <p>≈ ${stakeTokenPriceInDollars}</p>
                            </div>
                            <div className="boardroom__grid1__box__bottom__left__div1">
                                <p>Earned:</p>
                                <p className="boardroom__grid1__box__bottom__left__div1--bold"><img src={Bomb}></img> {getDisplayBalance(earnings)}</p>
                                <p>≈ ${earnedInDollars}</p>
                            </div>
                        </div>
                        <div className="boardroom__grid1__box__bottom__right">
                            <div className="boardroom__grid1__box__bottom__right__butbox">
                            <div className="boardroom__grid1__box__bottom__right__but" onClick={() => DepositModal()}><span>Deposit</span><img src={arrowup}></img></div>
                            <div className="boardroom__grid1__box__bottom__right__but" id={!canWithdraw || stakedBalance.eq(0) ? "but--disable" : ""} onClick={()=>WithdrawModal()}><span>Withdraw</span><img src={arrowdown}></img></div>
                            
                            </div>
                            <div className="boardroom__grid1__box__bottom__right__but2" id={!claimRewardCheck? "but--disable" : ""} onClick={() => harvestFromBoardroom()}>
                                Claim Rewards
                                <div className='boardroom__grid1__box__bottom__right__but2__img'>
                                    <img src={Bshares2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="boardroom__grid2">
                <p className="boardroom__grid2__h1">Latest News</p>
            </div>
        </div>
    );
}

export default Boardroom;
