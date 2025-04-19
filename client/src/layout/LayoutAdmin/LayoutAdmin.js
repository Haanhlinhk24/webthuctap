import { Button, Flex, Layout } from "antd";
import { useState } from "react";
import logoFold from "../../assets/images/logo-fold.png";
import logo from "../../assets/images/logo.png";
import {
  MenuUnfoldOutlined,
  SearchOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./LayoutAdmin.scss"
import logo2 from "../../assets/images/logo2.png";
import { Link, Outlet } from "react-router-dom";
import MenuSider from "../../components/MenuSider";
const { Header, Footer, Sider, Content } = Layout;
function LayoutAdmin() {

  return (
    <>
      <Layout className="layout-default">
        <Sider className="sideradmin" theme="light" width="auto">
          <img
            src={logo2}
            alt="Logo"
            style={{ width: "200px", height: "40x" }}
          />
          <MenuSider />
        </Sider>
        <Layout>
          <header className="headeradmin">
            <div className="headeradmin__nav">
              <div className="headeradmin__nav-left"></div>
              <div className="headeradmin__nav-right">
                <Link to="/">
                  <Button
                    type="primary"
                    icon={<HomeOutlined />}
                    className="ButtonHome"
                  >
                    Trang Home
                  </Button>
                </Link>
                <Link to="/logout">
                  <Button
                    type="primary"
                    icon={<LogoutOutlined />}
                    className="ButtonLogout"
                  >
                    Đăng Xuất
                  </Button>
                </Link>
              </div>
            </div>
          </header>
          <Content className="contentadmin">
            {/* nội dung cần hiển thị chỗ nào thì bỏ outlet vào */}
            <Outlet />
          </Content>
          <Footer
            style={{
              display: "flex",
              backgroundColor: "#fff",
              justifyContent: "center",
              borderTop: "1px solid #edf2f9",
            }}
          >
            {" "}
            copyright @2025 by Diep Ngoc
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
export default LayoutAdmin;
