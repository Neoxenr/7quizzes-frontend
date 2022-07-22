import React, { FC, ReactElement } from 'react';

import logo from './img/7quizzes.svg';

type Props = {
  className?: string;
};

const defaultProps: Props = {
  className: '',
};

const Logo: FC<Props> = (props: Props): ReactElement => (
  <img className={props.className} src={logo} alt="7quizzes logo" />
);

Logo.defaultProps = defaultProps;

export default Logo;
