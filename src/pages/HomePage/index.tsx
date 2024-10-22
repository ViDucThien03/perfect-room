import React from 'react'
import NavMenu from '../../components/Header'
import { Box, Button, Grid, Grid2, ImageList, ImageListItem, Stack, styled, Typography, useTheme } from '@mui/material'
import { Fade, Slide } from 'react-slideshow-image'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { theme } from '../../theme'
import Search from '../../components/Search'
import '../../index.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PropertyType from './PropertyType'
import Intro from './Intro'
import FilterProperties from '../Property/FilterProperties'
import PropertyList from '../Property/PropertyList'
import Contact from './Contact'
import WhyChoose from './WhyChoose'
import Footer from '../../components/Footer'
import Property from '../Property'
const ButtonPrimary = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  textTransform: 'capitalize',
  fontSize: '18px'
}))
const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main
}))
const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  }
]
const properties = {
  prevArrow: (
    <Button
      sx={{
        borderRadius: '100%',
        backgroundColor: theme.palette.primary.main,
        width: '40px',
        height: '40px',
        minWidth: 'auto',
        padding: '8px',
        marginLeft: '8px'
      }}
    >
      <IoIosArrowBack color={theme.palette.primary.contrastText} size={'20'} />
    </Button>
  ),
  nextArrow: (
    <Button
      sx={{
        borderRadius: '100%',
        backgroundColor: theme.palette.primary.main,
        width: '40px',
        height: '40px',
        minWidth: 'auto',
        padding: '8px',
        marginRight: '8px'
      }}
    >
      <IoIosArrowForward color={theme.palette.primary.contrastText} size={'20'} />
    </Button>
  )
}
export default function HomePage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  }
  return (
    <div>
      <header>
        <Box maxWidth={'1320px'} display={'flex'} justifyContent={'center'}>
          <NavMenu />
        </Box>
      </header>
      <main>
        <Box className='landing-page'>
          <Grid container bgcolor={theme.palette.primary.contrastText}>
            {/* Grid cho hình ảnh */}
            <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} height={'100%'}>
              <Slide {...properties} cssClass='slideshow'>
                {fadeImages.map((fadeImage, index) => (
                  <Box key={index} height={'100%'}>
                    <img style={{ width: '150%', height: '100%' }} src={fadeImage.url} alt={`Slide ${index}`} />
                  </Box>
                ))}
              </Slide>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} display={'flex'} alignItems={'center'} padding={'48px'}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography typography={'subtitle1'} marginBottom={'24px'}>
                  Find A <StyledSpan>Perfect Home</StyledSpan> To Live With Your Life
                </Typography>
                <Typography typography={'body1'} padding={'0px 0px 12px'} marginBottom={'24px'}>
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo
                  clita et kasd rebum sea elitr.
                </Typography>
                <ButtonPrimary sx={{ padding: '8px 36px' }}>Login</ButtonPrimary>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Search />
        </Box>
        <Box>
          <PropertyType />
        </Box>
        <Box>
          <Intro />
        </Box>
        <Box paddingBottom={'48px'}>
          <Property />
        </Box>
        <Box>
          <Contact />
        </Box>
        <Box>
          <WhyChoose />
        </Box>
        <Box>
          <Footer />
        </Box>
      </main>
    </div>
  )
}
