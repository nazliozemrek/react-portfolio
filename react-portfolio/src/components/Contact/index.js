import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', textarea: '' });
    const { name, email, textarea } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    function handleChange(e) {
        setFormState({ ...formState, name: e.target.value })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-6" controlId="exampleForm.ControlInput1" defaultValue={name} onChange={handleChange}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" defaultValue={email} onChange={handleChange}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" defaultValue={textarea} onChange={handleChange}>
                <Form.Label>Text</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button  data-testid='button' type='submit'>Submit</Button>
        </Form>
    );
}

export default ContactForm;