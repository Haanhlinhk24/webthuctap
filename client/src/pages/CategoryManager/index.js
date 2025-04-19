import { Badge, Button, Image, Modal, notification, Table, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined, DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import { getCategoryList } from "../../services/CategoryService";
function CategoryManage() {
  const [dataCategory, setDataCategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
      const [notifiapi, contextHolder] = notification.useNotification();
    const [pagination, setPagination] = useState({
      current: 1,
      pageSize: 5,
    });  
    const handleTableChange = (pagination) => {
      setPagination(pagination);
    };
  const fetchApi = async () => {
    const response = await getCategoryList();
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
      title: "Icon danh mục",
      dataIndex: "icon",
      key: "icon",
      render: (record) => {
        const iconUrl = record?.[0]
          ? `${process.env.REACT_APP_BACKEND_URL}${record}`
          : "example.jpg";
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
      title: "Kích thước danh mục",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => {
        // record trả về từng bản ghi
        return (
          <>
            <EditCategory
              key={`edit-${record.id}`}
              record={record}
              onReload={handleReload}
              notifiapi={notifiapi}   
            />
            <DeleteCategory
              key={`delete-${record.id}`}
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
          Danh sách danh mục
        </div>
        <Button onClick={showModal} className="custom-button">
          +Tạo danh mục
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
        title="Tạo danh mục địa điểm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <CreateCategory onReload={handleReload} handleCancel={handleCancel} />
      </Modal>
    </>
  );
}
export default CategoryManage;
