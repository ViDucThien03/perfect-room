import React from 'react'
import NavMenu from '../../components/Header'
import { Box, Button, Divider, Grid, Typography, useTheme } from '@mui/material'
import Search from '../../components/Search'
import ImageRoom from './ImageRoom'
import InfoSummary from './InfoSummary'
import { TbMapSearch } from 'react-icons/tb'
import { FaCircleCheck } from 'react-icons/fa6'
import PropertieList from '../Property/PropertyList'
import Footer from '../../components/Footer'

export default function PropertyDetail() {
  const theme = useTheme()
  const amenities = [
    'Bàn',
    'Ban Công',
    'Giường',
    'Điều Hòa',
    'Tủ Lạnh',
    'Đệm',
    'Ghế',
    'Thang Máy',
    'WiFi',
    'Tủ Quần Áo',
    'Hút Mùi',
    'Máy Giặt'
  ]
  const half = Math.ceil(amenities.length / 2)
  return (
    <Box bgcolor={theme.palette.primary.contrastText}>
      <NavMenu />
      <Box>
        <Search />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ImageRoom />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display='flex'
            justifyContent='center'
            alignItems='center'
            marginBottom={{ md: '64px' }}
            padding={'16px'}
          >
            <InfoSummary />
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box textAlign={'left'} padding={'24px'}>
        <Typography typography={'subtitle2'}>Mô tả</Typography>
        <Box>
          <p>REN 241 – Studio Nguyễn Khang Tòa Nhà Mới Xây Đẹp Lung Linh, Có Ban Công Siêu Thoáng</p>
          <p>I, Địa Chỉ : Số 9 ngõ 381/77 Nguyễn Khang – Yên Hòa – Cầu Giấy – Hà Nội</p>
          <ol>
            <li>Thông tin phòng</li>
          </ol>
          <p>– Số tầng tòa nhà: 7 tầng, 3 MB tầng 2, tầng 3-5 mỗi tầng 6 phòng</p>
          <p>– Thang máy: có</p>
          <p>– Thiết kế : Studio, mỗi tầng 6 phòng</p>
          <p>– Diện tích : 35m² full nội thất cơ bản</p>
        </Box>
      </Box>
      <Box textAlign={'left'} padding={'24px'}>
        <Box display={'flex'} justifyContent={'space-between'} marginBottom={'16px'}>
          <Typography typography={'subtitle2'}>Địa chỉ</Typography>
          <Button variant='contained' startIcon={<TbMapSearch />} sx={{ backgroundColor: theme.palette.primary.dark }}>
            Xem trên google maps
          </Button>
        </Box>
        <Divider />
        <Typography margin={'8px 0px'}>Số 9 ngõ 381/77 Nguyễn Khang - Yên Hòa, Hà Nội</Typography>
        <Divider />
      </Box>
      <Box textAlign={'left'} padding={'24px'}>
        <Typography typography={'subtitle2'} marginBottom={'24px'}>
          Thông tin chi tiết
        </Typography>
        <Box border={`1px solid ${theme.palette.primary.main}`} borderRadius={'8px'}>
          <Grid container spacing={2} padding={'20px'}>
            <Grid item md={6}>
              <Typography marginBottom={'8px'}>Giá: 7.500.000VND</Typography>
              <Typography marginBottom={'8px'}>Diện tích: 35m2</Typography>
              <Typography marginBottom={'8px'}>Phòng ngủ: 1</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography marginBottom={'8px'}>Loại phòng: Phòng đơn</Typography>
              <Typography marginBottom={'8px'}>Hình thức kinh doanh: Cho thuê</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box textAlign={'left'} padding={'24px'}>
        <Typography typography={'subtitle2'} marginBottom={'24px'}>
          Tiện ích
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {amenities.slice(0, half).map((amenity, index) => (
              <Typography key={index} marginBottom={'8px'}>
                <span style={{ marginRight: '8px' }}>
                  <FaCircleCheck color={theme.palette.primary.main} />
                </span>
                {amenity}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={6}>
            {amenities.slice(half).map((amenity, index) => (
              <Typography key={index} marginBottom={'8px'}>
                <span style={{ marginRight: '8px' }}>
                  <FaCircleCheck color={theme.palette.primary.main} />
                </span>
                {amenity}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Box textAlign={'left'} padding={'24px'}>
        <Typography typography={'subtitle2'} marginBottom={'24px'}>
          Phòng tương tự
        </Typography>
        <PropertieList />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  )
}
