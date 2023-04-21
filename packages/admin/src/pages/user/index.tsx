import React from 'react';
import { Typography, Card, Button, Space } from '@arco-design/web-react';
const {Title,Text} = Typography;

function User() {
  return (
    <Card style={{ height: '80vh' }}>
      <Title heading={6}>  用户管理 </Title>

      <Space direction='vertical'>
        <Button>
          新增
        </Button>

        <Text>用户数据</Text> 
      </Space>
    </Card>
  );
}

export default User;