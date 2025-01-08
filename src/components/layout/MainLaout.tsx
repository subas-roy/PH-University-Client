import { Layout, Menu, MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "asdfasfsfr",
    label: "Dashboard",
  },
  {
    key: "asdfasfsfs",
    label: "Profile",
  },
  {
    key: "asdfasfsfe",
    label: "User Management",
    children: [
      {
        key: "asdfasfsfry",
        label: "Create Admin",
      },
      {
        key: "asdfasfsfq",
        label: "Create Student",
      },
    ],
  },
];

const MainLaout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>The main content should go here</h1>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLaout;
