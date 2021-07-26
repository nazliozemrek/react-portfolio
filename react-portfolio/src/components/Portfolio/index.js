import React from 'react';
import Projects from '../Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
function Portfolio(props) {
    const currentSelection = {
        name: "project1",
        description: "Lorem"
    };
    return (
        <section>
            <h1>{currentSelection.name}</h1>
            <p>{currentSelection.name}</p>
            <Projects/>
        </section>
    )
}

export default Portfolio;