import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/gridlayout.scss'

import { TextSlide } from './twobytwodisplay';

import img1 from '../img/img_house1.webp'
import img2 from '../img/img_house2.webp'

export function TwoByTwo1(){
    return (
        <div className="twobytwo-grid-container">
            <div className="twobytwo-grid-item">{AllData["desc3"]()}</div>
            <div className="twobytwo-grid-item">{AllData["img5"]()}</div>
            <div className="twobytwo-grid-item">{AllData["img6"]()}</div>
            <div className="twobytwo-grid-item">{AllData["desc4"]()}</div>
        </div>
    )
}

export function TwoByTwoPrefooter(){
    return (
        <div className="twobytwo-grid-container">
            <div className="twobytwo-grid-item">{AllData["desc3"]()}</div>
            <div className="twobytwo-grid-item">{AllData["img5"]()}</div>
            <div className="twobytwo-grid-item">{AllData["img6"]()}</div>
            <div className="twobytwo-grid-item">{AllData["desc4"]()}</div>
        </div>
    )
}

export function OneByOne(){
    return (
        <div className="onebyone">
            <div className="onebyone-grid-item">{AllData["title1"]()}</div>
        </div>
    )
}

export function TwoByOne(){
    return (
        <div className="twobyone-grid-container">
            <div className="twobyone-grid-item">{AllData["desc1"]()}</div>
            <div className="twobyone-grid-item">{AllData["desc2"]()}</div>
        </div>
    )
}

const AllData={
    "title1":()=>{
        return ( <div className="playfair-title">History and <br></br> Patriarcal season</div>)
    },
    "desc1":()=>{
        return ( <div className="merriweather-desc">
            On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, 
            so blinded by desire
        </div>
        )
    },
    "desc2":()=>{
        return ( <div className="merriweather-desc">
            But I must explain to you how all this mistaken idea of denouncing 
            pleasure and praising pain was born and I will give you a complete 
            account of the system, and expound the actual teachings of the great 
            explorer of the truth, the master-builder of human happiness. No  that are extremely painful
        </div>
        )
    },
    "desc3":()=>{
        return ( <TextSlide
            preamble="LONDON COLLECTION SEASON"
            title="Temporary Store"
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
        />)
    },
    "desc4":()=>{
        return ( <TextSlide
            preamble="LONDON COLLECTION SEASON"
            title={(()=>{
                return <>New Selection of<br/>Henry London</>
            })()}
            description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
        />)
    },
    "img5":()=>{
        return (
            <div className="grid-img-sq-container"><img src={img1} className="grid-img-sq"></img></div>
        )
    },
    "img6":()=>{
        return (
            <div className="grid-img-sq-container"><img src={img2} className="grid-img-sq"></img></div>
        )
    }
}