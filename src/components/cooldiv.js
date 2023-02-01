import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/cooldiv.scss'

import img1 from '../img/img_cooldiv.webp'
import arrowleft from '../img/img_btn_left.png'
import arrowright from '../img/img_btn_right.png'

export function CoolDiv(){
    return(
        <div className='cooldiv-container'>
            <div className='cooldiv-left'>
                <div className='cooldiv-title'>Press from <br/> Watch Lab Studio</div>
                <div className='cooldiv-desc'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain trouble</div>

                
            </div>
            <div className='cooldiv-right'>
                <div className='cooldiv-img-container'>
                    <img className='cooldiv-img' src={img1}></img>
                </div>
                
                <div className='cooldiv-grey-square'>
                    <div className='cooldiv-press'>PRESS</div>
                    <div className='cooldiv-date'>18 SETTEMBRE 2015</div>
                    <div className='cooldiv-gr-sq-title'>Most Important<br/>Days on Watchlab</div>
                    <div className='cooldiv-btn-container'>
                        <img src={arrowleft} className='cooldiv-arrow cooldiv-arrow-left'></img>
                        <img src={arrowright} className='cooldiv-arrow cooldiv-arrow-right'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}