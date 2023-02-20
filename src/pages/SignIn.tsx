import React from 'react';
import SignInBlock from '../components/SignIn';
import ScrollToTop from '../components/SignIn/ScrollToTop';

const SignIn: React.FC = (): JSX.Element => {
  return (
    <>
      <ScrollToTop />
      <SignInBlock />
    </>
  );
};

export default SignIn;
