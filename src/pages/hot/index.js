import React from 'react';
import './index.scss';
import hot_list from 'images/index_icon_2x.png';

console.log(hot_list);

export default class Hot extends React.Component {
  render() {
    return (
      <div>
        <div className="hot-top">
          <div className="hoticon" />
          <p className="hot-des">更新日期：05月23日</p>
        </div>
        <ul>
          <li className="music-item">
            <div>01</div>
            <div>
              <p>心如止水</p>
              <div>
                <i className="icon" />
                <span>八爷 - lemon</span>
              </div>
              div
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
