import React from 'react';
import { Typography, Card } from '@arco-design/web-react';

function Example() {
  return (
    <Card style={{ height: '80vh' }}>
      <Typography.Title heading={6}>
        用户设置
      </Typography.Title>
      <Typography.Text>用户信息设置</Typography.Text>
    </Card>
  );
}

export default Example;
