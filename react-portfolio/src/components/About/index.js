import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import coverImage from '../../assets/cover/cover.png';
import profileImage from '../../assets/projects/pp.jpeg';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function About() {
    return (
        <section className="my-5" >
            <h1 id="about">My Portfolio </h1>
            <Col xs={6} md={4}>
                <Image src={profileImage} className="picture" rounded style={{ width: "150px", height: "200px" }} />
            </Col>
            <p>
                My name is Kaan Emre Nazlioz.I am from Turkey,since February 2021,I have been studying UW coding bootcamp.I have learned how to use HTML,CSS,Javascript,Node.js,MySql,MongoDB and now React.js.
            </p>
           
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">

            </div>
        </section>


    );
}

export default About;