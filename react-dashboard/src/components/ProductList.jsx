import { Button, Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import { plantData } from "./plantData.js";

const {Meta} = Card;

const ProductList = () => {
  return (
    <div>
     <Flex align='center' justify='space-between' style={{padding:'2rem 0rem 1rem 0.1rem'}}>
        <Typography.Title level={3} strong className='primary-color'>My Listing</Typography.Title>
        <Button type='link' className='grey-color'>View All</Button>
      </Flex> 

      <Flex align='center' gap={'large'}>
        {
          plantData.map((plant)=>{
            return (
              <Card key={plant.id} hoverable className='plant-card'>
                <Image src={plant.picture} style={{width:'130px', height:'150px'}}/>
                <Meta title={plant.name} style={{marginTop:"1rem"}}/>
              </Card>
            )
          })
        }
      </Flex>
    </div>
  )
}

export default ProductList
