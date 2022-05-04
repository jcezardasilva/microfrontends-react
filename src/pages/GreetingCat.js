import React from "react";
import MicroFrontend from "../components/MicroFrontend";
import Header from "../components/Header";

const { REACT_APP_CATS_HOST: catsHost } = process.env;

export default function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}