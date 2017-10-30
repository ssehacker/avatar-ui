/**
 * Created by zhouyong on 17/10/29.
 */
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Base from '../Base';

export default class Button extends Base {
  static defaultProps = {
    type: 'default',
    size: 'medium',
  };

  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'default', 'success', 'info', 'warning', 'danger', 'dark']),
    size: PropTypes.oneOf(['large', 'small', 'mini', 'medium']),
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.prefixCls = this._prefixCls + '-btn';
  }

  render() {
    const { prefixCls } = this;
    const { className, type, size } = this.props;
    return (
      <button
        className={
          classnames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: true,
            [`${prefixCls}-size-${size}`]: true,
            [className]: !!className},
          )
        }
      >按钮</button>
    );
  }
}
