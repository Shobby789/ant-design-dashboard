import React from 'react';
import { Button, Card, Divider, Flex, Image, Tooltip, Typography } from 'antd'
import Avatar from 'antd/es/avatar/avatar';

const SellerList = () => {
  return (
    <Flex align='center' justify='space-between' gap={'large'}>
      <Flex vertical='row' gap={'small'} className='top-seller' style={{padding:'2rem 0rem 1rem 0.1rem'}}>
        <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primary-color'>Top Seller</Typography.Title>
            <Button type='link' className='grey-color'>View All</Button>
        </Flex>
        <Card>
            <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger={'click'} size='large' 
                maxStyle={{
                    color:'#56a00',
                    backgroundColor:'#fde3cf',
                    cursor:'pointer'
                }}
                >
                    <Tooltip title='User 1' placement='top'>
                        <Avatar src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvMzY2LW1ja2luc2V5LTIxYTc3MzYtZm9uLWwtam9iNjU1LnBuZw.png'/>
                    </Tooltip>
                    <Tooltip title='User 2' placement='top'>
                        <Avatar src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkzLXBhLTQ5NTItMDEucG5n.png'/>
                    </Tooltip>
                    <Tooltip title='User 3' placement='top'>
                        <Avatar src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlNF9waG90b19vZl9hX2hhcHB5X3dvbWFuX3NtaWxpbmdfbWluaW1hbF9pc29sYXRlZF8xYTc0MWY3ZC0yNTk5LTQ2YWYtYmJlYi0wODNjMzYyNTI3MjgucG5n.png'/>
                    </Tooltip>
                    <Tooltip title='User 4' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1710497398~exp=1710497998~hmac=208e5ab496e046a8dfd8d92ebd05b71b5d3081cafe3aecede07ef62970313d61'/>
                    </Tooltip>
                    <Tooltip title='User 5' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/man-making-gun-with-his-hand_1194-115.jpg?w=740&t=st=1710497422~exp=1710498022~hmac=929a8a6d38bbb322366ac842e14fcbd41a0a381aedd39e4aaa254c86efa3308b'/>
                    </Tooltip>
                    <Tooltip title='User 6' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?w=900&t=st=1710497449~exp=1710498049~hmac=b0f090e7295a814c457aa3fdf1bbf4912b3417edbce58481a0cdda8290deffee'/>
                    </Tooltip>
                    <Tooltip title='User 7' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/man-wearing-waistcoat_1368-2886.jpg?w=740&t=st=1710497473~exp=1710498073~hmac=099ce714d268dc5cb8c2bdd9999900e94c89797995112abc56e9ffbdddb2c3e7'/>
                    </Tooltip>
                    <Tooltip title='User 8' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/young-adult-man-wth-black-hair-posing-white-wall_231208-2284.jpg?w=900&t=st=1710497492~exp=1710498092~hmac=40382bf829aa421b769eea42ad413eeb1f901b8cdbb989dcd2a7143fea1ff8ea'/>
                    </Tooltip>
                </Avatar.Group>
                <Divider type='vertical' className='divider'/>
                <Flex vertical='row'>
                    <Typography.Text type='secondary' strong>1,200 plants sold</Typography.Text>
                    <Typography.Text type='secondary' strong>10 sellers</Typography.Text>
                </Flex>
            </Flex>
        </Card>
      </Flex>

      <Flex vertical='row' gap={'small'} className='featured-seller' style={{padding:'2rem 0rem 1rem 0.1rem'}}>
        <Flex align='center' justify='space-between'>
            <Typography.Title level={5} strong className='primary-color'>Featured Seller</Typography.Title>
            <Button type='link' className='grey-color'>View All</Button>
        </Flex>
        <Card>
            <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger={'click'} size='large' 
                maxStyle={{
                    color:'#56a00',
                    backgroundColor:'#fde3cf',
                    cursor:'pointer'
                }}
                >
                    <Tooltip title='User 1' placement='top'>
                        <Avatar src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvMzY2LW1ja2luc2V5LTIxYTc3MzYtZm9uLWwtam9iNjU1LnBuZw.png'/>
                    </Tooltip>
                    <Tooltip title='User 2' placement='top'>
                        <Avatar src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvczkzLXBhLTQ5NTItMDEucG5n.png'/>
                    </Tooltip>
                    <Tooltip title='User 3' placement='top'>
                        <Avatar src='https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsb2ZmaWNlNF9waG90b19vZl9hX2hhcHB5X3dvbWFuX3NtaWxpbmdfbWluaW1hbF9pc29sYXRlZF8xYTc0MWY3ZC0yNTk5LTQ2YWYtYmJlYi0wODNjMzYyNTI3MjgucG5n.png'/>
                    </Tooltip>
                    <Tooltip title='User 4' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1710497398~exp=1710497998~hmac=208e5ab496e046a8dfd8d92ebd05b71b5d3081cafe3aecede07ef62970313d61'/>
                    </Tooltip>
                    <Tooltip title='User 5' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/man-making-gun-with-his-hand_1194-115.jpg?w=740&t=st=1710497422~exp=1710498022~hmac=929a8a6d38bbb322366ac842e14fcbd41a0a381aedd39e4aaa254c86efa3308b'/>
                    </Tooltip>
                    <Tooltip title='User 6' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?w=900&t=st=1710497449~exp=1710498049~hmac=b0f090e7295a814c457aa3fdf1bbf4912b3417edbce58481a0cdda8290deffee'/>
                    </Tooltip>
                    <Tooltip title='User 7' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/man-wearing-waistcoat_1368-2886.jpg?w=740&t=st=1710497473~exp=1710498073~hmac=099ce714d268dc5cb8c2bdd9999900e94c89797995112abc56e9ffbdddb2c3e7'/>
                    </Tooltip>
                    <Tooltip title='User 8' placement='top'>
                        <Avatar src='https://img.freepik.com/free-photo/young-adult-man-wth-black-hair-posing-white-wall_231208-2284.jpg?w=900&t=st=1710497492~exp=1710498092~hmac=40382bf829aa421b769eea42ad413eeb1f901b8cdbb989dcd2a7143fea1ff8ea'/>
                    </Tooltip>
                </Avatar.Group>
                <Divider type='vertical' className='divider'/>
                <Flex vertical='row'>
                    <Typography.Text type='secondary' strong>1530 plants sold</Typography.Text>
                    <Typography.Text type='secondary' strong>13 sellers</Typography.Text>
                </Flex>
            </Flex>
        </Card>
      </Flex>
    </Flex>
  )
}

export default SellerList
