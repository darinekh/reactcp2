import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicCard({ title, text, imgSrc, buttonText }) {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;

