import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>레이아웃 222예제</h1>
          <img src={require('./tt.png')} />
        </div>
        <div>
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
        <div>
          <h2>풋터부분 입니다.</h2>
          <img src={require('./loading.gif')} />
        </div>
      </div>
    );
  }
}


export default Header;
