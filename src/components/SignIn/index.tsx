import React from 'react';
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  Form,
} from './SignInElements';

const SignInBlock: React.FC<{}> = (): JSX.Element => {
  return (
    <Container>
      <FormWrap>
        <Icon to='/'>dolla</Icon>
        <FormContent>
          <Form action='#'>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' required />
            <FormLabel htmlFor='for'>Password</FormLabel>
            <FormInput type='password' required />
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignInBlock;
