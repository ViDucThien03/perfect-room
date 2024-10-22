import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function FilterProperties() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }
  const ButtonName = ['Featured', 'For Sell', 'For Rent']
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12} textAlign={'justify'}>
          <Typography typography={'subtitle2'} marginBottom={'24px'}>
            Property Listing
          </Typography>
          <Typography typography={'body1'} marginBottom={'24px'}>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit
            diam justo sed rebum.
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} sx={{ alignContent: { md: 'end' }, textAlign: { md: 'end', xs: 'left' } }}>
          {ButtonName.map((index, key) => (
            <Button
              key={index}
              onClick={() => handleClick(key)}
              variant={activeIndex === key ? 'contained' : 'outlined'}
              sx={{ marginLeft: { md: '8px', xs: '4px' }, marginBottom: '24px' }}
            >
              {index}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
