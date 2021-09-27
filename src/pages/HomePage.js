import React from 'react'

import { Link } from 'react-router-dom'


export default function HomePage() {

  return (

    <div className="container">

      <h1 align="center">Welcome to my React Project </h1>
      <h2 align="center">I'm Krishna Moorthi</h2>
      <h3 align="center">Intern at Sudans Technocrats Foundation</h3>
      <h3 align="center"> BIO</h3>
      <h5 align="center">Name : Krishna Moorthi</h5>
      <h5 align="center">Education : BCA</h5>
      <h5 align="center">D.O.B : 14-08-2000</h5>
      <h5 align="center">Place : Tiruppur</h5>

     

      <p>

        <Link to="/hello">click here to know my interest.</Link>

      </p>

    </div>

  )

}