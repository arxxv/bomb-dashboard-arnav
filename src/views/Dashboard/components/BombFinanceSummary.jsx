import React, { useState } from 'react';
import moment from 'moment';

import '../css/bombfinancesummary.css';
import MetaMask from '../images/MetaMask.svg';
import Bomb from '../images/bomb.svg';
import BShares from '../images/bshares.svg';
import BBond from '../images/bbond.svg';
import Bomb2 from '../images/bomb2.svg';
import BShares2 from '../images/bshares2.svg';
import BBond2 from '../images/bbond2.svg';
import BombBitcoin from '../images/bomb-bitcoin.svg';
import BSharesBnb from '../images/bshare-bnb.svg';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import ProgressCountdown from '../../Boardroom/components/ProgressCountdown';
import useBondStats from '../../../hooks/useBondStats';
import usebShareStats from '../../../hooks/usebShareStats';
import useBombStats from '../../../hooks/useBombStats';
import useCurrentEpoch from '../../../hooks/useCurrentEpoch';
import useTreasuryAllocationTimes from '../../../hooks/useTreasuryAllocationTimes';
import useTotalValueLocked from '../../../hooks/useTotalValueLocked';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import useTokenBalance from '../../../hooks/useTokenBalance';
import useBombFinance from '../../../hooks/useBombFinance';
import useTreasuryAmount from '../../../hooks/useTreasuryAmount';


Chart.register(ArcElement);

