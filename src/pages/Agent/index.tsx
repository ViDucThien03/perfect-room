import { Box, useTheme } from '@mui/material'
import React from 'react'
import AgentList from './AgentList'
import NavMenu from '../../components/Header'

export default function Agent() {
  const theme = useTheme()
  return (
    <Box bgcolor={theme.palette.primary.contrastText}>
      <NavMenu />
      <Box padding={'48px'}>
        <AgentList />
      </Box>
    </Box>
  )
}
