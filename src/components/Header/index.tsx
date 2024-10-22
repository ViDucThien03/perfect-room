import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'

import 'react-slideshow-image/dist/styles.css'
import './index.scss'
import { LogoIcon } from '../../assets/icon'
import MenuIcon from '@mui/icons-material/Menu'
import { useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const ButtonPrimary = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light
  },
  textTransform: 'capitalize',
  fontSize: '18px'
}))
const StyledTab = styled(Tab)(({ theme }) => ({
  fontFamily: 'Heebo, sans-serif',
  fontSize: '15px',
  fontWeight: 500
}))

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index ? (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      ) : null}
    </div>
  )
}
export default function NavMenu() {
  const [value, setValue] = React.useState(0)
  const theme = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (event.type !== 'click' || event.type === 'click') {
      setValue(newValue)
    }
  }
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '16px 0px',
        // width: scrolled ? '100%' : '60%',
        // transition: 'width 0.5s ease-in-out',
        position: scrolled ? 'fixed' : 'none',
        // padding: '12px 0px',
        // margin: scrolled ? '0px' : '16px',
        // top: scrolled ? '0' : 'none',
        // borderRadius: scrolled ? 'none' : '8px',
        boxShadow: '0 0 30px rgba(0, 0, 0, .08)',
        maxWidth: '1320px',
        zIndex: 1000
      }}
    >
      <Box paddingLeft={'16px'} display={'flex'}>
        <Stack justifyContent={'center'}>
          <LogoIcon className='logo-icon' />
        </Stack>
        <Typography
          alignContent={'center'}
          paddingLeft={'12px'}
          typography='subtitle1'
          color={theme.palette.primary.main}
        >
          Perfect Room
        </Typography>
      </Box>
      {!isMobile ? (
        <Box display={'flex'}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            TabIndicatorProps={{ style: { display: 'none' } }}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <StyledTab label='Home' />
            <StyledTab label='Agent' onClick={() => navigate('/agent')} />
            <StyledTab label='Contact' />
            <StyledTab label='Services ' />
          </Tabs>

          <Stack justifyContent={'center'} padding={'0px 16px'}>
            <ButtonPrimary>Add Property</ButtonPrimary>
          </Stack>
        </Box>
      ) : (
        <></>
      )}

      {/* <CustomTabPanel value={value} index={0}>
        <Overview />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ClassDetail />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Mark />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Transcript />
      </CustomTabPanel> */}
    </Box>
  )
}
