import { Button, Col, Form, Input, InputNumber, Select, notification } from "antd";
import { useEffect, useState } from "react";
import { getTimeCurrent } from "../../components/GetTimeCurrent";
import { createCategory } from "../../services/CategoryService";
const { Option } = Select;
function CreateCategory(props) {
  const { onReload, handleCancel } = props;
  const [notifiapi, contextHolder] = notification.useNotification();
    const [file, setFile] = useState(); 

  const handleSubmit= async(e)=>{
    e.createAt = getTimeCurrent();
    const newFormData = new FormData();
    newFormData.append("name", e.name);
    newFormData.append("icon", file);
    newFormData.append("size", e.size);
    const response = await createCategory(newFormData);
    // for (let [key, value] of newFormData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    console.log(response);
    if (response && response.status === "success") {
      handleCancel();
      onReload();
      notifiapi.success({
        message: "success",
        description: `Bạn đã tạo mới danh mục thành công`,
        duration: 1, // hiển thị trong bao lâu thời gian
      });
      form.resetFields();
    } else {
      notifiapi.error({
        message: "error",
        description: `${response.message}`,
      });
    }
  }

  //Làm reset form
  const [form] = Form.useForm();
  const rules = [
    {
      required: true, // yêu cầu người dùng phải nhập vào
      message: "Không được bỏ trống", // ko nhập show ra message
    },
  ];
  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        name="create-category"
        onFinish={handleSubmit}
      >
        <Form.Item label="Tên danh mục" name="name" rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label="Icon danh mục" name="icon" rules={rules}>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]); // Lấy đúng file từ input
              }
            }}
          />
        </Form.Item>
        <Form.Item
          label="Kích thước ICON (tiêu chuẩn 40)"
          name="size"
          rules={rules}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="custom-button-hoverAdmin"
          >
            Tạo mới
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default CreateCategory;
