/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { I18n } from 'react-redux-i18n';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useSignInMutation } from '../../../api';
import {
  SignInRequestDto,
  SignInResponseDto,
} from '../../../common/dto/auth/types';
import { authorize } from '../../../store/slices';

import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';

import '../style.css';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [authorizeUser, { isLoading: isLogging }] = useSignInMutation();

  // eslint-disable-next-line no-multi-str
  const query = '.ant-form-item-control-input-content > .ant-input, \
                    .ant-form-item-control-input-content > .ant-input-affix-wrapper';
  const elements = document.querySelectorAll(query);

  const handleFinish = (userCredential: SignInRequestDto): void => {
    if (!isLogging) {
      authorizeUser(userCredential)
        .unwrap()
        .then((payload: SignInResponseDto) => {
          localStorage.setItem('token', payload.accessToken);

          dispatch(authorize(true));

          navigate('/');
        })
        .catch(() => {
          elements.forEach((element: any) => {
            element.style.borderColor = '#f00';
          });
        });
    }
  };

  const handleChange = () => {
    elements.forEach((element: any) => {
      element.style.borderColor = '#000';
    });
  };

  return (
    <div className="form-page">
      <div className="form-page__credential">
        <Logo className="form-page__logo" />
        <Form
          className="form-page__form form"
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
                  {I18n.t('page.sign-in.buttonConfirm')}
                </Button>
              );
            }}
          </Form.Item>
        </Form>
        <p className="form-page__info">
          {I18n.t('page.sign-in.formInfo.header')}
          <br />
          <Link to="/signup" className="form-page__link">
            {I18n.t('page.sign-in.formInfo.link')}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
