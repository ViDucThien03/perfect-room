import { Box, Card, Grid, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import icon from '../../assets/icon-apartment.png'

const CardContent = styled(Box)(({ theme }) => ({
  margin: '20px',
  border: `1px dashed ${theme.palette.primary.main}`,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  backgroundColor: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'pointer'
  }
}))
const IconWrapper = styled(Box)(({ theme }) => ({
  border: `1px dashed ${theme.palette.primary.main}`,
  borderRadius: '50%',
  padding: '20px',
  margin: '',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '16px',
  backgroundColor: '#fff',
  transition: 'background-color 0.3s'
}))

export default function PropertyType() {
  const theme = useTheme()
  return (
    <Box margin={'48px'}>
      <Box
        padding={'48px 24px'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        textAlign={'center'}
        sx={{
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <Typography typography={'subtitle2'} marginBottom={'16px'}>
          Property Types
        </Typography>
        <Typography typography={'body'} maxWidth={'800px'}>
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit.
          Ipsum diam justo sed rebum vero dolor duo.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {[...Array(8).keys()].map(() => (
            <Grid item xs={6} md={3}>
              <Card sx={{ backgroundColor: theme.palette.primary.light }}>
                <CardContent>
                  <IconWrapper>
                    <img src={icon} alt='Apartment' style={{ width: '100%', height: 'auto' }} />
                  </IconWrapper>
                  <Typography sx={{ fontWeight: 'bold' }}>Apartment</Typography>
                  <Typography>123 Properties</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
