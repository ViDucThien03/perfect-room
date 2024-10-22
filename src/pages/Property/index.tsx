import { Box, Button, styled } from '@mui/material'
import React from 'react'
import FilterProperties from './FilterProperties'
import PropertieList from './PropertyList'

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '16px 48px',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
}))

export default function Property() {
  return (
    <Box margin={'48px'}>
      <Box>
        <FilterProperties />
      </Box>
      <Box>
        <PropertieList />
      </Box>
      <Box>
        <StyledButton variant='contained'>Browse More Property</StyledButton>
      </Box>
    </Box>
  )
}
