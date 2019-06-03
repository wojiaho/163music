import React from 'react';
import './index.scss';

export default class recommend extends React.Component {
    state = {
      startLeft: 0,
      startTop: 0,
      left: 0,
      top: 0,
    }

    handerMouseDown = (event) => {
      this.setState({
        startLeft: event.clientX,
        startTop: event.clientY,
      });
      window.addEventListener('mousemove', this.handerMouseMove);
      window.addEventListener('mouseup', this.handerMouseUp);
    }

    handerMouseUp = (event) => {
      window.removeEventListener('mousemove', this.handerMouseMove);
    }

    handerMouseMove = (event) => {
      const docWidth = document.body.clientWidth;
      const offsetLeft = this.state.left + event.clientX - this.state.startLeft;
      const offsetTop = this.state.top + event.clientY - this.state.startTop;
      this.setState({
        left: offsetLeft < 0 ? 0 : (offsetLeft > docWidth - 100 ? docWidth - 100 : offsetLeft),
        top: offsetTop < 0 ? 0 : offsetTop,
        startLeft: event.clientX,
        startTop: event.clientY,
      });
    }

    render() {
      return (
        <div className="wrapper">
          <div className="move-box" onMouseDown={this.handerMouseDown} style={{ left: `${this.state.left}px`, top: `${this.state.top}px` }} />
        </div>
      );
    }
}
