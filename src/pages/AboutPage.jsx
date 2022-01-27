import React from "react";
import Card from "../Components/Shared/card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>React app for feedbak</p>
        <p>versio 1.0.0</p>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
