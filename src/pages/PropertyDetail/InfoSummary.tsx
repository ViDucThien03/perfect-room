import { Box, Button, styled, Typography, useTheme } from '@mui/material'
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import { FaRulerCombined, FaRegClock } from 'react-icons/fa6'
import { IoBed } from 'react-icons/io5'
import { LuSofa } from 'react-icons/lu'
import { FaFacebookMessenger } from 'react-icons/fa'

const StyledTypograpghy = styled(Typography)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center'
}))
export default function InfoSummary() {
  const theme = useTheme()
  return (
    <Box marginTop={'24px'} textAlign={'left'}>
      <Typography variant={'h5'} marginBottom={'8px'}>
        REN 241 - Căn 1K1N Nguyễn Khang Mới Setup Full Nội Thất Cao Cấp Về Ở Ngay
      </Typography>
      <Box display={'flex'} marginBottom={'16px'}>
        <Typography
          sx={{
            backgroundColor: 'red',
            color: theme.palette.primary.contrastText,
            padding: '3px',
            marginRight: '4px'
          }}
        >
          Nổi bật
        </Typography>
        <Typography
          sx={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
            padding: '3px',
            marginRight: '8px'
          }}
        >
          Cho thuê
        </Typography>
        <StyledTypograpghy padding={'3px'} typography={'body2'}>
          <FaRegClock size={'16px'} style={{ marginRight: '8px' }} />3 ngày trước
        </StyledTypograpghy>
      </Box>
      <Typography variant={'body2'} marginBottom={'8px'} display={'inline-flex'} alignItems={'center'}>
        <IoLocationSharp size={'25px'} style={{ marginRight: '8px' }} />
        Số 9 ngõ 381/77 Nguyễn Khang - Yên Hòa, Hà Nội, Số 9 ngõ 381/77 Nguyễn Khang - Yên Hòa
      </Typography>
      <Typography variant={'body1'} fontWeight={'bold'} color={theme.palette.primary.main} marginBottom={'8px'}>
        Giá: 7.500.000 VNĐ
      </Typography>
      <Box display={'flex'} width={'50%'} justifyContent={'space-between'} marginBottom={'16px'}>
        <StyledTypograpghy>
          <FaRulerCombined style={{ marginRight: '8px' }} />
          20m²
        </StyledTypograpghy>
        <StyledTypograpghy>
          <IoBed style={{ marginRight: '8px' }} />1 Ngủ
        </StyledTypograpghy>
        <StyledTypograpghy>
          <LuSofa style={{ marginRight: '8px' }} />1 Khách
        </StyledTypograpghy>
      </Box>
      <Box>
        <Button variant='contained' sx={{ marginRight: '8px' }}>
          Thuê ngay
        </Button>
        <Button variant='outlined' startIcon={<FaFacebookMessenger />}>
          Trao đổi
        </Button>
      </Box>
    </Box>
  )
}
