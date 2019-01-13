import React from 'react';

const Recipe = ({ id, title, minutes, created_at }) => (
  <section style={{ border: '1px solid black', display: 'inline-block', padding: '10px 30px', cursor: 'pointer' }}>
    <h1>{title}</h1>
    <p>🗓 {created_at}</p>
    <p>🕝 {minutes} minutes</p>
  </section>
);

export default Recipe;
