import * as React from 'react';
import { css } from 'emotion';

export const checkmark = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #b8c2cc;
  border-radius: 100%;

  &:after {
    content: '';
    position: absolute;
    display: none;
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
  }
`;

export const container = css`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  padding-top: 5px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  &:hover input ~ .${checkmark} {
    background-color: #ccc;
  }

  & input:checked ~ .${checkmark} {
    background-color: #1bcbd1;    
  }

  & input:checked ~ .${checkmark}:after {
    display: block;
  }

  & input:checked ~ .${checkmark}:before {
    display: block;
  }

  & .${checkmark}:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  & .${checkmark}:before {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

//@ts-ignore
import COLORS from '../../constants/colors';

interface IProps {
  className?: any;
  'data-test'?: any;
  type?: string;
  id?: string;
  value?: string;
  htmlFor?: string;
  description?: string;
}

class CheckBoxAtom extends React.PureComponent<IProps, any> {
  state = {};

  render() {
    const { id = '', value = '', htmlFor = '', description = '' } = this.props;

    return (
      <label className={container}>
        {description}
        <input type="checkbox" id={id} value={value} />
        <label htmlFor={htmlFor} className={checkmark} />
      </label>
    );
  }
}

export { CheckBoxAtom };
