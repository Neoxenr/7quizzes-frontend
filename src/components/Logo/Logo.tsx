import React, { FC, ReactElement } from 'react';

import logo from './img/7quizzes.svg';

type Props = {
  className?: string;
};

const Logo: FC<Props> = (props: Props): ReactElement => (
  <img className={props.className} src={logo} alt="7quizzes logo" />
);

export default Logo;
