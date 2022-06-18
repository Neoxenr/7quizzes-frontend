import React, { FC, MouseEventHandler, ReactElement } from 'react';

import { Button as ButtonAntd } from 'antd';

import './style.css';

type Props = {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: string;
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
};

const defaultProps: Props = {
  className: '',
  disabled: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
  children: '',
  type: 'primary',
  htmlType: 'button',
};

const Button: FC<Props> = (props: Props): ReactElement => (
  <ButtonAntd
    shape="round"
    htmlType={props.htmlType}
    type={props.type}
    className={`button ${props.className}`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </ButtonAntd>
);

Button.defaultProps = defaultProps;

export default Button;
