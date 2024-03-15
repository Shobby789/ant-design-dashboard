import { Flex } from 'antd'
import React from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import SellerList from './SellerList'

const MainContent = () => {
  return (
    <div style={{flex:1}}>
      <Flex vertical style={{padding:'2.3rem'}}>
        <Banner/>
        <ProductList/>
        <SellerList/>
      </Flex>
    </div>
  )
}

export default MainContent
