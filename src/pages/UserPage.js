import React from "react";

import { useParams } from "react-router-dom";

export default function UserPage() {

let { id } = useParams();

return (

<>

<h1>My Interest is Web Development</h1>

<h3>So that im here to do the internship with sudans tech to learn more about web development and to explore my skills.</h3>

</>

);

}