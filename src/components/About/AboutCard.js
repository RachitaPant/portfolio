import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rachita Pant </span>
            from <span className="purple"> Dehradun, India.</span>
            <br />
            I am currently a Computer Science Engineering student at GBPIET, Pauri Garhwal
            <br />
            I love to build websites and native apps.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading book , my favourite being The Mountain is You
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs , love sharing what I learn
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling , to re-energize and refresh
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
