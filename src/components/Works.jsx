import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Line = styled.img`
  height: 5px;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;



const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  a{
    text-decoration: none;
  }

`;

const ListItem = styled.li`
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: color 1s ease;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  .description-box{
    display: none;
  }
  &:hover {
    color: #fff;
  }
`;

const Logo = styled.img`
  height: 50px;
  transition: transform 1s ease;

  &:hover{
    transform: rotate(360deg);
  }
`;



const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
     
        <Left>
          <List>
          <a href="https://satyamdas03.github.io/simple-weather-app/">
          <ListItem>
                Simple Weather App<span><Logo src="./img/weather-news.png"/></span>
                <p className="description-box">This is a basic weather app that displays the current weather conditions and forecast for a selected location.</p>
          </ListItem>
          </a>
          <a href="https://satyamdas03.github.io/a_ball_in_space/">
            <ListItem>
                a ball in space <span><Logo src="./img/medicine-ball.png"/></span>
              </ListItem></a>
          <a href="https://satyamdas03.github.io/pacman/"><ListItem>
                pacman game <span><Logo src="./img/play.png"/></span>
              </ListItem>
            </a>
              
            <Line src="./img/line.png" />

            <a href="https://satyamdas03.github.io/simon-game/">
              <ListItem>
                simon game  <span><Logo src="./img/game.png"/></span>
              </ListItem>
            </a>
            <a href="https://satyamdas03.github.io/keeper-app/">
              <ListItem>
                advanced To do list  <span><Logo src="./img/mood-board.png"/></span>
              </ListItem>
            </a>
            <a href="https://satyamdas03.github.io/clock/">
            <ListItem>
                a clock  <span><Logo src="./img/clock.png"/></span>
              </ListItem>
            </a>
             
            <Line src="./img/line.png" />

            <a href="https://satyamdas03.github.io/simple-dice-game/">
              <ListItem>
                dice game <span><Logo src="./img/dice.png"/></span>
              </ListItem>
            </a>
            <a href="https://satyamdas03.github.io/simple-drum-kit/">
            <ListItem>
                a drum kit <span><Logo src="./img/drum-kit.png"/></span>
              </ListItem>
            </a>
              <a href="https://satyamdas03.github.io/netflix-clone-frontend/">
             <ListItem>
                netfilx frontend app <span><Logo src="./img/netflix.png"/></span>
              </ListItem>
            </a>
              
            <Line src="./img/line.png" />

          </List>
        </Left>
        <Right>
        <WebDesign />
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
