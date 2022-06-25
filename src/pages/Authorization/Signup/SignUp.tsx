/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Form, Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import { useSignUpMutation } from '../../../api';
import { SignUpRequestDto } from '../../../common/dto/auth/types';

import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';

import '../style.css';

function SignUp() {
  const navigate = useNavigate();

  const [registerUser, { isLoading: isLogging }] = useSignUpMutation();

  // eslint-disable-next-line no-multi-str
  const query = '.ant-form-item-control-input-content > .ant-input, \
                    .ant-form-item-control-input-content > .ant-input-affix-wrapper';
  const elements = document.querySelectorAll(query);

  const handleChange = () => {
    elements.forEach((element: any) => {
      element.style.borderColor = '#000';
    });
  };

  const handleFinish = (userCredential: SignUpRequestDto): void => {
    if (!isLogging) {
      registerUser(userCredential)
        .unwrap()
        .then((payload: boolean) => {
          if (payload) {
            navigate('/signin');
          }
        })
        .catch(() => {
          elements.forEach((element: any) => {
            element.style.borderColor = '#f00';
          });
        });
    }
  };

  return (
    <div className="form-page">
      <div className="form-page__credential">
        <Logo className="form-page__logo" />
        <Form
          className="form-page_form form"
          layout="vertical"
          onChange={handleChange}
          onFinish={handleFinish}
        >
          <Form.Item className="form__text-input" name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item
            className="form__text-input"
            name="password"
            label="Password"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item shouldUpdate>
            {({ getFieldsValue }) => {
              const { email, password } = getFieldsValue();
              const formIsFilled = !!email && !!password;
              return (
                <Button
                  htmlType="submit"
                  disabled={!formIsFilled}
                  className="form__button"
                >
                  {I18n.t('page.sign-up.buttonConfirm')}
                </Button>
              );
            }}
          </Form.Item>
        </Form>
        {/* {error !== '' && <p className="form-page__error">{error}</p>} */}
        <p className="form-page__info">
          {I18n.t('page.sign-up.formInfo.header')}
          <br />
          <Link to="/signin" className="form-page__link">
            {I18n.t('page.sign-up.formInfo.link')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
