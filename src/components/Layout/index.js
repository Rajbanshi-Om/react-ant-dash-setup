import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
  import './pageLayout.css'
import { sideBarData } from './sideBarData';
const { Header, Sider, Content } = Layout;


const items2 = sideBarData.map((item, index) => {
  const key = String(index + 1);
  return {
    key: item.subMenu ? key : item.name.toLowerCase() === 'dashboard' ? `/` :`/${item.name.toLowerCase().replace(/ /g, "")}`   ,
    icon: React.createElement(item.icon),
    label: `${item.name}`,
    children: item?.subMenu?.map((subItem, j) => {
      return {
        key: `/${item.name.toLowerCase().replace(/ /g, "")}/${subItem.toLowerCase().replace(/ /g, "")}`,
        label: subItem,
      };
    }),
  };
});
  
const PageLayout = ({ children }) => {
    const {pathname} = useLocation()
    const [collapsed, setCollapsed] = useState(false);
    const [current, setCurrent] = useState(pathname);
    const navigate = useNavigate();


    const handleMenu = (e) => {
      navigate(e.key);
      setCurrent(e.key);
    };
    return (
      <Layout style={{height:'100vh'}}>
        <Sider className='small__screen'  style={{height:'100%'}}  trigger={null} collapsible collapsed={collapsed}>
          <div style={{height:40 ,margin:16,background:'rgba(255, 255, 255, 0.3)'}} >
            
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onClick={(e) => handleMenu(e)}
            selectedKeys={[current]}
            defaultSelectedKeys={["1"]}
            items={items2}
          />
        </Sider>
        <Layout className="site-layout" style={{height:'100%'}}>
          <Header
            className="site-layout-background"
            style={{
                padding: "0 15px",
                fontSize:'24px'
            }}
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default PageLayout;