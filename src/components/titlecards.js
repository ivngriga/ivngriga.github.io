import React, {useState, useRef, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/titlecards.scss';

import Button from 'react-bootstrap/Button'

import img1 from '../img/img_titlecard_1.jpg';
import img2 from '../img/img_titlecard_2.jpg';

export function TitleCard(){
    const [cSlide, setCSlide] = useState(0)
    const curSlide=slides[cSlide];

    const [slideIn, setSlideIn] = useState(false);
    const slideDist=slideIn ? (cSlide-curSlide["nextslide"]) * 4 : 0;

    const bgImgRef = useRef(null)
    const bgImgContainerRef = useRef(null)

    window.onresize = function(){
        setHeight()
    }

    function setHeight(){
        if( bgImgContainerRef.current && bgImgRef.current){
            if(window.innerWidth>768){
                bgImgContainerRef.current.style.height=bgImgRef.current.clientHeight+"px"
            } else {
                bgImgContainerRef.current.style.height="100vh"
                
            }
        }
    }

    return (
        <div className='card-container'>
            <div ref={bgImgContainerRef} className='overlay-img-container'>
                <div className='background-img-container'>
                    {slides.map((item,index)=>{
                        let selected = index==cSlide
                        let imgClass=selected ? "card-background-image" : "card-background-image hidden"

                        return (
                            <img 
                                key={index}
                                ref={selected ? bgImgRef : null}
                                className={imgClass} 
                                src={item["img_path"]}
                                onLoad={()=>setHeight()}>
                            </img>
                        )
                    })}

                </div>
                
                <div className="card-center-container">
                    <div className="card-preamble">LONDON COLLECTION SEASON</div>
                    <div
                        className="card-title"
                        style={{
                        transform: "translateX("+slideDist+"%)",
                        transition: slideIn ? "": "all 0.5s ease-in-out",
                        opacity: slideIn ? 0.5 : 1
                        }}
                    >{curSlide['card-title']}</div>
                    <div className="card-postamble">An estimable experience in the modern collection house</div>
                    <Button className="card-button" variant="outline-dark">Discover</Button>
                </div>
                <div className="card-img" onClick={()=>{setSlide(curSlide["nextslide"])}}>
                    <div className='small-img-container'>
                        <img src={curSlide["card-img-path"]} className="card-img-overlayimg"></img>
                    </div>

                    <React.Fragment>
                        <div className="card-img-preamble"> {curSlide['card-img-preamble']} </div>
                    </React.Fragment>
                    
                    <div className="card-img-postamble" onClick={()=>{setSlide(curSlide["nextslide"])}}><span>NEXT</span> <span className="next-arrows-card">{">"}</span></div>
                </div>
            </div>
        </div>
    )

    function setSlide(index){
        setCSlide(index)
        setSlideIn(true);
        setTimeout(() => setSlideIn(false), 1);
    }
}

const slides = [
    {
        "card-title":(()=>{
            return <>New Selection of<br/>Henry London</>
        })(),
        "card-img-preamble": (()=>{
            return <>The Path to Success<br/>with Watchlab</>
        })(),
        "img_path":img1,
        "card-img-path":img2,
        "nextslide":1,
    },
    {
        "card-title":(()=>{
            return <>The Path to Success<br/>with Watchlab</>
        })(),
        "card-img-preamble":(()=>{
            return <>New Selection of<br/>Henry London</>
        })(),
        "img_path":img2,
        "card-img-path":img1,
        "nextslide":0
    }
]