import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #fdfde4;
  padding: 20px;
`;

const Form = styled.div`
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
  color: #4682b4;
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
  background-color: #4682b4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #2e648b;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const SignupPage = () => {
  console.log('SignupPage is rendering');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      // User signed up successfully, you can redirect them to another page
      navigate('/openingscreen'); // Example redirection
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContainer>
      <Form>
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
        <Button onClick={handleSignUp}>Sign Up</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '0.9em', color: '#555' }}>
          Already have an account? <a href="/signin" style={{ color: '#4682b4' }}>Sign In</a>
        </p>
      </Form>
    </AuthContainer>
  );
};

export default SignupPage;

