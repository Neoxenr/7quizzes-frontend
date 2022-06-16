import React from 'react';

import { Form, Input } from 'antd';

import { useDispatch,  } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Logo from '../../../components/Logo/Logo';

import '../style.css';
import { useSignInMutation } from '../../../api';
import {
  SignInRequestDto,
  SignInResponseDto,
} from '../../../common/dto/auth/types';
import { authorize } from '../../../store/slices';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const error = useSelector((state: RootState) => state.errorReducer);

  const [authorizeUser, { isLoading: isLogging }] = useSignInMutation();

  // eslint-disable-next-line no-multi-str
  const query =
    '.ant-form-item-control-input-content > .ant-input, \
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
        .catch((err: any) => {
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
    // dispatch({ type: ERROR_NONE });
  };

  // // eslint-disable-next-line consistent-return
  // useEffect(() => {
  //   if (error) {
  //     elements.forEach((element: any) => {
  //       element.style.borderColor = '#f00';
  //     });
  //   }
  // }, [isAuthorized, navigate, error, elements]);

  return (
    <div className="form-page">
      <div className="form-page__credential">
        <Logo className="form-page__logo" />
        <Form
          className="form-page__form form"
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
                  Sign in
                </Button>
              );
            }}
          </Form.Item>
        </Form>
        {/* {error !== '' && <p className="form-page__error">{error}</p>} */}
        <p className="form-page__info">
          Don’t have an account yet?
          <br />
          <Link to="/signup" className="form-page__link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
