import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

// Styled components
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
  height: 50%;
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
  margin-bottom: 10px;

  &:hover {
    background-color: #2e648b;
  }
`;

const ErrorMessage = styled.p`
  color: #61AFBD;
  margin-top: 10px;
`;

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        groupId: null,
        createdAt: new Date()
      });

      navigate('/openingscreen');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name: user.displayName || 'Google User',
        email: user.email,
        groupId: null,
        createdAt: new Date()
      });

      navigate('/openingscreen');
    } catch (error) {
      setError(error.message);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/home" replace />;
  }

  return (
    <AuthContainer>
      <Form onSubmit={handleSignUp}>
        <Title>Welcome!</Title>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign Up</Button>
        <Button type="button" onClick={handleGoogleSignUp}>
          Sign Up with Google
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '0.9em', color: '#555' }}>
          Already have an account? <a href="/signin" style={{ color: '#4682b4' }}>Sign In</a>
        </p>
      </Form>
    </AuthContainer>
  );
};

export default SignupPage;
