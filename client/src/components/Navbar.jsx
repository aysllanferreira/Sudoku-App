import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { SiWolframmathematica } from 'react-icons/si';
import {
  BsLinkedin, BsGithub, BsYoutube, BsInstagram,
} from 'react-icons/bs';
import { GoProject } from 'react-icons/go';

function Navbarx() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <SiWolframmathematica />
          {' '}
          Sudoku App
          {' '}
          <SiWolframmathematica />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://www.linkedin.com/in/aysllan-ferreira-61aa58228/" target="_blank"><BsLinkedin /></Nav.Link>
          <Nav.Link href="https://github.com/aysllanferreira" target="_blank"><BsGithub /></Nav.Link>
          <Nav.Link href="https://www.youtube.com/channel/UCF6TwN5s_lYIoftUhY1CF2w" target="_blank"><BsYoutube /></Nav.Link>
          <Nav.Link href="https://www.instagram.com/aysllanferreira99/" target="_blank"><BsInstagram /></Nav.Link>
          <Nav.Link href="https://www.aysllanferreira.dev/" target="_blank"><GoProject /></Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/scoreboard">ScoreBoard</Nav.Link>
        </Nav>
        {/* SOCIAL MEDIA */}
      </Container>
    </Navbar>
  );
}

export default Navbarx;
