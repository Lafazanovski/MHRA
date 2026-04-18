import Carousel from '@/components/carousel/carousel'
import UserDashboardMain from '@/components/userDashboardMain/userDashboardMain';
import UserPersonalInfo from '@/components/userPersonalInfo/userPersonalInfo'
import React from 'react'

const UserDashboard = () => {
  return (
    <>
      <UserPersonalInfo />
      <Carousel />
      <UserDashboardMain />
    </>
  );
}

export default UserDashboard