import { Box, Button, Card, CardMedia, Grid, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import FilterProperties from './FilterProperties'
import property from '../../assets/property-3.jpg'
import { FaLocationDot } from 'react-icons/fa6'
import { FaRulerCombined } from 'react-icons/fa'
import { IoBed } from 'react-icons/io5'
import { LuSofa } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textAlign: 'left',
  fontSize: '1.25rem'
}))
const StyledGrid = styled(Grid)(({ theme }) => ({
  borderTop: `1px dashed ${theme.palette.primary.main}`,
  borderRight: `1px dashed ${theme.palette.primary.main}`,
  textAlign: 'center'
}))

export default function PropertieList() {
  const theme = useTheme()
  const navigate = useNavigate()
  return (
    <Box marginBottom={'24px'}>
      <Grid container spacing={2}>
        {[...Array(6).keys()].map(() => (
          <Grid item xs={12} md={4} display={'flex'} justifyContent={'center'}>
            <Card>
              <CardMedia component='img' image={property} alt='green iguana' />
              <Box>
                <Box margin={'12px 24px'}>
                  <StyledTypography color={theme.palette.primary.main} marginBottom={'8px'}>
                    $12,345
                  </StyledTypography>
                  <StyledTypography
                    marginBottom={'4px'}
                    sx={{ ':hover': { color: `${theme.palette.primary.main}`, cursor: 'pointer' } }}
                    onClick={() => {
                      navigate('/propertydetail')
                    }}
                  >
                    Golden Urban House For Sell
                  </StyledTypography>
                  <Box display={'flex'} marginBottom={'16px'}>
                    <Typography>
                      <FaLocationDot color={theme.palette.primary.main} />
                    </Typography>
                    <Typography marginLeft={'8px'}>123 Street, New York, USA</Typography>
                  </Box>
                </Box>
                <Box>
                  <Grid container>
                    <StyledGrid item xs={4}>
                      <Box display={'flex'} justifyContent={'center'} marginTop={'8px'}>
                        <Typography marginRight={'4px'}>
                          <FaRulerCombined color={theme.palette.primary.main} />
                        </Typography>
                        <Typography typography={'body2'}>1000 Sqft</Typography>
                      </Box>
                    </StyledGrid>
                    <StyledGrid item xs={4}>
                      <Box display={'flex'} justifyContent={'center'} marginTop={'8px'}>
                        <Typography marginRight={'4px'}>
                          <IoBed color={theme.palette.primary.main} />
                        </Typography>
                        <Typography typography={'body2'}>3 Bedroom</Typography>
                      </Box>
                    </StyledGrid>
                    <StyledGrid item xs={4}>
                      <Box display={'flex'} justifyContent={'center'} marginTop={'8px'}>
                        <Typography marginRight={'4px'}>
                          <LuSofa color={theme.palette.primary.main} />
                        </Typography>
                        <Typography typography={'body2'}>1 Kitchen</Typography>
                      </Box>
                    </StyledGrid>
                  </Grid>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
