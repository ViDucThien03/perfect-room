import React from 'react'
import { Box, Grid, List, ListItem, ListItemButton, styled, Typography, useTheme } from '@mui/material'
import image from '../../assets/background.jpg'
import { FaCheck } from 'react-icons/fa'

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  margin: '48px 0px 48px 48px',
  padding: '20px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-50%',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    zIndex: 1,
    transform: 'skew(20deg)'
  },
  img: {
    zIndex: '2',
    position: 'relative'
    // marginLeft: '20px'
  }
}))
export default function Intro() {
  const theme = useTheme()
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <StyledBox>
          <img src={image} alt='' style={{ padding: '20px', width: '100%', maxHeight: '564px' }} />
        </StyledBox>
      </Grid>
      <Grid item md={6} xs={12} textAlign={'justify'} alignContent={'center'}>
        <Typography typography={'subtitle2'} margin={'24px'}>
          #1 Place To Find The Perfect Property
        </Typography>
        <Typography typography={'body1'} margin={'24px'}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
          lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
        </Typography>

        <List sx={{ marginLeft: '12px' }}>
          {[...Array(3).keys()].map(() => (
            <ListItem>
              <FaCheck color={theme.palette.primary.main} />
              <Typography typography={'body1'} marginLeft={'16px'}>
                Tempor erat elitr rebum at clita
              </Typography>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )
}
