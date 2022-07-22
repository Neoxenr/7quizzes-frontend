import React, { FC } from 'react';
import { List } from 'antd';

import './style.css';

type Props = {
  rules:
    | [
        {
          ruleId: string;
          ruleText: string;
        },
      ]
    | undefined;
};

const Rules: FC<Props> = (props: Props) => (
  <List
    className="rules"
    dataSource={props.rules}
    renderItem={(item, index) => (
      <List.Item>{`${index + 1}. ${item.ruleText}`}</List.Item>
    )}
  />
);

export default Rules;
