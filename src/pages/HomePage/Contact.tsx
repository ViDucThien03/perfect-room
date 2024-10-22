import { Box, Button, Grid, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import imgcontact from '../../assets/call-to-action.jpg'
import { IoCallSharp } from 'react-icons/io5'
import { FaCalendarAlt } from 'react-icons/fa'

const StyledContainer = styled(Box)(({ theme }) => ({
  margin: '24px 48px',
  backgroundColor: theme.palette.primary.light,
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '8px'
}))
const StyledGridBox = styled(Grid)(({ theme }) => ({
  border: `1px dashed ${theme.palette.primary.main}`,
  padding: '8px',
  backgroundColor: theme.palette.primary.contrastText,
  margin: '20px',
  borderRadius: '8px',
  '.MuiGrid-item': { xs: { padding: '0px !important', md: { padding: '16px 0px 0px 16px !important' } } }
}))
const StyledButton = styled(Button)(({ theme }) => ({}))
export default function Contact() {
  const theme = useTheme()
  return (
    <StyledContainer>
      <StyledGridBox container spacing={2}>
        {/* Grid cho hình ảnh */}
        <Grid item xs={12} md={6}>
          <img src={imgcontact} alt='' style={{ width: '100%', height: 'auto', borderRadius: '5px' }} />
        </Grid>

        <Grid item xs={12} md={6} display='flex' alignItems='center' justifyContent='center'>
          <Box padding={'24px'} display={'flex'} flexDirection={'column'} textAlign={'left'}>
            <Typography typography={'subtitle2'} marginBottom={'16px'}>
              Contact With Our Certified Agent
            </Typography>
            <Typography typography={'body2'} marginBottom={'16px'}>
              Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero
              dolor duo.
            </Typography>
            <Box display='flex' gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
              <Button variant='contained' startIcon={<IoCallSharp />} sx={{ padding: '16px 8px' }}>
                Make A Call
              </Button>
              <Button
                variant='contained'
                sx={{ backgroundColor: theme.palette.primary.dark, padding: '16px 8px' }}
                startIcon={<FaCalendarAlt />}
              >
                Get Appoinment
              </Button>
            </Box>
          </Box>
        </Grid>
      </StyledGridBox>
    </StyledContainer>
  )
}
