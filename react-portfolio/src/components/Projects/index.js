import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function Projects() {
    const [projects] = useState([
        {
            name: 'First Project',
            description: 'Lorem'
        },
        {
            name: 'First Project',
            description: 'Lorem'
        },
        {
            name: 'First Project',
            description: 'Lorem'
        },
        {
            name: 'First Project',
            description: 'Lorem'
        },
        {
            name: 'First Project',
            description: 'Lorem'
        },
        {
            name: 'First Project',
            description: 'Lorem'
        }
    ])
    return (
        <section>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        {projects.map((image, i) => (
                            <Image src={require(`../../assets/projects/${i}.png`).default} thumbnail />
                        ))}
                    </Col>
                </Row>
            </Container>
            </section>
    )
}

export default Projects;