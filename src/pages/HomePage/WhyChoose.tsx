import React from 'react'
import { Box, Button, Card, Grid, styled, Typography, useTheme } from '@mui/material'
import { IoMdStar } from 'react-icons/io'

export default function WhyChoose() {
  return (
    <Box margin={'48px'}>
      <Typography typography={'subtitle2'} marginBottom={'24px'}>
        Why should you choose them?
      </Typography>
      <Typography typography={'body1'} marginBottom={'24px'}>
        Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng Phongtro123.com tự hào là trang web đứng top google về các từ
        khóa: cho thuê phòng trọ, nhà trọ, thuê nhà nguyên căn, cho thuê căn hộ, tìm người ở ghép, cho thuê mặt
        bằng...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với nhiều khách hàng hơn, do đó giao dịch nhanh
        hơn, tiết kiệm chi phí hơn.
      </Typography>
      <Box display={'flex'} justifyContent={'space-around'}>
        <Box textAlign={'center'}>
          <Typography fontWeight={'bold'}>116.998+</Typography>
          <Typography typography={'body2'}>Thành viên</Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography fontWeight={'bold'}>103.348++</Typography>
          <Typography typography={'body2'}>Tin đăng</Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography fontWeight={'bold'}>300.000+</Typography>
          <Typography typography={'body2'}>Lượt truy cập/tháng</Typography>
        </Box>
        <Box textAlign={'center'}>
          <Typography fontWeight={'bold'}>2.500.000+</Typography>
          <Typography typography={'body2'}>Lượt xem/tháng</Typography>
        </Box>
      </Box>
      <Typography typography={'subtitle2'} marginTop={'24px'}>
        Chi phí thấp, hiệu quả tối đa
      </Typography>
      <Typography marginBottom={'24px'}>
        {[...Array(5).keys()].map(() => (
          <IoMdStar color='rgb(255, 255, 0)' size={'36px'} />
        ))}
      </Typography>
      <Typography marginBottom={'12px'} typography={'body2'}>
        "Trước khi biết website phongtro123, mình phải tốn nhiều công sức và chi phí cho việc đăng tin cho thuê: từ việc
        phát tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu quả không cao. Từ khi biết website
        phongtro123.com, mình đã thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi phí khá thấp, không còn
        tình trạng phòng trống kéo dài."
      </Typography>
      <Typography marginBottom={'24px'}>Anh ViDucThien (chủ hệ thống phòng trọ tại Hà Nội)</Typography>
      <Typography typography={'subtitle2'}>Bạn đang có phòng trọ / căn hộ cho thuê?</Typography>
      <Typography marginBottom={'12px'}>Không phải lo tìm người cho thuê, phòng trống kéo dài</Typography>
      <Button variant='contained'>Đăng tin ngay</Button>
    </Box>
  )
}
