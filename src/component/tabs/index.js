import React from 'react';
import './index.scss';

export default class Tabs extends React.Component {

  state = {
    showIndex: 0
  }
  componentWillMount() {
    console.log(this.props)
  }
  handleClick = (index) => {
    this.setState({showIndex: index})
  }

  render() {
    const content = this.props.children;
    return (
      <div>
        {}
        <div className="tab-item">
          {['推荐音乐', '热歌榜', '搜索'].map((item, index) => 
            <div className={`tab-name ${this.state.showIndex === index ? "active" : ""}`} key={index} onClick={() => this.handleClick(index)}>{item}</div>
          )}
        </div>
        <div className="tab-content">
          {content.map((item, index) => 
            <div className={this.state.showIndex === index ? 'show' : 'hide'} key={index}>{item}</div>
          ) }
        </div>
      </div>
    )
  }
}