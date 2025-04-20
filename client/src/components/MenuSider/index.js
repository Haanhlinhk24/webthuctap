import {
  DashboardOutlined,
  UserOutlined,
  AlignLeftOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./MenuSider.scss"

function MenuSider() {
  const items = [
    {
      key: "/admin",
      label: (
        <Link to="/admin" >
          Tổng quan
        </Link>
      ),
      icon: <DashboardOutlined />,
      className:"menu-link",
    },
    {
      key: "/quanlysanpham",
      label: (
        <Link to="/quanlysanpham" >
          Quản lý sản phẩm
        </Link>
      ),
      icon: <AlignLeftOutlined />,
      className:"menu-link",
    },
    {
      key: "/quanlynguoidung",
      label: (
        <Link to="/quanlynguoidung" >
          Quản lý người dùng
        </Link>
      ),
      icon: <AlignLeftOutlined />,
      className:"menu-link",
    },
    {
      key: "/donHang,",
      label: (
        <Link to="/donHang" >
          Đơn hàng
        </Link>
      ),
      icon: <FileDoneOutlined />,
      className:"menu-link",
    },
  ];

  return (
    <>
      <Menu
        mode="inline" // sắp xếp theo chiều dọc
        items={items}
        defaultSelectedKeys={["/admin"]}
        defaultOpenKeys={["/admin"]}
      />
    </>
  );
}

export default MenuSider;
