import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import coverImage from '../../assets/cover/cover.png';

function About() {
  return (
    <section className="my-5" >
    <h1 id="about">Who am I?</h1>
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    <div className="my-2">
     <p>
         My name is Kaan Emre Nazlioz.I am from Turkey,since February 2021,I have been studying UW coding bootcamp.I have learned how to use HTML,CSS,Javascript,Node.js,MySql,MongoDB and now React.js
     </p>
    </div>
  </section>

  
  );
}

export default About;