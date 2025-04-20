import { Button, notification, Table } from "antd";
import { useEffect, useState } from "react";
import { getuserAllnamephone } from "../../services/userService";
import CreateUser from "./CreateUser";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import Modal from "antd/lib/modal/Modal";

function Quanlynguoidung() {
  const [userData, setUserData] = useState([]);
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
    try {
      const response = await getuserAllnamephone();
      if (response) {
        setUserData(response.reverse());
      }
    } catch (error) {
      notifiapi.error({
        message: "Lỗi",
        description: "Lỗi khi tải danh sách người dùng",
        duration: 2,
      });
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
      title: "Tên người dùng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => {
        return (
            <>
              <EditUser
                  key={`edit-${record._id}`}
                  userRow={record}
                  onReload={handleReload}
                  notifiapi={notifiapi}
              />
              <span> </span>
              <DeleteUser
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
            Danh sách người dùng
          </div>
          <Button onClick={showModal} className="custom-button">
            +Tạo người dùng mới
          </Button>
        </div>
        <Table
            rowKey="_id"
            dataSource={userData}
            columns={columns}
            pagination={pagination}
            onChange={handleTableChange}
        />

        <Modal
            title="Tạo người dùng mới"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
        >
          <CreateUser onReload={handleReload} handleCancel={handleCancel} />
        </Modal>
      </>
  );
}

export default Quanlynguoidung;