import { Button, Form, Input, message, Modal, Table } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getuserAllnamephone, updateUserById } from "../../services/userService";

function Quanlynguoidung() {
  const [userData, setUserData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const fetchApi = async () => {
    try {
      const response = await getuserAllnamephone();
      if (response) {
        setUserData(response.reverse());
      }
    } catch {
      message.error("Lỗi server");
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const showEditModal = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleEditSubmit = async () => {
    try {
      const values = await form.validateFields();
      const updatedUser = { ...editingUser, ...values };

      const res = await updateUserById(editingUser._id, updatedUser);
      if (res && res.success) {
        message.success("Cập nhật thành công");
        setIsModalOpen(false);
        fetchApi();
      } else {
        message.error("Cập nhật thất bại");
      }
    } catch (err) {
      console.log("Validate Failed", err);
    }
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
      title: "Mật khẩu",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <Button
          icon={<EditOutlined />}
          onClick={() => showEditModal(record)}
        >
          Sửa
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table rowKey="_id" dataSource={userData} columns={columns} />

      <Modal
        title="Chỉnh sửa người dùng"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleEditSubmit}
        okText="Lưu"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Tên người dùng" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ type: "email", message: 'Email không hợp lệ' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu">
            <Input.Password />
          </Form.Item>
          <Form.Item name="phone" label="Số điện thoại">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Quanlynguoidung;