import React, { useEffect } from 'react';

import { Form, Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';

import { signIn } from '../../../store/actions/actions';
import { ERROR_NONE } from '../../../store/actions/actionsTypes';

import '../style.css';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthorized = useSelector(state => state.loginReducer);
  const error = useSelector(state => state.errorReducer);

  // eslint-disable-next-line no-multi-str
  const query = '.ant-form-item-control-input-content > .ant-input, \
                    .ant-form-item-control-input-content > .ant-input-affix-wrapper';
  const elements = document.querySelectorAll(query);

  const handleFinish = (userCredential) => {
    dispatch(signIn(userCredential.email, userCredential.password));
  };

  const handleChange = () => {
    elements.forEach((element) => {
      element.style.borderColor = '#000';
    });
    dispatch({ type: ERROR_NONE });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isAuthorized) {
      return navigate('/');
    }
    if (error) {
      elements.forEach((element) => {
        element.style.borderColor = '#f00';
      });
    }
  }, [isAuthorized, navigate, error, elements]);

  return (
    <div className="form-page">
      <div className="form-page__credential">
        <Logo className="form-page__logo" />
        <Form className="form-page__form form" layout="vertical" onChange={(error ? handleChange : () => { })} onFinish={handleFinish}>
          <Form.Item className="form__text-input" name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item className="form__text-input" name="password" label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item shouldUpdate>
            {({ getFieldValue }) => {
              const { email, password } = getFieldValue();
              const formIsFilled = !!email && !!password;
              return (
                <Button
                  htmlType="submit"
                  disabled={!formIsFilled}
                  className="form__button"
                >
                  Sign in
                </Button>
              );
            }}
          </Form.Item>
        </Form>
        {error !== ''
          && (
            <p className="form-page__error">
              {error}
            </p>
          )}
        <p className="form-page__info">
          Don’t have an account yet?
          <br />
          <Link to="/signup" className="form-page__link">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
