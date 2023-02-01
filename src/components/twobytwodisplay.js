import React from 'react'

import Button from 'react-bootstrap/Button'

import '../scss/textslide.scss'

export function TextSlide({preamble, title, description}){
    return (
        <div className='text-slide-container'>
            <div className="text-slide-preamble">{preamble}</div>
            <div className="text-slide-title">{title}</div>
            <div className="text-slide-postamble">{description}</div>
            <Button className="text-slide-button" variant="outline-dark">View</Button>
            
        </div>
    )
}