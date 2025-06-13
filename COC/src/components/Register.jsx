import './Login.css';
import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <div className="auth-container">

      <SignUp forceRedirectUrl="/choose-mode" />
    </div>
  );
};

export default Register; 