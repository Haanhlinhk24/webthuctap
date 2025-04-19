import { Button, Modal,notification, Form, Spin, Input, Row, Col, Select, Switch, InputNumber } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { editCategory } from "../../services/CategoryService";
import { getTimeCurrent } from "../../components/GetTimeCurrent";
const { Option } = Select;

function EditCategory(props) {
  const { record, onReload, notifiapi } = props;
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

   const [file, setFile] = useState(); 
   const showModal = () => {
     setIsModalOpen(true);
   };

   const handleCancel = () => {
     setIsModalOpen(false);
     form.resetFields();
   };
   const rules = [
     {
       required: true, // yêu cầu người dùng phải nhập vào
       message: "Không được bỏ trống", // ko nhập show ra message
     },
   ];

    const handleSubmit = async (e) => {
      e.createAt = getTimeCurrent();
      const newFormData = new FormData();
      newFormData.append("name", e.name);
      newFormData.append("icon", file);
      newFormData.append("size", e.size);
      // for (let [key, value] of newFormData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }
      const response = await editCategory(record._id, newFormData);
      if (response) {
        notifiapi.success({
          message: "success",
          description: `Bạn đã Chỉnh sửa thành công `,
          duration: 0.5, // hiển thị trong bao lâu thời gian
        });
        onReload();
        handleCancel();
        form.resetFields();
      } else {
        notifiapi.error({
          message: "error",
          description: "Xin lỗi, vui lòng đặt lại sau",
        });
      }
    };


  return (
    <>
      &nbsp;
      <Button
        type="primary"
        size="small"
        icon={<EditOutlined />}
        onClick={showModal}
      ></Button>
      <Modal
        title="Chỉnh sửa nhà cung cấp"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          name="create-supplier"
          onFinish={handleSubmit}
          initialValues={record}
        >
          <Form.Item label="Tên danh mục" name="name" rules={rules}>
            <Input />
          </Form.Item>
          <Form.Item label="Icon danh mục"  rules={rules}>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0]); // Lấy đúng file từ input
                }
              }}
            />
          </Form.Item>
          <Form.Item label="Kích thước" name="size" rules={rules}>
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="custom-button-hoverAdmin"
            >
              Cập nhập
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
export default EditCategory;
