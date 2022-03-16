import React, { useMemo } from 'react';

import '../css/bombfarms.css';

import claimBomb from '../images/claimBomb.svg';
import BTCBomb from '../images/BTCBomb.svg';
import BTCBombSmall from '../images/BTCBombSmall.svg';
import earnedBomb from '../images/earnedBomb.svg';
import BNBBomb from '../images/BNBBomb.svg';
import BNBBombSmall from '../images/BNBBombSmall.svg';

import DepositButton from '../components/DepositButton';
import WithdrawButton from '../components/WithdrawButton';
import ClaimRewardButton from '../components/ClaimRewardButton';

import useBank from '../../../hooks/useBank';
import useStatsForPool from '../../../hooks/useStatsForPool';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useStakedBalanceOnBoardroom from '../../../hooks/useStakedBalanceOnBoardroom';
import useBombStats from '../../../hooks/useBombStats';
import useEarningsOnBoardroom from '../../../hooks/useEarningsOnBoardroom';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useBombFinance from '../../../hooks/useBombFinance';
import useEarnings from '../../../hooks/useEarnings';
import useShareStats from '../../../hooks/usebShareStats';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useLpStatsBTC from '../../../hooks/useLpStatsBTC';

function Bombfarms() {
  // const LpStatsBTC = useLpStatsBTC();
  // console.log(LpStatsBTC);
  const bombBtcBank = useBank("BombBtcbLPBShareRewardPool")
  const bombBtcBankStats = useStatsForPool(bombBtcBank)
  const bombBtcTVL  = bombBtcBankStats?.TVL
  const bombBtcDailyAPR = bombBtcBankStats?.dailyAPR

  const tShareStats = useShareStats();
  const bombStats = useBombStats();
  const bombEarnings = useEarnings(bombBtcBank.contract, bombBtcBank.earnTokenName, bombBtcBank.poolId);
  const tokenStats = bombBtcBank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const bombHarvestTokenPriceInDollars = useMemo(
      () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
      [tokenStats],
  );
  const bombHarvestEarnedInDollars = (Number(bombHarvestTokenPriceInDollars) * Number(getDisplayBalance(bombEarnings))).toFixed(2);
  
  const bombStakedBalance = useStakedBalance(bombBtcBank.contract, bombBtcBank.poolId);
  const bombStakedTokenPriceInDollars = useStakedTokenPriceInDollars(bombBtcBank.depositTokenName, bombBtcBank.depositToken);
  const staketokenPriceInDollars = useMemo(
    () => (bombStakedTokenPriceInDollars ? bombStakedTokenPriceInDollars : null),
    [bombStakedTokenPriceInDollars],
  );
  const bombStakeEarnedInDollars = (
    Number(staketokenPriceInDollars) * Number(getDisplayBalance(bombStakedBalance, bombBtcBank.depositToken.decimal))
  ).toFixed(2);


  const bShareBnbBank = useBank("BshareBnbLPBShareRewardPool")
  const bShareBnbBankStats = useStatsForPool(bShareBnbBank)
  const bShareBnbTVL  = bShareBnbBankStats?.TVL
  const bShareBnbDailyAPR = bShareBnbBankStats?.dailyAPR

  const bShareBnbEarnings = useEarnings(bombBtcBank.contract, bombBtcBank.earnTokenName, bombBtcBank.poolId);
  const bShareBnbTokenStats = bombBtcBank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const bShareBnbHarvestTokenPriceInDollars = useMemo(
      () => (bShareBnbTokenStats ? Number(bShareBnbTokenStats.priceInDollars).toFixed(2) : null),
      [bShareBnbTokenStats],
  );
  const bSHareBnbHarvestEarnedInDollars = (Number(bShareBnbHarvestTokenPriceInDollars) * Number(getDisplayBalance(bShareBnbEarnings))).toFixed(2);
  
  const bShareBnbStakedBalance = useStakedBalance(bombBtcBank.contract, bombBtcBank.poolId);
  const bShareBnbStakedTokenPriceInDollars = useStakedTokenPriceInDollars(bombBtcBank.depositTokenName, bombBtcBank.depositToken);
  const bShareBnbStaketokenPriceInDollars = useMemo(
    () => (bShareBnbStakedTokenPriceInDollars ? bShareBnbStakedTokenPriceInDollars : null),
    [bShareBnbStakedTokenPriceInDollars],
  );
  const bShareBnbStakeEarnedInDollars = (
    Number(bShareBnbStaketokenPriceInDollars) * Number(getDisplayBalance(bShareBnbStakedBalance, bombBtcBank.depositToken.decimal))
  ).toFixed(2);
    

  return (
    <>
      <div className="bombfarms">
        <div className="side_padding">
          <div className="bombfarms__div1">
            <div className="bombfarms__div1__div1">
              <p className="bombfarms__div1__div1__h1">Bomb Farms</p>
              <p className="bombfarms__div1__div1__p">Stake your LP tokens in our farms to start earning $BSHARE</p>
            </div>
            <div className="bombfarms__div1__div2">
              <button className="bombfarms__div1__div2__button">
                Claim All<img className="bombfarms__div1__div2__img" src={claimBomb}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="side_padding">
          <div className="bombfarms__div2">
            <div className="bombfarms__div2__div1">
              <img className="bombfarms__div2__div1__img" src={BTCBomb}></img>
              <div className="bombfarms__div2__div1__div1">
                <div className="bombfarms__div2__div1__div1__div1">
                  <div className="bombfarms__div2__div1__div1__div1__div1">
                    <p className="bombfarms__div2__div1__div1__div1__div1__h1">BOMB-BTCB</p>
                    <span className="bombfarms__div2__div1__div1__div1__div1__span">Recommended</span>
                  </div>
                  <div className="bombfarms__div2__div1__div1__div1__p">
                    <span className="bombfarms__div2__div1__div1__div1__span">TVL</span>: ${bombBtcTVL}
                  </div>
                </div>
                <div className="bombfarms__div2__div1__div1__div2"></div>
              </div>
            </div>
            <div className="bombfarms__div2__div2">
              <div className="bombfarms__div2__div2__div1">
                <div className="bombfarms__div2__div2__div1__div1">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Daily Returns:</p>
                  <p className="bombfarms__div2__div2__div1__div1__p2">{bombBtcDailyAPR ? bombBtcDailyAPR : 0}%</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div2">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Your Stake:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={BTCBombSmall}></img> {getDisplayBalance(bombStakedBalance, bombBtcBank.depositToken.decimal)}
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ ${bombStakeEarnedInDollars}</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div3">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Earned:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={earnedBomb}></img> {getDisplayBalance(bombEarnings)}
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ ${bombHarvestEarnedInDollars}</p>
                </div>
              </div>
              <div className="bombfarms__div2__div2__div2">
                <DepositButton />
                <WithdrawButton />
                <ClaimRewardButton />
              </div>
            </div>
          </div>
        </div>
        <div className="bombfarms__line"></div>
        <div className="side_padding">
          <div className="bombfarms__div2">
            <div className="bombfarms__div2__div1">
              <img className="bombfarms__div2__div1__img" src={BNBBomb}></img>
              <div className="bombfarms__div2__div1__div1">
                <div className="bombfarms__div2__div1__div1__div1">
                  <div className="bombfarms__div2__div1__div1__div1__div1">
                    <p className="bombfarms__div2__div1__div1__div1__div1__h1">BSHARE-BNB</p>
                    <span className="bombfarms__div2__div1__div1__div1__div1__span">Recommended</span>
                  </div>
                  <div className="bombfarms__div2__div1__div1__div1__p">
                    <span className="bombfarms__div2__div1__div1__div1__span">TVL</span>: ${bShareBnbTVL}
                  </div>
                </div>
                <div className="bombfarms__div2__div1__div1__div2"></div>
              </div>
            </div>
            <div className="bombfarms__div2__div2">
              <div className="bombfarms__div2__div2__div1">
                <div className="bombfarms__div2__div2__div1__div1">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Daily Returns:</p>
                  <p className="bombfarms__div2__div2__div1__div1__p2">{bShareBnbDailyAPR}%</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div2">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Your Stake:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={BNBBombSmall}></img> {getDisplayBalance(bShareBnbStakedBalance, bombBtcBank.depositToken.decimal)}
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ ${bShareBnbStakeEarnedInDollars}</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div3">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Earned:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={earnedBomb}></img> {getDisplayBalance(bShareBnbEarnings)}
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ ${bSHareBnbHarvestEarnedInDollars}</p>
                </div>
              </div>
              <div className="bombfarms__div2__div2__div2">
                <DepositButton />
                <WithdrawButton />
                <ClaimRewardButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bombfarms;
