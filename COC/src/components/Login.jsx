import './Login.css';

import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Login = () => {

  return (
    <div className="auth-container">
      <SignIn afterSignInUrl="/matches" />

    </div>
  );
};

export default Login; 
