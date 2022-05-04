import React, { useEffect } from 'react';

import { Form, Input } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

import { signIn } from '../../store/actions/actions';

import './style.css';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthorized = useSelector(state => state.authReducer);

  const handleFinish = (userCredential) => {
    dispatch(signIn(userCredential.email, userCredential.password));
  };

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized, navigate]);

  return (
    <div className="signin">
      <div className="signin__credential">
        <Logo className="signin__logo" />
        <Form className="signin__form form" onFinish={handleFinish} layout="vertical">
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
                  className="signin__button"
                >
                  Sign in
                </Button>
              );
            }}
          </Form.Item>
        </Form>
        <p className="signin__info">
          Don’t have an account yet?
          <br />
          <b>Register instead</b>
        </p>
      </div>
    </div>
  );
};

export default Signin;
