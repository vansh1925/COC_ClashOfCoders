import './Login.css';
import { SignUp } from '@clerk/clerk-react';

const Register = () => {
  return (
    <div className="auth-container">
      <SignUp afterSignUpUrl="/matches" />
    </div>
  );
};

export default Register; 