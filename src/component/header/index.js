import React from 'react'
import './index.scss';
import logo from './logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-wrap">
       <img className="logo" src={logo} alt=""/>
      </div>
    )
  }
}