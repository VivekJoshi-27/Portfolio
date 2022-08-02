import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/Calculator.png";
import quicky from "../../Assets/Projects/Quicky.png";
import netflix from "../../Assets/Projects/Netflix.png";
import expense from "../../Assets/Projects/Expence-Tracker.png";
import todoapp from "../../Assets/Projects/Todoapp.png";
import userinfo from "../../Assets/Projects/User-Info.png";
import portfolio from "../../Assets/Projects/Portfolio.png";





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Simple Calculator"
              description="Simple Calculator is made for perform basic calculator oprations eg like Addition, Subtraction, Division and Multiplication. Is build with HTML, CSS, And Javascript."
              link="https://github.com/VivekJoshi-27/Simple_calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quicky}
              isBlog={false}
              title="Quicky E-comm"
              description="This project is a simple E-commerce Website . It was build with Pure HTML and CSS Only."
              link="https://github.com/VivekJoshi-27/Quicky_e-commerce"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="This project is a simplified front end clone of Netflix. It was created with React and CSS (Grid and Flexbox). User can login and The webpage adapts to any screen size."
              link="https://github.com/VivekJoshi-27/Netflix_clone"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense tracker"
              description="In this project users can add daily expense and users can filter expenses by year and user can also edit and delete expenses. It is Build with HTML 5, JavaScript, CSS 3, JSON, Bootstrap, React JS, Node JS, Express JS, Mongo DB( Rest API), Postman.."
              link="https://github.com/VivekJoshi-27/Expense_tracker"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="To-Do-app"
              description="In this project users can add daily task. It is popup /modal where user can enter task name choose date and time and select category from the drop-down. The Drop-down disply only those categories which are present on the categories. It is built by using React JS ."
              link="https://github.com/VivekJoshi-27/Todolist_app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userinfo}
              isBlog={false}
              title="User Information"
              description="In this project user can add new user deatails like first-name, last-name, mobile-number and edit their deatails with delete action with Search Bar. Build with HTML 5, JavaScript, CSS 3, JSON, Bootstrap, React JS, Node JS, Express JS, Mongo DB( Rest API), Postman."
              link="https://github.com/VivekJoshi-27/User_Information"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="My personal portfolio which features some of my github projects as well as my resume and technical skills. Build with HTML 5, JavaScript, Bootstrap, React JS."
              link="https://github.com/VivekJoshi-27/Portfolio"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="School Mangement"
              description="In this Project User can add ,delete, edit information Students & teachers information. Build with HTML 5, JavaScript, CSS 3, JSON, Bootstrap, React JS, Node JS, Express JS, Mongo DB( Rest API), Postman. "
              link=""
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
