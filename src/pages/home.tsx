import React from 'react';
import { useList } from '@pankod/refine-core';
import { PieChart, PropertyReferrals, TotalRevenue, PropertyCard, TopAgent } from 'components';
import {Typography, Box, Stack} from '@pankod/refine-mui'

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#11142D'>
        Dashboard
      </Typography>
      <Box mt='20px' display='flex' flexWrap='wrap' gap={4}>
        <PieChart
          title="Properties for Sale"
          value={500}
          series={[75, 25]}
          colors={['#275be8', '#c4e8ef']} />
        <PieChart title="Properties for Rent"
          value={550} series={[75, 25]} colors={['#275be8', '#c4e8ef']} />
        <PieChart title="Total customers"
          value={5500} series={[75, 25]} colors={['#275be8', '#c4e8ef']} />
        <PieChart title="Total Cities"
          value={555} series={[75, 25]} colors={['#275be8', '#c4e8ef']} />
      </Box>
      <Stack mt='25px' width="100%" gap={4} direction={{xs:"column", lg: 'row' }}>
        <TotalRevenue />
        <PropertyReferrals/>
      </Stack>
    </Box>
  )
}

export default home;