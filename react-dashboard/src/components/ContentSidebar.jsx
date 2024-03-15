import { Card, Flex, Image, Typography } from 'antd'
import React from 'react'
import plant from "../assets/plant01.png"

const ContentSidebar = () => {
  return (
    <div>
      <Card className='card'>
        <Flex vertical gap='large'>
            <Typography.Title level={4} strong>
                Today <br />5 orders
            </Typography.Title>
            <Typography.Title level={4} strong>
                This Month <br />24 orders
            </Typography.Title>
        </Flex>
        <Image src={plant} alt='plant' style={{position:'absolute', top:'-220px', left:'20px', height:'250px', width:'auto'}}/>
      </Card>
    </div>
  )
}

export default ContentSidebar
