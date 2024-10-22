import { Box, Button, Divider, Grid, Input, List, ListItem, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import photogallery from '../../assets/property-2.jpg'

const StyledInput = styled(Input)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.contrastText}`,
  color: theme.palette.primary.contrastText,
  borderRadius: '4px',
  padding: '10px 12px',
  '&:before': {
    borderBottom: 'none'
  },
  '&:after': {
    borderBottom: 'none'
  }
}))
const StyledTypography = styled(Typography)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.primary.contrastText}`,
  padding: ' 0px 8px',
  '&::hover': {
    cursor: 'pointer'
  }
}))
export default function Footer() {
  const theme = useTheme()
  return (
    <>
      <Box bgcolor={theme.palette.primary.dark} sx={{ display: { md: 'flex' } }}>
        <Box color={theme.palette.primary.contrastText} sx={{ width: { xs: '100%', md: '50%' }, padding: '64px 16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} textAlign={'left'}>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <Typography fontWeight={'700'} fontSize={'large'} marginBottom={'24px'}>
                    Get In Touch
                  </Typography>
                </ListItem>
                <ListItem>
                  <FaLocationDot />
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    123 Street, New York, USA
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <FaPhoneAlt />
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    +012 345 67890
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <IoMdMail />
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    vithienym19@gmail.com
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    <FaTwitter size={'24px'} style={{ marginLeft: '8px' }} />
                    <FaFacebook size={'24px'} style={{ marginLeft: '8px' }} />
                    <FaYoutube size={'24px'} style={{ marginLeft: '8px' }} />
                    <FaLinkedin size={'24px'} style={{ marginLeft: '8px' }} />
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <Typography fontWeight={'700'} fontSize={'large'} marginBottom={'24px'}>
                    Quick Links
                  </Typography>
                </ListItem>
                <ListItem>
                  <FaLocationDot />
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    123 Street, New York, USA
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <FaPhoneAlt />
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    +012 345 67890
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <IoMdMail />
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    vithienym19@gmail.com
                  </Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <Typography typography={'body2'} marginLeft={'16px'}>
                    <FaTwitter size={'24px'} style={{ marginLeft: '8px' }} />
                    <FaFacebook size={'24px'} style={{ marginLeft: '8px' }} />
                    <FaYoutube size={'24px'} style={{ marginLeft: '8px' }} />
                    <FaLinkedin size={'24px'} style={{ marginLeft: '8px' }} />
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Box color={theme.palette.primary.contrastText} sx={{ width: { xs: '100%', md: '50%' }, padding: '64px 16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} textAlign={'left'}>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <Typography fontWeight={'700'} fontSize={'large'} marginBottom={'24px'}>
                    Photo Gallery
                  </Typography>
                </ListItem>
                <ListItem>
                  <Grid container spacing={2}>
                    {[...Array(6).keys()].map(() => (
                      <Grid item xs={4}>
                        <Box
                          bgcolor={theme.palette.primary.light}
                          display={'flex'}
                          justifyContent={'center'}
                          borderRadius={'5px'}
                        >
                          <img
                            src={photogallery}
                            alt=''
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', margin: '4px' }}
                          ></img>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <Typography fontWeight={'700'} fontSize={'large'} marginBottom={'24px'}>
                    Newsletter
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography typography={'body2'}>Dolor amet sit justo amet elitr clita ipsum elitr est.</Typography>
                </ListItem>
              </List>
              <List sx={{ marginLeft: '12px' }}>
                <ListItem>
                  <StyledInput
                    placeholder='Your Email'
                    endAdornment={<Button variant='contained'>SignUp</Button>}
                    disableUnderline
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box
        bgcolor={theme.palette.primary.dark}
        sx={{ display: { md: 'flex' }, justifyContent: 'space-between' }}
        padding={'24px'}
        color={theme.palette.primary.contrastText}
      >
        <Box>
          <Typography>© Your Site Name, All Right Reserved. Designed By HTML Codex</Typography>
        </Box>

        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center'
          }}
        >
          <StyledTypography>Home</StyledTypography>
          <Divider orientation='vertical' variant='middle' flexItem />
          <StyledTypography>Cookies</StyledTypography>
          <Divider orientation='vertical' variant='middle' flexItem />
          <StyledTypography>Help</StyledTypography>
          <Divider orientation='vertical' />
          <StyledTypography>FQAS</StyledTypography>
        </Box>
      </Box>
    </>
  )
}
