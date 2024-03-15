import { Avatar, Button, Flex, List, Typography } from 'antd'
import React from 'react'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const Activity = () => {
  return (
    <Flex>
      <Flex align='center' justify='space-between' gap='large'>
        <Typography.Title level={3} strong className='primary-color'>Recent Activity</Typography.Title>
        <Button type='link' className='grey-color'>View All</Button>
      </Flex>
      {/* <List pagination dataSource={data} renderItem={(user, index)=>{
        <List.Item>
            <List.Item.Meta avatar={
                <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} title={<a href='/'>{user.name}</a>}/>
            }
            description="Ordered a new plant"
            >
                <span className="grey-color">{user.orderTime} {user.orderTime == 1 ? "day ago" : "days ago"}</span>
            </List.Item.Meta>
        </List.Item>
      }}/>   */}
    </Flex>
  )
}

export default Activity
