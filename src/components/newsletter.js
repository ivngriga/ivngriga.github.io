import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../scss/newsletter.scss'

import img1 from '../img/img_newsletter.webp'

export function Newsletter(){
    return(
        <div className='newsletter-container'>
            <img className='newsletter-bg-img' src={img1}></img>
            <div className='newsletter-text'>
                <div className='newsletter-title'>Get in Touch</div>
                <div className='newsletter-desc'>DISCOVER MORE ABOUT NEWS, <br/> EXCLUSIVE EVENTS AND DISCOUNT</div>
                <Form className="d-flex newsletter-form">
                        <Form.Control
                            type="input"
                            className="newsletter-input me-2"
                            aria-label="Search"
                            placeholder='Type Your Email'
                        />
                        <Button className='newsletter-button' variant='outline-light'>ok</Button>
                </Form>
            </div>
        </div>
    )
}