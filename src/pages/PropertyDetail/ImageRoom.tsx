import { Box, useTheme } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
import image1 from '../../assets/property-2.jpg'
import image2 from '../../assets/property-3.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'
import { MdArrowBackIos } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ImageRoom() {
  const theme = useTheme()
  const settings = {
    customPaging: function (i: any) {
      return (
        <Box display={'flex'} justifyContent={'center'} bgcolor={theme.palette.primary.light}>
          <img src={i % 2 === 0 ? image1 : image2} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
        </Box>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <MdArrowForwardIos />,
    prevArrow: <MdArrowBackIos />
  }

  return (
    <Box className={'slider-container'} padding={'24px'}>
      <Slider {...settings}>
        <Box>
          <img src={image1} alt='property 1' style={{ borderRadius: '8px' }} />
        </Box>
        <Box>
          <img src={image2} alt='property 2' style={{ borderRadius: '8px' }} />
        </Box>
        <Box>
          <img src={image1} alt='property 1' style={{ borderRadius: '8px' }} />
        </Box>
        <Box>
          <img src={image2} alt='property 2' style={{ borderRadius: '8px' }} />
        </Box>
      </Slider>
    </Box>
  )
}
