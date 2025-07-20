import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abrham Desalegn </span>
            from <span className="purple"> Addis Abeba, Ethiopia.</span>
            <br />
            I am a Software Engineer graduate from Bahir Dar University and a MERN Stack development trainee from Evangadi Tech.
            <br />
            I specialize in building robust applications using technologies like Node.js and Django, and have experience working with both relational and non-relational databases, including PostgreSQL and MongoDB.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Talk is cheap. Show me the code."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvalds</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
