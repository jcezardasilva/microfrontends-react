import React from "react";
import MicroFrontend from "./MicroFrontend";

const { REACT_APP_DOGS_HOST: dogsHost } = process.env;

export default function Dog({ history }) {
    return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}