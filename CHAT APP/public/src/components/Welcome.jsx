import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);

        if (storedData) {
          const parsedData = JSON.parse(storedData);

          // Check if 'username' property exists in parsed data
          if (parsedData && parsedData.username) {
            setUserName(parsedData.username);
          } else {
            console.error('Malformed data: "username" property not found.');
          }
        } else {
          console.error('No data found in local storage.');
        }
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
