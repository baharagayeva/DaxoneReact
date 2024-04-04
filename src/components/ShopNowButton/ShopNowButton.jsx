import React from 'react';

const ShopNowButton = ({idx, index}) => {
  return (
    <>
    <button className={`shop-now-button ${idx === index ? 'sliderItemActive' : ''} btn btn-form mt-5`} >SHOP NOW</button>
    </>
  )
}

export {ShopNowButton}