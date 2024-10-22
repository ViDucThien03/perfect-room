import { Box, Card, CardMedia, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import property from '../../assets/property-3.jpg'
import NavMenu from '../../components/Header'
export default function AgentList() {
  const navigate = useNavigate()
  const theme = useTheme()
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          {[...Array(8).keys()].map(() => (
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia component='img' image={property} alt='green iguana' />
                <Box>
                  <Box margin={'12px 24px'}>
                    <Typography color={theme.palette.primary.main} marginBottom={'8px'}>
                      $12,345
                    </Typography>
                    <Typography
                      marginBottom={'4px'}
                      sx={{ ':hover': { color: `${theme.palette.primary.main}`, cursor: 'pointer' } }}
                      onClick={() => {
                        navigate('/propertydetail')
                      }}
                    >
                      Golden Urban House For Sell
                    </Typography>
                    <Box display={'flex'} marginBottom={'16px'}>
                      <Typography>ViDucThien</Typography>
                      <Typography marginLeft={'8px'}>123 Street, New York, USA</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Grid container>
                      <Grid item xs={4}>
                        <Box display={'flex'} justifyContent={'center'} marginTop={'8px'}>
                          <Typography marginRight={'4px'}>ViDucThien</Typography>
                          <Typography typography={'body2'}>1000 Sqft</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box display={'flex'} justifyContent={'center'} marginTop={'8px'}>
                          <Typography marginRight={'4px'}>ViDucThien</Typography>
                          <Typography typography={'body2'}>3 Bedroom</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box display={'flex'} justifyContent={'center'} marginTop={'8px'}>
                          <Typography marginRight={'4px'}>ViDucThien</Typography>
                          <Typography typography={'body2'}>1 Kitchen</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
