import "./App.css";
// import Navbar from "./componant/navbare/nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Figure from "react-bootstrap/Figure";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#AboutMe">about me</Nav.Link>
            <Nav.Link href="#ContactMe">contact me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element */}
      {/* https://anuraghazra.dev/#home */}
      {/* https://react-bootstrap.netlify.app/components/cards/#rb-docs-content */}

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "40rem", height: "180", position: "center" }}>
              <Card.Img
                style={{ width: "25rem", position: "center" }}
                variant="top"
                src="https://avatars.githubusercontent.com/u/101014428?v=4"
              />
              <Card.Body>
                <Card.Title>Ahmad Saleh</Card.Title>
                <Card.Text>
                  full stack web developer <br />
                  with up-to-date knowledge in react, reduce, and
                  javascript.that enables me to build for you the responsive
                  slick website that you need for your organization
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
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
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <img src="https://img.shields.io/badge/Node.js-lightgrey?style=for-the-badge&logo=Node.js&logoColor=white" />
            <img src="https://img.shields.io/badge/React-orange?style=for-the-badge&logo=React&logoColor=white" />
            <img src="https://img.shields.io/badge/Redux-red?style=for-the-badge&logo=Redux&logoColor=white" />
          </Col>

          <Col>
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=MySQL&logoColor=white"
                alt="MySQL image"
              />
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://img.shields.io/badge/Express-blue?style=for-the-badge&logo=Express&logoColor=white"
                alt="MySQL image"
              />
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://img.shields.io/badge/JavaScript-yellowgreen?style=for-the-badge&logo=JavaScript&logoColor=white"
                alt="MySQL image"
              />
            </Card>
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://img.shields.io/badge/jQuery-yellow?style=for-the-badge&logo=jQuery&logoColor=white"
                alt="MySQL image"
              />
            </Card>
            <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=MySQL&logoColor=white" />
            <img src="https://img.shields.io/badge/Express-blue?style=for-the-badge&logo=Express&logoColor=white" />
            <img src="https://img.shields.io/badge/JavaScript-yellowgreen?style=for-the-badge&logo=JavaScript&logoColor=white" />
            <img src="https://img.shields.io/badge/jQuery-yellow?style=for-the-badge&logo=jQuery&logoColor=white" />
          </Col>
          <Col className="p-5">
            <Card className="text-white mb-2">
              <Card.Img
                src="https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=MongoDB&logoColor=white"
                alt="MongoDB image"
              />
            </Card>

            <Card className="bg-dark text-white mb-2">
              <Card.Img
                src="https://img.shields.io/badge/React-orange?style=for-the-badge&logo=React&logoColor=white"
                alt="React image"
              />
            </Card>

            <Card className="bg-dark text-white mb-2">
              <Card.Img
                src="https://img.shields.io/badge/Redux-red?style=for-the-badge&logo=Redux&logoColor=white"
                alt="Redux image"
              />
            </Card>
          </Col>
        </Row>
      </Container>
      {/* use ref in page */}
      <CardGroup id="Home">
        <Card>
        <Card.Link href="https://62ad1d7ae39add1060982f66--keen-stroopwafel-441c58.netlify.app">
          <Card.Img variant="top" src="https://github.com/404-Challengers/MERAKI_Academy_Project_5/raw/main/pic/Home.jpg" />
          </Card.Link>
          <Card.Body>
            <Card.Title> infinity Zone </Card.Title>
            <Card.Text>
              a full-stack web application that enables the customer to purchase
              the product they desire passed on their preferences to brand style
              and price , with a futuristic and simplistic design.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">this website was builte using -
            <  img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white" />
            <  img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=MySQL&logoColor=white" />
            <  img src="https://img.shields.io/badge/Express-blue?style=for-the-badge&logo=Express&logoColor=white" />
            <  img src="https://img.shields.io/badge/React-orange?style=for-the-badge&logo=React&logoColor=white" />
            <  img src="https://img.shields.io/badge/Node.js-lightgrey?style=for-the-badge&logo=Node.js&logoColor=white" />
            <  img src="" />


</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://codeslash.net/wp-content/uploads/2019/08/codeslash-en-logo-blue-v1.png" />
          <Card.Body>
            <Card.Title>code</Card.Title>
            <Card.Text>
              code is an educational platform that gives you access to various
              programming languages so you can choose what language is best
              sooted for your goals and move forward in learning that
              language with our easy, fun-to-learn courses.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">this website was builte using --
            <  img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=white" />
            <  img src="https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=MongoDB&logoColor=white" />
            <  img src="https://img.shields.io/badge/Express-blue?style=for-the-badge&logo=Express&logoColor=white" />
            <  img src="https://img.shields.io/badge/React-orange?style=for-the-badge&logo=React&logoColor=white" />
            <  img src="https://img.shields.io/badge/Node.js-lightgrey?style=for-the-badge&logo=Node.js&logoColor=white" />
            <  img src="" />


</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>top movies for you</Card.Title>
            <Card.Text>
              Is an online platform that enables you to render movies based on
              the category and rating, to ease your decision when choosing the
              movie of the night.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default App;
