import React, { useState } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../auth';
import { useAuth } from '../../authContext';
import { Navigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fdfde4;
  padding: 20px;
`;

const Form = styled.form`
  background-color: #f5f5dc;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 50%;
  height:50%;
`;

const Title = styled.h2`
  color: #61AFBD;
  text-align: center;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;

const Button = styled.button`
  background-color: #61AFBD;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom:10px;

  &:hover {
    background-color: #2e648b;
  }
`;

const ErrorMessage = styled.p`
  color:  #61AFBD;
  margin-top: 10px;
`;

const SignIn = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (err) {
        setError(err.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (err) {
        setError(err.message);
        setIsSigningIn(false);
      }
    }
  };

  // ✅ Redirect if already logged in
  if (userLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <AuthContainer>
      <Form onSubmit={handleSignIn}>
        <Title>Sign In</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" disabled={isSigningIn}>
        {isSigningIn ? 'Signing In...' : 'Sign In'}
      </Button>
      <div></div>
      <Button type= "button" onClick={onGoogleSignIn} disabled={isSigningIn}>
        Sign In with Google
      </Button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      </Form>
    </AuthContainer>
  );
}

export default SignIn;
