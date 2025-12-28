import React from 'react';

export default function About() {
  return (
    <div className="container my-4">
      <h2>About TextUtils</h2>
      <p>
        TextUtils ek utility app hai jo text ko manipulate karne ke liye
        use hoti hai. Is app se aap:
      </p>

      <ul>
        <li>Text ko Uppercase / Lowercase bana sakte ho</li>
        <li>Extra spaces remove kar sakte ho</li>
        <li>Text copy kar sakte ho</li>
        <li>Words aur characters count kar sakte ho</li>
      </ul>

      <p>
        Ye app React aur Bootstrap ka use karke banai gayi hai.
      </p>
    </div>
  );
}
