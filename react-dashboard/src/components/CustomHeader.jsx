import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/transfer/search";
import React from "react";

const CustomHeader = () => {
  return (
    <Flex className="center" justify="space-between">
      <Typography.Title level={4}>Welcome back, John</Typography.Title>

      <Flex align="center" gap={"3rem"}>
        <Search placeholder="Search Dashboard" allowClear />
        <Flex align="cneter" gap={"10px"}>
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
