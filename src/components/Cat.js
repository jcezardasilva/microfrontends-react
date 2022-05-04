import React from "react";
import MicroFrontend from "./MicroFrontend";

const { REACT_APP_CATS_HOST: catsHost } = process.env;

export default function Cat({ history }) {
    return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}