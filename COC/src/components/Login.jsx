import './Login.css';

import { SignIn } from '@clerk/clerk-react';


const Login = () => {

  return (
    <div className="auth-container">
      <SignIn fallbackRedirectUrl="/choose-mode" />

    </div>
  );
};

export default Login; 
