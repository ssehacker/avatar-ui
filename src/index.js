/**
 * Created by zhouyong on 17/10/29.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';

import './style';


class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button />
    );
  }
}

ReactDOM.render(<Demo/>, document.getElementById('root'));
