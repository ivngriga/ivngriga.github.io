import React from 'react';

import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../img/img_logo.png'

import '../scss/footer.scss'

export function Footer() {
    return (
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          
          <section className='footer-logo-section' >
            
          </section>
          <section className='footer-link-container'>
          <MDBRow>
              <MDBCol lg='3' md='3' className='mb-4 mb-md-0 footer-logo-col'>
                <img src={img1} className='footer-logo-img'></img>
              </MDBCol>
          </MDBRow>
            <MDBRow>
                <MDBCol lg='3' md='3' className='d-none d-md-block'>
    
                  <ul className='list-unstyled footer-classic-links'>
                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                        Watch/Lab - Innovation brings success
                      </a>
                    </li>
                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                      Via Borgogna 5, Milan
                      </a>
                    </li>
                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                      Italy
                      </a>
                    </li>
                  </ul>
                </MDBCol>
    
                <MDBCol lg='3' md='3'  sm='6'  className='col-6 footer-left-mb'>
                <ul className='list-unstyled footer-classic-links'>
                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                        About Us
                      </a>
                    </li>
                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                      Brand
                      </a>
                    </li>
                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                      Projects
                      </a>
                    </li>

                    <li className='footer-li-classic'>
                      <a href='#!' className='footer-text-classic'>
                      Magazine
                      </a>
                    </li>
                  </ul>
                </MDBCol>
  
              <MDBCol lg='3' md='3'  sm='6' className='col-6 footer-right-mb'>
  
              <ul className='list-unstyled footer-classic-links'>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-classic'>
                      Press
                    </a>
                  </li>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-classic'>
                    Contacts
                    </a>
                  </li>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-classic'>
                    Privacy Policy
                    </a>
                  </li>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-classic'>
                    Search
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol className='footer-text-mb d-md-none'><div className='footer-text-nonresponsive'>Watch/Lab - Innovation brings success<br/>Via Borgogna 5, Milan Italy</div></MDBCol>
  
              <MDBCol lg='3' md='3'>
  
              <ul className='list-unstyled footer-classic-links footer-text-end'>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-classic'>
                    T. +39 392 9133937
                    </a>
                  </li>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-classic'>
                    M. info@watch-lab.it
                    </a>
                  </li>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-special'>
                    FACEBOOK
                    </a>
                  </li>
                  <li className='footer-li-classic'>
                    <a href='#!' className='footer-text-special'>
                    INSTAGRAM
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>

            <MDBRow className='footer-copyright-container'>
              <MDBCol lg='3' md='3' className='mb-4 mb-md-0'>
                <ul className='list-unstyled footer-classic-links'>
                  <li className='footer-li-classic'>
                    <div className='footer-text-nonresponsive'>Copyright Watch/Lab all rights reserved</div>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol lg='3' md='3' className='mb-4 mb-md-0'>
                <ul className='list-unstyled footer-classic-links'>
                  <li className='footer-li-classic'>
                    <div className='footer-text-nonresponsive'>website by nssfactory</div>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>

          
        </MDBContainer>
      </MDBFooter>
    );
  }