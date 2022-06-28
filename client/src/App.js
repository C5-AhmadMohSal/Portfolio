import "./App.css";
import Navbar from "./componant/navbare/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Ahmad Saleh
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* li ul on click ref change to the class  */}

              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                about me
              </a>
              <a class="nav-link" href="#">
                may projects
              </a>
              <a class="nav-link" href="#">
                resume
              </a>
              <a class="nav-link " href="#">
                contact me
              </a>
              
            </div>
          </div>
        </div>
      </nav>
      {/* https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element */}
      {/* https://anuraghazra.dev/#home */}
      {/* https://react-bootstrap.netlify.app/components/cards/#rb-docs-content */}
      
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "40rem" ,position:"center" }}>
              <Card.Img
                variant="top"
                src="https://avatars.githubusercontent.com/u/101014428?v=4"
              />
              <Card.Body>
                <Card.Title>Ahmad Saleh</Card.Title>
                <Card.Text>
                  Hi there Ahmad Saleh here is a full stack web developer with
                  up-to-date knowledge in react, reduce, and javascript.that
                  enables me to build for you the responsive slick website that
                  you need for your organization
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            {/* <img
                  src="https://avatars.githubusercontent.com/u/101014428?v=4"
                  class="card-img-top"
                  alt="Ahmad img"
                />
                <div class="card-body">
                  <h5 class="card-title">Ahmad Saleh</h5>
                  <p class="card-text">
                    Hi there Ahmad Saleh here is a full stack web developer with
                    up-to-date knowledge in react, reduce, and javascript.that
                    enables me to build for you the responsive slick
                    website that you need for your organization.
                  </p>
                </div> */}
          </Col>

        </Row>
        <Row>
          <Col>
            <img src="https://img.shields.io/badge/Node.js-lightgrey?style=for-the-badge&logo=Node.js&logoColor=white" />
            <img src="https://img.shields.io/badge/React-orange?style=for-the-badge&logo=React&logoColor=white" />
            <img src="https://img.shields.io/badge/Redux-red?style=for-the-badge&logo=Redux&logoColor=white" />
          </Col>
          <Col>
            <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=MySQL&logoColor=white" />

            <img src="https://img.shields.io/badge/Express-blue?style=for-the-badge&logo=Express&logoColor=white" />
            <img src="https://img.shields.io/badge/JavaScript-yellowgreen?style=for-the-badge&logo=JavaScript&logoColor=white" />
            <img src="https://img.shields.io/badge/jQuery-yellow?style=for-the-badge&logo=jQuery&logoColor=white" />
          </Col>
          <Col>
            <img src="https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=MongoDB&logoColor=white" />
            <img src="https://img.shields.io/badge/React-orange?style=for-the-badge&logo=React&logoColor=white" />
            <img src="https://img.shields.io/badge/Redux-red?style=for-the-badge&logo=Redux&logoColor=white" />
          </Col>
        </Row>
      </Container>
      {/* use ref in page */}
    </>
  );
}

export default App;
