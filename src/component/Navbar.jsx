import React from 'react';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: 'rgb(219, 234, 204)',    
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'rgb(219, 234, 204)',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'rgb(219, 234, 204)',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#393939',
  };
const Navbar = () => {
  return (
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0,0]}
  >
    <Layout>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}><img src="" alt="" /></Content>
      </Layout>
    </Layout>
        <Footer style={footerStyle}>Footer</Footer>
  </Space>
  );
};

export default Navbar;