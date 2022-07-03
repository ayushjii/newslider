import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import CardStyles from "./Slidermain";

const SlidersStyles=styled.div`
 ${'' /* padding: 50px 25px; */}
 padding-bottom:40px;
 h2,h3{
  color:black;
 }
 `

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      speed: -200,
      centerPadding: "20px",
      slidesToShow: 8,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    };
    return (
      <SlidersStyles>
       <CardStyles />
        <Slider {...settings} className="out">
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />  
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />          
        <CardStyles />
        <CardStyles />
        <CardStyles />
        <CardStyles />         
        </Slider>
      </SlidersStyles>
    );
  }
}