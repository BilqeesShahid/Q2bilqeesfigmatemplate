"use client"
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const TipsTricks = () => {
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows:false,
        }
      }
    ]
  }
  

  const slideData = [
    {
      id: 0,
      img: '/slide1.jpg',
      title: 'Comforts your dining',
      mainTitle: 'Dining Table',
      price: 'Upto 20000',
    },
    {
      id: 1,
      img: '/slide2.jpeg',
      title: 'Living room comfort',
      mainTitle: 'Comfortable Sofa',
      price: 'Upto 25000',
    },
    {
      id: 2,
      img: '/slide3.jpg',
      title: 'Cook cool',
      mainTitle: 'Kitchen Comfort',
      price: 'Upto 25000',
    },
    {
      id: 3,
      img: '/slide4.jpg',
      title: 'Study Smartly',
      mainTitle: 'Smart Study Table',
      price: 'Upto 25000',
    },
    {
      id: 4,
      img: '/slide5.jpg',
      title: 'Clean Working',
      mainTitle: 'Clean your working',
      price: 'Upto 25000',
    },
    {
      id: 5,
      img: '/slide6.jpg',
      title: 'Children Comfi',
      mainTitle: 'Smart kids',
      price: 'Upto 50000',
    },
    {
      id: 6,
      img: '/sofa2.jpg',
      title: 'Stylish sofa',
      mainTitle: 'Style your sitting',
      price: 'Upto 15000',
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TipsTricks;
