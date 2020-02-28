import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components';

const CardDiv = styled.div`
display: flex;
justify-content: center;
width: 45%;
background-color: grey;
padding: 20px 0px;
border: white solid 20px;
`
export default function CharacterCard({character}) {

  return (
    <CardDiv>
    <Card>
      <CardImg src={character.image} alt='Card image cap' />
      <CardBody>
        <CardTitle>
          <h1>{character.name}</h1>
        </CardTitle>
        <CardSubtitle>
          <span>Status: {character.status}</span>
        </CardSubtitle>
        <CardSubtitle>
          <span>Gender: {character.gender}</span>
        </CardSubtitle>
        <CardSubtitle>
          <span>Number of episodes: {character.episode.length} </span>
        </CardSubtitle>
      </CardBody>
    </Card>
  </CardDiv>
);
}
