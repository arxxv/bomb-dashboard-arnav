import React from 'react';

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

function bombfarms() {
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
                    <span className="bombfarms__div2__div1__div1__div1__span">TVL</span>: $1,008,430
                  </div>
                </div>
                <div className="bombfarms__div2__div1__div1__div2"></div>
              </div>
            </div>
            <div className="bombfarms__div2__div2">
              <div className="bombfarms__div2__div2__div1">
                <div className="bombfarms__div2__div2__div1__div1">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Daily Returns:</p>
                  <p className="bombfarms__div2__div2__div1__div1__p2">2%</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div2">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Your Stake:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={BTCBombSmall}></img> 124.21
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ $1171.62</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div3">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Earned:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={earnedBomb}></img> 6.4413
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ $298.88</p>
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
                    <span className="bombfarms__div2__div1__div1__div1__span">TVL</span>: $1,008,430
                  </div>
                </div>
                <div className="bombfarms__div2__div1__div1__div2"></div>
              </div>
            </div>
            <div className="bombfarms__div2__div2">
              <div className="bombfarms__div2__div2__div1">
                <div className="bombfarms__div2__div2__div1__div1">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Daily Returns:</p>
                  <p className="bombfarms__div2__div2__div1__div1__p2">2%</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div2">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Your Stake:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={BNBBombSmall}></img> 124.21
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ $1171.62</p>
                </div>
                <div className="bombfarms__div2__div2__div1__div3">
                  <p className="bombfarms__div2__div2__div1__div1__p1">Earned:</p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">
                    <img src={earnedBomb}></img> 6.4413
                  </p>
                  <p className="bombfarms__div2__div2__div1__div2__p2">≈ $298.88</p>
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

export default bombfarms;
