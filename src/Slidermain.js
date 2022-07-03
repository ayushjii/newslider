import React from "react";
import styled from "styled-components";

const Slidercontent =styled.div`
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 820px;

.card__img {
  visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 235px;
   border-radius:12px;
  
}

.card__img--hover {
  transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
  position: absolute;
    height: 235px;
  border-top-left-radius: 12px;
border-top-right-radius: 12px;
top: 0;
  
}
.card {
  ${'' /* margin-right: 25px; 
  */}
  transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
  background-color: #fff;
    width: 90%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
}
.card:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);
    transform: scale(1.10, 1.10);
}

.card__info {
z-index: 2;
  background-color: #fff;
  border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
   padding: 16px 24px 24px 24px;
}

.card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
  color: #868686;
}

.card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
}

.card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
}

.card__detail {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
}

.card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
}

.card:hover .card__info {
    background-color: transparent;
    position: relative;
}

.card:hover .card__info-hover {
    opacity: 1;
}


`

export default function CardStyles ({
    CardSubheading="hello ",
    CardHeading="make here",
    CardDetail="anythink about that",
    CardImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU'
}){
    return(
        <Slidercontent>
         {/* <section class="cards"> */}
<article class="card card--1">
  <div class="card__img"></div>
  <a href="/" class="card_link">
     <img class="card__img--hover" src={CardImage}  alt=""/>
   </a>
  <div class="card__info">
    <span class="card__category">{CardSubheading}</span>
    <h3 class="card__title">{CardHeading}</h3>
<span class="card__by card__detail" title="detail">{CardDetail}</span>
  </div>
</article>
    {/* </section> */}
        </Slidercontent>
    );
}