function BombFinanceSec() {
    const bondStats = useBondStats()
    const bbondTotalSupply = Number(bondStats?.totalSupply / 1000).toFixed(2)
    const bbondPriceInDollars = bondStats?.priceInDollars
    const bbondCirculatingSupply = Number(bondStats?.circulatingSupply/1000).toFixed(2)
    const bShareStats = usebShareStats()
    const bShareTotalSupply = Number(bShareStats?.totalSupply / 1000).toFixed(2)
    const bSharePriceInDollars = bShareStats?.priceInDollars
    const bShareCirculatingSupply = Number(bShareStats?.circulatingSupply/1000).toFixed(2)
    const bombStats = useBombStats()
    const bombTotalSupply = Number(bombStats?.totalSupply / 1000).toFixed(2)
    const bombPriceInDollars = bombStats?.priceInDollars
    const bombCirculatingSupply = Number(bombStats?.circulatingSupply/1000).toFixed(2)
    const currentEpoch = useCurrentEpoch().toNumber();
    const { to } = useTreasuryAllocationTimes();
    const TVL = Number(useTotalValueLocked()).toFixed(0)
    const lastTWAP = useCashPriceInLastTWAP().toNumber()

    const [otherTokensSupply, setOtherTokensSupply] = useState(0)
    const [BombTotalSupply, setBombTotalSupply] = useState()
    const [BShareTotalSupply, setBShareTotalSupply] = useState()
    const [BbondTotalSupply, setBbondTotalSupply] = useState()
    const [bnbTokensSupply, setbnbTokensSupply] = useState()
    const [bbomb_btcbTokensSupply, setbbomb_btcbTokensSupply] = useState()
    const [flag, setflag] = useState(true);

    const bombFinance = useBombFinance();
    const allTokens = ['BBOMBBOMB', 'BBOMBBTCB', 'BBOMB_BOMB', 'BOMBBTCB_LP', 'BOMB_BORROWABLE', 'BTC', 'BTCB_BORROWABLE', 'XBOMB']
    if(flag){
        allTokens.map((token)=>{
            bombFinance[token].totalSupply().then((res)=>{
                setOtherTokensSupply(otherTokensSupply+res/1000000)
            })
        });
        setflag(false);
    }

    bombFinance["BOMB"].totalSupply().then((res)=>{
        setBombTotalSupply(res/1000000)
    })
    bombFinance["BSHARE"].totalSupply().then((res)=>{
        setBShareTotalSupply(res/1000000)
    })
    bombFinance["BBOND"].totalSupply().then((res)=>{
        setBbondTotalSupply(res/1000000)
    })
    bombFinance["BNB"].totalSupply().then((res)=>{
        setbnbTokensSupply(res/1000000)
    })
    bombFinance["BBOMB_BTCB"].totalSupply().then((res)=>{
        setbbomb_btcbTokensSupply(res/1000000)
    })

    const totalSuppyValue = BombTotalSupply+BShareTotalSupply+BbondTotalSupply+bbomb_btcbTokensSupply+bnbTokensSupply+otherTokensSupply
    const bBondPercentage = Number(BbondTotalSupply / totalSuppyValue * 100).toFixed(0)
    const bSharePercentage = Number(BShareTotalSupply / totalSuppyValue * 100).toFixed(0)
    const bbomb_btcbPercentage = Number(bbomb_btcbTokensSupply / totalSuppyValue * 100).toFixed(0)
    const bnbPercentage = Number(bnbTokensSupply / totalSuppyValue * 100).toFixed(0)
    const restPercentage = Number(otherTokensSupply / totalSuppyValue * 100).toFixed(0)
    const bombPercentage = Number(BombTotalSupply / totalSuppyValue * 100).toFixed(0)


    const data = {
        datasets: [{
            data: [bombPercentage, bbomb_btcbPercentage, bSharePercentage, bnbPercentage, bBondPercentage, restPercentage],
            backgroundColor: [
                '#00E8A2',
                '#C3C5CB',
                '#00E8A2',
                '#00ADE8',
                '#78D15C',
                '#FC7871'
            ]
        }]
    };
    const options = {
        cutout: "85%",
        maintainAspectRatio: false, responsive: false,
        layout: {
            padding: {
                bottom: 15,
                top: 15
            }
        },
    }
    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = "Foo-bar",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
    return (
        <div className="bombfinancesec">
            <p className='bombfinancesec__h1'>Bomb Finance Summary</p>
            <div className='bombfinancesec__hr'></div>
            <div className='bombfinancesec__grid'>
                <div className='bombfinancesec__grid__1'>
                    <table className='bombfinancesec__grid__1__table'>
                        <tr className='bombfinancesec__grid__1__table__row1'>
                            <td></td>
                            <td className='bombfinancesec__grid__1__table--border'>Current Supply</td>
                            <td className='bombfinancesec__grid__1__table--border'>Total Supply</td>
                            <td className='bombfinancesec__grid__1__table--border'>Price</td>
                            <td className='bombfinancesec__grid__1__table--border'></td>
                        </tr>
                        <tr>
                            <td className='bombfinancesec__grid__1__table--border bombfinancesec__grid__1__table--text1'>
                                <div className='bombfinancesec__grid__1__iconbox'>
                                    <img src={Bomb} />
                                </div>
                                $BOMB
                            </td>
                            <td className='bombfinancesec__grid__1__table--border'>{bombCirculatingSupply ? bombCirculatingSupply : 0}</td>
                            <td className='bombfinancesec__grid__1__table--border'>{bombTotalSupply ? bombTotalSupply : 0}k</td>
                            <td className='bombfinancesec__grid__1__table--border'>${bombPriceInDollars ? bombPriceInDollars : 0}<br /> 1.05BTCB</td>
                            <td className='bombfinancesec__grid__1__table--border'>
                                <img src={MetaMask} />
                            </td>
                        </tr>
                        <tr>
                            <td className='bombfinancesec__grid__1__table--border bombfinancesec__grid__1__table--text1'>
                                <div className='bombfinancesec__grid__1__iconbox'>
                                    <img src={BShares} />
                                </div>
                                $BSHARE
                            </td>
                            <td className='bombfinancesec__grid__1__table--border'>{bShareCirculatingSupply ? bShareCirculatingSupply : 0}</td>
                            <td className='bombfinancesec__grid__1__table--border'>{bShareTotalSupply ? bShareTotalSupply : 0}k</td>
                            <td className='bombfinancesec__grid__1__table--border'>${bSharePriceInDollars ? bSharePriceInDollars : 0} <br /> 1.05BTCB</td>
                            <td className='bombfinancesec__grid__1__table--border'>
                                <img src={MetaMask} />
                            </td>
                        </tr>
                        <tr>
                            <td className='bombfinancesec__grid__1__table--text1'>
                                <div className='bombfinancesec__grid__1__iconbox'>
                                    <img src={BBond} />
                                </div>
                                $BBOND
                            </td>
                            <td className='bombfinancesec__grid__1__table--border'>{bbondCirculatingSupply ? bbondCirculatingSupply : 0}</td>
                            <td className='bombfinancesec__grid__1__table--border'>{bbondTotalSupply ? bbondTotalSupply : 0}k</td>
                            <td className='bombfinancesec__grid__1__table--border'>${bbondPriceInDollars ? bbondPriceInDollars : 0} <br /> 1.05BTCB</td>
                            <td className='bombfinancesec__grid__1__table--border'>
                                <img src={MetaMask} />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='bombfinancesec__grid__2'>
                    <p className='bombfinancesec__grid__2__h1'>
                        Current Epoch
                        <br />
                        <span className='bombfinancesec__grid__2__h1__sp'>{currentEpoch}</span>
                    </p>
                    <div className='bombfinancesec__hr'></div>
                    <p className='bombfinancesec__grid__2__h2'>
                <p className="bombfinancesec__grid__2__h1__sp">
                    <ProgressCountdown base={moment().toDate()} hideBar={true} deadline={to} description="Next Epoch" /></p>
                        Next Epoch in
                    </p>
                    <span className='bombfinancesec__grid__2__info bombfinancesec--tophr'>Live TWAP: <span className='bombfinancesec__grid__2__info__sp'>0</span></span>
                    <p className='bombfinancesec__grid__2__info'>TVL: <span className='bombfinancesec__grid__2__info__sp'>${TVL}</span></p>
                    <p className='bombfinancesec__grid__2__info'>Last Epoch TWAP: <span className='bombfinancesec__grid__2__info__sp'>{lastTWAP}</span></p>
                </div>
                <div className='bombfinancesec__grid__3'>
                    <div className="bombfinancesec__grid__3__graph">
                        <Doughnut data={data} options={options} width={200} height={200} />
                        <div className="bombfinancesec__grid__3__graph__data">
                            $10,451
                            <p className="bombfinancesec__grid__3__graph__data--green">+22%</p>
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div className='bombfinancesec__grid__3__iconbox'>
                                    <img src={Bomb2} />
                                </div>
                                Bomb:&nbsp; <span className='bombfinancesec__grid__3__td__sp'>{bombPercentage}%</span>
                            </td>
                            <td>
                                <div className='bombfinancesec__grid__3__iconbox'>
                                    <img src={BombBitcoin} />
                                </div>
                                Bomb-BTCB:&nbsp; <span className='bombfinancesec__grid__3__td__sp'>{bbomb_btcbPercentage}%</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='bombfinancesec__grid__3__iconbox'>
                                    <img src={BShares2} />
                                </div>
                                BShare:&nbsp; <span className='bombfinancesec__grid__3__td__sp'>{bSharePercentage}%</span>
                            </td>
                            <td>
                                <div className='bombfinancesec__grid__3__iconbox'>
                                    <img src={BSharesBnb} />
                                </div>
                                Bshare-BNB:&nbsp; <span className='bombfinancesec__grid__3__td__sp'>{bnbPercentage}%</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='bombfinancesec__grid__3__iconbox'>
                                    <img src={BBond2} />
                                </div>
                                BBond:&nbsp; <span className='bombfinancesec__grid__3__td__sp'>{bBondPercentage}%</span>
                            </td>
                            <td>
                                <div className='bombfinancesec__grid__3__iconbox'></div>
                                Others:&nbsp; <span className='bombfinancesec__grid__3__td__sp'>{restPercentage}%</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BombFinanceSec;
