import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  }

  constructor() {
    super();
    this.state = {
      showIndex: 1,
    };
  }

  componentWillMount() {
  }

  handleClick = (index) => {
    this.setState({ showIndex: index });
  }

  render() {
    const content = this.props.children;
    return (
      <div>
        {}
        <div className="tab-item">
          {['推荐音乐', '热歌榜', '搜索'].map((item, index) => <div className={`tab-name ${this.state.showIndex === index ? 'active' : ''}`} key={`${index}${new Date().getTime()}`} onClick={() => this.handleClick(index)}>{item}</div>)}
        </div>
        <div className="tab-content">
          {content.map((item, index) => <div className={this.state.showIndex === index ? 'show' : 'hide'} key={`${index}${new Date().getTime()}`}>{item}</div>) }
        </div>
      </div>
    );
  }
}
