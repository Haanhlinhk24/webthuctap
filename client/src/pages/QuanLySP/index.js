import { Badge, Button, Image, Modal, notification, Table, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined, DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
// import CreateCategory from "./CreateCategory";
// import EditCategory from "./EditCategory";
// import DeleteCategory from "./DeleteCategory";
import { getProductList } from "../../services/productService";
import CreateProduct from "./CreateProduct";
import DeleteProduct from "./DeleteProduct"; // Import component DeleteProduct
import EditProduct from "./EditProduct";

function QuanLySanPham() {
  const [dataCategory, setDataCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifiapi, contextHolder] = notification.useNotification();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });
  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL?? "http://localhost:3002";
  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };
  const fetchApi = async () => {
    const response = await getProductList();
    if (response) {
      setDataCategory(response.reverse());
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  const handleReload = () => {
    fetchApi();
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Icon Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (record) => {
          console.log(record)
        const iconUrl = record?.[0]? `${API_BASE_URL}${record}`: "example.jpg";
          return (
            <Image
              src={iconUrl}
              alt="Category"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
          );
      },
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => {
        // record trả về từng bản ghi
        return (
          <>
            <EditProduct
              key={`edit-${record.id}`}
              productRow={record}
              onClick={showModal}
              onReload={handleReload}
              notifiapi={notifiapi}   
            />
            <span> </span>
            <DeleteProduct
              key={`delete-${record._id}`}
              record={record}
              onReload={handleReload}
              notifiapi={notifiapi}
            />
          </>
        );
      },
    },
  ];
  return (
    <>
      {contextHolder}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <div style={{ color: "#1a3352", fontSize: "22px", fontWeight: "500" }}>
          Danh sách sản phảm
        </div>
        <Button onClick={showModal} className="custom-button">
          +Tạo sản phẩm
        </Button>
      </div>
      <Table
        rowKey="_id"
        dataSource={dataCategory}
        columns={columns}
        pagination={pagination}
        onChange={handleTableChange}
      ></Table>
      {/* Tạo nhà cung cấp */}
      <Modal
        title="Tạo danh mục sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CreateProduct onReload={handleReload} handleCancel={handleCancel} />
      </Modal>
    </>
  );
}
export default QuanLySanPham;