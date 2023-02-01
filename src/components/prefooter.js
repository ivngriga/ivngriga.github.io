import React from 'react';

import '../scss/prefooter.scss'

import img1 from '../img/img_subfooter_lg.webp'
import img2 from '../img/img_subfooter_1.webp'
import img3 from '../img/img_subfooter_2.webp'
import img4 from '../img/img_subfooter_3.webp'
import img5 from '../img/img_subfooter_4.webp'

export function Prefooter(){
    return (
        <div className='prefooter-container'>
            <div className='prefooter-left'>
                <img src={img1} className='prefooter-bg-img'></img>
                <div className="prefooter-img-text">
                    <div className='prefooter-text-instagram'>INSTAGRAM</div>
                    <div className='prefooter-text-title'>Discover<br/>Watch Lab</div>
                </div>
            </div>
            <div className='prefooter-right'>
                <div className='prefooter-grid-container'>
                    <div className='prefooter-grid-item'>
                        <img src={img2} className='prefooter-right-img'></img>
                    </div>
                    <div className='prefooter-grid-item'>
                        <img src={img3} className='prefooter-right-img'></img>
                    </div>
                    <div className='prefooter-grid-item'>
                        <img src={img4} className='prefooter-right-img'></img>
                    </div>
                    <div className='prefooter-grid-item'>
                        <img src={img5} className='prefooter-right-img'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}