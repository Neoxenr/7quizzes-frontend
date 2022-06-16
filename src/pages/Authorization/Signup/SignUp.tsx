import React, { useEffect } from 'react';

import { Form, Input } from 'antd';

import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { RootState } from '../../../store/store';

import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';

import '../style.css';
import { useSignUpMutation } from '../../../api';
import { SignInRequestDto, SignUpRequestDto } from '../../../common/dto/auth/types';

const SignUp = () => {
  const navigate = useNavigate();

  const [registerUser, { isLoading: isLogging }] = useSignUpMutation();

  // const error = useSelector((state: RootState) => state.errorReducer);

  // eslint-disable-next-line no-multi-str
  const query =
    '.ant-form-item-control-input-content > .ant-input, \
                    .ant-form-item-control-input-content > .ant-input-affix-wrapper';
  const elements = document.querySelectorAll(query);

  const handleChange = () => {
    elements.forEach((element: any) => {
      element.style.borderColor = '#000';
    });
    // dispatch({ type: ERROR_NONE });
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
        .catch((err: any) => {
          elements.forEach((element: any) => {
            element.style.borderColor = '#f00';
          });
        });
    }
  };

  // // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (isAuthorized) {
  //     return navigate('/');
  //   }
  //   // if (isRegistred) {
  //   //   return navigate('/signin');
  //   // }
  //   // if (error) {
  //   //   elements.forEach((element: any) => {
  //   //     element.style.borderColor = '#f00';
  //   //   });
  //   // }
  // }, [isAuthorized, navigate, elements]);

  return (
    <div className="form-page">
      <div className="form-page__credential">
        <Logo className="form-page__logo" />
        <Form
          className="form-page_form form"
          layout="vertical"
          // onChange={error ? handleChange : () => {}}
          onChange={handleChange}
          onFinish={handleFinish}>
          <Form.Item className="form__text-input" name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item
            className="form__text-input"
            name="password"
            label="Password">
            <Input.Password />
          </Form.Item>
          <Form.Item shouldUpdate>
            {({ getFieldValue }) => {
              {/* @ts-ignore */}
              const { email, password } = getFieldValue();
              const formIsFilled = !!email && !!password;
              return (
                <Button
                  htmlType="submit"
                  disabled={!formIsFilled}
                  className="form__button">
                  Sign up
                </Button>
              );
            }}
          </Form.Item>
        </Form>
        {/* {error !== '' && <p className="form-page__error">{error}</p>} */}
        <p className="form-page__info">
          Already have an account?
          <br />
          <Link to="/signin" className="form-page__link">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
