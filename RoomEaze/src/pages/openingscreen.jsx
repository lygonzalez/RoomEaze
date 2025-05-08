import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Shape from '../assets/shape.png';

const OpeningScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fdfde4;
  padding: 20px;
  text-align: center;
`;

const Container = styled.div`
  position: relative; /* Positioning context */
  width: 533.7px; /* Match image width */
  height: 463.3px; /* Match image height */
`;

const ShapeImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Fill the container */
  height: 100%;
`;


const Title = styled.h1`
  top: 50px;
  color: #61AFBD; // Example title color
  font-size: 90px;
  font-family: 'Fredoka', sans-serif;
  font-weight:bolder;
  position: absolute;
  margin-bottom: 10px;
  z-index: 1; /* Ensure text is above the shape */
`;

const Subtitle = styled.p`
  position: absolute;
  top: 330px;
  color:rgb(0, 0, 0); // Example subtitle color
  margin-bottom: 20px;
  width:591px;
  font-size:25px;
  font-width:3px;
  z-index: 1;
  font-family: 'Nunito Sans', sans-serif;

`;

const BottomContent = styled.div`
  position: absolute;
  top:500px; /* Adjust to position below the shape */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
  z-index: 1;
  width: 100%;
`;

const Button = styled.button`
  background-color: #61AFBD; // Example button color
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  margin: 5px;
  width: 200px;

  &:hover {
    background-color:#b9dde3;
;
  }
`;

const TextButton = styled.button`
  background: none;
  border: none;
  color: #61AFBD;
  font-family: 'Fredoka', sans-serif;
  font-size: 1em;
  cursor: pointer;
  text-decoration: underline;
`;



const OpeningScreen = () => {
  console.log('openingpage');
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/signin');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <OpeningScreenContainer>
      <Container>
        <ShapeImage src={Shape} alt="Abstract Shape" />
        <Title>Welcome to RoomEaze</Title>
        <Subtitle>Ease your roommate experience with a shared space for scheduling and communication.</Subtitle>
        <BottomContent>
          <Button onClick={goToSignIn}>Sign In</Button>
          <p>Don't have an account yet? Let's get started!</p>
         <TextButton onClick={goToSignUp}>Sign Up</TextButton>
        </BottomContent>
      </Container>  
    </OpeningScreenContainer>
  );
};

export default OpeningScreen;