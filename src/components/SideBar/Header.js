import React from 'react';
import { Link } from 'gatsby';



export default function Footer({ title }) {
  return (
    <div id="logo">
      <Link to="/">

        <h1 id="title">{title}</h1>
        
      </Link>
    </div>
  );
}
