import React from 'react';
import './index.scss';

export default class recommend extends React.Component {
  render() {
    const playlist = [];
    for (let i = 0; i < 6; i++) {
      playlist.push({
        src: 'http://p2.music.126.net/I50s1oGiVZWLlt4P5BzlVw==/109951164085768746.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp',
        num: 34.2,
        des: '晚霞洒落，将寂寞温柔豢养',
        pid: `${new Date().getTime() + i}`,
      });
    }
    return (
      <div>
        <div className="rem-tl">推荐音乐</div>
        <ul className="rem-playlist" >
          {playlist.map(item => (
            <li className="playlist-item" key={item.pid}>
              <div className="cover-wrap">
                <img src={item.src} alt="" />
                <span>{item.num}万</span>
              </div>
              <p>{item.des}</p>
            </li>))}
        </ul>
      </div>
    );
  }
}
