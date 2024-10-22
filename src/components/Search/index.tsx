import { Box, Button, Grid, Input, styled } from '@mui/material'
import React from 'react'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { theme } from '../../theme'

const ButtonSearch = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  },
  textTransform: 'capitalize',
  fontSize: '18px',
  padding: '14px 64px'
}))
const InputSearch = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  borderRadius: '4px',
  padding: '12px 14px',
  '&:before': {
    borderBottom: 'none'
  },
  '&:after': {
    borderBottom: 'none'
  }
}))
export default function Search() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }
  return (
    <Box bgcolor={theme.palette.primary.main} padding={'24px'}>
      <FormControl sx={{ m: 1 }} fullWidth>
        <Box marginRight={'16px'}>
          {/* <Grid container> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <InputSearch placeholder='Search' disableUnderline={true} fullWidth />
            </Grid>
            <Grid item xs={12} md={3}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{
                  'aria-label': 'Without label'
                }}
                fullWidth
                sx={{
                  '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  '.MuiSelect-select': {
                    backgroundColor: theme.palette.primary.contrastText
                  }
                }}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={3}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                fullWidth
                sx={{
                  '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  '.MuiSelect-select': {
                    backgroundColor: theme.palette.primary.contrastText
                  }
                }}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} md={2}>
              <ButtonSearch fullWidth>Search</ButtonSearch>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Box>
      </FormControl>
    </Box>
  )
}
